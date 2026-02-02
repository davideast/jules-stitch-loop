---
page: predictions.html
---
AI-powered predictive analytics page forecasting future leaderboard rankings and shipping velocity.

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
1. Header "Oracle" or "Predictions" with a crystal ball or brain icon.
2. "Leaderboard Forecast" table (Next Week's projected ranks vs current).
3. "Velocity Probability" charts (Likelihood of hitting milestones).
4. "Churn Risk" indicators (Developers at risk of stopping).

**Specific Elements:**
- Probability percentages with confidence intervals (e.g., "85% chance of #1").
- "Trending Up/Down" arrows with predicted magnitude.
- AI commentary/reasoning for predictions (e.g., "Based on recent weekend activity...").
