/**
 * Verify that the most recent commit includes proper attribution.
 * Only enforced for bot commits (google-labs-jules or [bot] users).
 * Human commits are allowed without attribution.
 */

import { $ } from 'bun';

const REQUIRED_AUTHOR = 'David East <4570265+davideast@users.noreply.github.com>';
const BOT_PATTERNS = ['google-labs-jules', '[bot]'];

async function main() {
  // Get the latest commit author
  const authorResult = await $`git log -1 --pretty=%an`.text();
  const author = authorResult.trim();

  // Check if this is a bot commit
  const isBotCommit = BOT_PATTERNS.some(pattern => author.toLowerCase().includes(pattern.toLowerCase()));

  if (!isBotCommit) {
    console.log(`✅ Human commit by "${author}" - attribution not required.`);
    process.exit(0);
  }

  // For bot commits, verify attribution
  const result = await $`git log -1 --pretty=%B`.text();
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
