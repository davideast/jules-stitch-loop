# Project Vision & Constitution

> **AGENT INSTRUCTION:** Read this file before every iteration. It serves as the project's "Long-Term Memory." If `next-prompt.md` is empty, pick the highest priority item from Section 5.

## 1. Core Identity
* **Project Name:** jules.top
* **Mission:** The definitive leaderboard tracking who is shipping the most code with the Jules agent.
* **Target Audience:** Developers, AI enthusiasts, Open Source maintainers.
* **Voice:** Competitive, data-driven, transparent, and slightly "hacker" (but legible).

## 2. Visual Language (Stitch Prompt Strategy)
*Strictly adhere to these descriptive rules when prompting Stitch. Do NOT use code.*

* **The "Vibe" (Adjectives):**
    * *Primary:* **Velocity** (Implies speed, motion, progress bars).
    * *Secondary:* **Terminal** (Code-centric aesthetics, raw data).
    * *Tertiary:* **Competitive** (Ranks, badges, gold/silver/bronze hierarchy).

* **Color Philosophy (Semantic):**
    * **Backgrounds:** [e.g., Deepest void (GitHub Dark Mode inspired). High contrast layers.]
    * **Accents:** [e.g., "Git Commit Green" for success/shipping. "Merged Purple" for PRs. Electric Yellow for "Top Rank".]
    * **Text:** [e.g., Bright white for names/scores. Dimmed gray for metadata like timestamps.]

* **Typography & Shape:**
    * **Font Style:** [e.g., "Monospaced System Font" for all data and numbers. "Bold Sans-Serif" for names and ranks.]
    * **Element Borders:** [e.g., "Thin, precise 1px borders. Subtle transparency. Tabular layouts."]

* **Imagery Direction:**
    * [e.g., "Abstract data visualizations. Git contribution graphs. Avatars with status rings. No stock photos of people."]

## 3. Architecture & File Structure
* **Root:** `site/public/`
* **Asset Flow:** Stitch generates to `queue/` -> You validate -> You move to `site/public/`.
* **Navigation Strategy:**
    * **Global Header:** Logo (`jules.top`), Search User, Live Feed.
    * **Global Footer:** "Built with Jules", GitHub Link, API Docs.

## 4. Live Sitemap (Current State)
*The Agent MUST update this section when a new page is successfully merged.*

* [ ] `index.html` - The Main Leaderboard (Global Rank).
* [ ] `profile.html` - Individual user stats (Commits vs PRs).
* [ ] `feed.html` - Real-time stream of incoming commits.
* [ ] `about.html` - How the tracking works.

## 5. The Roadmap (Backlog)
*If `next-prompt.md` is empty or completed, pick the next task from here and update `next-prompt.md`.*

### High Priority
- [ ] **The Leaderboard Table:** Create a dense, highly readable table on `index.html`. Columns: Rank, User, Total Ships, Last Active.
- [ ] **The "Ship" Graph:** Add a visual sparkline or contribution graph next to the top 3 users.

### Medium Priority
- [ ] **Profile View:** Create a template for a user details page showing their top repositories.
- [ ] **"Hot Streak" Badge:** Design a visual indicator for users who have shipped 5+ days in a row.

### Future Concepts (Low Priority)
- [ ] "Battle Mode" comparison view (User A vs User B).
- [ ] API Documentation page.

## 6. Rules of Engagement (Constraints)
1.  **Data Density:** This is a leaderboard. Do not waste space with massive hero images. Prioritize the data table.
2.  **Incremental Prompting:** Build the "Table Structure" first, then add "Filters" (Daily/Weekly/All Time) in the next turn.
3.  **Mobile Optimisation:** Tables must be scrollable or collapse into cards on mobile.
4.  **Consistency:** Use the "Git Green" accent consistently for positive actions (merges/commits).
