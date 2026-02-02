---
page: velocity.html
---
"Velocity" - High-speed metrics and shipping momentum gauges.

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
1. Header: "Velocity" Title with a speedometer icon.
2. Global Gauge: A large visual gauge showing the current "Global Shipping Velocity" (e.g., Commits/Hour).
3. Momentum Table: A list of developers sorted by their current "Momentum" (acceleration of shipping).
4. Peak Hours: A heatmap or chart showing the fastest shipping hours of the day.

**Specific Elements:**
- Radial or Linear Gauges for velocity.
- "G-Force" metric (shipping acceleration).
- Sparklines for individual developer velocity.
