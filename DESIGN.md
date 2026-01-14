# jules.top Design System

> **AGENT INSTRUCTION:** Include the DESIGN SYSTEM block in EVERY `next-prompt.md` prompt to ensure visual consistency.

## Reference Design
The canonical design is based on the Developer Leaderboard screenshot. All pages must match this aesthetic.

## Required Style Block
Copy this exact block into every Stitch prompt:

```
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
```

## Visual Specifications (from reference)

### Colors
| Element | Color | Hex |
|---------|-------|-----|
| Background | Deep charcoal | #0f1419 |
| Row hover/surface | Slightly lighter | #161b22 |
| Active/Accent | Teal/Cyan | #2dd4bf |
| Text primary | White | #ffffff |
| Text secondary | Muted gray | #6b7280 |
| Column headers | Uppercase gray | #6b7280 |

### Typography
- **Title:** "Developer Leaderboard" - White, bold, ~24px, with teal icon
- **Column Headers:** UPPERCASE, small caps, muted gray, ~12px
- **Rank:** White, bold, with emoji medal for top 3
- **Username:** White, medium weight, ~16px
- **Numbers:** White, monospaced, comma-formatted (e.g., "7,988")
- **Timestamps:** Muted gray, relative format ("2 hours ago")

### Layout
- Centered container with max-width (~900px)
- Header: Icon + Title left-aligned
- Table: Full-width within container
- Rows: ~60px height, no visible borders, subtle hover state
- Pagination: Centered at bottom, circular page indicators

### Components

#### Leaderboard Row
```
[Rank + Medal] [Avatar Circle] [Username]     [Score]     [Timestamp]
#1 🥇          [40px circle]   Jules          8,421       2 hours ago
```

#### Pagination
```
< [1] 2 3 4 5 ... 12 >
```
- Active page: Teal circle with white number
- Inactive: White numbers
- Arrows: Chevrons for prev/next

### Vibe Keywords
Always include 2-3 of these:
- **Minimal** - clean, uncluttered, focused
- **Data-dense** - information-rich, scannable
- **Competitive** - ranks, medals, scores
- **Terminal** - monospaced numbers, dark theme

## Example Prompt Structure
```markdown
---
page: [filename]
---
[One-line description with vibe keywords]

**DESIGN SYSTEM (REQUIRED):**
[Copy the required style block above]

**Page Structure:**
1. [Section with specific details]
2. [Section with specific details]
3. [Section with specific details]

**Specific Elements:**
- [Detailed element description]
- [Detailed element description]
```
