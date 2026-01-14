---
page: trends
---
A data visualization page for jules.top that shows rising stars and momentum charts.

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
1.  **Header:** "Trending Developers" title and a brief description.
2.  **Key Metrics:** A row of stat cards for "Most Improved," "Highest Momentum," and "New & Noteworthy."
3.  **Charts:**
    *   A line chart showing "Top 5 Rising Developers (Last 30 Days)."
    *   A bar chart showing "Most Active Developers by Language (Last 7 Days)."
4.  **Data Table:**
    *   A table for "Developers to Watch," with columns for Rank, Developer, Momentum Score, and Last Active.
