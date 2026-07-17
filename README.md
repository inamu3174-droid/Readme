# Atelier Noir

An award-style animated marketing site built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis, and Swiper.

## Structure

- `app/page.tsx` — composes the full page: Navigation → Hero → Portfolio → Featured Collections → Studio → Footer.
- `components/Hero.tsx` — full-screen hero, adapted from **Skiper30**'s parallax column gallery. Editorial Unsplash photography replaces the placeholders, headline/subtitle/CTAs are overlaid, and the type fades out on scroll via a `useScroll`-driven opacity transform.
- `components/Portfolio.tsx` — coverflow carousel, adapted from **Skiper49** (Swiper `EffectCoverflow`). Cards are glass panels with cursor-follow glow, 3D mouse-parallax tilt, and project name / category / year / "View Project".
- `components/FeaturedCollections.tsx` — expanding panel row, adapted from **Skiper53**'s hover-expand pattern. Each panel zooms + un-blurs its background image and reveals title, description, and "Read More" on activation.
- `components/Navigation.tsx` — floating glass nav bar that hides on scroll-down and reappears on scroll-up.
- `components/SmoothScroll.tsx` — global Lenis instance wrapping the whole app.
- `components/Studio.tsx` — GSAP + ScrollTrigger word-by-word headline reveal and staggered stats.
- `components/Footer.tsx` — contact CTA.
- `data/portfolio.ts`, `data/collections.ts` — swap in your own project data/images here.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Notes

- Photography is sourced from Unsplash's CDN via `next/image`-compatible remote patterns already configured in `next.config.mjs`. Swap the URLs in `data/portfolio.ts`, `data/collections.ts`, and `components/Hero.tsx` for your own licensed imagery before shipping.
- Reduced-motion users automatically get near-instant transitions (see `@media (prefers-reduced-motion: reduce)` in `app/globals.css`).
- Design tokens (colors, type) live in `tailwind.config.ts` — ink/ivory/clay palette with Fraunces (display) + Inter (body).
