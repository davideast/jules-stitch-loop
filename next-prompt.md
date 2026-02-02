---
page: debug.html
---
A time-attack debugging challenge arena where developers fix broken code before the system crashes.

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
1. Header with "System Status: CRITICAL" warning.
2. The "Bug Console": A terminal-like view showing error logs streaming in.
3. Editor Pane: The broken code snippet to fix.
4. "Panic" Timer: A countdown bar that turns red/glitches as time runs out.
5. Leaderboard: Top debuggers by bugs squashed.

**Specific Elements:**
- "Glitch" effects on text when time is low.
- "Compile/Run" button that gives immediate feedback (Success/Fail).
- Red "ERROR" overlays on failure.
