---
page: cli
---
Documentation for the Jules CLI tool. A developer-focused terminal interface for interacting with the Jules platform.

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
1. Header: "Jules CLI" with global navigation.
2. Hero: Ascii art logo or large terminal window showing installation command.
3. Installation: Tabs for npm, brew, curl.
4. Commands: List of available commands (e.g., `jules ship`, `jules status`, `jules whoami`) with examples.

**Specific Elements:**
- Terminal Window: A visual component mimicking a terminal with prompt string `user@machine:~$`.
- Copy Buttons: For command snippets.
- Command Reference: Table or list of flags and arguments.
