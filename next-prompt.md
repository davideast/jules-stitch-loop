---
page: achievements
---
A minimal, data-dense achievements page for jules.top. Competitive vibe with medals and progress tracking.

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
- Pagination: Circular active page indicator (teal), numbered pages
- Layout: Centered content, max-width container, ample whitespace
- No decorative elements, no gradients, no shadows - pure data focus

**Page Structure:**
1. **Header:** Teal icon + "Achievements" title, left-aligned, matching leaderboard style.
2. **Badge Grid:** 3-column grid of achievement cards:
   - Each card: Icon/emoji, badge name, description, unlock status
   - Unlocked: White text, teal accent
   - Locked: Muted gray, dimmed
3. **Milestone Progress:** Horizontal progress bars showing ships to next milestone (10, 50, 100, 500, 1K).
4. **Recent Unlocks:** Table matching leaderboard style - columns: USER (avatar + name) | BADGE | UNLOCKED
5. **Pagination:** Centered, circular teal indicator for active page.

**Specific Elements:**
- Badge icons: Use emoji (🏆, 🔥, 🌙, 🌅, ⚡, 📅)
- Progress bars: Teal fill on dark background
- Timestamps: Muted gray, relative format ("2 hours ago")
- No borders on cards, use subtle background contrast instead
