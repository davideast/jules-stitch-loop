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
    * Read \`SITE.md\` (if it exists) to understand the site's long-term vision.
    * Read the [Stitch Prompting Guide](https://discuss.ai.google.dev/t/stitch-prompt-guide/83844) to ensure your next prompt is high-quality.

## 3. THE LOOP (Critical)
You **MUST** prepare the instructions for the *next* agent run.
1.  **Decide:** What is the next logical page or feature? (e.g., "pricing", "contact", "feature-grid").
2.  **Write:** Overwrite \`next-prompt.md\` with the instructions.
3.  **FORMATTING RULE (Do Not Break):** You **MUST** use YAML Frontmatter for the filename, followed by the prompt.

**Example of required \`next-prompt.md\` format:**
\`\`\`markdown
---
page: pricing
---
Create a three-column pricing table. Use the 'Zinc' color palette from the guide. Make the 'Pro' plan feature a large CTA button.
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
