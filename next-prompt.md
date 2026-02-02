---
page: typing.html
---
A developer-focused speed typing test page for jules.top.

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
- Columns: RANK | DEVELOPER (avatar + name) | WPM | ACCURACY | LANGUAGE
- Pagination: Circular active page indicator (teal), numbered pages
- Layout: Centered content, max-width container, ample whitespace
- No decorative elements, no gradients, no shadows - pure data focus

**Page Structure:**
1. Header with "Speed Typing" title and stats (Your Best WPM).
2. Typing Arena: Large code snippet display (syntax highlighted) with input overlay.
3. Live Stats: WPM, Accuracy, Time Remaining.
4. Leaderboard: Table of top typing speeds (Rank | Dev | WPM | Accuracy | Language).

**Specific Elements:**
- Real-time WPM counter that updates as you type.
- "Sudden Death" mode toggle (one mistake ends the run).
- Keyboard heatmap visualization showing most missed keys.
- Result modal with "Share Result" button.
