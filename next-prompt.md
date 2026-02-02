---
page: pass.html
---
"Season Pass" - A tiered progression system for unlocking cosmetic rewards and boosters.

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
1. Header: Season 5 "Velocity" Banner with end date countdown.
2. Progression Track: Horizontal scrolling list of levels (1-100).
3. Reward Tiers: Dual rows for "Free" vs "Pro" pass rewards.
4. Quest Log: Daily/Weekly missions that grant Season XP.

**Specific Elements:**
- "Claim All" button for unlocked rewards.
- Locked/Unlocked status icons (Padlocks vs Checkmarks).
- Animated progress bar showing current level.
- "Upgrade to Pro" Call-to-Action card.
