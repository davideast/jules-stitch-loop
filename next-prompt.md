---
page: embeds
---
A page showcasing embeddable widgets and dynamic badges for developers to display their Jules stats on GitHub READMEs and personal websites.

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
1. Header: "Embeds & Widgets" with global navigation.
2. Hero: "Show off your stats" - bold statement.
3. Preview Area: Live interactive preview of different widget styles (Small, Card, Graph, Shield).
4. Code Generator: Configuration controls (Theme, User, Type) and the resulting code snippet (Markdown/HTML).
5. Gallery: Examples of badges in the wild.

**Specific Elements:**
- Badge Preview: Visual representation of the badge.
- Config Options: Toggles for "Dark/Light", "Transparent", "Include Rank".
- Copy-to-Clipboard: One-click copy for the generated code.
- Shields.io style badges: Simple static badges for specific stats (Rank: #1, Ships: 8421).
