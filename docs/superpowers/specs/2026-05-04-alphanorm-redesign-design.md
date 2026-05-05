# AlphaNorm Enviro Solutions — Bilingual Redesign

**Status:** Design approved 2026-05-04. Ready for implementation planning.
**Owner:** Abdulaziz Al-Naimi (CTO)
**Repo:** `alphanorm-clone` (Next.js App Router)

## 1. Goal

Replace the current Squarespace site at alphanorm.qa with a self-hosted Next.js site that:

- Looks more polished and modern than the source.
- Mirrors the same information architecture and reuses the same imagery.
- Supports English (default) and Arabic with full RTL.
- Lets visitors send inquiries through a working contact form that emails `contact@alphanorm.qa`.

This is a full redesign, not a 1:1 port.

## 2. Stack & framework constraints

- **Next.js App Router** (already scaffolded). The repo's `AGENTS.md` flags this is *not* default Next.js — implementation must consult `node_modules/next/dist/docs/01-app/` before writing route handlers, server actions, layouts, and metadata. Heed any deprecation notices in those docs.
- **Tailwind v4** (already wired via `globals.css` `@import "tailwindcss"` + `@theme inline`).
- **Fonts:** `next/font/google` for Fraunces (variable serif), Geist Sans (already present), Noto Naskh Arabic (Arabic serif), Noto Sans Arabic (Arabic body).
- **Email:** `resend` SDK.
- **i18n:** `next-intl` (App Router-native, server-component-friendly).
- **Validation:** `zod`.
- **Tests:** Vitest + React Testing Library; Playwright for one e2e smoke.

No other runtime deps unless an implementation step justifies one.

## 3. Routes & file layout

All routes live under a `[locale]` segment so URLs are `/<locale>/...`. The middleware redirects `/` → `/en` (and detects `/ar` from `Accept-Language` if present, falling back to `en`).

```
src/
  app/
    [locale]/
      layout.tsx                  Root locale layout (sets <html lang dir>, fonts, Header, Footer)
      page.tsx                    /
      about/page.tsx              /about
      services/
        page.tsx                  /services index
        [slug]/page.tsx           /services/<slug>  (5 pages: dynamic from src/data/services.ts)
      insights/
        page.tsx                  /insights index
        [slug]/page.tsx           /insights/<slug>  (3 articles: dynamic from src/data/insights.ts)
      contact/
        page.tsx                  /contact
        actions.ts                "use server" submitContact()
    globals.css                   Tailwind import + tokens + utilities
    favicon.ico                   The chrome logo (overrides public/favicon.ico per App Router precedence)
  components/
    Header.tsx                    Sticky nav, logo, links, language toggle, mobile menu
    Footer.tsx                    Logo, nav, contact details
    Container.tsx                 max-w-7xl wrapper (single source of truth for page width/padding)
    Hero.tsx                      Reusable hero block w/ photo + overlay + headline + CTAs
    SectionTitle.tsx              Existing — wired into pages
    Reveal.tsx                    Existing — wired into pages, honors prefers-reduced-motion
    Stat.tsx                      Existing — wired into stats band
    ServiceCard.tsx               Photo + title + summary + link
    InsightCard.tsx               Thumbnail + meta + title + dek
    ContactForm.tsx               "use client" — useActionState, inline errors, success/error states
    LangToggle.tsx                "use client" — pill with two flags + EN/AR label
    PartnersStrip.tsx             Marquee of partner logos (placeholder bars for v1)
    IndustryCard.tsx              Photo + label overlay (used on About)
    TeamCard.tsx                  Circular photo + name + role + bio
  data/
    services.ts                   5 services: slug, title, dek, body, key activities (en + ar)
    insights.ts                   3 articles: slug, title, dek, date, body sections (en + ar)
    industries.ts                 4 industries (en + ar)
    team.ts                       3 team members (en + ar)
    reasons.ts                    6 "Why AlphaNorm" reasons (en + ar)
    stats.ts                      4 stats (en + ar)
    siteConfig.ts                 Address, phone, email, hours, social, license info (en + ar)
  i18n/
    request.ts                    next-intl getRequestConfig
    routing.ts                    next-intl defineRouting (locales, defaultLocale, localePrefix)
    messages/
      en.json                     UI strings (nav, form labels, CTAs, status messages)
      ar.json                     Arabic translations (Modern Standard Arabic)
  lib/
    contact-schema.ts             Zod schema for the form
    rate-limit.ts                 In-memory IP rate limit (5 / 10 min)
middleware.ts                     next-intl middleware (locale detection + redirect)
next.config.ts                    next-intl plugin, image remotePatterns
.env.example                      Documents required env vars (no secrets)
```

