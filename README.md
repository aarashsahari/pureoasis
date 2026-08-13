# Pure Oasis

Marketing site for a landscape design and build company serving Hamilton,
Burlington and the west GTA.

Next.js 16 (App Router, React Server Components) and Tailwind v4. Motion drives
the entrance and scroll reveals, React's `<ViewTransition>` drives navigation
between routes. Archivo Variable is self hosted through `@fontsource-variable`.
Icons come from Phosphor.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
npm run photos        # regenerate the photography brief from the manifest
npm run photos:fetch  # fill empty photo slots with licensed stock stand-ins
```

## Before this goes live

Three things are placeholders, all flagged with `TODO(client)` in the source.

1. **Business details, claims and numbers.** `lib/content.ts` holds the
   business record, the coverage claims, the four headline statistics and the
   testimonials. They are written to read like a real firm in this market, but
   they are invented. Replace them, and drop any claim the business cannot
   stand behind. The three projects in `lib/projects.ts` and the three posts in
   `lib/posts.ts` are the same: plausible, not real.
2. **Photography.** 28 slots, listed with sizes and art direction in
   `public/images/README.md`. To fill every empty one with a licensed stock
   stand-in in a single pass:

   ```bash
   npm run photos:fetch
   ```

   Pulls from Openverse, filtered to CC0 and public domain images cleared for
   commercial use, crops each to the exact size the slot declares, and writes
   blur placeholders plus `public/images/CREDITS.md`. It never overwrites a
   file that already exists, so your own photography always wins: drop a real
   photo in under the same filename and it takes over. Pass `--force` to
   replace stand-ins, `--only=slotA,slotB` to redo specific ones.
3. **Where enquiries go.** `app/api/consult/route.ts` validates the consult
   form and logs it. Point it at an inbox or a CRM and add spam protection.

Also update `SITE_URL` in `lib/content.ts` if the domain is not `pureoasis.ca`.
Canonicals, the sitemap and every structured data block are built from it.

## Routes

23 pages, all statically generated except the form endpoint.

```
/                       home
/about                  the practice, values, team
/services               index, with published price ranges
/services/[slug]        5 service pages, each with its own FAQ
/projects               index
/projects/[slug]        3 case studies
/blog                   journal index
/blog/[slug]            3 posts
/areas/[slug]           6 service area pages
/contact                consult form
/sitemap.xml /robots.txt
```

Content lives in `lib/` as typed data (`services`, `projects`, `posts`,
`areas`, `content`). Pages compose section components from `components/site/`.
Adding a service, project, post or area means adding one object to an array;
the navigation, footer, sitemap and structured data all follow from it.

## SEO

- Per route title, description and canonical through `pageMetadata` in
  `lib/seo.ts`. Titles and descriptions are unique across all 23 pages and sized
  to survive a search result without truncation.
- Structured data built from the same data the page renders: `LandscapingBusiness`
  site wide, plus `BreadcrumbList`, `Service`, `FAQPage`, `BlogPosting`,
  `CreativeWork`, `ItemList` and `ContactPage` per route.
- `sitemap.ts` and `robots.ts` are generated from the content arrays, so a new
  entry cannot be left out of either.
- Area pages exist because the ground genuinely differs across the region and
  that changes the build. They are not one template with a place name swapped
  in, and they should not become that.

## How the page is put together

Anything that moves or holds state is an isolated client leaf: the header, the
scroll reveal wrapper, the theme toggle and the consult form. Everything else
renders on the server.

Navigation is client side through `next/link`, and each page wraps its content
in `<PageTransition>` so routes crossfade instead of cutting. The header, top
bar and footer sit outside the transition, so the chrome holds still while the
page beneath it changes.

### Design decisions worth keeping

- **One accent.** The verdigris green in `app/globals.css` is used on every
  interactive surface across the site. Adding a second accent breaks the system.
- **One radius.** `--radius-edge` is 2px and applies to cards, media, inputs
  and buttons alike.
- **One theme at a time.** Light and dark are both fully defined as token sets.
  The site follows the visitor's system preference and the header toggle
  overrides it. No section inverts against the rest of the page.
- **Motion is justified per use.** Each animation exists for hierarchy,
  sequence or feedback, and each is documented at its call site. Everything
  collapses under `prefers-reduced-motion`, enforced in CSS rather than in
  component logic so it holds even before hydration.
- **Photography is a first class slot.** `components/ui/photo.tsx` checks at
  render whether a manifest file exists and falls back to a reservation block
  of identical aspect ratio, labelled through container queries so a 96px
  thumbnail and a full bleed hero each show the right amount of detail. When a
  blur seed exists for a slot, the image fades up from a blur instead of
  popping in.
- **The phone is the conversion path.** On phones a call bar appears once the
  hero has scrolled away, carrying the number and the quote link. It stays out
  of the first screen, is inert to the keyboard while hidden, and never shows
  on the contact page or on desktop.

### Accessibility

Contrast was measured rather than eyeballed. In both themes body text runs at
or above 6:1 against its background and both button variants clear WCAG AA.
Form labels sit above their inputs, errors below, with `aria-invalid` and
`aria-describedby` wired up. Service FAQs are native `<details>` elements, so
they work without JavaScript. The first tab stop is a skip link.
