---
page: market.html.html
---
A real-time stock market interface where users can 'invest' in developers based on their shipping velocity.

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
1. Header with "Dev Market" title and user's "Portfolio Value" display.
2. Ticker Tape: Horizontal scrolling list of top market movers (e.g., "$JULES +5.2%").
3. "Market Movers" Hero Section: Top Gainer and Top Loser cards.
4. Main Market Table: Symbol (e.g. $NAME) | Price (Shipping Velocity) | 24h Change | Market Cap (Total Ships) | Actions (Buy/Sell).

**Specific Elements:**
- Green (Teal) for positive change, Red (Rose/Pink) for negative change.
- Sparklines for 24h price history in the table.
- "Buy" and "Sell" buttons with hover effects.
- Monospaced font for all financial data ($ prices).
