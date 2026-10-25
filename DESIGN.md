---
name: Caimeo
description: A clarity-first system for showing how consequential agent actions are governed.
colors:
  deep-ground: "#151719"
  deep-ground-hover: "#2b2e31"
  warm-ink: "#f3f4f1"
  muted-ink: "#d4d8d5"
  field-paper: "#eff0eb"
  field-ink: "#17191b"
  field-muted: "#3e4444"
  field-soft: "#e5e9e9"
  proof-surface: "#f3f5f5"
  signal-orange: "#ff5b31"
  signal-orange-hover: "#ff7654"
  focus-cyan: "#67d7ff"
  approved-green: "#1c6d49"
  rejected-red: "#7f252d"
  pending-amber: "#72470c"
  pure-white: "#ffffff"
typography:
  display:
    fontFamily: '"Schibsted Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "clamp(3.25rem, 6vw, 5.6rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: '"Schibsted Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "clamp(2.65rem, 5vw, 4.9rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  title:
    fontFamily: '"Schibsted Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "clamp(1.8rem, 3vw, 2.6rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  body:
    fontFamily: '"Schibsted Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: '"Schibsted Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.45
  control:
    fontFamily: '"Schibsted Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.2
rounded:
  square: "0"
  proof: "16px"
  proof-mobile: "12px"
  status-pill: "999px"
spacing:
  page-gutter: "clamp(1.25rem, 2.25vw, 2rem)"
  page-gutter-mobile: "1.1rem"
  section: "clamp(6rem, 11vw, 10rem)"
  section-mobile: "5.5rem"
  control-y: "0.78rem"
  control-x: "1.1rem"
  proof-panel: "clamp(1.35rem, 2.4vw, 2.25rem)"
components:
  button-primary:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.deep-ground}"
    typography: "{typography.control}"
    rounded: "{rounded.square}"
    padding: "{spacing.control-y} {spacing.control-x}"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.signal-orange-hover}"
    textColor: "{colors.deep-ground}"
    typography: "{typography.control}"
    rounded: "{rounded.square}"
    padding: "{spacing.control-y} {spacing.control-x}"
    height: "48px"
  button-dark:
    backgroundColor: "{colors.deep-ground}"
    textColor: "{colors.warm-ink}"
    typography: "{typography.control}"
    rounded: "{rounded.square}"
    padding: "{spacing.control-y} {spacing.control-x}"
    height: "48px"
  button-dark-hover:
    backgroundColor: "{colors.deep-ground-hover}"
    textColor: "{colors.warm-ink}"
    typography: "{typography.control}"
    rounded: "{rounded.square}"
    padding: "{spacing.control-y} {spacing.control-x}"
    height: "48px"
  button-approved:
    backgroundColor: "{colors.approved-green}"
    textColor: "{colors.pure-white}"
    typography: "{typography.control}"
    rounded: "{rounded.square}"
    height: "46px"
  button-rejected:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.rejected-red}"
    typography: "{typography.control}"
    rounded: "{rounded.square}"
    height: "46px"
  text-link:
    textColor: "{colors.warm-ink}"
    typography: "{typography.control}"
  navigation:
    textColor: "{colors.muted-ink}"
    typography: "{typography.label}"
  decision-trace:
    backgroundColor: "{colors.proof-surface}"
    textColor: "{colors.field-ink}"
    rounded: "{rounded.proof}"
    width: "100%"
---

# Design System: Caimeo

## Overview

**Creative North Star: "The Approval Trace"**

Caimeo's design makes one consequential action legible from request to outcome. The visual system is direct, technical, and calm: near-black fields establish authority, light policy surfaces make the mechanism readable, and signal orange marks the one action that advances the conversation.

The page moves on one axis. Large claims lead into full-width proof, proof leads into an ordered sequence, and the sequence leads into a narrowly scoped call to action. Product evidence stays at useful scale; decoration never competes with the governed action.

**Key Characteristics:**

