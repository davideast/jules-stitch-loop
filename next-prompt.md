---
page: tournament.html
---
"Code Colosseum" - A bracket-style tournament viewer for the season playoffs.

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
1. Header: "Code Colosseum" Banner with "Quarter-Finals" indicator.
2. Bracket Visualization: A visual tree structure showing matchups (8 -> 4 -> 2 -> 1).
3. Live Matchup: Detailed comparison card of the current active battle.
4. Betting Station: UI to "Vote for Winner" with odds/percentages.

**Specific Elements:**
- Connector lines between bracket nodes.
- Developer avatars and scores in each bracket node.
- "Live" indicator for ongoing matches.
- Countdown timer for the next round.
