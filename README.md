# noxasoftwares.com

The Noxa company site — Direction C (Noxa as the parent of a family of products).
Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4. Every page is static.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (run before deploying)
```

## Pages — one site, four designs, all linked

| URL | Design | File |
| --- | --- | --- |
| `/` | C1 — Mission film | `src/app/page.tsx` — mission hero, the family, one signature, safety, how we build, newsroom, leadership + careers, contact |
| `/products` | C4 — Product worlds | `src/app/products/page.tsx` — a full-colour world per product, the lab, the shared promise |
| `/newsroom` | C3 — Newsroom grid | `src/app/newsroom/page.tsx` — featured story, family strip, filterable story grid, updates |
| `/about` | C2 — Founder's letter | `src/app/about/page.tsx` — the motto, the letter, the name story, mission, vision, values, careers |
| `/newsroom/<slug>` | — | `src/app/newsroom/[slug]/page.tsx` — one story |

The header and footer link all four; the pages also link to each other (product cards → Products, "Read his letter" → About, family strip → Products, and so on).

## Motion

Kept deliberately calm: each thing moves once, over short distances, on one easing curve.

- **Page openers** (`.rise`): the hero of each page settles in on load.
- **Scroll reveals** (`data-reveal` on an element): it fades up once as it comes into view. `data-reveal="1"`–`"3"` staggers it slightly. Handled by `src/components/Motion.tsx`.
- **Home constellation**: the N draws itself once; the two product stars' halos breathe slowly.
- **Hover**: cards with `.lift` rise 4px; arrows (`.arrow`) step forward.
- **Header**: turns translucent with a soft edge once you scroll.
- People whose device asks to **reduce motion** get no animation at all, and everything shows **without JavaScript** too.

All the motion styles live at the bottom of `src/app/globals.css`.

## Where to change things (no page code needed)

| What | File |
| --- | --- |
| **All links** — email, GitHub, portfolio, LinkedIn, Dashfixe URLs | `src/content/site.ts` → `links` |
| Company text, mission, vision, values, safety promises, "how we build" steps | `src/content/site.ts` |
| The founder's letter on About | `src/content/site.ts` → `founderLetter` |
| Founder name, bio, photo | `src/content/site.ts` → `founder` (put a photo in `public/images/` and set `photo: '/images/founder.jpg'`; until then the AO initials show) |
| Hero video | `src/content/site.ts` → `heroVideo` (put the file in `public/video/` and set `'/video/noxa-story.mp4'`; until then the constellation drawing shows) |
| Products (cards, colours, buttons, footer) | `src/content/products.ts` |
| A product's logo | put the files in `public/images/` and set `logo: { mark, wordmark }` on the product in `src/content/products.ts` — it then replaces the letter icon everywhere (cards, signature, newsroom, products, footer) |
| Privacy notice and terms (`/privacy`, `/terms`) | `src/content/legal.ts` — written for what the site does today (no cookies, no analytics, no forms). Update it if you add any of those, and set `controller` to the company's legal name and NIPC once Noxa is registered |
| Newsroom stories | `src/content/news.ts` — a story with `body` gets its own page; a story with `href` links straight out |

## Still to do

- [ ] Rewrite the founder's letter (`founderLetter` in `src/content/site.ts`) and the first story (`src/content/news.ts`) in your own voice
- [ ] Founder photo and a bio in your words
- [ ] Hero video (later)
- [ ] Noxa Save "Get notified" goes to email for now; swap for a real form when there is one
- [ ] Set up hello@ and careers@noxasoftwares.com so the contact buttons land somewhere

## Deploy to Vercel on noxasoftwares.com

1. Push this folder to the GitHub repo `NOXA-HQ/noxa-site`. Keep it **public**: Vercel's free
   Hobby plan won't deploy a *private* repo owned by an organisation (that needs Pro, ~$20/month).
   The site has no secrets in it, so public is fine.
2. On vercel.com: Add New → Project → import the repo. Framework: Next.js (detected). Deploy.
3. Project → Settings → Domains → add `noxasoftwares.com` and `www.noxasoftwares.com`.
4. In Namecheap → Domain List → noxasoftwares.com → Advanced DNS, add the records Vercel shows
   (usually an `A` record `@ → 76.76.21.21` and a `CNAME` `www → cname.vercel-dns.com`).
5. Wait for DNS (minutes to a few hours). Vercel adds HTTPS by itself.
