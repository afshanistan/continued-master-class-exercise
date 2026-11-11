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
| 4 | ⬜ | Course Card → Metadata | **Superseded by #20:** remove the star rating and the review count from the card entirely | Nov 10: reviews don't distinguish courses; page-level Trustpilot carries trust |
| 5 | ❓ | Icon library / Meta Item | Footer meta uses Meta Items with icons: **Clock** (hours) and Lucide **Award** (CEUs). Figma uses a **Credit** icon for CEUs: pick one and match. Star icon no longer used on the card | Icons restored Nov 10 |
| 6 | — | Course Card | ~~Hide review count at 0~~. Moot: reviews are off the card (#20) | — |
| 7 | ❓ | Review Card | Quote + attribution ("Dana Scully, MS · Rush Medical") and Trustpilot score/count are still placeholders | Verify before the walkthrough |

## Components

| # | Status | Where in Figma | Change to make | Why / source |
|---|---|---|---|---|
| 8 | ⬜ | Text Link (all tones) | **Rest:** 1px underline (Default: link color at 35%; Subtle: full strength; On dark: 50%). **Hover:** label + underline in the hover color, underline **2px**. **On dark hover → magenta 300** (new token `text/link-on-inverse-hover`, = Join now button). No draw-in (buttons wipe, links thicken) | Links never rely on color alone; revised Nov 10 |
| 9 | ⬜ | Checkbox (Checked) | Check glyph → single-stroke check with round caps (path `M5 12.5l4.5 4.5L19 7`, stroke 3.2 on a 24 grid) instead of the filled Check icon | Needed for the draw-on animation |
| 10 | ⬜ | Toggle Chip (Unselected, Pressed) | Count color → **magenta 800** (`control/active`), not neutral | Contrast fix Nov 10 (gray was ~3.8:1 on pink) |
| 11 | ⬜ | Action Group | "Already a member? Log in": only **"Log in"** is the link; "Already a member?" is plain text (on-inverse-muted) | Link text should be just the action |
| 12 | ⬜ | Course Card → Title | Add a **hover** look for the title link: 2px underline, offset 4px | Title is the course link |
| 13 | ❓ | Hero → Icon Tile | Code uses `surface/inverse-raised` + 1px `border/on-inverse`. Confirm or set the tile's fill in Figma (it isn't bound to a variable) | Couldn't read a bound fill |
| 14 | 📝 | Filter Dropdown | Annotation: disclosure pattern (`aria-expanded`, `aria-controls`), **no `aria-haspopup`** | It's a checkbox group, not an ARIA menu |
| 15 | 📝 | Course Card | Annotation: link name = visible short title + hidden full title (WCAG 2.5.3), replaces the full-title aria-label plan | Voice-control users say what they see |
| 16 | 📝 | Count Badge | Annotation: reads "2 applied" to screen readers | Visible number + hidden suffix |
| 24 | ⬜ | Course Card + New Tag | **New → squared badge at the right end of the tag row** (`[Topic] ……… [✦ New]`): radius sm (4), padding 4/8, gap 4, **filled Sparkles icon 16** + "New" (Label/Strong), gold 400 fill, gold 900 text/icon, no shadow. Not on the photo. Add the Sparkles (filled) icon to the library. **`badge/new-bg` → gold 400** (was gold 200). Explorations: Storybook → Explorations → New pill on photo (D vs E, E chosen) | Nov 10: New read like another category; squared + sparkle + opposite end = status, not topic. Filled icon = celebration rule |
| 25 | ⬜ | Filter Dropdown (all variants) | **Shape:** radius full → **`radius/md` (8)**. **Height:** min 44 → **40** (`size/control-md`). **Hover:** add fill **magenta 50** (new token `color/selection/bg-subtle`); Applied hover also gets the tint. Pressed stays magenta 100 | Nov 10 (ref: Dribbble filter bar): rounded rectangle = something you open; round pill = a value you chose. Hover builds color: white → tint → fill |
| 26 | ⬜ | Filters Button | **Shape → `radius/md` (8)**; stays **44** tall (mobile, thumbs). Hover gets the magenta 50 tint | Same control family as Filter Dropdown |
| 27 | ⬜ | Toggle Chip (Unselected, Hover) | Add fill **magenta 50** (`selection/bg-subtle`) on hover. Shape stays round (it's a selection) | Consistent hover across the filter controls |
| 28 | ⬜ | Filter Pill | Height 34 → **30**: close circle 20 → **18**, padding stays 6 / 6 / 6 / 12. Annotation: invisible tap area still reaches 44 | Pills sit a level below the dropdowns |
| 29 | ⬜ | Filter By | Label **Label/Strong 14 → Body 16, weight 600**; icon 16 → **20** | Was too small next to the dropdowns |
| 30 | ⬜ | Variables | Add **`color/selection/bg-subtle` = magenta 50** | New semantic token for control hover |
| 31 | ⬜ | Filter Block (all variants) | **Result count gets its own line, left-aligned, directly above the grid** (below the applied-pills row). Body 16, `text/secondary`; the two numbers in **semibold `text/primary`**: "Showing **10** of **16** courses". Remove it from the filter bar (desktop: drop the Spacer + count; mobile: Filters button alone in its row) | Nov 10: count was lost at the far right; e-commerce pattern (results header above the grid) |
| 32 | ⬜ | Button (new variant) + Filter Menu + Drawer Footer | Add **Button / Variant = Text** (tertiary): no fill or border, label magenta 800 (`control/active`), same height and Button label style as primary; hover fill magenta 50, pressed magenta 100. **Filter Menu → Clear** and **Drawer Footer → Clear all** become Text buttons (Medium 40 / Large 48), aligned with Apply / Show N courses | Nov 10: Clear read as a footnote next to Apply; now a matched pair. Inline "Clear all" beside the pills stays a Text Link |
| 33 | 📝 | Filter Menu | Annotation: opening from the keyboard moves focus to the first option; opening with a mouse doesn't (no stray focus ring) | Nov 10 |
| 34 | ⬜ | Button (Surface = On dark) + Action Group | **Join now (exploration F):** Hover = richer magenta **400** wiping in left → right over the 300 base (state: 400 fill). **`action/primary-on-inverse-hover` → magenta 400** (was 200). Press = 400 + pressed-in inner shadow (`inset 0 3 8` maroon 55%) + scale 0.98 (prototype only). Add a **trailing ArrowRight (18)** to Join now in Action Group (both instances); arrow sits 4px right on Hover, 6px on Pressed. `on-inverse-pressed` (100) no longer used. Explorations: Storybook → Explorations → Join now hover (F) | Nov 10: dark button's paler hover read as fading; deeper = intensify, arrow = signature visible on touch |
| 35 | 📝 | Button (Surface = On light) | Annotation only: state colors are unchanged (Hover 800 + Elevation/2, Pressed 900, no shadow), but in code the hover color **wipes in left → right** (380ms / 250 out) instead of fading, matching Join now. No arrow on light buttons (arrow = conversion CTA only) | Nov 10: one hover behavior across the system |
| 36 | ⬜ | Section / Join (Desktop) | **Height = the Membership Card's.** Case column stretches to the card: Lead pinned top, Review Card pinned bottom (flexible space between, min 32). Headline on **one line** (no balanced wrap); body full column width. Lead gap (headline → body) **24 → 16**. Tops and bottoms of both columns align | Nov 10: three different text widths looked unbalanced; card anchors the section |
| 37 | ⬜ | Membership Card → Action Group | **Layout = Inline** (Join now + "Already a member? Log in" side by side, left-aligned) on desktop and tablet, matching the hero Offer Card. Mobile stays **Stacked** (full-width button) | Nov 10: consistency with the hero; card is left-aligned |
| 38 | ⬜ | Section / Join | **Top padding → 0** (keep bottom `space/section-y`). Catalog's bottom padding already provides the gap; together they doubled to 192. Every section boundary is now one `section-y` (96 / 64 / 48) | Nov 10: cards → Join gap matched to hero → Browse |
| 39 | ⬜ | Section / Navigation + Section / Footer + Variables | Background **teal 900 → teal 950**. New token **`color/surface/inverse-deep` = teal 950** (site chrome). Hero stays `surface/inverse` (teal 900) | Nov 10: nav and footer read as chrome, separate from the hero |
| 40 | ⬜ | Variables (Layout, Mobile mode) | `layout/hero-width`, `layout/hero-stats-width`, `layout/join-card-width`, `layout/join-case-min-width`, `layout/join-case-max-width` → **Fill** (code: 100%) instead of 358. In mobile frames, set those layers to Fill container | R1: fixed 358 left a narrow column at 430–767 |
| 41 | 📝 | Offer Card | Annotation: layout follows **the card's own width** (container query): Three zones ≥1000, Two column 520–999, Stacked <520; not the screen breakpoints | R1 |
| 42 | 📝 | Membership Card → Action Group | Annotation: Inline whenever the card's content width is ≥400 (container query); Stacked below (phones) | R1 |
| 43 | ⬜ | Section / Join (Desktop) | Desktop is a **2-column grid** that never wraps: case `minmax(0, 608)` + card `minmax(0, 640)`, space-between, gap min 64 (96 at 1440). Add a 1200-wide frame to show both columns shrinking (~525 each) | R3: flexbox used to wrap below ~1312 |
| 44 | 📝 | Section / Hero (prototype) | Optional: mirror the on-load appear in the Figma prototype with Smart Animate / After Delay: text **rises** 9–15 (100–480ms), then tile + offer card **press on** (scale 1.06 / 1.0225 → 1, drop 6) at 560 / 680ms, `ease-appear` ≈ custom bezier 0.12, 0.23, 0.5, 1. Full table in Design-in-Code → Hero | Code-only motion |
| 45 | 📝 | Section / Join (prototype) | Optional: on-scroll appear with the hero's settings: headline rises 15 (140ms), body 12 (240ms); Membership Card then quote card press on (1.0225 → 1, drop 6) at 560 / 680ms | Code-only motion |
| 46 | 📝 | Section / Catalog + Filter Block + Filter Drawer (prototype) | Annotate the catalog motion (code-only): grid reflow on filter (leave 150 / slide 300 / enter 300 + 30ms stagger), applied-filters row opens (220) / closes (100 fade + 180), pill enter / leave, badge scale-in, menu close fade (100), drawer slide-down (220) + swipe to dismiss, scroll back to the filter bar. Full table: Design-in-Code → Motion pass: Catalog batch | Code-only motion |
| 23 | ⬜ | Meta Item | Icon color `neutral/900` → **`text/secondary`** (same gray as the value); icon-to-text gap 8 → **4** (`space/1`). Icons stay **outline** | Nov 10: icons were louder than their numbers; outline = functional, filled = brand/celebration |

## Patterns, layout, and prototype flows

| # | Status | Where in Figma | Change to make | Why / source |
|---|---|---|---|---|
| 17 | ⬜ | Filter Drawer prototype | **Clear all** clears the chips and **stays open** (button → "Show 16 courses"). Prototype currently closes | Decided in code Nov 10 |
| 18 | ⬜ | Section / Catalog | Add an **empty state** frame: "No courses match these filters" + body + "Clear all filters" (Medium button), dashed subtle border, radius lg | New in code; filters AND across groups can return 0 |
| 19 | ⬜ | Section / Hero (Alignment = Left) | Stats rows: a 1px `border/on-inverse` rule **above each row**, no rule under the last (Figma has top+bottom on the first cell) | Matches code |
| 20 | ⬜ | Course Card + Section / Catalog grid | **Card resize (decided Nov 10):** **Grid:** 4 columns at full desktop (cards ~318 × ~537), 3 at ~1200–1367, 2 on tablet, 1 on phone (code: `repeat(auto-fill, minmax(300px, 1fr))`). Update `layout/card-width` Desktop 432 → **318** and `layout/card-height` Desktop 632 → **537**. **Card order:** Topic Pill (+ New) → Title → Taught by → Outcome → **Footer**. **Footer** (pinned to bottom): 1px `border/subtle` top rule, 16 padding-top, then Meta Items "🕒 5 hrs" + "🎖 0.5 CEUs" (16px icons, Label `text/secondary`, 16 apart), 16 gap, full-width View course. **Remove** the meta row between pill and title, and the review count. **Padding** 32 → **20**; gaps between groups 16. **Title** 20 → **18**/24 serif semibold (card only) | Cards were too big at 432 × 632; 4 × 4 also removes the orphan last card |
| 22 | ⬜ | Section / Catalog → all 16 cards | **Outcome copy rewritten** to ~100 characters each (72–105) so outcomes stay at 16px with no truncation (max 4 lines at 318). Source: `src/data/courses.ts` | Decided Nov 10; no truncated text |

## Variables and styles

| # | Status | Where in Figma | Change to make | Why / source |
|---|---|---|---|---|
| 21 | 📝 | Variables (new collection "Motion", optional) | Record motion tokens for reference: ease-out `cubic-bezier(0.22, 1, 0.36, 1)` (movement), ease-color `cubic-bezier(0.37, 0, 0.63, 1)` with color 200 in / 250 out / 100 press (hover and press colors; use for Smart Animate on state changes), ease-in-out `cubic-bezier(0.65, 0, 0.35, 1)`, durations press 90 / fast 150 / hover-out 200 / move 220 / retract 180 / sheet 280 in, 220 out. Use these in Smart Animate where Figma allows | One motion feel across code and prototype |

---

## How we use this
- **When code diverges from Figma,** add a row here in the same commit.
- **When the Figma file is updated,** flip the row to ✅ and note the date.
- Numbering is permanent; don't renumber. New rows go at the end of their section with the next number.
