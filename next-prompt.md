---
page: interview.html.html
---
A competitive mock interview practice arena with timer and scoring.

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
- Columns: RANK | DEVELOPER (avatar + name) | SCORE | STREAK
- Pagination: Circular active page indicator (teal), numbered pages
- Layout: Centered content, max-width container, ample whitespace
- No decorative elements, no gradients, no shadows - pure data focus

**Page Structure:**
1. Header with title and current Interview Score.
2. Interview Booth: A chat-like or card-based interface where "Interviewer" (AI) asks questions.
3. Code/Answer Area: A text area or code editor for the user to type answers.
4. Timer & Stress Meter: Visual indicators of pressure.
5. Leaderboard: Top interview scores.

**Specific Elements:**
- "Stress" mechanic: Visual noise or shaking as timer runs out.
- "Hired/Rejected" stamp animation on completion.
- Syntax highlighting for code questions.
