/**
 * Verify that bot commits include proper attribution.
 * Only enforced for commits from google-labs-jules or [bot] users.
 * Human commits pass automatically.
 */

import { $ } from 'bun';

const REQUIRED_AUTHOR = 'David East <4570265+davideast@users.noreply.github.com>';
const BOT_PATTERNS = ['google-labs-jules', 'jules[bot]', 'github-actions'];

async function main() {
  // Get the latest commit author and email
  const authorResult = await $`git log -1 --pretty=%an`.quiet().text();
  const emailResult = await $`git log -1 --pretty=%ae`.quiet().text();
  const author = authorResult.trim();
  const email = emailResult.trim();

  console.log(`📝 Checking commit by: ${author} <${email}>`);

  // Check if this is a bot commit
  const isBotCommit = BOT_PATTERNS.some(pattern =>
    author.toLowerCase().includes(pattern.toLowerCase()) ||
    email.toLowerCase().includes(pattern.toLowerCase())
  );

  if (!isBotCommit) {
    console.log(`✅ Human commit - attribution not required.`);
    process.exit(0);
  }

  // For bot commits, verify attribution
  const result = await $`git log -1 --pretty=%B`.quiet().text();
  const commitMessage = result.trim();

  if (commitMessage.includes(`Co-authored-by: ${REQUIRED_AUTHOR}`)) {
    console.log('✅ Attribution verified for bot commit.');
    process.exit(0);
  } else {
    console.error('❌ Missing attribution trailer in bot commit.');
    console.error(`   Expected: Co-authored-by: ${REQUIRED_AUTHOR}`);
    process.exit(1);
  }
}

main();
