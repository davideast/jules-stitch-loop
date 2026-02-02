---
page: api
---
API Documentation for jules.top. Developer-focused page detailing public endpoints, authentication, and integration examples.

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
1. Header: "API Reference" with global navigation.
2. Layout: Two-column layout (Sidebar navigation for endpoints, Main content area).
3. Documentation: Clear sections for Authentication, Rate Limiting, and Endpoints.

**Specific Elements:**
- Code Blocks: Dark syntax highlighting for JSON response examples (e.g., `{ "rank": 1, "score": 8421 }`).
- Methods: GET badges (Blue), POST badges (Green), DELETE badges (Red) for visual distinction.
- Copy Button: Icon to copy code snippets to clipboard.
