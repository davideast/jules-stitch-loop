---
name: jules-stitch-loop-setup
description: Sets up the Jules and Stitch autonomous development loop in the current repository.
---

# Jules and Stitch Loop Setup

This skill primes the current repository to support the Jules and Stitch autonomous build loop.

## Prerequisites

1.  **Bun**: The repository must use [Bun](https://bun.sh) as the runtime/package manager.
2.  **Secrets**: You must set the following secrets in your GitHub repository:
    -   `JULES_API_KEY`: Your Jules API Key.
    -   `STITCH_API_KEY`: Your Stitch API Key.
    -   `GH_PAT`: A GitHub Personal Access Token with `repo` and `workflow` scopes (required for auto-merging PRs).

## Step 1: Install Dependencies

Add the following dependencies to your `package.json`. If `package.json` does not exist, run `bun init` first.

```bash
bun add modjules gray-matter
# Replace the URL below with your private Stitch SDK tarball URL
bun add @google/stitch-sdk@https://stitch-sdk-host.example.com/google-stitch-sdk-0.1.0.tgz
```

## Step 2: Create Scripts

Create a `scripts` directory and add the following files.

### `scripts/dispatch-jules.ts`

````typescript
import { jules } from 'modjules';
import matter from 'gray-matter';

const promptContent = process.argv[2];
if (!promptContent) {
  console.error("❌ Error: next-prompt.md is empty.");
  process.exit(1);
}

// Parse the current instruction (The "Baton")
const parsed = matter(promptContent);
const fileName = parsed.data.page; // e.g., "about"
const promptText = parsed.content.trim();

if (!fileName) {
  console.error("❌ Error: Missing 'page' frontmatter in next-prompt.md");
  process.exit(1);
}

const systemWrapper = `
You are a **Frontend Architect & Engineer**. Your goal is to iteratively build a website based on the queue provided below.

## 1. THE TASK (Current Loop)
* **Goal:** Create/Update the page \`${fileName}.html\`.
* **Design Prompt:** "${promptText}"

## 2. EXECUTION PROTOCOL
0. **Install:** Run \`bun install\` to ensure all dependencies are installed.
1.  **Generate Assets:**
    * Execute the Stitch tool: \`bun run scripts/run-stitch.ts "${promptText}" "queue/${fileName}.html"\`
    * *Note:* This generates \`queue/${fileName}.html\` and \`queue/${fileName}.png\`.
    * *CRITICAL:* This script might also create/update \`stitch.json\` with a new Project ID.
2.  **Integrate:**
    * Move/Merge the generated HTML into \`site/public/${fileName}.html\`.
    * Ensure all asset paths in the HTML are correct relative to the \`public\` folder.
3.  **Link & Wire:**
    * Analyze \`site/public/index.html\` and the navigation components.
    * Update existing links (e.g., changing \`<a href="#">\` to \`<a href="/${fileName}.html">\`).
    * If this is a new page, add it to the global navigation if appropriate.
4.  **Consult Strategy:**
    * Read \`SITE.md\` to understand the site's long-term vision and creative freedom guidelines.
    * Read \`DESIGN.md\` for the required visual style block - you MUST include this in every prompt.
    * Use the Stitch Effective Prompting Guide: https://discuss.ai.google.dev/t/stitch-prompt-guide/83844
    * Check Section 4 (Sitemap) to see what pages already exist - DO NOT recreate existing pages.
    * Check Section 6 (Creative Freedom) for ideas on new pages to create.

## 3. THE LOOP (Critical)
You **MUST** prepare the instructions for the *next* agent run.
1.  **Decide:** What is the next logical page or feature?
    * Check \`SITE.md\` Section 5 (Roadmap) for backlog items.
    * If backlog is empty, use Section 6 (Creative Freedom) for inspiration.
    * **BE CREATIVE** - invent new pages that fit the "Velocity + Terminal + Competitive" vibe.
    * **DO NOT** recreate pages that already exist in Section 4 (Sitemap).
2.  **Write \`next-prompt.md\`:**
    * Copy the **DESIGN SYSTEM (REQUIRED)** block from \`DESIGN.md\` into your prompt.
    * Follow the example structure in \`DESIGN.md\`.
    * Include vibe adjectives and specific element descriptions.
3.  **Update SITE.md:**
    * Add your new page to Section 4 (Sitemap).
    * Remove the idea you used from Section 6 (Creative Freedom).
4.  **FORMATTING RULE (Do Not Break):** You **MUST** use YAML Frontmatter for the filename, followed by the prompt.

**Example of required \`next-prompt.md\` format:**
\`\`\`markdown
---
page: achievements
---
A competitive, gamified achievements page for jules.top.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Web, Desktop-first
- Theme: Dark terminal/hacker aesthetic
- Background: Near-black (#0d1117)
- Primary Accent: Git Commit Green (#238636)
[...rest of design block from DESIGN.md...]

**Page Structure:**
1. Header with title and navigation
2. Badge grid with unlock states
3. Progress bars for milestones
\`\`\`

## 4. COMMIT STANDARDS
* **Persistence:** Check if \`stitch.json\` has been modified or created. If so, you **MUST** \`git add stitch.json\` to save the Project ID for future runs.
* **Attribution:** You must include this exact trailer in your commit message:
    \`Co-authored-by: David East <4570265+davideast@users.noreply.github.com>\`
`;

console.log(`🚀 Dispatching to Jules (Target: ${fileName})...`);

await jules.run({
  prompt: systemWrapper,
  source: {
    github: process.env.GITHUB_REPOSITORY!,
    branch: 'main'
  }
});
````

### `scripts/run-stitch.ts`

````typescript
import { StitchMCPClient } from '@google/stitch-sdk';
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
````

### `scripts/ci-report.ts`

````typescript
import { jules } from 'modjules';

const batonLogRaw = process.env.BATON_LOG_B64 || '';
const errorMsgRaw = process.env.ERROR_MSG_B64 || '';

let errorMsg = '';

if (batonLogRaw) {
  errorMsg += Buffer.from(batonLogRaw, 'base64').toString('utf-8') + '\n';
}
if (errorMsgRaw && !errorMsg) {
  errorMsg += Buffer.from(errorMsgRaw, 'base64').toString('utf-8');
}

if (!errorMsg.trim()) process.exit(0);

const correctionPrompt = `
🚨 **LOOP INTERRUPTED**
The CI check failed because you forgot to update the loop instructions.

**Error:**
${errorMsg}

**Instruction:**
1. Update \`next-prompt.md\` with the next feature idea.
2. Commit and push to the main branch.
`;

await jules.run({
  prompt: correctionPrompt,
  source: { github: process.env.GITHUB_REPOSITORY!, branch: 'main' }
});
````

## Step 3: Create Workflows

Create a `.github/workflows` directory and add the following files.

### `.github/workflows/1-jules-architect.yml`

````yaml
name: 🧠 The Architect
on:
  push: { branches: [main], paths: ['next-prompt.md'] }
  workflow_dispatch:
jobs:
  dispatch:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v1
        with: { bun-version: latest }
      - run: bun install
      - name: Dispatch
        env:
          JULES_API_KEY: ${{ secrets.JULES_API_KEY }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          PROMPT=$(cat next-prompt.md)
          bun run scripts/dispatch-jules.ts "$PROMPT"
````

### `.github/workflows/2-auto-merge.yml`

````yaml
name: ⚡ Auto-Merge Keeper
on:
  workflow_run:
    workflows: ["🛡️ Loop Integrity Check"]
    types: [completed]
jobs:
  merge:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    permissions:
      contents: write
      pull-requests: write
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Merge PR
        env:
          GH_TOKEN: ${{ secrets.GH_PAT }}
        run: |
          BRANCH="${{ github.event.workflow_run.head_branch }}"
          REPO="${{ github.repository }}"
          echo "Looking for PR from branch: $BRANCH in repo: $REPO"

          PR=$(gh pr list --repo "$REPO" --head "$BRANCH" --json number --jq '.[0].number')

          if [ -n "$PR" ]; then
            echo "Found PR #$PR - attempting merge..."
            gh pr merge "$PR" --repo "$REPO" --squash --delete-branch || echo "Merge failed or already merged"
          else
            echo "No open PR found for branch: $BRANCH"
          fi
````

### `.github/workflows/ci.yml`

````yaml
name: 🛡️ Loop Integrity Check
on: [pull_request]
jobs:
  quality-gate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
          ref: ${{ github.event.pull_request.head.sha }}
      - uses: oven-sh/setup-bun@v1
      - run: bun install

      # 1. Baton Check
      - name: Verify Baton
        id: check_baton
        continue-on-error: true
        run: |
          if git diff --name-only origin/${{ github.base_ref }}...HEAD | grep -q "next-prompt.md"; then
            echo "✅ Baton passed."
          else
            MSG="CRITICAL: You MUST update 'next-prompt.md'."
            echo "log=$(echo "$MSG" | base64 -w 0)" >> $GITHUB_OUTPUT
            exit 1
          fi

      # 2. Report to Jules
      - name: Report Failures
        if: always() && steps.check_baton.outcome == 'failure'
        env:
          JULES_API_KEY: ${{ secrets.JULES_API_KEY }}
          BRANCH_NAME: ${{ github.head_ref }}
          BATON_LOG_B64: ${{ steps.check_baton.outputs.log }}
        run: bun run scripts/ci-report.ts

      - name: Fail Job
        if: always()
        run: |
          if [ "${{ steps.check_baton.outcome }}" == "failure" ]; then exit 1; fi
````

## Step 4: Configuration

### `stitch.json`

Create a `stitch.json` file in the root directory to store your Stitch Project ID.

````json
{
  "projectId": ""
}
````

### `next-prompt.md`

Create a `next-prompt.md` file in the root directory. This acts as the "baton" for the loop.

````markdown
---
page: index
---
Create a landing page for the project.

**DESIGN SYSTEM (REQUIRED):**
[Insert your Design System here, e.g. from DESIGN.md]
````

## Step 5: Optional Linting

To ensure your GitHub Actions are valid, you can use [actionlint](https://github.com/rhysd/actionlint).

```bash
# Install actionlint (if using Homebrew)
brew install actionlint

# Run linting
actionlint
```

## Future Tooling & Enhancements

This skill provides a foundation for an autonomous build loop. To further enhance ease of use for both human developers and LLM agents, consider building the following tooling:

1.  **CLI Bootstrap Tool**: A `create-jules-loop` CLI that automates the setup steps in this skill. It could:
    *   Initialize the Bun project.
    *   Install dependencies.
    *   Scaffold the `scripts/` and `.github/` directories.
    *   Verify secret presence (or guide the user to set them).

2.  **Stitch Prompt Helper**: A utility library or agent skill that helps LLMs generate better Stitch prompts.
    *   *Concept*: An intermediate layer that takes a high-level intent ("Make a login page") and expands it into a detailed Stitch prompt with required design system constraints, specific element descriptions, and vibe keywords, ensuring higher success rates.

3.  **Visual Diff & Feedback Loop**:
    *   *Concept*: Integrate a visual regression tool (like Percy or a custom Playwright script) into the CI loop.
    *   *Agent Feedback*: If the visual diff is too large or breaks layout, feed that screenshot *back* to Jules in the `ci-report.ts` step so the agent can "see" the mistake and correct it in the next iteration.

4.  **Dynamic Sitemap Manager**:
    *   *Concept*: Instead of manually updating `SITE.md`, a script could crawl the `public/` directory and auto-generate the sitemap and navigation structure, providing the agent with an always-up-to-date context of the site's topology.

5.  **Local Loop Simulator**:
    *   *Concept*: A `bun run dev:loop` command that simulates the GitHub Actions environment locally (using Docker or act), allowing developers to debug the agent's behavior and the Stitch integration without waiting for actual CI runs.
