---
page: forge.html.html
---
A high-tech crafting workshop where developers spend XP and resources earned from missions to forge custom badges, profile themes, and tool upgrades.

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
1. Header: "The Forge // R&D Lab".
2. "Resource Inventory": Grid of collected materials (e.g., "Bug Chitin", "Logic Gates", "Coffee Beans").
3. "Schematics": List of craftable items with requirements.
4. "The Anvil": Central interactive area to drag items.
5. "Forge Button": Large, dangerous-looking button to initiate crafting.

**Specific Elements:**
- Industrial/Blueprint aesthetic overlays.
- CSS animations for heat/glow during crafting.
- Success probability gauges (risk/reward).
- "Molten" effects using the primary accent color or a complementary orange.