**File-size discipline:** any page file >150 lines extracts sections into local `_components/` colocated with the route. Large data files (services, insights) live in `src/data/`, not inline.

## 4. Visual system

### Palette (Graphite — chosen 2026-05-04)

```
--ink         #1c2330   primary text, dark sections
--cobalt      #3a4a63   accent (links, primary buttons, eyebrow text)
--steel       #5b6573   secondary text, captions
--mist        #d6dae0   borders, dividers, hairlines
--paper       #f7f8f9   surface backgrounds (where bg image is occluded)
--white       #ffffff   default canvas
```

Tailwind tokens exposed via `@theme inline` in `globals.css`. Existing `--brand*` tokens (emerald + yellow) **removed cleanly** — Header and Footer updated in the same pass; no aliases left behind.

### Background

`public/background.png` (1.5MB silver gradient with subtle curves and dot motif) applied site-wide:

```css
body {
  background: url('/background.png') center / cover no-repeat fixed;
}
```

The background stays fixed as the user scrolls. Solid sections (`bg-ink` stats band, cobalt CTA, footer) layer on top. Translucent cards (`bg-white/78 backdrop-blur-md`) let the silver bleed through where appropriate.

**Performance note:** at implementation, also export a `.webp` version (~150-300KB target) and serve it via a `<picture>` element on the body with PNG fallback, OR lazy-attach via JS. PNG ships untouched for v1 if optimization is deferred.

### Typography

| Role | English | Arabic |
|---|---|---|
| Display headings | Fraunces (variable serif), 400-500 | Noto Naskh Arabic, 400-600 |
| Body | Geist Sans, 400-500 | Noto Sans Arabic, 400-500 |
| Mono / metadata | Geist Mono | Geist Mono (Latin) |

All loaded via `next/font/google` so no runtime FOUT. Conditionally bound to `<html>` based on locale:

```tsx
<html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}
  className={locale === 'ar' ? `${notoNaskh.variable} ${notoSans.variable}` : `${fraunces.variable} ${geistSans.variable}`}>
```

**Type scale:** `text-5xl/6xl` hero, `text-3xl/4xl` section titles, `text-lg` body, `text-sm` UI, `text-xs` metadata. Tight tracking on display sizes (`tracking-tight`).

### Spacing & rhythm

- Single `<Container>` wrapper at `max-w-7xl px-4 sm:px-6 lg:px-8` — never duplicate this in pages.
- Sections: `py-24 md:py-32` (more generous than the original `py-20`).
- Long-form text blocks at `max-w-prose` for readability.
- Hairline dividers (`border-mist`) between content sections instead of background-color blocks where suitable.

### Photography treatment

- Photos rendered via `next/image` with explicit `width`/`height` to prevent CLS.
- Subtle desaturation/cool-tint via a `.photo-tint` utility (`filter: saturate(0.9) hue-rotate(-3deg)`) applied on every `<img>` for cohesion.

### Motion

- `Reveal` component: IntersectionObserver-based fade + slide-up. Honor `prefers-reduced-motion` (skip transition entirely).
- `Stat`: count-up animation on viewport entry. Honor `prefers-reduced-motion` (set final value immediately).
- `.animate-marquee` for partners strip.
- Drop the existing `.animate-blob` and `.btn-shine` utilities — don't fit Calm Environmental.

### Accessibility

- WCAG AA: ink on paper 15.7:1, cobalt on white 8.4:1, steel on white 5.7:1 — all pass.
- All interactive elements: `:focus-visible` ring (`ring-2 ring-cobalt ring-offset-2`).
- Form inputs: associated `<label>`, `aria-describedby` for errors, `aria-invalid` on invalid fields.
- All photos: meaningful `alt` text in current locale (decorative photos use `alt=""`).
- Locale toggle: `aria-pressed` indicates active locale; `aria-label` says "Switch to <other language>".

