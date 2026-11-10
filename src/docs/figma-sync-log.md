# Figma Sync Log

Code is the source of truth. Every time the prototype diverges from the Figma comps, the change lands here so the Figma file (NBaEv44qxyqFyP9I8pkmSb) can be brought back in line.

**Status:** ⬜ To do in Figma · ✅ Done in Figma · ❓ Decide first · 📝 Annotate only (behavior Figma can't show; add a note on the component)

Behavior details live in the Design-in-Code log. This log is only for what Figma itself should change.

---

## Content and data

| # | Status | Where in Figma | Change to make | Why / source |
|---|---|---|---|---|
| 1 | ⬜ | Section / Hero → Stats | "28+ Expert instructors" → **"20+ Expert instructors"** | 21 distinct presenters across the 16 courses (Nov 10 audit) |
| 2 | ⬜ | Section / Catalog → Grid (16 cards) | Replace comp course data with the real 16 courses: short titles, taught-by, hours, CEUs, review counts, outcomes. Source: `src/data/courses.ts` | Real course names agreed Nov 10; 5 comp titles differ |
| 3 | ⬜ | Course Image instances | Swap in the real course photos (`src/assets/courses/*.jpg`, named by course) | Photos renamed to match real courses |
| 4 | ⬜ | Course Card → Metadata | Star rating "4.8 (642)" → **review count** "2,498 reviews" with a speech-bubble icon. Remove the star | Decided Nov 10: show review counts, not star ratings |
| 5 | ⬜ | Icon library | Code meta icons are Lucide **Clock**, **Award** (CEUs), **MessageSquare** (reviews). Figma uses Clock, Credit, Star. Add a reviews icon; confirm Credit vs Award | Keep icon set in sync |
| 6 | ⬜ | Course Card | When a course has **0 reviews**, the review item is hidden (School-Based Teletherapy placeholder) | Avoids "0 reviews" |
| 7 | ❓ | Review Card | Quote + attribution ("Dana Scully, MS · Rush Medical") and Trustpilot score/count are still placeholders | Verify before the walkthrough |

## Components

| # | Status | Where in Figma | Change to make | Why / source |
|---|---|---|---|---|
| 8 | ⬜ | Text Link (all tones) | **Rest:** 1px underline track (Default: link color at 35%; Subtle: full strength; On dark: 50%). **Hover:** 2px underline in the link color. Add the track to the Default/rest variant | Links never rely on color alone; hover wipe is code-only (📝) |
| 9 | ⬜ | Checkbox (Checked) | Check glyph → single-stroke check with round caps (path `M5 12.5l4.5 4.5L19 7`, stroke 3.2 on a 24 grid) instead of the filled Check icon | Needed for the draw-on animation |
| 10 | ⬜ | Toggle Chip (Unselected, Pressed) | Count color → **magenta 800** (`control/active`), not neutral | Contrast fix Nov 10 (gray was ~3.8:1 on pink) |
| 11 | ⬜ | Action Group | "Already a member? Log in": only **"Log in"** is the link; "Already a member?" is plain text (on-inverse-muted) | Link text should be just the action |
| 12 | ⬜ | Course Card → Title | Add a **hover** look for the title link: 2px underline, offset 4px | Title is the course link |
| 13 | ❓ | Hero → Icon Tile | Code uses `surface/inverse-raised` + 1px `border/on-inverse`. Confirm or set the tile's fill in Figma (it isn't bound to a variable) | Couldn't read a bound fill |
| 14 | 📝 | Filter Dropdown | Annotation: disclosure pattern (`aria-expanded`, `aria-controls`), **no `aria-haspopup`** | It's a checkbox group, not an ARIA menu |
| 15 | 📝 | Course Card | Annotation: link name = visible short title + hidden full title (WCAG 2.5.3), replaces the full-title aria-label plan | Voice-control users say what they see |
| 16 | 📝 | Count Badge | Annotation: reads "2 applied" to screen readers | Visible number + hidden suffix |

## Patterns, layout, and prototype flows

| # | Status | Where in Figma | Change to make | Why / source |
|---|---|---|---|---|
| 17 | ⬜ | Filter Drawer prototype | **Clear all** clears the chips and **stays open** (button → "Show 16 courses"). Prototype currently closes | Decided in code Nov 10 |
| 18 | ⬜ | Section / Catalog | Add an **empty state** frame: "No courses match these filters" + body + "Clear all filters" (Medium button), dashed subtle border, radius lg | New in code; filters AND across groups can return 0 |
| 19 | ⬜ | Section / Hero (Alignment = Left) | Stats rows: a 1px `border/on-inverse` rule **above each row**, no rule under the last (Figma has top+bottom on the first cell) | Matches code |
| 20 | ❓ | Course Card / Catalog grid | **Card size:** cards feel too big at 432 × 632. Proposal: 4 columns on desktop (~318 wide), padding 24, smaller title. Would update `layout/card-width`, `layout/card-height`, and the grid | Open, Nov 10 |

## Variables and styles

| # | Status | Where in Figma | Change to make | Why / source |
|---|---|---|---|---|
| 21 | 📝 | Variables (new collection "Motion", optional) | Record motion tokens for reference: ease-out `cubic-bezier(0.22, 1, 0.36, 1)`, ease-in-out `cubic-bezier(0.65, 0, 0.35, 1)`, durations press 90 / fast 150 / hover-out 200 / move 220 / retract 180 / sheet 280 in, 220 out. Use these in Smart Animate where Figma allows | One motion feel across code and prototype |

---

## How we use this
- **When code diverges from Figma,** add a row here in the same commit.
- **When the Figma file is updated,** flip the row to ✅ and note the date.
- Numbering is permanent; don't renumber. New rows go at the end of their section with the next number.
