---
page: artifacts.html
---
A build artifacts repository page with a file-browser aesthetic.

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
1. Header with "Artifacts" title and breadcrumb navigation (e.g., "home / builds / latest").
2. Filter/Search bar for artifact types (Docker, Binary, Source, Logs).
3. Main File Browser Table: Filename | Size | Build ID | Date | Download Action.

**Specific Elements:**
- Icons for different file types (zip, exe, iso, log).
- Monospaced font for filenames and hashes.
- "Download" button with hover state.
- Status indicators (Success/Failed build) next to files.
