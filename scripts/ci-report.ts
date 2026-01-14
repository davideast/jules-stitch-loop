import { jules } from 'modjules';

const errorMsgRaw = process.env.ERROR_MSG_B64 || '';
const errorMsg = Buffer.from(errorMsgRaw, 'base64').toString('utf-8');

if (!errorMsg) process.exit(0);

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