- One linear reading path with no competing visual directions.
- High-contrast dark and paper fields instead of decorative cards or glass.
- Oversized, compact headlines paired with plainly written proof.
- Square controls and data fields, with rounding reserved for the signature decision trace.
- Restrained entrance and state motion that never obscures the evidence.

**The One-Trace Rule.** Lead with one concrete governed action and keep its request, policy, approvers, release state, and evidence visibly connected.

## Colors

The palette is mostly neutral and high contrast; orange is the commercial signal, while green, red, and amber communicate terminal or pending state inside operational proof.

### Primary

- **Signal Orange** (`#ff5b31`): use for the top signal line, the primary action, selection, and the closing conversion field. Its hover state brightens to `#ff7654`.

### Secondary

- **Approved Green** (`#1c6d49`): use only for affirmative terminal controls and approved outcomes.
- **Rejected Red** (`#7f252d`): use only for rejection controls and negative terminal outcomes.
- **Pending Amber** (`#72470c`): use for a waiting or approval-required state, never as a general accent.
- **Focus Cyan** (`#67d7ff`): use for the visible keyboard focus outline across both dark and light fields.

### Neutral

- **Deep Ground** (`#151719`): the primary page background and inverse button field.
- **Warm Ink** (`#f3f4f1`): primary text on the deep ground.
- **Muted Ink** (`#d4d8d5`): supporting text on dark sections.
- **Field Paper** (`#eff0eb`): the light explanatory section that carries the ordered mechanism.
- **Field Ink** (`#17191b`): primary text inside light fields and proof.
- **Field Muted** (`#3e4444`): supporting text inside light fields.
- **Soft Field** (`#e5e9e9`): proof chrome, especially the decision header and outcome bar.
- **Proof Surface** (`#f3f5f5`): the body of the signature decision trace.

**The Rare Signal Rule.** Orange identifies the primary action or major transition; do not spread it across every heading, link, or product plate.

**The Semantic State Rule.** Green, red, and amber always retain their approval meanings and never become decorative brand colors.

## Typography

**Display Font:** Schibsted Grotesk (with Helvetica Neue, Helvetica, Arial, and sans-serif fallbacks)
**Body Font:** Schibsted Grotesk (with the same fallbacks)
**Label Font:** Schibsted Grotesk

**Character:** One grotesk family carries the entire system. Weight, scale, compact line height, and tabular numerals create hierarchy without introducing a second typographic voice.

### Hierarchy

- **Display** (700, `clamp(3.25rem, 6vw, 5.6rem)`, `0.98`): hero claims only; keep the measure near 11–12 characters per line where the copy permits.
- **Headline** (700, `clamp(2.65rem, 5vw, 4.9rem)`, `0.98`): major section transitions and the closing statement.
- **Title** (700, `clamp(1.8rem, 3vw, 2.6rem)`, `0.98`): ordered mechanism stages and product names.
- **Body** (400, `18px`, `1.55`): explanations and product copy; use narrower measures of roughly 32–58 characters where evidence needs quick scanning.
- **Label** (600, `13px`, `1.45`): data-field labels and proof metadata; retain sentence case.
- **Control** (700, `1rem`, `1.2`): primary actions and strong text links.

**The One-Family Rule.** Create contrast through size, weight, and density; do not introduce a decorative display face or monospaced body copy.

**The Readable Proof Rule.** Operational evidence must remain body-sized and plainly labeled, even when adjacent marketing headlines are oversized.

## Layout

The system uses a fluid container capped at `1680px`, with a page gutter of `clamp(1.25rem, 2.25vw, 2rem)` and section spacing of `clamp(6rem, 11vw, 10rem)`. Desktop sections pair a larger claim column with a smaller explanation column, then give product proof the full available width. Alternating product rows keep copy and supplied captures together without turning them into isolated cards.

At `980px`, two-column introductions, suite rows, and the decision trace collapse toward a single reading path. At `640px`, the gutter becomes `1.1rem`, section spacing becomes `5.5rem`, controls expand to the available width where useful, and proof columns stack in source order. The offer always precedes the interactive proof on phones.

**The Single-Axis Rule.** Every breakpoint preserves the same narrative order; responsive layout may stack or reorder paired media, but it must not create a second navigation or comparison mode.

