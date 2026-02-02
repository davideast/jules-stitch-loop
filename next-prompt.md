---
page: league.html
---
A competitive league system (Bronze -> Grandmaster) where developers are promoted/demoted based on weekly shipping performance.

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
1. Header: Current League Status (e.g., "Diamond League - Rank #42").
2. League Progress Bar: Points needed for promotion.
3. The Ladder: List of developers in the current cohort (up/down arrows for movement).
4. Promotion/Demotion Zones: Visual indicators for top 3 and bottom 3.

**Specific Elements:**
- League Icons (Shields/Badges) with metallic textures.
- "Season Ends In: 2d 14h" countdown.
- "Cutline" visual divider showing who is safe and who is at risk.
