---
page: radar.html
---
A Tech Radar visualization page showing trending technologies among top developers.

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
1. Central Radar Visualization (Concentric circles: Adopt, Trial, Assess, Hold).
2. Four Quadrants: Languages, Frameworks, Tools, Infrastructure.
3. Sidebar/Panel list of items in each ring.
4. Detail view when clicking a "blip" (usage stats, top users).

**Specific Elements:**
- Radar Chart: CSS/SVG based, "Sonar" aesthetic (green scanning line animation optional).
- Blips: Small colored dots with hover states.
- List view: For accessibility and quick scanning.
