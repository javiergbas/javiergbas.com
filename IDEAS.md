# Ideas

A running list of things I want to build or explore for this site.

---

## Reads section — Book cards with expanded detail view

A card grid for the Reads section showing books I'm currently reading and favorites.

**Layout**

- Card grid with book cover, title, and author
- Cards have a subtle hover state
- Each card has a tag "Favorite" or "Currently reading"

**Interaction**

- Clicking a card expands it into a full detail view — following the [Motion App Store pattern](https://motion.dev/examples/react-app-store)
- The card animates in place (shared layout animation via `layoutId`) into an overlay with more detail: description, notes, rating, link to buy
- Background dims with a backdrop
- Close by clicking outside or a close button
- On mobile, the detail slides up from the bottom as a sheet

**Implementation notes**

- Use `motion` layout animations (`layoutId`) so the card morphs into the detail panel without a hard transition
- Keep book data in a local array of objects (title, author, cover, status, notes)
- Cover images from Open Library Covers API (`https://covers.openlibrary.org/b/isbn/{isbn}-L.jpg`) — no auth needed

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

