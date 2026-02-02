---
page: missions.html
---
A gamified missions page where developers can accept daily and weekly coding challenges to earn XP and badges.

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
- Columns: RANK | DEVELOPER (avatar + name) | BUGS SQUASHED | SURVIVAL TIME
- Pagination: Circular active page indicator (teal), numbered pages
- Layout: Centered content, max-width container, ample whitespace
- No decorative elements, no gradients, no shadows - pure data focus

**Page Structure:**
1. Header "Daily Briefing // TOP SECRET".
2. "Active Mission": A featured card with a countdown timer.
3. "Mission Board": A grid of available missions with difficulty ratings (Easy, Medium, Hard).
4. "XP Progress": A circular progress bar showing level advancement.
5. "Completed Missions": A log of past successes.

**Specific Elements:**
- Countdown timers.
- Difficulty badges (Green, Yellow, Red).
- XP gain animations.
- "Accept Mission" buttons with terminal-style confirm dialogs.
