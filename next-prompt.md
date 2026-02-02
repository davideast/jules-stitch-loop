---
page: boss.html
---
A "Community Raid Boss" page where all developers work together to defeat a massive enemy by shipping code.

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
1. Header: Boss Name (e.g., "The Monolith") and Level.
2. Boss Visual: ASCII art or CSS shape representing the boss (animated/pulsing).
3. Health Bar: Massive progress bar showing remaining HP (Lines of Code / Commits).
4. Combat Log: Real-time scrolling log of "damage" (commits) being dealt by users.
5. Leaderboard: "Top DPS" (Damage Per Second) - users who shipped the most today.

**Specific Elements:**
- "Damage Numbers" popping up visually.
- "Loot Table" showing potential rewards (badges) for defeating the boss.
- Red/Danger color accents for the Boss UI (different from standard Teal).
