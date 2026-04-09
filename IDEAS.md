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

