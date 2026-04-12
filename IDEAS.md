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

---

## Dark mode

Support a dark color scheme that feels intentional, not just inverted.

**Behaviour**

- Follows system preference via `prefers-color-scheme` by default
- Optional manual toggle (sun/moon icon, unobtrusive placement — footer or fixed corner)
- Persists preference to `localStorage`

**Design notes**

- Hero is already `bg-gray-900` so it naturally works in dark mode — the transition should be seamless there
- Content sections need a true dark background (not pure black — something like `gray-950` or `gray-900`) with adjusted text contrast
- Book covers and work images should keep their natural colors — avoid inverting them
- The timeline line gradient (`#51a2ff → #c800de`) already reads well on dark backgrounds

**Implementation**

- Add `dark` class to `<html>` via Tailwind's `darkMode: 'class'` strategy
- Use `dark:` variants on all color utilities throughout components
- `useReducedMotion` already in place — pair dark mode toggle with a smooth crossfade transition

---

## Hero background animation

The hero is clean but the `bg-gray-900` is flat. A subtle animated background could add depth without competing with the text.

**Option A — Animated mesh gradient**
- 3–4 large blurred color orbs (`blur-3xl`, low opacity) drifting slowly across the background
- Colors pulled from the site palette: deep blue, violet, a hint of pink
- Each orb moves on its own slow looping path via `animate` with `repeat: Infinity`
- Feels alive without being distracting — the kind of thing you notice after 5 seconds

**Option B — Aurora / light leak**
- A single wide gradient bar that slowly shifts hue across the top of the hero
- Think northern lights — horizontal bands of color, very low opacity, animated with `useTransform` tied to time
- Pairs well with the existing parallax scroll effect

**Option C — Parallax retro grid**
- A perspective CSS grid (vanishing point at center) that moves slightly with scroll or mouse position
- Retro sci-fi feel — Tron / synthwave
- Could use a subtle `repeating-linear-gradient` for the grid lines, animated with `useScroll`
- Works best if the rest of the site leans into that aesthetic — might clash with the warm serif type

**Option D — Particle field**
- Small floating dots or crosses (✦) scattered across the background, drifting slowly
- Each particle has a randomized position, opacity, and drift speed
- Rendered as absolutely-positioned `motion.div`s or on a `<canvas>` for performance
- The ✦ symbol already appears in the site — could reinforce the motif

**Option E — Mouse-tracking light**
- A soft radial gradient that follows the cursor position with a slight lag
- Like a flashlight illuminating the dark background
- Implemented with `useMotionValue` + `useSpring` for the smooth lag
- Subtle: the gradient is very large and very low opacity — more felt than seen

**General notes**
- Whatever is chosen must not reduce text legibility — test contrast carefully
- Keep it off on `prefers-reduced-motion`
- The animation should loop seamlessly and never feel urgent or fast

---

## Work — Embedded Figma prototypes (Clean View)

Instead of only showing static screenshots in work item overlays, embed live Figma prototypes so visitors can interact with the actual designs.

**Approach**

- Use the Figma Prototype Clean View embed URL (`?embed_host=share&kind=proto&chrome=0`) which strips the Figma toolbar and shows just the prototype canvas
- Render inside an `<iframe>` in the work item overlay body, sized to fit the panel
- Add a fallback screenshot for cases where the prototype is not publicly accessible or on slow connections

**UX details**

- Show a "Try it" or "Open prototype" label above the iframe so visitors know it's interactive
- The iframe should have a fixed aspect ratio (e.g. `aspect-video` or mobile frame if it's a mobile prototype)
- Optionally wrap in a device mockup (browser chrome or phone frame) to give it context
- Include a link to open the prototype fullscreen in Figma for visitors who want to explore further

**Implementation notes**

- Add an optional `figmaEmbed?: string` field to the `WorkItem` type (the embed URL)
- In the overlay body, render the iframe when `figmaEmbed` is present
- Use `loading="lazy"` on the iframe to avoid blocking the page

---

## AI Avatar — richer animations

The live demo currently shows the avatar at rest. There's a lot more to explore to make it feel truly alive.

**More states**

- `Waiting` — subtle eye movement, glancing left/right occasionally, like it's aware but not demanding attention
- `Thinking` — existing rotating ring + eyes shifting up, but could add a slow "breathing" scale and a slight head tilt via SVG transform
- `Listening` — a gentle inward pulse, mouth closed, eyes slightly wider — attentive, not eager
- `Responding` — mouth animation synced to a visual rhythm, ripple rings, slightly elevated energy
- `Celebrating` — for moments like "we found a match" — a quick pop + sparkle burst

**Sparkles**

- The orbiting glow blobs give warmth, but small animated ✦ sparkles around the avatar would add magic
- A few tiny sparkles that appear and fade at random positions around the circle, with staggered timing
- Could intensify during the `Responding` or `Celebrating` states and calm down at `Idle`
- Implemented as absolutely positioned `motion.div`s with randomized `opacity` and `scale` animations

**Astronaut avatar — floating in space**

- The astronaut should feel weightless — a slow, gentle float animation (up/down sine wave, slight rotation) that loops forever
- Add parallax depth: the astronaut moves slightly against a subtle star field background when the user moves the mouse
- Stars in the background could be tiny `motion.div`s or a canvas, drifting slowly to give a sense of movement through space
- Occasional slow tumble (small `rotateZ` oscillation) to reinforce zero-gravity
- The helmet visor could have a soft reflection shimmer that moves independently
