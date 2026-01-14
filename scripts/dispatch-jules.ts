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
