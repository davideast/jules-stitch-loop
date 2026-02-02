---
page: broadcast.html
---
A "TV Mode" dashboard page designed for large screens/projectors. High contrast, massive typography, auto-cycling views between Leaderboard Top 5, Recent Big Ships, and Velocity Charts.

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
1. Full-screen layout (no scrollbars).
2. "On Air" indicator in the corner.
3. Split view: Top Ranked Developer (Hero Card) vs Live Ticker.
4. "Velocity Meter" gauge (Speedometer style).

**Specific Elements:**
- Massive font sizes for readability from a distance.
- Auto-scroll or marquee effects.
- Dark mode optimized for OLED screens.
