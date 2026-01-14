import { StitchMCPClient, Project } from '@google/stitch-sdk';

const prompt = process.argv[2];
const targetHtml = process.argv[3] || 'queue/index.html';
const targetPng = targetHtml.replace('.html', '.png');

if (!prompt) {
  console.error("❌ No prompt provided.");
  process.exit(1);
}

try {
  const stitchFile = Bun.file('stitch.json');
  // Handle case where stitch.json doesn't exist yet
  const stitchConfig = await stitchFile.exists()
    ? await stitchFile.json()
    : { projectId: "" };

  const hasProjectId = !!stitchConfig.projectId;

  let config: any = {
    baseUrl: "https://staging-stitch.sandbox.googleapis.com/mcp",
    apiKey: process.env.STITCH_API_KEY,
  };

  // Initial client setup
  if (hasProjectId) {
    config.projectId = stitchConfig.projectId;
  }

  // Initialize client (This instance is used for create_project if needed)
  let client = new StitchMCPClient(config);

  if (!hasProjectId) {
    console.log("🆕 No Project ID found in stitch.json. Creating new Project...");

    // Call the tool based on your API definition
    const result = await client.callTool<{ id: string } | string>('create_project', {
      title: "Jules-Stitch Auto Loop"
    });

    // Handle response variations
    const newId = typeof result === 'string' ? result : result.id;
    if (!newId) throw new Error("Failed to retrieve new Project ID.");

    console.log(`✅ Project Created: ${newId}`);

    // Save back to file
    stitchConfig.projectId = newId;
    await Bun.write('stitch.json', JSON.stringify(stitchConfig, null, 2));

    // RE-INITIALIZE CLIENT
    config.projectId = newId;
    client = new StitchMCPClient(config);
  } else {
    console.log(`Using Project ID: ${stitchConfig.projectId}`);
  }

  // Now we are guaranteed to have a valid client with headers
  const project = new Project(client, stitchConfig.projectId);

  console.log(`🎨 Stitching: "${prompt}"...`);

  // Generate the screen
  const screen = await project.generate(prompt, 'DESKTOP');
  const html = await screen.getHtml();
  const image = await screen.getImage(); // Returns base64 string

  const imageBuffer = Buffer.from(image as string, 'base64');

  // Dynamic Write
  await Bun.write(targetHtml, html as string);
  await Bun.write(targetPng, imageBuffer);

  console.log(`✅ Wrote to ${targetHtml} and ${targetPng}`);
  process.exit(0);

} catch (e) {
  console.error("🚨 Stitch Run Failed:", e);
  process.exit(1);
}