## 5. Page-by-page layout

### `/` Home

1. **Hero** — full-bleed photo (`public/image1.webp` — industrial night), gradient overlay (180deg, transparent → ink/55%), eyebrow pill `Licensed NORM Consultancy · Qatar`, H1 `Radiation expertise, rooted in experience.`, lede + 2 CTAs (`Learn more` → `/about`, `Our services` → `/services`).
2. **Intro** — 2-col: photo (`public/images/home/expertise.jpg`) + intro paragraphs + QA card "<10% deviation on calibrated devices".
3. **Stats strip** — `bg-ink` band, 4 animated `Stat`s: `30+ Years experience`, `<10% QA deviation`, `5 Service domains`, `IAEA-aligned`.
4. **Why AlphaNorm** — 6 reason cards (3×2 grid) over tinted background photo (`public/images/home/why.jpg` with white-mist 60-85% gradient overlay).
5. **Services teaser** — 5 cards (2-col grid; 5th spans full width on desktop). Each: photo + title + "Read more →" link.
6. **Partners strip** — `PartnersStrip` marquee with 6 placeholder bars (logos can be swapped later).
7. **CTA** — cobalt band, headline + Contact button.

### `/about`

1. **Page header** — eyebrow pill `About AlphaNorm`, H1, lede.
2. **Mission** — overlay card on `public/mission.webp`, text aligned left over a left-to-right gradient.
3. **Vision** — overlay card on `public/vision.webp`, text aligned right over a right-to-left gradient. (Mirrors Mission section visually.)
4. **Industries we serve** — 4 cards (`oil-gas.webp`, `waste.webp`, `authorities.webp`, `regulatory.webp`) with darkened photo + label overlay.
5. **Team** — 3 leadership cards. Each: **140px circular photo** (border `3px solid white`, soft shadow), name (Fraunces 18px), role (cobalt uppercase metadata), bio (steel 12px).
   - Abdulaziz Al-Naimi — Chief Technology Officer
   - Dr. David Bradley — Board · Scientific Advisor
   - Dr. Huda Al-Sulaiti — Board · Strategic Advisor
6. **CTA** — cobalt band.

### `/services` (index)

1. **Page header** — eyebrow `Services`, H1, lede.
2. **5 service cards** — 2-col grid; 5th (`Radiation Safety Planning`) spans full width on desktop. Each card: photo (height 160px) + title + dek + `Read more →` link.
   - **Image positioning:** Radiation Safety Planning card uses `object-position: 50% 25%` so the crop is shifted ~25% from the top, not centered.
3. **CTA** — cobalt band.

### `/services/[slug]`

5 detail pages, generated from `src/data/services.ts`:

1. **Hero** — full-width photo with gradient overlay, breadcrumb (`Services › <title>`), H1, dek.
2. **Overview** — 2 paragraphs at `max-w-prose`.
3. **Key activities** — bulleted list (5-7 items).
4. **Methodology** — 2 paragraphs on IAEA alignment, instrumentation, QA.
5. **CTA** — cobalt band.

**No "Other services" cross-link section** (removed during design review).

Service inventory:

| Slug | Title | Photo |
|---|---|---|
| `norm-measurement` | NORM Measurement & Evaluation | `public/images/services/norm-measurement.jpg` |
| `radiological-assessment` | Radiological & Environmental Assessment | `public/image4.jpg` (snowy mountain w/ wood/stone house — matches live site exactly) |
| `decontamination` | Decontamination Consulting | `public/image2.jpg` (workers in red hazmat suits) |
| `radiation-impact` | Radiation Impact Analysis | `public/images/services/radiation-impact.jpg` |
| `radiation-safety` | Radiation Safety Planning | `public/images/services/radiation-safety.jpg` |

### `/insights` (index)

1. **Page header** — eyebrow `Insights`, H1, lede.
2. **Article list** — chronological, newest first. Each row: 200px-wide thumbnail + meta (`YYYY · Mon DD · N min read`) + title + dek.

### `/insights/[slug]`

