---
page: audit.html
---
A live security monitor tracking vulnerabilities, unauthorized access attempts, and code integrity checks.

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
- Columns: RANK | DEVELOPER (avatar + name) | BUGS SQUASHED | SURVIVAL TIME
- Pagination: Circular active page indicator (teal), numbered pages
- Layout: Centered content, max-width container, ample whitespace
- No decorative elements, no gradients, no shadows - pure data focus

**Page Structure:**
1. Header with "Security Status: ELEVATED" and threat level indicator.
2. "Live Threat Map": A world map or network graph showing origin of attacks (simulated).
3. "Vulnerability Feed": Streaming log of detected CVEs and patch status.
4. "Integrity Checks": List of core system files and their SHA-256 hash status (Pass/Fail).
5. "Audit Log": Table of recent sensitive actions (Login, Deploy, Config Change) by user.

**Specific Elements:**
- "Scanning..." animations on integrity checks.
- Red/Green status indicators.
- Monospaced hashes and IP addresses.
- "Lockdown" button that triggers a visual alarm state.
