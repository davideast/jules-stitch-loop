---
page: pulse.html.html
---
"The Pulse" - A real-time heartbeat visualization of the platform's activity.

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
1. Header: "Pulse" with an EKG/heartbeat icon.
2. The Heartbeat: A large, scrolling EKG-style chart showing commit frequency.
3. Vital Signs: Cards showing "Beats per Minute" (Commits/min), "Pressure" (PR backlog), "Temperature" (Issue heat).
4. Activity Stream: A terminal-like log of recent "heartbeats" (events).

**Specific Elements:**
- Use Red/Pink (#ef4444 or #ec4899) for the heartbeat line.
- Animations for the pulse effect.
- "Flatline" warning if activity drops.
