# TurfNation multi-screen app

## What I’ll build
- Recreate the customer discovery screen as the home page.
- Add a detailed Apex Arena booking page with date, pitch, time-slot, and payment selections.
- Add the Apex Sports Hub owner operations dashboard with schedule, controls, and booking ledger.
- Add the TurfNation central administration dashboard with venue approvals, live locks, settlements, and platform controls.
- Connect all four screens through the shared header and contextual links.

## Visual direction
- Match the supplied references closely: navy navigation, emerald actions, pale blue-gray workspace surfaces, compact Lexend/Inter typography, dense operational tables, and real turf photography.
- Reuse the image URLs embedded in the supplied HTML, as requested.
- Adapt dense desktop layouts into usable stacked mobile views without changing the visual identity.

## Interactions
- Make sport filters, search controls, sort choices, dates, pitches, and booking slots selectable.
- Provide working quick actions and state feedback for reservations, venue approvals, locks, facility switches, and exports.
- Preserve selected booking details in the visible checkout summary.

## Technical details
- Use TanStack Router routes for `/`, `/venue`, `/owner`, and `/admin`.
- Build shared navigation and focused reusable UI pieces with the project’s semantic design tokens.
- Add unique page metadata for every screen.
- Verify all routes at desktop and mobile sizes, including interaction states and overflow.
