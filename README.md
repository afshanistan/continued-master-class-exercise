# Master Class page redesign

A redesign of the SpeechPathology.com Master Class landing page (logged-out view), built for Continued's Senior Design Engineer exercise. Designed in Figma, built in React, with a Storybook component library kept in step with the Figma design system.

- **Live site:** https://afshanistan.github.io/continued-master-class-exercise/
- **Storybook:** https://afshanistan.github.io/continued-master-class-exercise/storybook/
- **Figma (view only):** https://www.figma.com/design/NBaEv44qxyqFyP9I8pkmSb/Screens-and-Design-System

## What to look at
- **Course cards:** clinical-area color on the topic pill and the photo tint, both driven by tokens. Hover and focus states sit on the two things you act on (the title link and View course), not the whole card; a whole-card target caused accidental taps while scrolling on mobile.
- **Filters:** dropdowns with an Apply model on desktop, a bottom-sheet drawer on mobile, both with a live "Show N courses" count.
- **Motion:** hero and Join appear, filter reflow (FLIP), pill and drawer transitions. All of it turns off under reduced motion.
- **Responsive:** 4 → 3 → 2 → 1 columns; checked at 15 widths from 1920 to 320 with no horizontal scroll. Keyboard usable; axe reports 0 violations.
- **Figma Sync Log** (in Storybook): every place the code moved ahead of the comps, logged so Figma can catch up.

## Stack
React 19 · Vite · TypeScript · Storybook · lucide-react · GitHub Pages.
No motion library: CSS transitions on tokens, plus a small FLIP helper on the Web Animations API. That keeps the bundle small, keeps timing on tokens, and makes reduced motion a single switch.

## Run it
    npm install
    npm run dev         # localhost:5173
    npm run storybook   # localhost:6006

## Structure
- `src/styles/tokens.css`: design tokens, mirroring the Figma variables
- `src/components/`: atoms → organisms, each with stories
- `src/sections/`: Navigation, Hero, Catalog, Join, Footer
- `src/motion/motion.ts`: shared timings and the FLIP helper
- `src/data/courses.ts`: the 16 courses and filter options
- `src/docs/figma-sync-log.md`: code ↔ Figma changes

## Content notes
- **Real:** course titles, links, hours, and CEUs from speechpathology.com. "20+ instructors" (21 presenters counted). "New" marks the two most recently created courses.
- **Placeholders:** the review quote (yes, Dana Scully), the Trustpilot score and count, the Join and Log in links, the School-Based Teletherapy details (its course page redirects), and the navigation and footer (out of scope).

## With more time
- Bring the header video in, possibly as video cards for the key points
- A member (logged-in) view: less selling, straight to the grid, with courses taken shown so the grid becomes a progress tracker
- A full manual accessibility pass (screen reader, zoom, keyboard walkthrough)
- Live per-filter counts, photo art direction for mid-size screens, and bringing Figma up to date with the sync log

---
© 2026 Will Norris. Shared for evaluation as part of Continued's hiring process. Not licensed for reuse.
