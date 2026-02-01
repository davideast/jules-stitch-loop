---
page: languages.html
---
A leaderboard ranking programming languages by popularity and shipping volume on Jules. Minimal, Data-dense, Terminal.

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
1. Header: "Top Languages" with a search/filter bar.
2. Stats Overview: Total Languages, Most Active, Fastest Growing.
3. Language Table: Rank | Language (Icon + Name) | Active Devs | Total Ships | Growth Trend (Sparkline).
4. Footer.

**Specific Elements:**
- Language icons (e.g., JS/TS/Python logos or colored dots).
- Sparklines for growth trends in the table.
- Monospace font for all numerical data.
