---
page: map
---
A real-time global command center map visualizing where code is being shipped.

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
1. Header: "Live Map" with global navigation.
2. Main View: Large, dark vector world map with pulsing "blips" for live commits.
3. Sidebar: "Incoming Signals" stream (scrolling terminal text of commits).
4. Footer: "Active Regions" leaderboard (e.g., "San Francisco", "London", "Tokyo").

**Specific Elements:**
- Map: Dark outline, no labels, just data points.
- Blips: Teal for commits, Purple for PRs, growing rings for impact.
- Signal Feed: Monospaced, raw text style (e.g., `> user shipped to repo/xyz`).
- Stats Overlay: "Live Shippers: 421", "Commits/Min: 85".
