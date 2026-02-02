---
page: chaos.html
---
"Chaos Engineering Dashboard" - Control center for injecting faults and monitoring system resilience.

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
1. Header: "Chaos Control" and current system DEFCON level.
2. Attack Map: Visualizing active fault injections (network latency, pod kills).
3. Resilience Score: Real-time metric of system stability under stress.
4. "Blast Radius" Graph: Impact analysis of current experiments.
5. Incident Log: Stream of system alerts and recovery events.

**Specific Elements:**
- "Inject Fault" buttons (Red/Danger).
- Glitch effects or "unstable" visual indicators for stressed components.
- Terminal output for chaos logs.
- Status indicators (Healthy vs degraded).