**The Full-Size Proof Rule.** Product captures and the decision trace receive enough width to remain legible; do not shrink evidence into decorative thumbnails.

## Elevation & Depth

The system is flat by design and uses no shadows. Depth comes from tonal fields, crisp one-pixel separators inside data UI, large background changes between sections, and supplied product captures on near-black plates. Hover elevation is limited to a two-pixel control lift and a `1.012` media scale; neither should be mistaken for a floating surface model.

**The Flat Evidence Rule.** Keep proof on the page plane. Use field color and rules to separate states, not drop shadows, glass, glow, or blur.

## Shapes

Controls, navigation marks, media plates, and explanatory rows are square. The decision trace alone uses a gently rounded outer container (`16px`, reduced to `12px` on small screens) because it is a coherent interactive object; its internal fields remain rectilinear. Status labels use a full pill radius (`999px`) so transient state can be identified quickly.

**The Reserved Radius Rule.** Rounding belongs to the proof container and status labels; do not turn every section or product capture into a rounded card.

## Components

### Buttons

Buttons are square, compact, and explicit.

- **Primary:** signal orange on deep ground, `48px` minimum height, and `0.78rem 1.1rem` padding.
- **Dark:** deep ground on signal orange or light fields, using the same dimensions.
- **Approved / Rejected:** paired terminal-path controls use green fill for approved and a white field with red text and a quiet border for rejected.
- **Hover / Active:** lift by `2px` over `160ms ease` on hover, then return to the page plane on active.
- **Focus:** use the shared `3px` focus-cyan outline with a `4px` offset; selected outcome controls also gain a dark `3px` pressed outline.

### Chips

Status chips use a compact `12px` bold label and the full pill radius. Pending uses amber on pale amber, approved uses deep green on pale green, and rejected uses deep red on pale red. Copy must say the state directly: “Needs approval,” “Approved,” or “Not approved.”

### Cards / Containers

The system does not use generic cards. The signature decision trace is a full-width proof container with a proof-surface body, soft-field header and outcome bars, one-pixel internal separators, and `clamp(1.35rem, 2.4vw, 2.25rem)` panel padding. It moves from three columns to two at `980px` and one at `640px`.

### Navigation

The desktop header is a three-part grid: wordmark, two quiet section links, and one scope action. Navigation uses `0.92rem` semibold text with no container chrome. Below `980px`, remove the secondary section links and keep only the wordmark and scope action; do not add a drawer for this short page.

### Approval Trace

The approval trace is the system's signature component. It must keep the requested action, deterministic policy reason, required approvers, outcome, and replay evidence in one bounded object. Approved and rejected examples are separate, clearly labeled paths. A rejected or pending path never shows release evidence.

Entrance motion reveals the headline and proof in reading order using `500–760ms` eased rises. State changes update labels and evidence immediately. Under reduced-motion preference, animations and transitions collapse to `0.01ms` and smooth scrolling is disabled.

**The Honest State Rule.** A control may show an example outcome, but its copy must not imply that one click performed multiple real approvals.

## Do's and Don'ts

### Do:

- **Do** lead with one offer, one concrete trace, and one primary action.
- **Do** keep approval state, policy reason, approvers, release boundary, and evidence readable in the same proof object.
- **Do** preserve the dark-ground, light-field contrast and use signal orange sparingly.
- **Do** keep supplied product captures large enough to read and pair each with concise explanatory copy.
- **Do** preserve visible focus, semantic labels, keyboard operation, reduced-motion behavior, and mobile source order.

### Don't:

- **Don't** split the page into competing directions, feature-card grids, or chooser interactions before the offer is understood.
- **Don't** use gradients, floating glass, decorative chrome, shadows, or metaphorical control-room ornament.
- **Don't** scatter the approval sequence across unrelated panels or hide the release condition behind interaction.
- **Don't** use semantic green, red, or amber as ambient decoration.
- **Don't** add motion that delays reading, loops, or makes operational evidence shift while it is being inspected.
