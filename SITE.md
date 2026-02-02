# Project Vision & Constitution

> **AGENT INSTRUCTION:** Read this file before every iteration. It serves as the project's "Long-Term Memory." If `next-prompt.md` is empty, pick the highest priority item from Section 5 OR invent a new page that fits the project vision.

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
    * **Backgrounds:** Deepest void (GitHub Dark Mode inspired). High contrast layers.
    * **Accents:** "Git Commit Green" for success/shipping. "Merged Purple" for PRs. Electric Yellow for "Top Rank".
    * **Text:** Bright white for names/scores. Dimmed gray for metadata like timestamps.

* **Typography & Shape:**
    * **Font Style:** "Monospaced System Font" for all data and numbers. "Bold Sans-Serif" for names and ranks.
    * **Element Borders:** "Thin, precise 1px borders. Subtle transparency. Tabular layouts."

* **Imagery Direction:**
    * Abstract data visualizations. Git contribution graphs. Avatars with status rings. No stock photos of people.

## 3. Architecture & File Structure
* **Root:** `site/public/`
* **Asset Flow:** Stitch generates to `queue/` -> You validate -> You move to `site/public/`.
* **Navigation Strategy:**
    * **Global Header:** Logo (`jules.top`), Search User, Live Feed.
    * **Global Footer:** "Built with Jules", GitHub Link, API Docs.

## 4. Live Sitemap (Current State)
*The Agent MUST update this section when a new page is successfully merged.*

* [x] `index.html` - The Main Leaderboard (Global Rank).
* [x] `profile.html` - Individual user stats (Commits vs PRs).
* [x] `feed.html` - Real-time stream of incoming commits.
* [x] `about.html` - How the tracking works.
* [x] `achievements.html` - Badges and milestones for developers.
* [x] `streaks.html` - Hot streak tracking and flame badges for consecutive shipping days.
* [x] `milestones.html` - Major milestone celebrations (1K commits, 10K lines, etc.)
* [x] `hall-of-fame.html` - All-time legends and retired champions
* [x] `compare.html` - Side-by-side developer comparison ("Battle Mode")
* [x] `stats.html` - Global platform statistics and trends
* [x] `trends.html` - Rising stars and momentum charts
* [x] `history.html` - Historical data, time machine view of past leaderboards
* [x] `teams.html` - Team/organization leaderboards
* [x] `insights.html` - AI-generated insights about shipping patterns
* [x] `challenges.html` - Weekly/monthly shipping challenges
* [x] `hackathon.html` - Live coding events
* [x] `rivals.html` - Head-to-head rivalry tracking
* [x] `explore.html` - Discover developers by language, framework, or project type
* [x] `repos.html` - Top repositories by Jules activity
* [x] `languages.html` - Leaderboard by programming language
* [x] `search.html` - Advanced search and filtering interface
* [x] `settings.html` - User preferences and notifications
* [x] `faq.html` - Frequently asked questions
* [x] `notifications.html` - Activity alerts and updates
* [x] `onboarding.html` - How to get started with Jules
* [x] `changelog.html` - Platform updates and new features
* [x] `roadmap.html` - Public roadmap of upcoming features
* [x] `api.html` - API Documentation
* [x] `cli.html` - Command Line Interface documentation
* [x] `terminal.html` - Interactive terminal environment
* [x] `embeds.html` - Embeddable widgets and badges for GitHub READMEs
* [x] `map.html` - Real-time global command center map

## 5. The Roadmap (Backlog)
*If `next-prompt.md` is empty or completed, pick the next task from here OR create something new that fits the vision.*

### High Priority
- [x] **The Leaderboard Table:** Create a dense, highly readable table on `index.html`.
- [x] **The "Ship" Graph:** Add a visual sparkline or contribution graph next to the top 3 users.

### Medium Priority
- [x] **Profile View:** Create a template for a user details page showing their top repositories.
- [x] **"Hot Streak" Badge:** Design a visual indicator for users who have shipped 5+ days in a row.

### Future Concepts (Low Priority)
- [x] Settings/Preferences page.
- [x] Notifications page.

## 6. Creative Freedom Guidelines
*When the backlog is empty or you want to innovate, follow these guidelines:*

1. **Stay On-Brand:** New pages must fit the "Velocity + Terminal + Competitive" vibe.
2. **Enhance the Core:** New features should support the leaderboard mission (tracking, comparing, celebrating developers).
3. **Naming Convention:** Use lowercase, descriptive filenames (e.g., `stats.html`, `compare.html`, `achievements.html`).

### Ideas to Explore
*Pick one, build it, then REMOVE it from this list. Add your new page to Section 4 (Sitemap).*

**Gamification & Recognition:**

**Analytics & Insights:**

**Social & Competition:**

**Discovery & Exploration:**

**User Experience:**

**Meta & Documentation:**

*Or invent something entirely new that fits the vibe!*

### When You Complete a Page
1. **Remove the idea** from the list above (delete the line).
2. **Add the page** to Section 4 (Sitemap) with `[x]`.
3. **Pick a NEW idea** for `next-prompt.md` - do not repeat.

## 7. Rules of Engagement (Constraints)
1.  **Data Density:** This is a leaderboard. Do not waste space with massive hero images. Prioritize the data table.
2.  **Incremental Prompting:** Build the "Table Structure" first, then add "Filters" (Daily/Weekly/All Time) in the next turn.
3.  **Mobile Optimisation:** Tables must be scrollable or collapse into cards on mobile.
4.  **Consistency:** Use the "Git Green" accent consistently for positive actions (merges/commits).
5.  **No Duplicates:** Before creating a page, check Section 4 to ensure it doesn't already exist.
6.  **Keep the Loop Moving:** Always update `next-prompt.md` with the next task before completing your PR.
7.  **No Regeneration:** Do NOT regenerate a page that already exists in Section 4 unless it's a complete overhaul (effectively a new screen). Minor tweaks should be done via code edits, not Stitch regeneration.
8.  **Consume Ideas:** When you use an idea from Section 6, DELETE it from the list to prevent future agents from picking the same idea.
