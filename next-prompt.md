---
page: focus.html
---
A minimal, terminal-style productivity timer for deep work sessions. Tracks "Flow State" duration and awards XP for uninterrupted coding blocks.

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
1. Header with "Focus Mode" title and current streak stats.
2. Main Timer Display: Large, monospaced digital clock (e.g., 25:00) in the center.
3. Session Log: Table of completed sessions (Duration | Task | XP Earned | Time).
4. Controls: Minimal buttons for "Start Focus", "Short Break", "Long Break".

**Specific Elements:**
- Circular progress ring around the timer (Teal).
- "Zen Mode" toggle that hides everything except the timer.
- Terminal-like input for "Current Task" (e.g., `> Refactoring auth module_`).
- XP gain animation (+50 XP) upon session completion.
