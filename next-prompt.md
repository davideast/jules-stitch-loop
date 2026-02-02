---
page: ticker.html
---
A real-time, financial-style scrolling ticker of code shipping activity.

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
1. Large scrolling horizontal ticker tape at the top or center.
2. Vertical list of recent "trades" (commits/ships).
3. "Velocity" indicators (Green up arrows, Red down arrows).
4. Market summary header (Total Ships, Active Devs).

**Specific Elements:**
- Ticker: Infinite scroll animation, symbols (e.g., "JS +2", "PY +1").
- Trade Log: Monospaced list of latest events.
- Charts: Sparklines for top languages.
