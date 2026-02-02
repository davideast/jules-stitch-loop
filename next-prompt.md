---
page: sprint.html
---
"Sprint Dashboard" - High-velocity tracking of the current development cycle using Kanban and Burndown metrics.

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
1. Header: "Sprint 42" status (Active - 3 Days Left) and Countdown Timer.
2. Burndown Chart: Ideal vs Actual velocity sparklines using monospaced characters or SVG.
3. Lane View: Todo | In Progress | Review | Done (Kanban style but minimal terminal aesthetic).
4. Velocity Gauge: Team speed vs average (e.g., "112% of Avg").
5. "Blocker" Alerts: Flashing red indicators for stalled PRs.

**Specific Elements:**
- Progress bars using block characters (█ ▌ ░).
- Avatars assigned to cards.
- "Finish Sprint" button.
- Live ticker of completed tickets.
