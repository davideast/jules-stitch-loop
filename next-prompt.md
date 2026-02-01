---
page: repos.html
---
A leaderboard of top repositories ranked by Jules shipping activity. Minimal, Data-dense, Terminal.

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
1. Header: "Top Repositories" with language filter dropdown.
2. Top 3 Repos: Highlighted cards with sparklines and big numbers.
3. Repos Table: Rank | Repo Name (w/ icon) | Language | Total Ships | Last Active | Contributors (stack of avatars).
4. "Add Repo" Call to Action at the bottom.

**Specific Elements:**
- Repo icons (e.g. GitHub/GitLab logos or language logos).
- Sparklines for activity trends in the table.
- Contributor avatars stack in the table.
