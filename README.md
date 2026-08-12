# Pure Oasis

Marketing site for a landscape design and build company serving Hamilton,
Burlington and the west GTA.

Next.js 16 (App Router, React Server Components) and Tailwind v4. Motion drives
the entrance and scroll reveals. Archivo Variable is self hosted through
`@fontsource-variable`. Icons come from Phosphor.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Before this goes live

Three things are placeholders, all flagged with `TODO(client)` in the source.

1. **Business details and claims.** `lib/content.ts` holds every visible string
   on the site. The phone number, address, founding year, insurance status and
   warranty term are written to read like a real firm in this market, but they
   are invented. Replace them, and drop any claim the business cannot stand
   behind. The testimonials are written examples and need to be swapped for
   real, attributable quotes.
2. **Photography.** See `public/images/README.md`. Seven slots, each with a
   size and an art direction note.
3. **Where enquiries go.** `app/api/consult/route.ts` validates the consult
   form and logs it. Point it at an inbox or a CRM and add spam protection.

## How the page is put together

`app/page.tsx` composes nine sections, each its own Server Component under
`components/site/`. Anything that moves or holds state is an isolated client
leaf: the header, the scroll reveal wrapper, the theme toggle and the consult
form. Everything else renders on the server.

### Design decisions worth keeping

- **One accent.** The verdigris green in `app/globals.css` is used on every
  interactive surface across the page. Adding a second accent breaks the
  system.
- **One radius.** `--radius-edge` is 2px and applies to cards, media, inputs
  and buttons alike.
- **One theme at a time.** Light and dark are both fully defined as token sets.
  The page follows the visitor's system preference and the header toggle
  overrides it. No section inverts against the rest of the page.
- **Motion is justified per use.** Each animation exists for hierarchy,
  sequence or feedback, and each is documented at its call site. Everything
  collapses under `prefers-reduced-motion`, enforced in CSS rather than in
  component logic so it holds even before hydration.
- **Photography is a first class slot.** `components/ui/photo.tsx` checks at
  render whether a manifest file exists and falls back to a reservation block
  of identical aspect ratio, so layout does not shift when real images land.

### Accessibility

Contrast was measured rather than eyeballed. In both themes body text runs at
or above 6:1 against its background and both button variants clear WCAG AA.
Form labels sit above their inputs, errors below, with `aria-invalid` and
`aria-describedby` wired up. The first tab stop is a skip link.
