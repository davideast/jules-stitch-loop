---
page: compare
---
A "Battle Mode" developer comparison page. It should allow a user to select two developers from the leaderboard and see a side-by-side comparison of their key stats.

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
1.  **Header:** "Battle Mode" title, and two developer search/selection inputs.
2.  **Comparison Cards:** Two large cards side-by-side, one for each developer.
3.  **Card Content:** Each card should display the developer's avatar, name, rank, total ships, and current streak.
4.  **Visualizations:** Include the "Ship Graph" sparkline for each developer in their respective card.
5.  **"Winner" Highlight:** The developer with the higher "Total Ships" should have a subtle teal glow or border on their card to indicate they are "winning".
