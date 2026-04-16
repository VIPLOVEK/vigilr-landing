# Vigilr — Landing Page

Marketing landing page for [Vigilr](https://vigilr.io), an AI-native third-party risk management (TPRM) platform. Built with Next.js 16, React 19, Tailwind CSS v4, and shadcn/ui.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **UI:** React 19, shadcn/ui (new-york), Radix UI primitives
- **Styling:** Tailwind CSS v4, OKLCH colour space, `tw-animate-css`
- **Forms:** react-hook-form + zod, Formspree
- **Theming:** next-themes (dark mode default, 12 enterprise colour themes)
- **Analytics:** Vercel Analytics (consent-gated)
- **Icons:** lucide-react
- **OG Image:** Next.js `ImageResponse` (edge runtime)

## Page Sections

| Section | Description |
|---|---|
| Navbar | Sticky nav with scroll-spy active states, mobile menu, demo modal trigger |
| Hero | Inline email capture (waitlist), animated stat counter |
| Social Proof | Scrolling marquee — Gartner Cool Vendor, SOC 2, ISO 27001, G2 rating |
| Testimonials | Outcome metrics row + 3 customer quote cards |
| Problem | 4 pain-point cards illustrating legacy TPRM failures |
| Features | 6 capability cards + 50+ intelligence sources + integration stack strip |
| Vendor Workflow | Interactive animated circular diagram — 6-step vendor lifecycle |
| Comparison | Feature table: Vigilr vs Annual Questionnaires vs Legacy GRC |
| Pricing | 3 tiers: Starter ($499), Professional ($1,499), Enterprise (custom) |
| MCP API | MCP server integration section with code example |
| FAQ | 10 questions across Data & Privacy, Security, Integrations, Pricing |
| CTA | Final call-to-action with demo modal |
| Footer | Links, social, compliance badges |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

### Formspree (contact forms)

Two Formspree endpoints are used. Create free forms at [formspree.io](https://formspree.io) and set the IDs:

| File | Constant | Purpose |
|---|---|---|
| `components/demo-modal.tsx` | `FORMSPREE_ENDPOINT` | Demo request / trial sign-up |
| `components/hero.tsx` | `WAITLIST_ENDPOINT` | Hero email waitlist |

Replace `XXXXXXXX` / `YYYYYYYY` in each file with your actual Formspree form IDs.

### Domain

Update `https://vigilr.io` in the following files if your domain differs:

- `app/layout.tsx` — `metadataBase`
- `app/sitemap.ts`
- `app/robots.ts`

### Analytics

Vercel Analytics is consent-gated via the cookie consent banner. It loads only after a visitor accepts. No changes needed for local development.

## OG Image

The Open Graph image is generated server-side at `/opengraph-image` using the Next.js `ImageResponse` API (edge runtime). It automatically renders with the correct dimensions (1200×630) and is served to all social link-preview scrapers.

To preview it locally: [http://localhost:3000/opengraph-image](http://localhost:3000/opengraph-image)

## Deployment

The project is optimised for [Vercel](https://vercel.com). Push to `main` and connect the repo in the Vercel dashboard — no additional configuration required.

```bash
npm run build   # production build
npm run start   # serve production build locally
```

## Project Structure

```
app/
  layout.tsx           # Root layout, metadata, JSON-LD, global providers
  page.tsx             # Page composition — imports all sections
  globals.css          # Tailwind v4 config, CSS variables, animations
  opengraph-image.tsx  # Dynamic OG image (edge)
  sitemap.ts           # /sitemap.xml
  robots.ts            # /robots.txt
components/
  navbar.tsx           # Sticky nav with scroll spy
  hero.tsx             # Hero + inline email capture
  social-proof.tsx     # Marquee strip
  testimonials.tsx     # Metrics row + quote cards
  problem.tsx          # Pain-point cards
  features.tsx         # Capability cards + integration logos
  vendor-workflow.tsx  # Animated circular workflow diagram
  comparison.tsx       # Feature comparison table
  pricing.tsx          # Pricing tiers
  mcp-api.tsx          # MCP server section
  faq.tsx              # Accordion FAQ
  cta.tsx              # Final CTA
  footer.tsx           # Footer
  demo-modal.tsx       # Global demo request modal (Formspree)
  cookie-consent.tsx   # GDPR cookie consent banner
  analytics-provider.tsx # Consent-gated Vercel Analytics
  theme-picker.tsx     # Enterprise theme switcher (12 themes)
  ui/                  # shadcn/ui component library
hooks/
  use-mobile.ts        # Mobile viewport detection
  use-toast.ts         # Toast state management
lib/
  utils.ts             # cn() Tailwind class merger
```
