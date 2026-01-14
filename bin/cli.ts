#!/usr/bin/env bun
import * as fs from 'fs';
import * as path from 'path';

const REPO_ROOT = process.cwd();

console.log("♾️  Bootstrapping Autonomous Jules-Stitch Loop...");

// ============================================================================
// 1. FILE TEMPLATES
// ============================================================================

const PKG_JSON = {
  name: "jules-stitch-loop",
  version: "1.0.0",
  type: "module",
  scripts: {
    "stitch:generate": "bun run scripts/run-stitch.ts"
  },
  dependencies: {
    "@modelcontextprotocol/sdk": "^1.0.1",
    "modjules": "^1.0.0", // Replace with actual version
    "zod": "^3.22.4"
  },
  devDependencies: {
    "@types/node": "^20.0.0",
    "bun-types": "latest"
  }
};

const TS_CONFIG = {
  compilerOptions: {
    target: "ESNext",
    module: "ESNext",
    moduleResolution: "bundler",
    strict: true,
    skipLibCheck: true,
    allowSyntheticDefaultImports: true
  }
};

const RUN_STITCH_CODE = `
import { StitchMCPClient } from './client.js';
import * as fs from 'fs';

const prompt = process.argv[2];
const targetFile = process.argv[3] || 'index.html';

if (!prompt) {
  console.error("❌ No prompt provided.");
  process.exit(1);
}

const client = new StitchMCPClient();

(async () => {
  try {
    console.log(\`🎨 Stitching: "\${prompt}"...\`);
    const html = await client.callTool('stitch.generate_screen_from_text', {
      prompt: prompt,
      projectId: process.env.STITCH_PROJECT_ID
    });
    fs.writeFileSync(targetFile, html as string);
    console.log(\`✅ Wrote to \${targetFile}\`);
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
`;

const DISPATCH_JULES_CODE = `
import { jules } from 'modjules';

const promptContent = process.argv[2];
if (!promptContent) process.exit(1);

const systemWrapper = \`
\${promptContent}

---
**CRITICAL LOOP INSTRUCTION:**
1. Execute the design changes using 'bun run scripts/run-stitch.ts "<prompt>"'.
2. **REQUIRED:** You MUST update 'next-prompt.md' with instructions for the NEXT iteration.
   - If you do not change this file, the CI will fail.
\`;

console.log("🚀 Dispatching to Jules...");
await jules.run({
  prompt: systemWrapper,
  source: { github: process.env.GITHUB_REPOSITORY!, branch: 'main' }
});
`;

const CI_REPORT_CODE = `
import { jules } from 'modjules';

const errorMsgRaw = process.env.ERROR_MSG_B64 || '';
const errorMsg = Buffer.from(errorMsgRaw, 'base64').toString('utf-8');
const branchName = process.env.BRANCH_NAME || '';

if (!errorMsg) process.exit(0);

const correctionPrompt = \`
🚨 **LOOP INTERRUPTED**
The CI check failed because you forgot to update the loop instructions.

**Error:**
\${errorMsg}

**Instruction:**
1. Update \`next-prompt.md\` with the next feature idea.
2. Commit and push to branch \${branchName}.
\`;

await jules.run({
  prompt: correctionPrompt,
  source: { github: process.env.GITHUB_REPOSITORY!, branch: branchName }
});
`;

// WORKFLOWS
const WORKFLOW_ARCHITECT = `
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
          JULES_API_KEY: \${{ secrets.JULES_API_KEY }}
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
        run: |
          PROMPT=$(cat next-prompt.md)
          bun run scripts/dispatch-jules.ts "$PROMPT"
`;

const WORKFLOW_CI = `
name: 🛡️ Loop Integrity Check
on: [pull_request]
jobs:
  check-baton:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with: { fetch-depth: 0 }
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - name: Verify Baton
        id: check
        continue-on-error: true
        run: |
          if git diff --name-only origin/\${{ github.base_ref }}...HEAD | grep -q "next-prompt.md"; then
            echo "✅ Baton passed."
          else
            echo "❌ Baton dropped."
            MSG="CRITICAL: You MUST update 'next-prompt.md' to keep the loop alive."
            echo "log=$(echo "$MSG" | base64 -w 0)" >> $GITHUB_OUTPUT
            exit 1
          fi
      - name: Report to Jules
        if: always() && steps.check.outcome == 'failure'
        env:
          JULES_API_KEY: \${{ secrets.JULES_API_KEY }}
          BRANCH_NAME: \${{ github.head_ref }}
          ERROR_MSG_B64: \${{ steps.check.outputs.log }}
        run: bun run scripts/ci-report.ts
      - name: Fail Job
        if: always()
        run: |
          if [ "\${{ steps.check.outcome }}" == "failure" ]; then exit 1; fi
`;

const WORKFLOW_MERGE = `
name: ⚡ Auto-Merge Keeper
on:
  workflow_run:
    workflows: ["🛡️ Loop Integrity Check"]
    types: [completed]
jobs:
  merge:
    runs-on: ubuntu-latest
    if: \${{ github.event.workflow_run.conclusion == 'success' }}
    permissions: { contents: write, pull-requests: write }
    steps:
      - name: Merge
        env: { GH_TOKEN: \${{ secrets.GITHUB_TOKEN }} }
        run: |
          PR=$(gh pr list --head "\${{ github.event.workflow_run.head_branch }}" --json number --jq '.[0].number')
          if [ -n "$PR" ]; then gh pr merge $PR --squash --auto --delete-branch; fi
`;

// ============================================================================
// 2. GENERATION LOGIC
// ============================================================================

const FILES: Record<string, string> = {
  'package.json': JSON.stringify(PKG_JSON, null, 2),
  'tsconfig.json': JSON.stringify(TS_CONFIG, null, 2),
  'next-prompt.md': 'Create a landing page for a Cyberpunk Coffee Shop.',
  'scripts/run-stitch.ts': RUN_STITCH_CODE,
  'scripts/dispatch-jules.ts': DISPATCH_JULES_CODE,
  'scripts/ci-report.ts': CI_REPORT_CODE,
  '.github/workflows/1-jules-architect.yml': WORKFLOW_ARCHITECT,
  '.github/workflows/ci.yml': WORKFLOW_CI,
  '.github/workflows/2-auto-merge.yml': WORKFLOW_MERGE,
};

// Create Dirs
['src', 'scripts', '.github/workflows'].forEach(dir => {
  fs.mkdirSync(path.join(REPO_ROOT, dir), { recursive: true });
});

// Write Files
Object.entries(FILES).forEach(([filePath, content]) => {
  fs.writeFileSync(path.join(REPO_ROOT, filePath), content.trim());
  console.log(`✅ Created ${filePath}`);
});

console.log(`
🎉 **Repository Bootstrapped!**

**Next Steps:**
1. \`git init && git add . && git commit -m "Init loop"\`
2. Push to GitHub.
3. Add Repository Secrets:
   - \`JULES_API_KEY\`
   - \`STITCH_API_KEY\`
   - \`STITCH_PROJECT_ID\` (or set as Repo Variable)
4. Enable "Allow GitHub Actions to create and approve pull requests" in Settings.
5. Kick off the infinite loop:
   - Edit \`next-prompt.md\` and push to main.
`);
