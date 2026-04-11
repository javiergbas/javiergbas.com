# Ideas

A running list of things I want to build or explore for this site.

---

## Easter egg counter

A small persistent UI element that tracks how many hidden easter eggs the user has discovered vs. how many exist in total.

**Behaviour**

- Each easter egg (e.g. the Madrid popup) registers itself in a global registry with a unique id
- When triggered for the first time, it marks itself as discovered and persists to `localStorage`
- A counter badge appears somewhere unobtrusive (corner of the screen, or the footer) showing e.g. `✦ 1 / 4 discovered`
- The counter animates when a new one is found — number ticks up with a satisfying pop

**UX details**

- First appearance of the counter should itself feel like a discovery — maybe it only shows up after the first egg is found
- Hovering the counter could show a hint like "keep exploring…" or list which ones are found vs. still hidden (without spoiling where the undiscovered ones are)
- Persist state across sessions via `localStorage` so progress isn't lost on reload

---

## Timeline easter eggs

Each timeline entry can have a hidden tooltip or popover that appears on hover/tap — a personal, playful one-liner that rewards curiosity without cluttering the layout.

**Interaction**

- Hovering or tapping an emoji reveals a small speech-bubble-style popover
- Appears with a spring animation (scale + fade from the emoji outward)
- Disappears on mouse leave / tap outside
- Feels like a secret, not a feature — subtle trigger, no affordance

**Copy ideas by entry**

- 👶 Born in Madrid — _"Still can't explain why I prefer cold weather."_
- 🇨🇿 Prague — _"Ask me about the best spots the tourists don't know."_
- 🇺🇸 Chicago — _"Deep dish is fine. I said what I said."_
- 🎨 Pixelonce — _"We named it after a pixel. We were young."_
- 🗼 Paris — _"Ask me about the best tips for 🥐 and 🥖."_
- 🌞 Madrid — _"Full circle. Warmer than I remembered."_
- 🐣 Lucía was born — _"Best thing I've ever shipped."_
- 🤖 Findem — _"Teaching AI to find the right people. Meta."_

**Implementation notes**

- Add an optional `easter egg` string field to the `Entry` type
- On hover, render a `motion.div` with `AnimatePresence` positioned relative to the emoji node
- Style as a small rounded pill or speech bubble, `bg-gray-900 text-white text-xs`
- Use `whileHover` or a local `useState` for the trigger
- Wire into the easter egg counter system when that's built

---

## Fixed side navigation

A minimal fixed navigation on the side of the page linking to each section.

**Behaviour**

- Always visible, fixed to the left or right edge of the viewport
- At rest: shows only small subtle dots or short tick marks — no labels
- On hover (of the whole nav or individual items): section labels slide in or fade in next to each indicator
- Active section is highlighted as the user scrolls, driven by an `IntersectionObserver`

**UX details**

- Clicking an item smoothly scrolls to the section
- Transition between active states should be smooth — the active indicator slides, not jumps
- Should feel like a detail you notice on second visit, not something that competes for attention
- Hide on mobile where it would clutter the layout

---

## Bookshelf — polish animations and hover effects

The current bookshelf works but feels plain. Make it feel like a real shelf you want to browse.

**Hover effects**

- On card hover: cover lifts with a more pronounced shadow and a subtle tilt (`rotateY` 3–5°) as if you're pulling the book slightly off the shelf
- Title and author slide up a few pixels as the cover lifts — reinforcing the physical metaphor
- Cursor changes to a grab hand (`cursor-grab`) on hover

**Entry animation**

- Books animate in on scroll with a staggered `fadeUp` — each card slightly delayed after the previous
- Covers could start slightly tilted and snap upright as they enter

**Expand / overlay polish**

- The shared layout animation from card to overlay currently snaps — add a spring config to make it feel physical
- On mobile (bottom sheet), add a drag-to-dismiss gesture — user can swipe down to close
- When the overlay opens, the remaining cards in the grid subtly scale down and blur, focusing attention on the open book

**Delightful details**

- A faint spine-like left edge on each card (1–2px gradient or border) to reinforce the book metaphor
- On overlay close, the book "falls back" into the shelf with a slight overshoot spring
- Page-turn sound (optional, off by default) — a single soft rustle on open
