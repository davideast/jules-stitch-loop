---
page: status.html
---
A real-time system status page showing service health and uptime metrics.

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
1. Header with "System Status" and overall health score (e.g., "99.99% Uptime").
2. Service Grid: Cards for each core service (API, Database, Auth, Webhooks) with status indicators (Operational, Degraded, Down).
3. Incident History: A timeline or list of recent outages/maintenances.
4. Latency Charts: Small sparklines showing response times for key regions.

**Specific Elements:**
- Status Badges: "Operational" (Green), "Degraded Performance" (Yellow), "Major Outage" (Red).
- Uptime Bars: 90-day history bars (like GitHub status).
- Incident Log: Date | Impact | Description | Resolved Time.
- Visuals: Pulsing green dots for healthy services.
