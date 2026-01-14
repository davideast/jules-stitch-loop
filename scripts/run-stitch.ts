import { StitchMCPClient } from '@google/stitch-sdk';

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

  console.log(`🎨 Stitching: "${prompt}"...`);

  // Generate the screen using callTool directly
  const generateResult = await client.callTool('generate_screen_from_text', {
    projectId: stitchConfig.projectId,
    prompt: prompt,
    deviceType: 'DESKTOP'
  });

  console.log("📦 generate_screen_from_text response:", JSON.stringify(generateResult, null, 2));

  // Extract screen info from the outputComponents format
  let htmlUrl: string | undefined;
  let imageUrl: string | undefined;
  let screenId: string | undefined;

  if (generateResult && typeof generateResult === 'object') {
    const res = generateResult as Record<string, any>;

    // Handle outputComponents format from Stitch API
    if (res.outputComponents && Array.isArray(res.outputComponents)) {
      for (const component of res.outputComponents) {
        if (component.design?.screens?.[0]) {
          const screen = component.design.screens[0];
          screenId = screen.id;
          htmlUrl = screen.htmlCode?.downloadUrl;
          imageUrl = screen.screenshot?.downloadUrl;
          break;
        }

        // Try to extract screen_id from text response (conversational fallback)
        if (component.text && !screenId) {
          const match = component.text.match(/screen_id:\s*([a-f0-9]+)/);
          if (match) {
            screenId = match[1];
          }
        }
      }
    }

    // Fallback to direct properties
    if (!htmlUrl && !screenId) {
      htmlUrl = res.htmlCode?.downloadUrl || res.html;
      imageUrl = res.screenshot?.downloadUrl || res.image;
      screenId = res.screenId || res.id;
    }
  }

  // If we have a screenId but no htmlUrl, fetch the screen directly
  if (screenId && !htmlUrl) {
    console.log(`📄 Fetching existing screen: ${screenId}...`);
    const screenResult = await client.callTool('get_screen', {
      projectId: stitchConfig.projectId,
      screenId: screenId
    });

    console.log("📦 get_screen response:", JSON.stringify(screenResult, null, 2));

    if (screenResult && typeof screenResult === 'object') {
      const screenRes = screenResult as Record<string, any>;
      htmlUrl = screenRes.htmlCode?.downloadUrl || screenRes.html;
      imageUrl = screenRes.screenshot?.downloadUrl || screenRes.image;
    }
  }

  if (!htmlUrl) {
    throw new Error(`Failed to get HTML URL. Response: ${JSON.stringify(generateResult)}`);
  }

  // Download HTML content
  console.log("📥 Downloading HTML...");
  const htmlResponse = await fetch(htmlUrl);
  if (!htmlResponse.ok) {
    throw new Error(`Failed to download HTML: ${htmlResponse.status}`);
  }
  const html = await htmlResponse.text();

  // Download image if available
  let imageBuffer: Buffer | undefined;
  if (imageUrl) {
    console.log("📥 Downloading screenshot...");
    const imageResponse = await fetch(imageUrl);
    if (imageResponse.ok) {
      const arrayBuffer = await imageResponse.arrayBuffer();
      imageBuffer = Buffer.from(arrayBuffer);
    }
  }

  if (!html) {
    throw new Error(`Downloaded HTML is empty`);
  }

  // Write files
  await Bun.write(targetHtml, html);

  if (imageBuffer) {
    await Bun.write(targetPng, imageBuffer);
    console.log(`✅ Wrote to ${targetHtml} and ${targetPng}`);
  } else {
    console.log(`✅ Wrote to ${targetHtml} (no image available)`);
  }

  process.exit(0);

} catch (e) {
  console.error("🚨 Stitch Run Failed:", e);
  process.exit(1);
}
