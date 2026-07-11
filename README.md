# Summit Roofing & Exterior — Marketing Website

Premium lead-generation website for a roofing & exterior remodeling company.
Built with **Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion**.

## Quick Start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all 22 routes pre-rendered static)
npm start        # serve the production build
```

## Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack, fully static output) |
| Styling | Tailwind CSS v4 (`@theme` tokens in `globals.css`) |
| Animation | Framer Motion (scroll reveals, carousel, accordions) + CSS keyframes |
| Forms | React Hook Form + Zod validation |
| Carousel | Embla (testimonials, autoplay) |
| Icons | Lucide |
| Fonts | Poppins (headings) + Inter (body) via `next/font` — self-hosted, zero CLS |

## Structure

```
src/
  lib/
    site.ts        ← ALL business info: name, phone, email, address, hours, stats, cities
    services.ts    ← the 7 services (copy, features, FAQs, images) → drives /services/[slug]
    content.ts     ← testimonials, gallery items, general FAQs, process steps, why-us
  components/      ← logo, header, footer, hero/sections, forms, carousel,
                     before/after slider, gallery+lightbox, sticky CTAs, exit-intent popup
  app/
    page.tsx                    Home
    about/ gallery/ reviews/ financing/ service-areas/ faq/ contact/
    services/[slug]/            7 service pages from one template (SSG)
    privacy-policy/ terms/ not-found.tsx
    sitemap.ts robots.ts icon.svg
public/logos/      ← icon + horizontal logo SVGs in color / white / black
```

**To customize for a real business, edit `src/lib/site.ts` first** — phone,
address, stats, and service areas flow everywhere (header, footer, schema,
metadata) automatically.

## Lead Capture

`LeadForm` (`src/components/lead-form.tsx`) currently simulates submission.
Wire it to a real endpoint in `onSubmit` — e.g. a Next.js route handler that
posts to Resend/SendGrid, HubSpot, or a CRM webhook. Conversion surfaces:
header CTA, hero (2 buttons), services CTA card, service-page sticky sidebar
form, contact page, footer band, desktop floating button, mobile call/estimate
bar, and a once-per-session exit-intent popup.

## SEO

- Per-page titles/descriptions/canonicals + OG/Twitter cards (`metadataBase` in layout)
- JSON-LD: `RoofingContractor` (sitewide), `Service` + `FAQPage` + `BreadcrumbList`
  (service pages), `AggregateRating` + `Review` (reviews), `FAQPage` (FAQ)
- `sitemap.xml`, `robots.txt`, semantic heading hierarchy, descriptive alt text

## Images

Royalty-free Unsplash photography via `next/image` (AVIF/WebP, lazy-loaded,
remote pattern allowed in `next.config.ts`). All image IDs verified live.
Replace with real project photography before launch — drop files in `public/`
and swap URLs in `src/lib/services.ts` and `src/lib/content.ts`.

## Accessibility

Skip link, focus-visible rings, aria labels on all icon buttons/carousels/
sliders, keyboard-operable before/after slider and lightbox,
`prefers-reduced-motion` respected by every animation.

## Deployment

**Vercel (recommended):** push to GitHub → import repo at vercel.com → deploy.
Zero config needed.

**Any Node host:** `npm run build && npm start` behind a reverse proxy.

Before launch:
1. Set the real domain in `src/lib/site.ts` (`url`) — feeds canonical URLs, sitemap, schema.
2. Wire `LeadForm` to your CRM/email (see above).
3. Replace Unsplash imagery with real project photos.
4. Verify the Google Maps embed address on /contact.
