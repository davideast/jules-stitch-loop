---
page: orbit.html.html
---
A solar system visualization where the central project is a glowing star, and developers are planets orbiting it.
- **Distance from center:** Represents 'Recency' (closer = more recent activity).
- **Planet Size:** Represents 'Total Impact/Commits' (larger = more ships).
- **Orbit Speed:** Represents 'Current Velocity/Streak'.

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
1. Header: "Project Orbit // Gravity Well".
2. Main View: Interactive 2D/3D solar system canvas.
3. Sidebar/Overlay: Selected planet (developer) details.
4. "Gravity Stats": List of top gravitational pulls (most influential devs).

**Specific Elements:**
- Central glowing sun (The Monorepo).
- Orbits drawn as faint rings.
- Planets as user avatars clipped in circles.
- Hover effects showing trajectory lines.