3 article pages, generated from `src/data/insights.ts`:

1. **Article header** — meta line + H1 + dek.
2. **Hero photo** — full-width, 300px tall.
3. **Long-form body** at `max-w-prose`: paragraphs, H3 subheads, optional blockquote.

**No "More insights" sibling section** (removed during design review). Article ends at the body; footer follows.

Article inventory:

| Slug | Title (en) | Date |
|---|---|---|
| `norm-qatar-energy` | What NORM means for Qatar's energy sector | 2026-04-18 |
| `qa-radiation-surveys` | QA in radiation surveys: why <10% deviation matters | 2026-03-02 |
| `iaea-to-field-protocol` | From IAEA standard to field protocol | 2026-01-21 |

### `/contact`

1. **Hero** — 200px tall photo (`public/oilrig3.webp` — offshore rig at sunset) with dark gradient overlay; pill `Contact` + H1 `Tell us about your project.`.
2. **2-col layout:**
   - Left: `ContactForm` inside a translucent card.
   - Right: contact details card (address, phone, email, hours) + a small license card ("Licensed by MECC & Ministry of Commerce, Qatar").

**Contact details:**

```
Address:  20402, Doha, Qatar
Phone:    +974 7777 8967  (tel:0097477778967)
Email:    contact@alphanorm.qa  (mailto:contact@alphanorm.qa)
Hours:    Sun – Thu, 09:00 – 17:00 AST
```

## 6. Header, Footer, Logo

### Logo

`public/logo.png` — chrome/silver circular badge with "ALPHANORM" wordmark + Arabic "الفا نورم". Used as-is in both header and footer (no separate text wordmark next to it). **Logo is rendered via `next/image` in both places** with explicit width/height.

- Header: ~46px tall.
- Footer: ~56px tall.
- Favicon: same image, copied to `src/app/favicon.ico` (App Router precedence wins over `public/favicon.ico`). At implementation, generate a real multi-resolution `.ico` (16/32/48/180) so the tab icon doesn't ship the full 951KB PNG.

### Header

- Sticky, transparent at top, `bg-white/85 backdrop-blur-md` after 8px scroll, shadow + mist border.
- Layout: logo (left) | nav links + language toggle + "Get a quote" CTA (right).
- Nav links: Home, About, Services, Insights, Contact. Active link gets `text-cobalt bg-cobalt/5`.
- Mobile: hamburger toggles a panel below the bar with stacked links + CTA.

### Footer

- `bg-ink text-slate-400`, 4-col grid (logo+blurb spans 2): logo + tagline | Navigate | Contact.
- Bottom strip: copyright + license note.
- All emails throughout reference `contact@alphanorm.qa`. **The owner's personal email must not appear anywhere in source, copy, or env defaults.**

## 7. i18n (English + Arabic, RTL)

### Library: `next-intl`

- Locales: `en` (default), `ar`.
- URL structure: `/en/...` and `/ar/...`. `/` redirects to detected locale (default `en`).
- `localePrefix: 'always'` for clarity and SEO. The toggle preserves the current path when switching (`/services/decontamination` ↔ `/ar/services/decontamination`).

### RTL handling

When `locale === 'ar'`:

- `<html dir="rtl" lang="ar">`.
- All Tailwind directional utilities use **logical properties**: `ms-*` / `me-*` / `ps-*` / `pe-*` / `start-*` / `end-*` — not `ml-*` / `mr-*`. These mirror automatically based on `dir`.
- Header nav: links flow right-to-left automatically; logo stays at the start of the bar.
- Hero CTAs: button order mirrors.
- Footer columns: mirror.
- Photo/text 2-column layouts: image side flips automatically via logical layout.
- Icons that imply direction (e.g., the `→` in "Read more") flip to `←` in Arabic. Use `<svg>` with conditional rotation OR Unicode `←` directly in Arabic strings.

### Language toggle (Variant B)

`LangToggle.tsx` — `"use client"`. A pill containing:

- Qatar flag (24×16 viewBox — left half maroon `#8d1b3d`, right half white, with serrated edge between)
- UK flag (24×16 viewBox — same dimensions, blue background, white + red diagonal cross + horizontal/vertical cross)
- Label `EN` (or `AR` when in Arabic)

