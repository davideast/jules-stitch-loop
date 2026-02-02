---
page: spotlight.html
---
A daily spotlight page featuring a single developer. Detailed breakdown of their velocity, preferred languages, and recent "Big Ships". Magazine-style layout but keeping the terminal aesthetic.

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
1. Header with date and "Daily Spotlight" title.
2. Large Profile Card with avatar, bio, and total stats.
3. "Signature Move" section (Favorite language/framework).
4. "Recent Big Ships" list with impact scores.
5. "Contribution Heatmap" (mini version).

**Specific Elements:**
- Magazine-style typography for the name (big, bold).
- "Share this profile" button.
- Quote or "Motto" section.
