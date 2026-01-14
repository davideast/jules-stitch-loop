# 🔄 Cloud Native Ralph Wiggum with Jules and Stitch

An autonomous AI development loop where Jules continuously builds and ships UI pages using Stitch, with zero human intervention after initial setup.

Shut your computer and let Jules and Stitch do the work.

## How It Works

```
┌─────────────────────────────────────────────────────────────┐
│                    THE JULES STITCH LOOP                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   1. Human updates next-prompt.md → pushes to main          │
│                         ↓                                   │
│   2. 🧠 Architect Workflow triggers                         │
│      • Reads next-prompt.md                                 │
│      • Dispatches task to Jules                             │
│                         ↓                                   │
│   3. 🤖 Jules executes                                      │
│      • Runs Stitch to generate HTML/PNG                     │
│      • Updates next-prompt.md with next task                │
│      • Creates PR with Co-authored-by trailer               │
│                         ↓                                   │
│   4. 🛡️ CI validates PR                                     │
│      • Checks baton (next-prompt.md changed)                │
│      • Verifies attribution (bot commits only)              │
│                         ↓                                   │
│   5. ⚡ Auto-merge on success                                │
│                         ↓                                   │
│   6. Loop back to step 2 (Jules picks up new prompt)        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## The "Baton" System

The `next-prompt.md` file acts as a baton in a relay race:
- Each iteration, Jules **must** update this file with the next task
- CI enforces this — PRs without baton changes fail
- This ensures the loop never stalls

## Project Structure

```
├── next-prompt.md          # The baton - current task for Jules
├── queue/                  # Stitch-generated assets (staging)
├── site/public/            # Production HTML pages
├── scripts/
│   ├── dispatch-jules.ts   # Sends prompts to Jules API
│   ├── run-stitch.ts       # Generates UI via Stitch MCP
│   ├── verify-attribution.ts
│   └── ci-report.ts        # Reports failures back to Jules
├── .github/workflows/
│   ├── 1-jules-architect.yml  # Triggers Jules on main push
│   ├── 2-auto-merge.yml       # Auto-merges passing PRs
│   └── ci.yml                 # PR quality gate
└── stitch.json             # Stitch project ID
```

## Setup

1. **Secrets required** (GitHub & Jules repo settings):
   - `JULES_API_KEY` - Jules API access
   - `STITCH_API_KEY` - Stitch API access (Jules only needs this environment variable)
   - `GH_PAT` - GitHub PAT with `repo` + `workflow` scopes

2. **Start the loop**:
Create a `next-prompt.md` file with your first prompt.
   ```bash
   # Edit the first prompt
   vim next-prompt.md
   
   # Push to main
   git add next-prompt.md && git commit -m "start the loop" && git push
   ```

## Local Development

```bash
# Install dependencies
bun install

# Run dev server (serves site/public)
bun run dev

# Generate a page locally
bun run stitch:generate

# Run pre-push checks
bun run pre-push
```

*Built with [Jules](https://jules.google.com) + [Stitch](https://stitch.google.com)*
