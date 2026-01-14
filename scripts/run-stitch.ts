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
    const result = await client.callTool('create_project', {
      title: "Jules-Stitch Auto Loop"
    });

    // Debug: Log the raw response to understand its structure
    console.log("📦 create_project response:", JSON.stringify(result, null, 2));

    // Handle various response formats
    let newId: string | undefined;

    if (typeof result === 'string') {
      // Direct string response
      newId = result;
    } else if (result && typeof result === 'object') {
      // Object response - check common ID field patterns
      const res = result as Record<string, any>;
      newId = res.id || res.projectId || res.name?.split('/').pop();

      // If it has a 'content' array (MCP tool response format)
      if (!newId && Array.isArray(res.content)) {
        const textContent = res.content.find((c: any) => c.type === 'text');
        if (textContent?.text) {
          // Try to parse as JSON
          try {
            const parsed = JSON.parse(textContent.text);
            newId = parsed.id || parsed.projectId || parsed.name?.split('/').pop();
          } catch {
            // Text might be the ID directly
            newId = textContent.text;
          }
        }
      }
    }

    if (!newId) {
      throw new Error(`Failed to retrieve new Project ID. Response: ${JSON.stringify(result)}`);
    }

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
