/**
 * Verify that the most recent commit includes proper attribution.
 * Checks for the required "Co-authored-by" trailer.
 */

import { $ } from 'bun';

const REQUIRED_AUTHOR = 'David East <4570265+davideast@users.noreply.github.com>';

async function main() {
  // Get the latest commit message
  const result = await $`git log -1 --pretty=%B`.text();
  const commitMessage = result.trim();

  if (commitMessage.includes(`Co-authored-by: ${REQUIRED_AUTHOR}`)) {
    console.log('✅ Attribution verified.');
    process.exit(0);
  } else {
    console.error('❌ Missing attribution trailer.');
    console.error(`   Expected: Co-authored-by: ${REQUIRED_AUTHOR}`);
    process.exit(1);
  }
}

main();
