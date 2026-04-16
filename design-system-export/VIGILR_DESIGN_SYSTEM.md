# Vigilr Design System

> Drop this file into the root of the app repo as `CLAUDE.md` (or append it to an existing one).  
> It gives AI assistants working on this project the full visual language of the Vigilr brand.

---

## Overview

Vigilr's visual language is **Modern Minimal + Enterprise Professional**.  
Trustworthy, precise, and intelligence-driven. No playful elements. No decoration for decoration's sake.

The landing page (vigilr.io) is the reference implementation. Every UI decision in the app should feel like it belongs on the same product.

---

## Tech Stack (both landing + app)

| Layer | Choice |
|---|---|
| Framework | Next.js 16 App Router |
| Language | TypeScript 5.7 |
| Styling | Tailwind CSS v4 (`@import 'tailwindcss'`) |
| Components | shadcn/ui + Radix UI primitives |
| Icons | lucide-react |
| Dark mode | next-themes — class-based, default dark |
| Animations | tw-animate-css |
| Forms | React Hook Form + Zod |
| Charts | Recharts |

---

## Color System

All colors use **OKLch** (perceptually uniform). Never use raw hex — always reference CSS variables.

### Key design principle
- **One accent color** (teal). It draws the eye to the single most important thing on screen.
- Monochromatic base (slates + whites). Accent is never used decoratively.
- Red (`--destructive`) is reserved exclusively for destructive or error states.

### CSS Variables — Light Mode (`:root`)

```css
--background:           oklch(0.985 0.002 250)   /* off-white, cool tint */
--foreground:           oklch(0.15  0.015 250)   /* deep slate / near-black */
--card:                 oklch(1    0     0)       /* pure white surfaces */
--card-foreground:      oklch(0.15  0.015 250)
--primary:              oklch(0.15  0.015 250)   /* deep slate — filled buttons */
--primary-foreground:   oklch(0.985 0.002 250)
--secondary:            oklch(0.96  0.005 250)   /* light gray */
--muted:                oklch(0.94  0.005 250)   /* soft gray */
--muted-foreground:     oklch(0.40  0.015 250)   /* medium gray text */
--accent:               oklch(0.45  0.12  175)   /* BRAND — vibrant teal */
--accent-foreground:    oklch(0.98  0     0)     /* near-white on teal */
--destructive:          oklch(0.50  0.18  25)    /* red-orange, errors only */
--border:               oklch(0.88  0.005 250)
--input:                oklch(0.88  0.005 250)
--ring:                 oklch(0.45  0.12  175)   /* teal focus ring */
```

### CSS Variables — Dark Mode (`.dark`)

```css
--background:           oklch(0.12  0.015 250)   /* near-black, blue tint */
--foreground:           oklch(0.96  0.002 250)
--card:                 oklch(0.16  0.015 250)   /* dark slate surface */
--primary:              oklch(0.96  0.002 250)
--secondary:            oklch(0.20  0.015 250)
--muted:                oklch(0.22  0.015 250)
--muted-foreground:     oklch(0.65  0.01  250)
--accent:               oklch(0.65  0.14  175)   /* brighter teal in dark */
--accent-foreground:    oklch(0.12  0.015 250)
--destructive:          oklch(0.55  0.18  25)
--border:               oklch(0.25  0.015 250)
--ring:                 oklch(0.65  0.14  175)
```

### Chart Palette (5 colors)

| Token | Light | Dark | Hue |
|---|---|---|---|
| `--chart-1` | `oklch(0.45 0.12 175)` | `oklch(0.65 0.14 175)` | Teal |
| `--chart-2` | `oklch(0.55 0.10 220)` | `oklch(0.65 0.10 220)` | Blue |
| `--chart-3` | `oklch(0.45 0.08 280)` | `oklch(0.55 0.08 280)` | Purple |
| `--chart-4` | `oklch(0.60 0.12 80)`  | `oklch(0.70 0.12 80)`  | Yellow |
| `--chart-5` | `oklch(0.50 0.14 30)`  | `oklch(0.60 0.14 30)`  | Orange |

### Semantic Status Tokens (app-only)

```css
--success:  oklch(0.50 0.14 145)   /* green */
--warning:  oklch(0.60 0.16 80)    /* amber */
--info:     oklch(0.50 0.12 220)   /* blue */
```

---

## Typography

### Fonts
- **Body / UI**: Geist (sans-serif) — loaded via `next/font/local` or Geist npm package
- **Monospace / Code**: Geist Mono — for code blocks, CVE IDs, technical strings
- **Fallback**: Inter (Google Fonts) is acceptable if Geist is unavailable

### Size Scale

| Usage | Class | Size |
|---|---|---|
| Micro labels, badges | `text-xs` | 12px |
| Body, descriptions | `text-sm` | 14px |
| Default body | `text-base` | 16px |
| Large descriptions | `text-lg` | 18px |
| Card titles, section labels | `text-xl` | 20px |
| Section headings | `text-2xl–3xl` | 24–30px |
| Page headings | `text-4xl` | 36px |
| Hero / display | `text-5xl–7xl` | 48–72px |

