---
page: stack.html
---
A data-dense 'Tech Stack' trends page analyzing the most popular toolchains used by top shippers.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Web, Desktop-first
- Theme: Dark, minimal, data-focused
- Background: Deep charcoal/near-black (#0f1419 or similar GitHub dark)
- Surface: Slightly lighter dark for cards/rows (subtle contrast)
- Primary Accent: Teal/Cyan (#2dd4bf) for active states, pagination, icons
- Trophy Colors: Gold 🥇, Silver 🥈, Bronze 🥉 emoji for top 3 ranks
- Text Primary: White (#ffffff) for names, ranks, important data
- Text Secondary: Muted gray (#6b7280) for column headers, timestamps
- Text Numbers: White, monospaced font for scores (e.g., "8,421")
- Font: Clean sans-serif (Inter, SF Pro, or system default)
- Avatars: Circular, ~40px, with subtle border
- Table: No visible row borders, generous vertical padding (~20px per row)
- Columns: RANK | DEVELOPER (avatar + name) | TOTAL SHIPS | LAST ACTIVE
- Pagination: Circular active page indicator (teal), numbered pages
- Layout: Centered content, max-width container, ample whitespace
- No decorative elements, no gradients, no shadows - pure data focus

**Page Structure:**
1. Header "Stack Wars" or "Top Stacks".
2. Leaderboard of Stacks (e.g., "Next.js + Tailwind + Supabase") with usage % and "Win Rate" (ships per user).
3. "Stack Builder" interactive area (visual only) where you pick a stack and see its popularity.
4. "Rising vs Falling" charts for specific combinations.

**Specific Elements:**
- Stack Cards: Horizontal bars showing the composition of the stack (icons for each tech).
- "Velocity Score" for each stack (monospaced number).
- Filtering by "Frontend", "Backend", "Fullstack", "Mobile".
- Minimal icons for technologies (React, Vue, Rust, Go, etc).
