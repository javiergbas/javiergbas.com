# Claude Code context — javiergbas.com

Personal website for Javier Gutiérrez, a product designer / software engineer based in Madrid. The site should feel crafted, human, and polished — playful details rewarded on exploration, but never loud or over-engineered.

## Stack

- **Vite** (v8) — build tool and dev server
- **React 19 + TypeScript** — strict mode, no `any`
- **Tailwind CSS v4** — via `@tailwindcss/vite` plugin, no `tailwind.config.ts`
- **Motion** (`motion/react`) — all animations, scroll effects, layout transitions
- **Lucide React** — icons (no brand icons — those use inline SVGs)

## Fonts

Loaded via Google Fonts in `index.html`:

- **Libre Baskerville** (400/700, italic 400) — headings and section titles, applied via `style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}`
- **Plus Jakarta Sans** (300/400/500) — body text, set as `--font-sans` CSS variable in `index.css`

## Component conventions

- Arrow function components with named `const` exports (`const Foo = () => ...`, `export default Foo`)
- One component per file
- Components live in `src/components/`
- Brand/custom icons live in `src/components/icons/`
- No CSS modules — Tailwind utilities only, custom globals in `src/index.css` via `@layer`

## Design decisions

- Hero: full viewport, `bg-gray-900`, white text, items centered
- Content sections: `max-w-3xl mx-auto`, `px-8 md:px-6`, `py-24`, `space-y-24`
- Section headings: Lora, `text-3xl md:text-4xl text-gray-900`
- Body text: `text-gray-600 leading-relaxed`
- Links in body: `text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors`
- Favicon: italic `J` in Lora, white on `#111827` rounded square SVG

## Animations

- Entry animations use `fadeUp` variant: `{ hidden: { opacity: 0, y: 24, filter: 'blur(20px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } }`
- Hero scroll: parallax (`y`), opacity fade, blur — tracked via `useScroll` with `offset: ['start start', 'end start']`
- Always respect `useReducedMotion()` for non-trivial animations
- Use `AnimatePresence` for mount/unmount transitions
- Avoid CSS transitions on properties also animated by Motion — they compound and cause delays

## Easter eggs

- **MadridPopup** — hovering/tapping "Madrid" in the hero and footer shows a comic-style popup with a random quip and rotation. `aria-hidden="true"` — purely decorative.
- More easter eggs planned — see `IDEAS.md`

## Sections (current state)

- **Hero** — done (`src/components/Hero.tsx`)
- **About me** — text written, no further design yet
- **Work** — placeholder
- **Experiments** — placeholder
- **Reads** — placeholder, book cards planned (see `IDEAS.md`)
- **Footer** — done (`src/components/Footer.tsx`)

## Ideas backlog

See `IDEAS.md` for planned features, including:
- Book cards with Motion layout animation expand/collapse (Reads section)
- Easter egg counter with `localStorage` persistence
- Fixed side navigation with subtle dots and hover labels