### Weight
- `font-medium` (500): UI labels, nav items
- `font-semibold` (600): headings, card titles, CTAs
- `font-bold` (700): emphasis, key metrics

### Tracking / Leading
- Headlines: `tracking-tight`
- Uppercase labels: `tracking-wider`
- Descriptive text: `leading-relaxed`

---

## Spacing

Base unit: **4px** (Tailwind default). All spacing is a multiple of 4px.

### Common patterns

| Context | Class |
|---|---|
| Card internal padding | `p-6` |
| Section vertical padding | `py-20 lg:py-28` |
| Section horizontal padding | `px-6 lg:px-8` |
| Button (default) | `px-4 py-2` |
| Button (large) | `px-6 py-2.5` |
| Gap between items in a list | `gap-3` or `gap-4` |
| Gap between icon and label | `gap-2` |
| Max container width | `max-w-7xl mx-auto` |

---

## Border Radius

CSS variable: `--radius: 0.625rem` (10px)

| Token | Value | Use |
|---|---|---|
| `rounded-sm` / `--radius-sm` | 6px | Small badges, close buttons |
| `rounded-md` / `--radius-md` | 8px | Inputs, small cards |
| `rounded-lg` / `--radius-lg` | 10px | Buttons, dialogs, main cards |
| `rounded-xl` / `--radius-xl` | 14px | Feature cards, large surfaces |
| `rounded-full` | 9999px | Pills, avatars, circular icons |

**Rule**: Never use `rounded-2xl` or larger on interactive elements unless it's a full pill/badge.

---

## Shadows

Used sparingly — only for hierarchy, not decoration.

| Class | Use |
|---|---|
| `shadow-sm` | Cards, table rows |
| `shadow-lg` | Hover state elevation |
| `shadow-xl` | Modals, major overlays |
| `shadow-lg shadow-accent/5` | Teal-tinted shadow on hover (feature cards) |
| `shadow-lg shadow-accent/10` | Highlighted/featured card |

---

## Component Patterns

### Buttons

Use the shadcn/ui `Button` component. Variants:

| Variant | When to use |
|---|---|
| `default` | Primary CTA (dark filled) |
| `outline` | Secondary action |
| `ghost` | Tertiary / icon-only actions |
| `destructive` | Delete, revoke, remove only |

**Accent-colored CTAs** (most prominent actions in the app):
```tsx
<Button className="bg-accent text-accent-foreground hover:bg-accent/90">
  Get Started
</Button>
```

Never use `variant="link"` as a navigation element inside the app shell — use `ghost` instead.

### Cards

```tsx
// Standard card
<Card className="rounded-xl border-border bg-card p-6 shadow-sm">
  ...
</Card>

// Highlighted/featured card (e.g. current plan, selected vendor)
<Card className="rounded-xl border-accent bg-accent/5 shadow-lg shadow-accent/10">
  ...
</Card>

// Hover-interactive card
<Card className="rounded-xl border-border transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
  ...
</Card>
```

### Badges / Status Pills

```tsx
// Standard badge
<Badge variant="outline">Active</Badge>

// Accent pill (for tags, categories)
<span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs text-accent">
  CVE-2024-1234
</span>

// Status indicators
<span className="rounded-full bg-success/20 px-2.5 py-0.5 text-xs font-medium text-success">
  Compliant
</span>
<span className="rounded-full bg-destructive/20 px-2.5 py-0.5 text-xs font-medium text-destructive">
  Critical
</span>
<span className="rounded-full bg-warning/20 px-2.5 py-0.5 text-xs font-medium text-warning">
  Review
</span>
```

### Icon Containers

```tsx
// Feature icon (teal bg)
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
  <ShieldCheck className="h-5 w-5" />
</div>

// On hover, reveal accent fill:
<div className="group flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
  <ShieldCheck className="h-5 w-5" />
</div>
```

### Navbar / App Header

```tsx
// Fixed header pattern
<header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
  <div className="flex max-w-7xl mx-auto items-center justify-between px-6 lg:px-8 py-3">
    {/* Logo: h-9 w-9 rounded-lg bg-accent with shield icon */}
    {/* Nav: hidden lg:flex gap-8 */}
    {/* CTA: bg-accent text-accent-foreground */}
  </div>
</header>
```

### Sidebar (App Shell)

- Active item: `bg-sidebar-primary text-sidebar-primary-foreground` (teal in dark mode)
- Hover item: `bg-sidebar-accent text-sidebar-accent-foreground`
- Border: `border-sidebar-border`
- Background: `bg-sidebar`

### Data Tables

