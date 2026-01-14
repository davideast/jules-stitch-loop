#!/usr/bin/env bun
/**
 * Pre-push validation script.
 * Simulates CI checks locally before pushing to GitHub.
 * 
 * Usage: bun run scripts/pre-push.ts [--fix]
 */

import { $ } from 'bun';
import matter from 'gray-matter';
import YAML from 'yaml';

const FIX_MODE = process.argv.includes('--fix');

interface CheckResult {
  name: string;
  passed: boolean;
  message: string;
}

const results: CheckResult[] = [];

// ─────────────────────────────────────────────────────────────────────────────
// UTILITIES
// ─────────────────────────────────────────────────────────────────────────────

function pass(name: string, msg: string) {
  results.push({ name, passed: true, message: msg });
  console.log(`✅ ${name}: ${msg}`);
}

function fail(name: string, msg: string) {
  results.push({ name, passed: false, message: msg });
  console.log(`❌ ${name}: ${msg}`);
}

// ─────────────────────────────────────────────────────────────────────────────
// CHECK 1: Required Files Exist
// ─────────────────────────────────────────────────────────────────────────────

function checkRequiredFiles() {
  const required = [
    'next-prompt.md',
    'scripts/dispatch-jules.ts',
    'scripts/run-stitch.ts',
    'scripts/verify-attribution.ts',
    'scripts/ci-report.ts',
  ];

  const missing: string[] = [];
  for (const file of required) {
    if (!Bun.file(file).exists()) {
      missing.push(file);
    }
  }

  if (missing.length > 0) {
    fail('Required Files', `Missing: ${missing.join(', ')}`);
  } else {
    pass('Required Files', 'All required files exist');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// CHECK 2: next-prompt.md Parsing
// ─────────────────────────────────────────────────────────────────────────────

async function checkNextPrompt() {
  if (!Bun.file('next-prompt.md').exists()) {
    fail('Baton Format', 'next-prompt.md does not exist');
    return;
  }

  // Use Bun's readFileSync for better compatibility
  const content = await Bun.file('next-prompt.md').text();
  if (!content.trim()) {
    fail('Baton Format', 'next-prompt.md is empty');
    return;
  }

  try {
    const parsed = matter(content);
    if (!parsed.data.page) {
      fail('Baton Format', "Missing 'page' frontmatter key");
      return;
    }
    if (!parsed.content.trim()) {
      fail('Baton Format', 'Missing prompt content after frontmatter');
      return;
    }
    pass('Baton Format', `Valid (page: ${parsed.data.page})`);
  } catch (e) {
    fail('Baton Format', `Parse error: ${e}`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// CHECK 3: Attribution Check (Simulated)
// ─────────────────────────────────────────────────────────────────────────────

async function checkAttribution() {
  // NOTE: This check is only enforced in CI for bot users (google-labs-jules)
  // For human commits locally, we just warn.

  // First check if we're in a git repo
  const gitCheck = await $`git rev-parse --git-dir 2>/dev/null`.quiet().nothrow();
  if (gitCheck.exitCode !== 0) {
    console.log('⚠️  Attribution: Skipped (not a git repo yet)');
    return;
  }

  const result = await $`git log -1 --pretty=%B 2>/dev/null`.quiet().nothrow();
  if (result.exitCode !== 0) {
    console.log('⚠️  Attribution: Skipped (no commits yet)');
    return;
  }
  const msg = result.stdout.toString().trim();

  if (msg.includes('Co-authored-by: David East')) {
    pass('Attribution', 'Commit includes Co-authored-by trailer');
  } else {
    // Only warn locally - CI enforces this for bot users only
    console.log('⚠️  Attribution: Missing trailer (enforced for bot in CI)');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// CHECK 4: TypeScript Syntax Validation
// ─────────────────────────────────────────────────────────────────────────────

async function checkTypescript() {
  const scripts = [
    'scripts/dispatch-jules.ts',
    'scripts/run-stitch.ts',
    'scripts/verify-attribution.ts',
    'scripts/ci-report.ts',
  ].filter(file => Bun.file(file).exists());

  let allPassed = true;
  for (const script of scripts) {
    const result = await $`bun build ${script} --target=bun --outdir=/tmp/bun-check 2>/dev/null`.quiet().nothrow();
    if (result.exitCode !== 0) {
      fail(`Syntax: ${script}`, 'Syntax error');
      allPassed = false;
    }
  }
  if (allPassed) {
    pass('TypeScript Syntax', `All ${scripts.length} scripts valid`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// CHECK 5: YAML Workflow Validation
// ─────────────────────────────────────────────────────────────────────────────

async function checkYamlWorkflows() {
  const glob = new Bun.Glob('**/*.yml');
  const files: string[] = [];

  for await (const file of glob.scan('.github/workflows')) {
    files.push(`.github/workflows/${file}`);
  }

  if (files.length === 0) {
    console.log('⚠️  YAML Workflows: No workflow files found');
    return;
  }

  let allValid = true;
  const errors: string[] = [];

  for (const file of files) {
    try {
      const content = await Bun.file(file).text();
      YAML.parse(content); // Will throw on invalid YAML
    } catch (e: any) {
      allValid = false;
      const basename = file.split('/').pop();
      errors.push(`${basename}: ${e.message?.split('\n')[0] || 'Invalid YAML'}`);
    }
  }

  if (allValid) {
    pass('YAML Workflows', `All ${files.length} workflow files valid`);
  } else {
    for (const err of errors) {
      fail('YAML Workflows', err);
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// CHECK 5: Environment Variables
// ─────────────────────────────────────────────────────────────────────────────

function checkEnvVars() {
  const warnings: string[] = [];

  if (!process.env.STITCH_API_KEY) {
    warnings.push('STITCH_API_KEY');
  }
  if (!process.env.STITCH_PROJECT_ID) {
    warnings.push('STITCH_PROJECT_ID');
  }
  if (!process.env.GITHUB_REPOSITORY) {
    warnings.push('GITHUB_REPOSITORY');
  }

  if (warnings.length > 0) {
    console.log(`⚠️  Env Vars: Missing (OK for local): ${warnings.join(', ')}`);
  } else {
    pass('Env Vars', 'All expected env vars set');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// CHECK 6: Jules Source Verification
// ─────────────────────────────────────────────────────────────────────────────

async function checkJulesSource() {
  // Get the GitHub remote to determine the repo
  const remoteResult = await $`git remote get-url origin 2>/dev/null`.quiet().nothrow();
  if (remoteResult.exitCode !== 0) {
    console.log('⚠️  Jules Source: No git remote configured');
    return;
  }

  const remoteUrl = remoteResult.stdout.toString().trim();

  // Extract owner/repo from GitHub URL (handles both HTTPS and SSH)
  // git@github.com:owner/repo.git or https://github.com/owner/repo.git
  const match = remoteUrl.match(/github\.com[:/]([^/]+\/[^/.]+)/);
  if (!match) {
    console.log('⚠️  Jules Source: Remote is not a GitHub repository');
    return;
  }

  const repo = match[1];
  console.log(`✅ Jules Source: Repository is ${repo}`);
  console.log('   ℹ️  Ensure this repo is authorized in Jules:');
  console.log(`      https://jules.google.com/sources → Add ${repo}`);
}

// ─────────────────────────────────────────────────────────────────────────────
// CHECK 6: Baton Change Detection (Git Diff)
// ─────────────────────────────────────────────────────────────────────────────

async function checkBatonChanged() {
  // NOTE: This check is only enforced in CI for bot users (google-labs-jules)
  // For human commits locally, we just warn.

  // First check if we're in a git repo
  const gitCheck = await $`git rev-parse --git-dir 2>/dev/null`.quiet().nothrow();
  if (gitCheck.exitCode !== 0) {
    console.log('⚠️  Baton Status: Skipped (not a git repo yet)');
    return;
  }

  // Check if next-prompt.md has uncommitted changes
  const status = await $`git status --porcelain next-prompt.md 2>/dev/null`.quiet().nothrow();
  const hasUncommittedChanges = status.stdout.toString().trim().length > 0;

  // Check if next-prompt.md was changed in the last commit
  const lastCommitFiles = await $`git diff-tree --no-commit-id --name-only -r HEAD 2>/dev/null`.quiet().nothrow();
  const changedInLastCommit = lastCommitFiles.stdout.toString().includes('next-prompt.md');

  if (hasUncommittedChanges) {
    console.log('⚠️  Baton Status: Uncommitted changes in next-prompt.md');
  } else if (changedInLastCommit) {
    pass('Baton Status', 'next-prompt.md was updated in last commit');
  } else {
    // Only warn locally - CI enforces this for bot users only
    console.log('⚠️  Baton Status: Not changed (enforced for bot in CI)');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────────────────────

async function main() {
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║           🛡️  Pre-Push Validation (CI Simulator)               ║');
  console.log('╚════════════════════════════════════════════════════════════════╝');
  console.log('');

  checkRequiredFiles();
  checkNextPrompt();
  await checkAttribution();
  await checkTypescript();
  await checkYamlWorkflows();
  checkEnvVars();
  await checkJulesSource();
  await checkBatonChanged();

  console.log('');
  console.log('────────────────────────────────────────────────────────────────');
  const failures = results.filter(r => !r.passed);
  if (failures.length > 0) {
    console.log(`❌ ${failures.length} check(s) failed. Fix before pushing.`);
    process.exit(1);
  } else {
    console.log('✅ All checks passed. Ready to push!');
    process.exit(0);
  }
}

main();
