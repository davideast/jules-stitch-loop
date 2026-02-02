---
page: terminal.html
---
An interactive, browser-based CLI terminal environment for querying leaderboard data.

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
1. Full-screen terminal interface (no standard header/footer).
2. Command prompt: `jules@top:~$` with blinking cursor.
3. Output area for command results.
4. "Exit to GUI" button (floating or corner) to return to `index.html`.

**Specific Elements:**
- Input: functional text input that accepts commands.
- Commands: `help` (list commands), `top` (show leaderboard), `clear` (clear screen), `whoami` (show user info), `status` (show system status).
- Visuals: Retro terminal font (Green/Amber), slight scanline effect.
- ASCII Art: Display "JULES.TOP" logo on load.
