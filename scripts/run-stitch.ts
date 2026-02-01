import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import matter from 'gray-matter';

// Read from next-prompt.md
const promptFile = await Bun.file('next-prompt.md').text();
const { content: prompt, data: frontmatter } = matter(promptFile);
const page = frontmatter.page || 'index';

const targetHtml = `queue/${page}.html`;
const targetPng = targetHtml.replace('.html', '.png');

if (!prompt) {
  console.error("❌ No prompt provided.");
  process.exit(1);
}

try {
  const stitchFile = Bun.file('stitch.json');
  const stitchConfig = await stitchFile.exists()
    ? await stitchFile.json()
    : { projectId: "" };

  const transport = new StreamableHTTPClientTransport(new URL("https://staging-stitch.sandbox.googleapis.com/mcp"), {
    requestInit: {
        headers: {
            "Authorization": `Bearer ${process.env.STITCH_API_KEY}`
        }
    }
  });

  const client = new Client({
      name: "jules-client",
      version: "1.0.0"
  }, {
      capabilities: {}
  });

  console.log("🔌 Connecting to Stitch MCP...");
  await client.connect(transport);

  // Helper to call tool and parse JSON result
  const callTool = async (name: string, args: any) => {
      const result = await client.callTool({
          name,
          arguments: args
      });
      // Parse content
      const textContent = result.content.find(c => c.type === 'text');
      if (textContent && textContent.text) {
          try {
              return JSON.parse(textContent.text);
          } catch {
              return textContent.text;
          }
      }
      return result;
  };

  let projectId = stitchConfig.projectId;

  if (!projectId) {
    console.log("🆕 No Project ID found in stitch.json. Creating new Project...");
    const result = await callTool('create_project', {
      title: "Jules-Stitch Auto Loop"
    });

    console.log("📦 create_project response:", JSON.stringify(result, null, 2));

    let newId;
    if (result && typeof result === 'object') {
        if (result.id) newId = result.id;
        else if (result.projectId) newId = result.projectId;
    } else if (typeof result === 'string') {
        newId = result;
    }

    if (!newId) {
       throw new Error(`Failed to retrieve new Project ID. Response: ${JSON.stringify(result)}`);
    }

    console.log(`✅ Project Created: ${newId}`);
    stitchConfig.projectId = newId;
    projectId = newId;
    await Bun.write('stitch.json', JSON.stringify(stitchConfig, null, 2));
  } else {
    console.log(`Using Project ID: ${projectId}`);
  }

  console.log(`🎨 Stitching: "${prompt}"...`);

  const generateResult = await callTool('generate_screen_from_text', {
    projectId: projectId,
    prompt: prompt,
    deviceType: 'DESKTOP'
  });

  console.log("📦 generate_screen_from_text response:", JSON.stringify(generateResult, null, 2));

  // Extract screen info
  let htmlUrl: string | undefined;
  let imageUrl: string | undefined;
  let screenId: string | undefined;

  const res = generateResult;
  if (res && res.outputComponents && Array.isArray(res.outputComponents)) {
      for (const component of res.outputComponents) {
        if (component.design?.screens?.[0]) {
          const screen = component.design.screens[0];
          screenId = screen.id;
          htmlUrl = screen.htmlCode?.downloadUrl;
          imageUrl = screen.screenshot?.downloadUrl;
          break;
        }
        if (component.text && !screenId) {
          const match = component.text.match(/screen_id:\s*([a-f0-9]+)/);
          if (match) screenId = match[1];
        }
      }
  }

  // Fallback
  if (!htmlUrl && !screenId && res) {
      htmlUrl = res.htmlCode?.downloadUrl || res.html;
      imageUrl = res.screenshot?.downloadUrl || res.image;
      screenId = res.screenId || res.id;
  }

  if (screenId && !htmlUrl) {
    console.log(`📄 Fetching existing screen: ${screenId}...`);
    const screenResult = await callTool('get_screen', {
      projectId: projectId,
      screenId: screenId
    });
    console.log("📦 get_screen response:", JSON.stringify(screenResult, null, 2));
    if (screenResult) {
        htmlUrl = screenResult.htmlCode?.downloadUrl || screenResult.html;
        imageUrl = screenResult.screenshot?.downloadUrl || screenResult.image;
    }
  }

  if (!htmlUrl) {
    throw new Error(`Failed to get HTML URL. Response: ${JSON.stringify(generateResult)}`);
  }

  console.log("📥 Downloading HTML...");
  const htmlResponse = await fetch(htmlUrl);
  if (!htmlResponse.ok) throw new Error(`Failed to download HTML: ${htmlResponse.status}`);
  const html = await htmlResponse.text();

  let imageBuffer: Buffer | undefined;
  if (imageUrl) {
    console.log("📥 Downloading screenshot...");
    const imageResponse = await fetch(imageUrl);
    if (imageResponse.ok) {
        const arrayBuffer = await imageResponse.arrayBuffer();
        imageBuffer = Buffer.from(arrayBuffer);
    }
  }

  await Bun.write(targetHtml, html);
  if (imageBuffer) await Bun.write(targetPng, imageBuffer);

  console.log(`✅ Wrote to ${targetHtml} ${imageBuffer ? 'and ' + targetPng : ''}`);
  process.exit(0);

} catch (e) {
  console.error("🚨 Stitch Run Failed:", e);
  process.exit(1);
}