```tsx
// Row hover
<tr className="border-b border-border transition-colors hover:bg-muted/40">

// Status cell
<td>
  <span className="rounded-full bg-success/20 px-2.5 py-0.5 text-xs font-medium text-success">
    Low Risk
  </span>
</td>

// Severity badge mapping:
// Critical → destructive
// High     → warning
// Medium   → info
// Low      → success
// None     → muted
```

### Forms / Inputs

- All inputs use `h-9 rounded-md border border-input bg-transparent px-3`
- Focus ring: `ring-2 ring-ring/50`
- Error state: `aria-invalid:border-destructive aria-invalid:ring-destructive/20`
- Labels: `text-sm font-medium` above inputs, `gap-2` between label and input

### Comparison / Feature Matrix

Status icon pattern (used in vendor comparison tables):

```tsx
// ✓ Supported
<div className="h-7 w-7 rounded-full bg-accent/20 text-accent flex items-center justify-center">
  <Check className="h-4 w-4" />
</div>

// ~ Partial
<div className="h-7 w-7 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
  <Minus className="h-4 w-4" />
</div>

// ✗ Not supported
<div className="h-7 w-7 rounded-full bg-destructive/20 text-destructive flex items-center justify-center">
  <X className="h-4 w-4" />
</div>
```

---

## Animation & Transitions

### Standard transitions
- All interactive elements: `transition-all duration-200`
- Color-only changes: `transition-colors duration-200`
- Hover elevation: `transition-[box-shadow,border-color] duration-200`

### Scroll reveal
Use Intersection Observer to add a fade-in class when elements enter the viewport:
```tsx
// Element starts at: opacity-0 translate-y-4
// Enters viewport:   opacity-100 translate-y-0 transition-all duration-700
```

### Page-level animations (dialogs, sheets, popovers)
Use the `data-[state=open]` / `data-[state=closed]` animate-in/out pattern from tw-animate-css.
Shadcn/ui components handle this automatically — don't override without reason.

---

## Dark Mode Rules

- Default theme: **dark** (`defaultTheme="dark"` in ThemeProvider)
- Never hardcode light-only colors. Always use CSS variables.
- Never use `bg-white` or `text-black` — use `bg-background` / `text-foreground`.
- Semi-transparent overlays in dark: `bg-black/50` for modals, `bg-background/80` for sticky headers.
- `dark:` Tailwind prefix is available via `@custom-variant dark (&:is(.dark *))`.

---

## Aesthetic Rules (what NOT to do)

- **No gradients on UI chrome** — gradients only on hero text (`bg-clip-text`) or SVG decorations.
- **No rounded-2xl or larger** on cards or buttons — 10px max for rectangles.
- **No drop shadows on text** — only on elevated surfaces.
- **No color for decoration** — accent is functional (CTAs, active states, icons), not decorative.
- **No custom font sizes** — stick to the Tailwind scale.
- **No inline `style` for colors** — always CSS variables or Tailwind classes.
- **Avoid `border-2`** — use `border` (1px) everywhere except explicitly active/focused states.
- **No emoji in UI** — icons only (lucide-react). Emoji are used only in marketing copy.

---

## Naming Conventions

| Concept | Class pattern |
|---|---|
| Brand action / CTA | `bg-accent text-accent-foreground` |
| Quiet / secondary action | `bg-secondary text-secondary-foreground` |
| Destructive action | `bg-destructive text-destructive-foreground` |
| Disabled state | `opacity-50 pointer-events-none` |
| Active nav item | `font-semibold text-foreground` |
| Inactive nav item | `text-muted-foreground hover:text-foreground` |
| Section label / eyebrow | `text-xs font-semibold tracking-wider uppercase text-muted-foreground` |
| Card title | `text-lg font-semibold` or `text-xl font-semibold` |
| Metric / stat number | `text-3xl font-semibold` |

---

## File Locations (TPRiskIntel repo)

| File | Purpose |
|---|---|
| `app/globals.css` | CSS variables — edit this to apply theme |
| `components/ui/` | shadcn/ui primitive components — do not modify directly |
| `components/common/` | Shared app components — apply design system here |
| `components/theme-provider.tsx` | next-themes provider |

---

## Quick Reference: Most Common Patterns

```tsx
// Page section wrapper
<section className="py-20 lg:py-28 px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    ...
  </div>
</section>

// Section label (eyebrow text)
<p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
  Vendor Intelligence
</p>

// Section heading
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
  Real-time risk scoring
</h2>

// Descriptive paragraph below heading
<p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-2xl">
  ...
</p>

// "Live" / "Now active" indicator badge
<span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-4 py-1.5 text-xs text-muted-foreground">
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
  </span>
  Monitoring active
</span>

// Risk score display (colour-coded number)
<span className={cn(
  "text-2xl font-bold",
  score >= 80 && "text-destructive",
  score >= 50 && score < 80 && "text-warning",
  score < 50 && "text-success",
)}>
  {score}
</span>
```
