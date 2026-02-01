---
page: insights.html
---
An AI-powered insights dashboard analyzing developer shipping patterns.

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
1. Header: "Shipping Insights" title with a "Generate Report" button (primary accent color).
2. Key Metrics Grid: 4 cards showing "Velocity Score", "Peak Shipping Time", "Longest Streak", and "Code Quality Rating".
3. AI Analysis Section: A terminal-like window displaying a typed-out analysis of recent trends (e.g., " > Analyzing commit history... pattern detected: weekend warrior.").
4. Productivity Heatmap: A large contribution graph style visualization showing shipping intensity by day and hour.