Both flags are rendered as inline SVG with the same 24×16 viewBox so they share identical 22×14px display dimensions. Active language flag is full-color; inactive is `opacity: .35; filter: grayscale(.6)`.

The button is a `<Link>` to the same path under the other locale (resolved via `next-intl`'s `useRouter` / `usePathname`). `aria-pressed` indicates current; `aria-label` says "Switch to العربية" (or "Switch to English").

### Translation source — Option A (I produce Arabic copy)

Implementation step: I translate all English copy (services, insights, about page, UI strings, form labels, error messages) into grammatically correct Modern Standard Arabic (MSA). All translations checked into `src/i18n/messages/ar.json` and `src/data/*.ts` alongside their English counterparts.

**Reviewer gate:** before launch, the user (native Qatari speaker) reviews terminology choices for technical NORM/IAEA terms. Listed as a manual QA item (Section 9) — not a blocker for build, but is a blocker for launch.

### Per-string structure

Static UI strings (nav labels, form labels, CTAs, status messages) live in `src/i18n/messages/{en,ar}.json`. Long-form content (page bodies, service descriptions, articles) lives as bilingual objects in `src/data/*.ts`:

```ts
type Service = {
  slug: string;
  title: { en: string; ar: string };
  dek: { en: string; ar: string };
  body: { en: string[]; ar: string[] };  // paragraph arrays
  activities: { en: string[]; ar: string[] };
  photo: string;
};
```

This keeps bilingual content together for review and avoids loose JSON sprawl.

## 8. Contact form & Resend integration

### Fields (all in both locales)

| Field | Type | Required | Validation |
|---|---|---|---|
| `name` | text | yes | 2–80 chars |
| `email` | email | yes | RFC 5322 |
| `company` | text | no | ≤ 80 chars |
| `subject` | select | yes | one of: `general`, `norm`, `decontamination`, `radiation-impact`, `other` |
| `message` | textarea | yes | 10–2000 chars |
| `website` (honeypot) | hidden text | n/a | must be empty |

Subject options localized via `src/i18n/messages/{locale}.json`. The wire value sent to the server is the English key (e.g., `decontamination`), mapped server-side to a localized label for the email subject.

### Server action: `src/app/[locale]/contact/actions.ts`

- Marked `"use server"`.
- Validates with **Zod** schema in `src/lib/contact-schema.ts` (single source of truth for client + server).
- Honeypot check: if `website` is non-empty, return `{ ok: true }` silently (do not call Resend, do not log PII).
- IP rate limit (5 / 10 min) via `src/lib/rate-limit.ts` (in-memory Map at module scope; resets on cold-start, which is fine for this volume — documented in code).
- Calls `resend.emails.send({...})`:
  - `from`: `process.env.CONTACT_FROM_EMAIL` (`noreply@alphanorm.qa`)
  - `to`: `process.env.CONTACT_TO_EMAIL` (`contact@alphanorm.qa`)
  - `replyTo`: visitor's email
  - `subject`: `New inquiry from <name> — <localized subject label>`
  - `html`: simple table layout (renders well in Gmail/Outlook)
  - `text`: plain-text fallback
- Returns `{ ok: true }` or `{ ok: false, error: 'message-key' }`. Error keys are i18n message keys, resolved client-side for display.
- Logs failures server-side without including PII (no email address, no message body in logs).

### Client component: `ContactForm.tsx`

- React 19 `useActionState` wired to the server action.
- Inline field-level errors (under each input).
- Submit button shows pending state (disabled + localized "Sending…" label).
- Success: form replaced with confirmation card (localized "Thanks — we'll be in touch.").
- Failure: red toast above form with localized message, focus moved to it (`aria-live="polite"`).

### Env

`.env.example` (committed, no secrets):

```
RESEND_API_KEY=
CONTACT_TO_EMAIL=contact@alphanorm.qa
CONTACT_FROM_EMAIL=noreply@alphanorm.qa
```

`.env.local` (gitignored) — user populates with the verified Resend API key.

## 9. Testing & verification

### Type & lint

- `tsc --noEmit` passes (TypeScript strict mode).
- `next lint` passes.
- `prettier --check src` passes.

Combined into `npm run check`.

### Unit tests (Vitest)

- `src/app/[locale]/contact/actions.test.ts`:
  - Valid submission → `{ ok: true }`, `resend.emails.send` called with expected payload.
  - Invalid email → `{ ok: false, error }`, `send` not called.
  - Honeypot filled → `{ ok: true }` returned, `send` not called.
  - Rate-limit exceeded → `{ ok: false, error: 'rate-limited' }`.
  - Resend SDK throws → `{ ok: false }`, error logged (no PII).
- `src/lib/contact-schema.test.ts` — Zod schema accepts/rejects fixtures.

Resend SDK mocked via `vi.mock('resend')`. No real emails sent.

### Component smoke (Vitest + RTL)

- `ContactForm.test.tsx`:
  - Submit empty → field errors visible.
  - Server returns `{ ok: true }` → success state.
  - Server returns `{ ok: false }` → error toast, form editable.

### E2E (Playwright)

- `e2e/contact.spec.ts`: open `/`, click "Contact us", fill form with valid data, submit, assert success state. Resend call intercepted via Playwright network mock.

### Manual QA checklist (`docs/superpowers/specs/2026-05-04-manual-qa.md` — created during implementation)

- [ ] All routes render in both locales (`/`, `/ar/`, all sub-routes).
- [ ] Header nav highlights the current page in both locales.
- [ ] Mobile menu opens, closes on nav click.
- [ ] All photos load (no 404s in network tab).
- [ ] Lighthouse on `/`: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95.
- [ ] `prefers-reduced-motion`: Reveal & Stat skip animation.
- [ ] Tab order on `/contact` form is sensible; `:focus-visible` rings visible.
- [ ] **Real test inquiry** sent to `contact@alphanorm.qa` and verified delivered with correct `Reply-To`.
- [ ] **Arabic copy review** — Abdulaziz reviews all Arabic translations for terminology and grammar before launch.
- [ ] RTL layout sanity: header, hero, 2-col sections, footer all mirror correctly in Arabic.
- [ ] Language toggle preserves current path when switching (e.g., `/services/decontamination` ↔ `/ar/services/decontamination`).

### CI

Out of scope for v1. Local `npm run check && npm test && npm run e2e` is sufficient until the deploy pipeline is set up.

## 10. Out of scope (explicitly)

- CMS integration (services/insights are TS files, not a headless CMS).
- Authenticated areas, user accounts.
- Search.
- Analytics — can add later via env-gated `<Script>` in root layout.
- A11y for screen readers in Arabic beyond standard semantic HTML and ARIA.
- Auto-detection of locale beyond initial `/` redirect — toggle is the primary mechanism.
- Sitemap.xml, robots.txt — recommended for launch but added in a follow-up step.
- Replacement of the small team photos (David Bradley 7KB, Huda Al-Sulaiti 12KB) — flagged for higher-res replacements once available.

## 11. Implementation order (handed to writing-plans)

Sketched here for the implementation plan to refine — not committed:

1. Strip emerald `--brand*` tokens, install Graphite palette, add `Container`, hook up new fonts.
2. Rebuild Header (logo only, transparent → blurred sticky) and Footer (logo only, ink bg). Wire up to layout.
3. Move pages into `src/app/[locale]/`, install `next-intl`, set up `routing.ts`, `request.ts`, `middleware.ts`.
4. Build `LangToggle.tsx`. Verify both locales resolve, RTL flips correctly.
5. Build home page (hero, intro, stats, why, services teaser, partners, CTA) with English copy.
6. Build `/services` index + 5 detail pages from `src/data/services.ts`.
7. Build `/about` (mission, vision, industries, team).
8. Build `/insights` index + 3 articles.
9. Build `/contact` page + `ContactForm` + server action + Resend integration.
10. Translate all copy to Arabic; wire into `messages/ar.json` and bilingual `data/*.ts` shapes.
11. Tests (unit, component, e2e), Lighthouse pass, accessibility audit, manual QA checklist.
12. Final polish: photo optimization (PNG → WebP), favicon multi-res, removal of stray `dddd.png` and `default app/favicon.ico`.
