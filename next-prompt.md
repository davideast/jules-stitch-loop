---
page: quiz.html
---
A competitive, sudden-death technical quiz page for jules.top ("The 404 Quiz").

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
- Columns: RANK | DEVELOPER (avatar + name) | SCORE | STREAK
- Pagination: Circular active page indicator (teal), numbered pages
- Layout: Centered content, max-width container, ample whitespace
- No decorative elements, no gradients, no shadows - pure data focus

**Page Structure:**
1. Header with "The 404 Quiz" title and High Score.
2. Quiz Arena: Central card with code question and multiple choice options.
3. Live Stats: Current Streak, Time Remaining (countdown), Lives (Hearts/Skulls).
4. Leaderboard: Top scores for the day.

**Specific Elements:**
- "Sudden Death" mechanic: One wrong answer triggers a fake "404 Page Not Found" crash effect (screen glitch or overlay).
- Timer bar that depletes rapidly (10-15s per question).
- Syntax highlighted code blocks in questions.
- "Respawn" button to try again after failure.
