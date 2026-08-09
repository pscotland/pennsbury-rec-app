# Riverside Recreation Council — Design-to-Development Handoff

**Version:** 1.0 · **Date:** 2026-08-08  
**Source design:** React prototype (Version 2) — `/workspaces/default/code/src/`  
**Target stack:** Angular 22 · TypeScript · PrimeNG 21 · PrimeIcons · Tailwind CSS · SCSS · Angular Signals  
**Styling approach:** Component-first (SCSS per component). Tailwind for layout utilities only.

---

## Context

This document bridges the existing React prototype and a future Angular/PrimeNG implementation. The React prototype is the authoritative visual reference. The Angular agent must faithfully reproduce the prototype's visual design using PrimeNG components where possible and custom SCSS only where PrimeNG does not cover the pattern. No redesign is permitted.

---

## 1. Design Token Reference

All values below were extracted directly from the React prototype source.

### 1.1 Color Palette

#### Brand Colors
| Token | Hex | Usage |
|---|---|---|
| `$color-primary` | `#2563EB` | Buttons, links, active states, stat values, date badges, timeline nodes |
| `$color-primary-dark` | `#1D4ED8` | Button/link hover state |
| `$color-primary-gradient` | `linear-gradient(135deg, #2563EB, #1D4ED8)` | Logo icon box, login logo box |

#### Semantic Colors
| Token | Hex | Usage |
|---|---|---|
| `$color-success` | `#16A34A` | Success/open status, volunteer CTA, checklist icons, call icon (contact) |
| `$color-success-dark` | `#15803D` | Volunteer CTA hover |
| `$color-success-text` | `#166534` | Open badge text, Programs label text |
| `$color-success-bg` | `#DCFCE7` | Open badge bg, Get Involved label bg, success checkmark bg |
| `$color-warning` | `#CA8A04` | Closing Soon badge dot |
| `$color-warning-text` | `#713F12` | Closing Soon badge text |
| `$color-warning-bg` | `#FEF9C3` | Closing Soon badge bg |
| `$color-error` | `#DC2626` | Full badge dot, required asterisk, error icon |
| `$color-error-text` | `#991B1B` | Full badge text, error alert text |
| `$color-error-bg` | `#FEF2F2` | Error alert background |
| `$color-error-border` | `#FECACA` | Error alert border |
| `$color-purple` | `#7C3AED` | Coming Soon badge dot, governance tag, contact-hours icon |
| `$color-purple-text` | `#4C1D95` | Coming Soon badge text |
| `$color-purple-bg` | `#EDE9FE` | Coming Soon badge bg, Leadership label bg, map placeholder gradient end |
| `$color-orange` | `#F97316` | Community event tag, contact email icon, some board/sponsor accents |

#### Text Colors
| Token | Hex | Usage |
|---|---|---|
| `$text-primary` | `#111827` | Headings, card titles, strong values |
| `$text-secondary` | `#374151` | Body text, volunteer list items, nav links |
| `$text-body` | `#4B5563` | About page paragraphs, article excerpts |
| `$text-muted` | `#6B7280` | Supporting text, descriptions, labels |
| `$text-placeholder` | `#9CA3AF` | Timestamps, sub-labels, form placeholders |
| `$text-inverse` | `#FFFFFF` | Text on dark/primary backgrounds |
| `$text-link` | `#2563EB` | Inline links, breadcrumb links on white |
| `$text-link-hero` | `#93C5FD` | Breadcrumb links on dark hero backgrounds |
| `$text-footer-body` | `#94A3B8` | Footer body text |
| `$text-footer-heading` | `#F1F5F9` | Footer column headings |
| `$text-footer-legal` | `#475569` | Footer bottom bar text |

#### Surface Colors
| Token | Hex | Usage |
|---|---|---|
| `$surface-white` | `#FFFFFF` | Cards, form backgrounds, nav |
| `$surface-bg` | `#F8FAFC` | Page section backgrounds (alternating) |
| `$surface-subtle` | `#F9FAFB` | Board cards, hover nav bg |
| `$surface-input` | `#FAFAFA` | Form input backgrounds |
| `$surface-footer` | `#0F172A` | Footer background |
| `$surface-divider` | `#F3F4F6` | Hairline dividers |
| `$surface-nav-pill-active` | `#EFF6FF` | Active nav link background |
| `$surface-nav-pill-hover` | `#F9FAFB` | Hover nav link background |

#### Border Colors
| Token | Hex | Usage |
|---|---|---|
| `$border-default` | `#E5E7EB` | Cards, inputs, page sections |
| `$border-subtle` | `#F3F4F6` | Dividers within cards |
| `$border-focus` | `#2563EB` | Input/select/textarea focus border |
| `$border-primary-light` | `#BFDBFE` | Event date badge, timeline connector |
| `$border-footer` | `rgba(255,255,255,0.07)` | Footer bottom bar top border |

#### Label / Badge Palette (7 semantic labels)
| Label | Background | Text Color |
|---|---|---|
| Registration / Programs / Link | `#DBEAFE` | `#1E40AF` |
| Community / Announcement | `#DBEAFE` | `#1E40AF` |
| Get Involved / Open status | `#DCFCE7` | `#166534` |
| History / Warning | `#FEF3C7` | `#92400E` |
| Leadership / Coming Soon | `#EDE9FE` | `#5B21B6` |
| Sports category | `#EDE9FE` | `#5B21B6` |
| Governance event tag | — | `#7C3AED` (alpha bg) |

---

### 1.2 Typography

**Font family:** `Inter` (Google Fonts, weights 400–900)  
**Font stack:** `'Inter', system-ui, sans-serif`

#### Type Scale
| Token | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| `$text-hero` | `clamp(40px, 6vw, 72px)` | 900 | 1.05 | Home hero H1 |
| `$text-page-hero` | `clamp(34px, 5vw, 56px)` | 900 | — | Programs/About hero H1 |
| `$text-detail-hero` | `clamp(30px, 4.5vw, 52px)` | 900 | 1.1 | News H1, Contact H1, ProgramDetail H1 |
| `$text-section-heading` | `clamp(26px, 3.5vw, 42px)` | 900 | 1.1 | Section H2s |
| `$text-card-heading` | `22–24px` | 800–900 | 1.3 | Card H2 (detail page), Registration card H2 |
| `$text-card-title` | `18px` | 800 | 1.3 | Program card title |
| `$text-article-title` | `17px` | 800 | 1.35 | News article card H3 |
| `$text-body-lg` | `19–20px` | 400 | 1.7 | Hero paragraphs |
| `$text-body-md` | `16–17px` | 400 | 1.75–1.8 | Section body, article excerpt |
| `$text-body-sm` | `15px` | 400–600 | 1.6 | Card body, FAQ answers |
| `$text-body-xs` | `14px` | 400–500 | 1.65 | Card descriptions, form labels |
| `$text-label` | `13px` | 600–700 | — | Form labels, card metadata |
| `$text-micro` | `12px` | 700 | — | Badge pills, timestamps, section eyebrows |
| `$text-nano` | `11–10px` | 700–800 | — | Season overlays, event month labels |

#### Letter Spacing Tokens
| Token | Value | Usage |
|---|---|---|
| `$tracking-hero` | `-1.5px` | Home hero H1 |
| `$tracking-heading` | `-0.8px to -0.6px` | Section H2s |
| `$tracking-card` | `-0.3px to -0.4px` | Card headings |
| `$tracking-label` | `0.6px–1px` | Badge pills, column headings |
| `$tracking-micro` | `1px–1.5px` | Sponsor sub-labels, eyebrow text |

---

### 1.3 Spacing Scale (8-point system)

| Token | Value | Primary Usage |
|---|---|---|
| `$space-1` | `4px` | Badge vertical padding |
| `$space-2` | `8px` | Icon gaps, hamburger padding |
| `$space-3` | `12px` | Button icon gap, breadcrumb gap |
| `$space-4` | `16px` | Card gap, label margin-bottom |
| `$space-5` | `20px` | Card padding, stats cell padding |
| `$space-6` | `24px` | Section horizontal gutter |
| `$space-7` | `28px` | Form field margin-bottom |
| `$space-8` | `32px` | Page hero breadcrumb area |
| `$space-10` | `40px` | Featured article text padding |
| `$space-12` | `48px` | Section header bottom margin, "Load More" top margin |
| `$space-14` | `56px` | Section header margin, footer column mb |
| `$space-16` | `64px` | Nav height, page-top padding offset, footer padding |
| `$space-20` | `80px` | CTA section vertical padding |
| `$space-24` | `96px` | Standard section vertical padding |
| `$space-32` | `128px` | (Two-col volunteer layout gap) |

---

### 1.4 Border Radius
| Token | Value | Usage |
|---|---|---|
| `$radius-sm` | `6px` | Custom checkbox |
| `$radius-md` | `8px` | Nav link hover pill |
| `$radius-lg` | `9px` | Buttons, search input, filter select, clear button |
| `$radius-xl` | `10px` | Form inputs (contact), smaller cards |
| `$radius-2xl` | `11px` | Primary CTA buttons, login submit |
| `$radius-card` | `14px` | Detail info tiles, FAQ items, contact info cards |
| `$radius-card-lg` | `16px` | Program cards, event cards, news article cards, map placeholder |
| `$radius-card-xl` | `20px` | Featured news card, volunteer image, contact form card |
| `$radius-login` | `20px` | Login card |
| `$radius-logo` | `10px` | Nav logo box, footer logo box |
| `$radius-logo-lg` | `14px` | Login logo box |
| `$radius-icon` | `9–11px` | Colored icon containers |
| `$radius-pill` | `100px` | All badge/label pills |
| `$radius-circle` | `50%` | Avatars, timeline nodes, FAQ chevron, checklist icons |

---

### 1.5 Shadows
| Token | Value | Usage |
|---|---|---|
| `$shadow-card` | `0 2px 12px rgba(0,0,0,0.05)` | Event cards, news cards default |
| `$shadow-card-hover` | `0 14px 40px rgba(0,0,0,0.11)` | Program card hover |
| `$shadow-card-md` | `0 4px 24px rgba(0,0,0,0.07)` | Featured news card |
| `$shadow-card-lg` | `0 8px 40px rgba(0,0,0,0.08)` | Login card |
| `$shadow-sticky-card` | `0 8px 32px rgba(0,0,0,0.08)` | Registration sidebar |
| `$shadow-image` | `0 24px 64px rgba(0,0,0,0.14)` | Volunteer hero image |
| `$shadow-nav` | `0 1px 24px rgba(0,0,0,0.09)` | Sticky nav (scrolled) |
| `$shadow-btn-primary` | `0 4px 20px rgba(37,99,235,0.28)` | Blue primary buttons |
| `$shadow-btn-primary-hero` | `0 4px 24px rgba(37,99,235,0.45)` | Hero primary CTA |
| `$shadow-btn-success` | `0 4px 20px rgba(22,163,74,0.30)` | Volunteer CTA |
| `$shadow-icon-map` | `0 4px 16px rgba(37,99,235,0.35)` | Map pin icon box |

---

### 1.6 Transitions
| Token | Value | Usage |
|---|---|---|
| `$transition-fast` | `0.15s ease` | Button backgrounds, link colors, input borders |
| `$transition-card` | `0.22s ease` | Card hover transform + shadow |
| `$transition-image` | `0.4s ease` | Card image scale on hover |
| `$transition-chevron` | `0.25s ease` | FAQ accordion chevron rotation |
| `$transition-lift` | `transform 0.2s, box-shadow 0.2s` | Board cards, sponsor cards, event cards |

---

## 2. Breakpoints

| Name | Rule | px range |
|---|---|---|
| Desktop | `≥ 960px` | 960px+ |
| Tablet | `768px – 959px` | 768–959px |
| Mobile | `< 768px` | 0–767px |

> Note: The React prototype uses a single breakpoint at `767/768px` via media-query strings. The Angular implementation should extend this to include a tablet breakpoint at 960px per Angular project conventions.

---

## 3. Icon System — PrimeIcons Mapping

The prototype uses custom inline SVG icons. Map all to PrimeIcons in the Angular implementation.

| Purpose | Proto SVG | PrimeIcon class | Notes |
|---|---|---|---|
| Hamburger menu | Custom 3-line | `pi-bars` | — |
| Close / X | Custom X | `pi-times` | — |
| Arrow right | Custom → | `pi-arrow-right` | — |
| Arrow left | Custom ← | `pi-arrow-left` | — |
| Chevron right | Custom › | `pi-chevron-right` | — |
| Chevron down | Custom ∨ | `pi-chevron-down` | — |
| Map / location pin | Custom drop pin | `pi-map-marker` | — |
| Email / envelope | Custom envelope | `pi-envelope` | — |
| Phone | Custom handset | `pi-phone` | — |
| Clock / time | Custom clock | `pi-clock` | — |
| Calendar | Custom calendar | `pi-calendar` | — |
| Users / people | Custom silhouettes | `pi-users` | — |
| Search | Custom magnifier | `pi-search` | — |
| Filter | Custom funnel | `pi-filter` | — |
| Check / tick | Custom ✓ | `pi-check` | — |
| Award / medal | Custom | `pi-star-fill` | Closest match; use filled star |
| Star (filled) | Custom ★ | `pi-star-fill` | — |
| Heart | Custom ♥ outline | `pi-heart` | — |
| Facebook | Custom FB logo | `pi-facebook` | — |
| Twitter / X | Custom bird | `pi-twitter` | — |
| Instagram | Custom camera | `pi-instagram` | — |
| YouTube | Custom play rect | `pi-youtube` | — |
| Eye (show) | Custom eye | `pi-eye` | — |
| Eye off (hide) | Custom eye-slash | `pi-eye-slash` | — |
| Lock / padlock | Custom lock | `pi-lock` | — |
| Tag | Custom price tag | `pi-tag` | — |
| Clipboard | Custom clipboard | `pi-clipboard` | — |

**Exception:** The prototype logo mark (person silhouette inside rounded square) is a custom SVG and should remain as an inline SVG or an Angular SVG component — no PrimeIcon equivalent.

**Icon sizing:** All `<i class="pi ...">` icons should be sized via `font-size` in SCSS, not inline. Recommended sizes:

| Usage context | font-size |
|---|---|
| Nav / footer social | `1.2rem` (19px) |
| Form field icon inset | `1.125rem` (18px) |
| Card metadata icon | `1.0625rem` (17px) |
| Badge / inline with text | `1rem` (16px) |
| Micro (breadcrumb sep.) | `0.875rem` (14px) |

---

## 4. Shared Component Inventory

| Component | Used On | Variants | PrimeNG Equivalent | Custom Styling |
|---|---|---|---|---|
| `AppButtonComponent` | All pages | Primary, Secondary, Ghost, Outline, Disabled, Loading | `p-button` | Yes — size, shadows, lift |
| `AppBadgeComponent` | Programs, News, Events | Status (Open/Closing/Full/Coming), Category, Label Pill | `p-tag` | Yes — palette mapping |
| `SectionHeaderComponent` | All pages | Left-aligned, Center-aligned; with/without CTA | None | Yes |
| `BreadcrumbComponent` | About, Programs, ProgramDetail, News, Contact | Light (on white), Inverse (on dark hero) | `p-breadcrumb` | Yes |
| `PageHeroComponent` | About, Programs, ProgramDetail, News, Contact | Full-viewport (Home), Fixed-height image (interior pages) | None | Yes |
| `StatTickerComponent` | Home | — | None | Yes |
| `EventCardComponent` | Home, (future Events page) | Default | None (custom) | Yes |
| `ProgramCardComponent` | Programs | Default | `p-card` | Yes |
| `NewsCardComponent` | News | Standard, Featured | `p-card` | Yes |
| `SponsorCardComponent` | Home | Default | None | Yes |
| `InfoCardComponent` | Home (contact preview), Contact | Default | None | Yes |
| `MapPlaceholderComponent` | Home, Contact | — | None | Yes |
| `TimelineComponent` | About | — | `p-timeline` | Yes |
| `BoardMemberCardComponent` | About | — | None | Yes |
| `FaqAccordionComponent` | About | — | `p-accordion` | Yes |
| `StatBandComponent` | About | — | None | Yes |
| `AppInputComponent` | Contact, (future forms) | Default, Focus, Error, Disabled | `p-inputtext` | Yes |
| `AppSelectComponent` | Programs (filters), Contact | Default, Focus | `p-select` (PrimeNG 21) | Yes |
| `AppTextareaComponent` | Contact | Default, Focus | `p-textarea` | Yes |
| `AppCheckboxComponent` | Login | Default, Checked | `p-checkbox` | Yes |
| `FormFieldComponent` | Contact, Login | Default, Error | None (wrapper) | Yes |
| `SocialIconButtonComponent` | Footer, Contact | Platform variants | None | Yes |
| `EmptyStateComponent` | Programs (no results) | — | None | Yes |
| `RegistrationSidebarComponent` | ProgramDetail | Open, Closing Soon, Full, Coming Soon | `p-card` | Yes |
| `CoachCardComponent` | ProgramDetail | — | None | Yes |
| `LogoComponent` | Nav, Footer, Login | Nav size, Login size | None | Yes |

---

## 5. Global Layout

- **Max content width:** `1200px`, centered via `margin: 0 auto`
- **Horizontal gutter:** `24px` on all sections
- **Page top offset:** `64px` (fixed nav height) — applied as `padding-top: 64px` on the `<main>` or router outlet wrapper
- **Alternating section backgrounds:** White (`$surface-white`) and light gray (`$surface-bg`) alternate between sections

---

## 6. Navigation Components

### 6.1 Desktop Header (≥ 960px)

| Property | Value |
|---|---|
| Height | `64px` |
| Position | `fixed`, `top: 0`, `left: 0`, `right: 0` |
| z-index | `100` |
| Background (default) | `white` |
| Background (scrolled) | `rgba(255,255,255,0.98)` |
| Backdrop filter | `blur(12px)` |
| Bottom border (default) | `1px solid #E5E7EB` |
| Box shadow (scrolled) | `0 1px 24px rgba(0,0,0,0.09)` |
| Transition | `box-shadow 0.25s` |
| Inner padding | `0 24px` |
| Layout | Flex, `align-items: center` |

**Logo:** Left-aligned. See § 6.4.

**Center nav links:**
- Flex row, `gap: 2px`
- Link padding: `7px 14px`, `border-radius: 8px`, `font-size: 14.5px`
- Default: `color: #374151`, `font-weight: 500`, background transparent
- Active: `color: #2563EB`, `font-weight: 600`, `background: #EFF6FF`
- Hover: `color: #111827`, `background: #F9FAFB`
- Transition: `background 0.15s, color 0.15s`

**Right actions:**
- Flex row, `gap: 12px`
- "Admin Login" link: `font-size: 14px`, `font-weight: 500`, `color: #6B7280`; hover `color: #2563EB`; padding `6px 4px`
- "Register" button: see § 8 Button / Primary variant

### 6.2 Tablet Header (768px – 959px)

- Nav links remain visible (same desktop layout, possibly reduce gap to `0`)
- "Admin Login" text link hidden (space constrained); or included in mobile drawer
- Logo + nav + CTA remain in header bar
- If space is insufficient, collapse nav to hamburger at 768px (same as mobile threshold)

> Recommendation: Use the same 768px mobile breakpoint used in the prototype. Tablet does not require a separate layout — the desktop layout scales down acceptably to ~800px.

### 6.3 Mobile Header (< 768px)

- Logo left-aligned
- Hamburger button right-aligned (`pi-bars` / `pi-times` icon)
- Hamburger: `padding: 8px`, `border-radius: 8px`, `color: #374151`
- All desktop nav links and CTA buttons hidden
- On hamburger click: drawer slides in (or appears) below the nav bar

**Mobile Drawer:**
- Background: `white`
- Border top: `1px solid #F3F4F6`
- Padding: `12px 24px 24px`
- Width: 100% (full-width drop-down below nav bar, not a side drawer)
- Nav links as block elements, `padding: 13px 0`, `font-size: 16px`, `border-bottom: 1px solid #F3F4F6`
- Active link: `color: #2563EB`, `font-weight: 700`
- Default link: `color: #374151`, `font-weight: 500`
- Bottom of drawer: two stacked buttons with `margin-top: 16px`, `gap: 10px`
  - Register: full-width, `padding: 13px`, `border-radius: 10px`, `font-weight: 700`, `font-size: 15px`, `background: #2563EB`, `color: white`
  - Admin Login: full-width, `padding: 12px`, `border-radius: 10px`, `font-weight: 500`, `font-size: 15px`, `background: #F9FAFB`, `color: #374151`
- Drawer closes automatically on route change

### 6.4 Logo Component

Used in Nav (default), Footer (default), Login (enlarged).

| Property | Nav / Footer | Login Card |
|---|---|---|
| Icon box size | `38px × 38px` | `52px × 52px` |
| Icon box radius | `10px` | `14px` |
| Icon box background | `linear-gradient(135deg, #2563EB, #1D4ED8)` | same |
| Icon box shadow | `0 2px 10px rgba(37,99,235,0.30)` | `0 4px 16px rgba(37,99,235,0.30)` |
| SVG icon size | `20px` | `24px` |
| Gap (box → text) | `10px` | centered (no wordmark beside) |
| "Riverside" | `font-size: 15px`, weight `800`, `#111827` | `font-size: 18px`, weight `900`, `#111827` |
| "Recreation Council" | `font-size: 10px`, weight `500`, `#6B7280`, uppercase, `letter-spacing: 0.6px` | `font-size: 13px`, weight `500`, `#6B7280`, as "Admin Portal" |

---

## 7. Footer Component

### 7.1 Desktop Footer (≥ 768px)

| Property | Value |
|---|---|
| Background | `#0F172A` |
| Top padding | `64px 24px 0` |
| Grid columns | `repeat(auto-fit, minmax(180px, 1fr))` |
| Column gap | `48px` |
| Grid margin-bottom | `56px` |

**Column headings (Quick Links, Programs, Contact):**
- `font-size: 12px`, `font-weight: 700`, `color: #F1F5F9`, `letter-spacing: 1px`, uppercase, `margin-bottom: 18px`

**Footer links:**
- `font-size: 14px`, `color: #94A3B8`, `margin-bottom: 10px`
- Hover: `color: #BFDBFE`, `transition: color 0.15s`
- Prepend `pi-chevron-right` icon in `#94A3B8`, `gap: 6px`

**Brand column description:**
- `font-size: 14px`, `color: #94A3B8`, `line-height: 1.75`, `margin-bottom: 24px`

**Contact column icon colors:**
- Address pin: `#60A5FA` · Phone: `#34D399` · Email: `#FBBF24` · Hours: `#C084FC`
- Icon to text gap: `10px`, item margin-bottom: `14px`
- Text: `font-size: 14px`, `color: #94A3B8`, `line-height: 1.6`

**Social icons:**
- Size: `36px × 36px`, `border-radius: 9px`
- Default: `background: rgba(255,255,255,0.07)`, `color: #94A3B8`
- Hover: `background: {brandColor}22`, `color: {brandColor}`
- Brand colors: Facebook `#3B82F6` · Twitter `#60A5FA` · Instagram `#F472B6` · YouTube `#EF4444`
- Row gap: `8px`

**Bottom bar:**
- Border top: `1px solid rgba(255,255,255,0.07)`
- Padding: `20px 0`
- Layout: flex, `justify-content: space-between`, `flex-wrap: wrap`, `gap: 12px`
- Copyright: `font-size: 13px`, `color: #475569`
- Legal links: `font-size: 13px`, `color: #475569`, gap `20px`, hover `#BFDBFE`

### 7.2 Mobile Footer (< 768px)

- `grid-template-columns: 1fr` — each column stacks vertically
- Reduce column gap to `32px`
- Social icons row remains horizontal

---

## 8. Button Component (`AppButtonComponent`)

Wraps `p-button`. Override PrimeNG's default theme tokens via SCSS.

### Variants

#### Primary
- Background: `#2563EB` → hover `#1D4ED8`
- Color: `white`
- Border: none
- Box shadow: `0 4px 20px rgba(37,99,235,0.28)`
- Hover: lift `transform: translateY(-1px)`, deeper shadow `0 6px 24px rgba(37,99,235,0.35)`
- Transition: `background 0.15s, transform 0.15s, box-shadow 0.15s`
- Border radius: `$radius-2xl` (11px)
- Padding: `13px 28px` (standard) / `15px 32px` (hero)
- Font: `font-weight: 700`, `font-size: 14–16px`

#### Primary Hero (Hero CTAs only)
- Same as Primary but:
- Padding: `15px 32px`
- Box shadow: `0 4px 24px rgba(37,99,235,0.45)`

#### Secondary (outline / ghost)
- Background: transparent
- Color: `#374151`
- Border: `2px solid #E5E7EB`
- Hover: `border-color: #2563EB`
- Transition: `border-color 0.15s`
- Border radius: `$radius-2xl`
- Padding: `13px 24px`

#### Ghost (dark hero context)
- Background: `rgba(255,255,255,0.12)`
- Border: `2px solid rgba(255,255,255,0.40)`
- Color: `white`
- Backdrop-filter: `blur(8px)`
- Hover: `background: rgba(255,255,255,0.22)`

#### Success
- Background: `#16A34A` → hover `#15803D`
- Color: `white`
- Box shadow: `0 4px 20px rgba(22,163,74,0.30)`
- Hover: lift `transform: translateY(-2px)`

#### Disabled (Full status)
- Background: `#E5E7EB`
- Color: `#9CA3AF`
- Cursor: `not-allowed`
- No shadow, no hover

#### Loading
- Background: `#93C5FD` (light blue)
- Cursor: `not-allowed`
- Shows spinner icon (PrimeNG `p-button` `[loading]="true"` with `loadingIcon="pi-spin pi-spinner"`)

#### Outline / Secondary Action (Waitlist, Get Notified)
- Padding: `12–14px`, radius `11px`
- Background: `white` / `#F3F4F6`
- Color: `#374151`
- Border: `1.5px solid #E5E7EB`

#### Text Link Button ("Load More", breadcrumb style)
- Background: none, border: none
- Color: `#2563EB`
- Hover: `color: #1D4ED8`
- Use `p-button` variant `link`

---

## 9. Badge / Tag Component (`AppBadgeComponent`)

Wraps `p-tag`. All badges use pill shape (`border-radius: 100px`), `font-size: 12px` (or 11px for image overlays), `font-weight: 700`, `padding: 4–5px 10–14px`.

### Status Badges (Program status)

| Status | Background | Text | Dot Color |
|---|---|---|---|
| Open | `#DCFCE7` | `#166534` | `#16A34A` |
| Closing Soon | `#FEF9C3` | `#713F12` | `#CA8A04` |
| Full | `#FEE2E2` | `#991B1B` | `#DC2626` |
| Coming Soon | `#EDE9FE` | `#4C1D95` | `#7C3AED` |

Status badges include a 6px filled circle dot before the text. `font-size: 12px`, `padding: 5px 10px`.

### Category Badges (News articles)

| Category | Background | Text |
|---|---|---|
| Announcement | `#DBEAFE` | `#1E40AF` |
| Programs | `#DCFCE7` | `#166534` |
| Community | `#FEF3C7` | `#92400E` |
| Sports | `#EDE9FE` | `#5B21B6` |

`font-size: 11px` (when on image), `12px` (in card body), `padding: 4px 10–12px`.

### Section Label Pills (Eyebrow labels)

Used above section headings. Same shape as category badges.

| Label | Background | Text |
|---|---|---|
| Default (Events, Get in Touch) | `#DBEAFE` | `#1E40AF` |
| Get Involved / Programs | `#DCFCE7` | `#166534` |
| Our History / Warning | `#FEF3C7` | `#92400E` |
| Leadership | `#EDE9FE` | `#5B21B6` |

`font-size: 12px`, `font-weight: 700`, `padding: 4px 14px`, uppercase, `letter-spacing: 0.8px`.

### Event Tag Badges

Small colored tags on event cards. No dot. Background is `{tagColor}18` (hex alpha ≈ 9% opacity), text is `{tagColor}` solid. `font-size: 11px`, `padding: 2px 10px`.

---

## 10. Section Header Component (`SectionHeaderComponent`)

Reusable section-header pattern used on every page.

### Anatomy
1. **Eyebrow** — Section label pill (§ 9, Label Pills)
2. **Heading** — H2 using `$text-section-heading` (`clamp(26px, 3.5vw, 42px)`, weight 900)
3. **Sub-description** — Optional paragraph below heading (`font-size: 17px`, `color: #6B7280`, `max-width: 520px`, `line-height: 1.65`)
4. **CTA link** — Optional "View All →" link, right-aligned when used with left-aligned header

### Variants

| Variant | Alignment | Used on |
|---|---|---|
| `center` | Text + eyebrow centered | Programs, Sponsors, About Board, About FAQ, Contact |
| `left` | Eyebrow + heading left; optional CTA right | Home Events, Home Volunteer, News, Programs results |

### Spacing
- Eyebrow `margin-bottom: 14px`
- Heading `margin-bottom: 0` (when sub follows) / `margin-bottom: 48px` (when no sub or CTA follows)
- Sub-description `margin-top: 12px`, `margin-bottom: 48px` (before section content)
- Letter spacing heading: `-0.6px`
- When eyebrow + heading + "View All" CTA in one row: use flex `justify-content: space-between`, `align-items: flex-end`, `flex-wrap: wrap`, `gap: 16px`, `margin-bottom: 48px`

---

## 11. Card Components

### 11.1 Architecture Decision

**Recommendation: Separate feature-specific card components that share common SCSS mixins.**

Rationale: Program, Event, News, and Sponsor cards have substantially different layouts, image treatments, and metadata. A single `BaseCardComponent` would require too many variant inputs and conditional templates. Instead:

1. Create a `_card-mixins.scss` partial with shared shadow, border, radius, and hover tokens.
2. Each card component (`ProgramCardComponent`, `EventCardComponent`, `NewsCardComponent`, `SponsorCardComponent`) imports the card mixin and applies feature-specific layout.

### 11.2 Program Card

| Property | Value |
|---|---|
| Background | `white` |
| Border | `1px solid #E5E7EB` |
| Border radius | `16px` |
| Box shadow | `0 2px 12px rgba(0,0,0,0.05)` |
| Layout | Flex column |
| Hover | `transform: translateY(-4px)`, `box-shadow: 0 14px 40px rgba(0,0,0,0.11)` |
| Hover transition | `transform 0.22s, box-shadow 0.22s` |

**Image area:**
- Height: `210px`
- Placeholder background: `#E5E7EB`
- `overflow: hidden`
- Image hover: `transform: scale(1.04)`, `transition: transform 0.4s`
- **Status badge** (top-right): `position: absolute`, `top: 12px`, `right: 12px` — use `AppBadgeComponent` with status variant
- **Season badge** (top-left): `position: absolute`, `top: 12px`, `left: 12px`, `background: rgba(15,23,42,0.72)`, `color: white`, `backdrop-filter: blur(4px)`, `font-size: 11px`, `font-weight: 700`, `border-radius: 100px`, `padding: 4px 10px`

**Content area:** `padding: 20px 22px 22px`
- Title (H3): `font-size: 18px`, `font-weight: 800`, `color: #111827`, `margin-bottom: 8px`, `line-height: 1.3`
- Description: `font-size: 14px`, `color: #6B7280`, `line-height: 1.65`, `margin-bottom: 16px`
- Age group chip: `background: #F0F9FF`, `color: #0369A1`, `font-size: 13px`, `font-weight: 600`, `padding: 5px 10px`, `border-radius: 8px`, `margin-bottom: 16px`
- "Learn More" button: Full-width primary button, `padding: 11px`, `border-radius: 9px`

**Responsive:**
- Desktop: 3-column grid, `minmax(300px, 1fr)`
- Tablet: 2-column
- Mobile: 1-column

### 11.3 Event Card

| Property | Value |
|---|---|
| Background | `white` |
| Border | `1px solid #E5E7EB` |
| Border radius | `16px` |
| Box shadow | `0 2px 12px rgba(0,0,0,0.05)` |
| Layout | Flex row, `gap: 20px`, `padding: 24px` |
| Hover | `transform: translateY(-3px)`, `box-shadow: 0 10px 32px rgba(0,0,0,0.10)`, `border-color: #C7D2FE` |
| Hover transition | `transform 0.2s, box-shadow 0.2s, border-color 0.2s` |

**Date badge (left):**
- Width: `60px`, flex-shrink 0
- Background: `#EFF6FF`, border: `1px solid #BFDBFE`, `border-radius: 12px`, `padding: 10px 8px`
- Month: `font-size: 10px`, `font-weight: 800`, `color: {tagColor}`, `letter-spacing: 1px`
- Day: `font-size: 26px`, `font-weight: 900`, `color: #111827`, `line-height: 1`, `margin-top: 2px`

**Content (right, `flex: 1`):**
- Tag pill + time row: `gap: 8px`, `margin-bottom: 8px`, `flex-wrap: wrap`
  - Tag pill: `AppBadgeComponent` event-tag variant
  - Time: `font-size: 12px`, `color: #9CA3AF`, `pi-clock` icon
- Title (H3): `font-size: 17px`, `font-weight: 800`, `color: #111827`, `margin-bottom: 6px`, `line-height: 1.3`
- Location: `font-size: 13px`, `color: #6B7280`, `pi-map-marker` icon, `margin-bottom: 8px`
- Description: `font-size: 14px`, `color: #6B7280`, `line-height: 1.6`

**Responsive:**
- Desktop: 2-column grid
- Mobile: 1-column, card layout shifts to full-width

### 11.4 News Card (Standard)

| Property | Value |
|---|---|
| Background | `white` |
| Border | `1px solid #E5E7EB` |
| Border radius | `16px` |
| Box shadow | `0 2px 12px rgba(0,0,0,0.05)` |
| Layout | Flex column |
| Hover | `transform: translateY(-4px)`, `box-shadow: 0 12px 36px rgba(0,0,0,0.10)` |
| Hover transition | `transform 0.22s, box-shadow 0.22s` |

**Image area:**
- Height: `200px`, `background: #E5E7EB`, `overflow: hidden`, position relative
- Image hover: `transform: scale(1.05)`, `transition: transform 0.4s`
- **Category badge** (top-left on image): `AppBadgeComponent` category variant, `position: absolute`, `top: 12px`, `left: 12px`, `font-size: 11px`

**Content area:** `padding: 20px 22px 24px`
- Date row: `pi-calendar` icon, `font-size: 12px`, `color: #9CA3AF`, `margin-bottom: 12px`
- Title (H3): `font-size: 17px`, `font-weight: 800`, `color: #111827`, `margin-bottom: 10px`, `line-height: 1.35`
- Excerpt: `font-size: 14px`, `color: #6B7280`, `line-height: 1.65`, `margin-bottom: 20px`
- "Read More" link: `font-size: 14px`, `font-weight: 700`, `color: #2563EB`; animated arrow gap on hover (`gap: 6px` → `10px`, `transition: gap 0.15s`)

**Responsive:**
- Desktop: 3-column grid (or 2 + 1 featured), `minmax(300px, 1fr)`
- Tablet: 2-column
- Mobile: 1-column

### 11.5 News Card (Featured)

| Property | Value |
|---|---|
| Background | `white` |
| Border | `1px solid #E5E7EB` |
| Border radius | `20px` |
| Box shadow | `0 4px 24px rgba(0,0,0,0.07)` |
| Layout | CSS Grid, `repeat(auto-fit, minmax(280px, 1fr))` |

**Image side:**
- `min-height: 320px`, `background: #DBEAFE`, position relative
- Overlay: `linear-gradient(135deg, rgba(37,99,235,0.20) 0%, transparent 60%)`
- Image: `object-fit: cover`, fills container

**Text side:** `padding: 40px`
- Category badge + date row: `gap: 10px`, `margin-bottom: 20px`
- H2: `font-size: clamp(20px, 2.5vw, 30px)`, `font-weight: 900`, `color: #111827`, `margin-bottom: 16px`, `line-height: 1.3`, `letter-spacing: -0.4px`
- Excerpt: `font-size: 16px`, `color: #4B5563`, `line-height: 1.75`, `margin-bottom: 28px`
- Body text (if present): `font-size: 15px`, `color: #6B7280`, `line-height: 1.75`, `margin-bottom: 32px`
- "Read Full Story" button: Primary button variant, `padding: 12px 24px`, `border-radius: 10px`

**Section label above featured article:**
- Accent bar: `2px × 24px` solid, `#2563EB`, `border-radius: 1px`
- Label: `font-size: 12px`, `font-weight: 700`, `color: #2563EB`, `letter-spacing: 1px`, uppercase
- Row gap: `8px`, `margin-bottom: 20px`

**Responsive:**
- Desktop: Image left / Text right (side by side)
- Mobile: Image stacks above Text

### 11.6 Sponsor Card

| Property | Value |
|---|---|
| Background | `white` |
| Border | `1px solid #E5E7EB` |
| Border radius | `12px` |
| Layout | Centered, `padding: 20px 16px` |
| Hover | `transform: translateY(-2px)`, `box-shadow: 0 8px 24px rgba(0,0,0,0.09)`, `border-color: {sponsorColor}` |
| Hover transition | `transform 0.2s, box-shadow 0.2s, border-color 0.2s` |

**Abbreviation icon box:**
- Size: `44px × 44px`, `border-radius: 10px`
- Background: `{sponsorColor}15` (alpha)
- Text: `font-size: 13px`, `font-weight: 800`, `color: {sponsorColor}`
- `margin: 0 auto 10px`

**Name:** `font-size: 12px`, `font-weight: 600`, `color: #374151`, `line-height: 1.35`

**Grid responsive:**
- Desktop: `repeat(auto-fill, minmax(140px, 1fr))`
- Mobile: `repeat(2, 1fr)`

---

## 12. Form Components

### 12.1 Input (`AppInputComponent` / `p-inputtext`)

| Property | Default | Focused | Error | Disabled |
|---|---|---|---|---|
| Height | `auto` (padding-driven) | same | same | same |
| Padding | `12px 14px` | same | same | same |
| Border radius | `10px` | same | same | same |
| Border | `1.5px solid #E5E7EB` | `1.5px solid #2563EB` | `1.5px solid #DC2626` | `1.5px solid #E5E7EB` |
| Background | `#FAFAFA` | `#FAFAFA` | `#FEF2F2` | `#F3F4F6` |
| Box shadow | none | `0 0 0 3px rgba(37,99,235,0.10)` | `0 0 0 3px rgba(220,38,38,0.10)` | none |
| Font size | `14.5px` | same | same | same |
| Color | `#1F2937` | same | `#111827` | `#9CA3AF` |
| Transition | `border-color 0.15s, box-shadow 0.15s` | — | — | — |

**Login inputs:** Same as above but `padding: 13px 16px`, `font-size: 15px`, `border-radius: 11px`, background changes to `white` when focused.

**With left icon:** `padding-left: 42px` (icon inset `14px` from left, vertically centered)  
**With right icon (password toggle):** `padding-right: 44px`

### 12.2 Select (`AppSelectComponent` / `p-select`)

Same visual spec as Input. Additional:
- Custom chevron via CSS background image (SVG data URI, `right: 12px center`, `14px` size)
- `appearance: none`
- Right padding: `36px` to clear chevron

### 12.3 Textarea (`AppTextareaComponent` / `p-textarea`)

Same visual spec as Input. Additional:
- `resize: vertical`
- `min-height: 120px`
- `rows: 5` default

### 12.4 Checkbox (`AppCheckboxComponent` / `p-checkbox`)

Use `p-checkbox` from PrimeNG. Custom SCSS:
- Box size: `20px × 20px`, `border-radius: 6px`
- Unchecked: `border: 2px solid #D1D5DB`, `background: white`
- Checked: `border: 2px solid #2563EB`, `background: #2563EB`
- Checkmark color: `white`, stroke width `3px`

### 12.5 Form Field Wrapper (`FormFieldComponent`)

Wraps any form control with label, helper, and error message.

- **Label:** `font-size: 13px`, `font-weight: 700`, `color: #374151`, `display: block`, `margin-bottom: 6px` (contact) / `7px` (login)
- **Required asterisk:** `<span class="required">*</span>`, `color: #EF4444`, `font-weight: 700`
- **Optional text:** `color: #9CA3AF`, `font-weight: 400`, `font-size: 13px`
- **Error message:** `font-size: 13px`, `color: #DC2626`, `margin-top: 5px`, with `pi-exclamation-circle` icon

### 12.6 Error Alert (Login / global)

| Property | Value |
|---|---|
| Padding | `12px 14px` |
| Border radius | `10px` |
| Background | `#FEF2F2` |
| Border | `1px solid #FECACA` |
| Icon | `pi-exclamation-circle`, `color: #DC2626`, `16px` |
| Text | `font-size: 13px`, `color: #991B1B`, `font-weight: 500`, `line-height: 1.5` |
| Margin-bottom | `20px` |

---

## 13. Page Hero Component (`PageHeroComponent`)

### Variant: Home (full viewport)
- `min-height: 100vh`
- `padding-top: 64px` (nav offset)
- Background image fills container, `background-size: cover`, `background-position: center 30%`
- Overlay: `linear-gradient(105deg, rgba(15,23,42,0.88) 0%, rgba(30,64,175,0.60) 55%, rgba(0,0,0,0.20) 100%)`
- Hero badge above H1: inline flex, `gap: 8px`, `background: rgba(96,165,250,0.15)`, `border: 1px solid rgba(96,165,250,0.35)`, `padding: 6px 14px`, `border-radius: 100px`; dot `7px × 7px`, `color: #60A5FA`; text `font-size: 13px`, `font-weight: 600`, `color: #BFDBFE`
- H1: see `$text-hero` token, `color: white`, accent `<span>` in `#93C5FD`
- Body: `font-size: 19px`, `color: rgba(255,255,255,0.82)`, `line-height: 1.7`, `max-width: 520px`
- CTA row: `gap: 14px`, `flex-wrap: wrap`
- Stats ticker: `position: absolute`, `bottom: 0`, `left: 0`, `right: 0`, `background: rgba(255,255,255,0.97)`, `backdrop-filter: blur(16px)` — see § 13.1

### Variant: Interior pages (fixed-height image)
- Height: `340px` (Programs, About) / `380px` (About hero) / `400px` (Program Detail)
- Image fills, `object-fit: cover`
- Overlay: `linear-gradient(105deg, rgba(15,23,42,0.85) 0%, rgba(30,64,175,0.55) 100%)`
- Breadcrumb + H1 + subtitle pinned to center (Programs, About) or bottom (ProgramDetail)
- H1 typography: `$text-page-hero` (`clamp(34px, 5vw, 56px)`)

### 13.1 Stat Ticker (Home hero)
- 4-column grid, `max-width: 1200px`, `padding: 0 24px`
- Cell: `padding: 20px 16px`, `text-align: center`, `border-right: 1px solid #F3F4F6`
- Value: `font-size: 28px`, `font-weight: 900`, `color: #2563EB`, `letter-spacing: -0.5px`
- Label: `font-size: 13px`, `font-weight: 500`, `color: #6B7280`, `margin-top: 2px`
- Mobile: collapse to 2-column grid

---

## 14. Map Placeholder Component

| Property | Value |
|---|---|
| Height (contact) | `200px` |
| Height (home) | `220px` |
| Border radius | `16px` |
| Background | `linear-gradient(145deg, #DBEAFE 0%, #EDE9FE 100%)` |
| Border | `1px solid #E5E7EB` |
| Grid overlay | `rgba(37,99,235,0.07)` lines, `28px × 28px` spacing via `background-image` |
| Pin icon box | `44px × 44px`, `border-radius: 11px`, `background: #2563EB`, `box-shadow: 0 4px 16px rgba(37,99,235,0.35)`, `color: white` |
| Address text | `font-size: 14px`, `font-weight: 700`, `color: #1E40AF` |
| "Get Directions" link | `font-size: 13px`, `color: #2563EB`, `font-weight: 600–700` |

---

## 15. Responsive Specifications by Component

### Navigation
| Property | Desktop (≥960px) | Tablet (768–959px) | Mobile (<768px) |
|---|---|---|---|
| Nav links | Visible, center | Visible (or collapse) | Hidden |
| Admin Login | Visible | Hidden | In drawer |
| Register | Button, right | Button, right | In drawer, full-width |
| Hamburger | Hidden | Hidden | Visible |
| Drawer | n/a | n/a | Full-width drop-down |

### Section Headers
| Property | Desktop | Tablet | Mobile |
|---|---|---|---|
| Heading font size | Up to `42px` | `34–36px` | `26px` |
| Sub-description max-width | `520px` | `100%` | `100%` |
| Alignment | Per variant | Same | Center preferred |

### Program Cards Grid
| Desktop | Tablet | Mobile |
|---|---|---|
| 3 columns | 2 columns | 1 column |

### Event Cards Grid
| Desktop | Tablet | Mobile |
|---|---|---|
| 2 columns | 2 columns | 1 column |

### News Cards Grid
| Desktop | Tablet | Mobile |
|---|---|---|
| 3 columns (or featured + 2) | 2 columns | 1 column |

### Sponsor Cards Grid
| Desktop | Tablet | Mobile |
|---|---|---|
| 6+ columns (`minmax(140px)`) | 3–4 columns | 2 columns |

### Board Member Cards
| Desktop | Tablet | Mobile |
|---|---|---|
| 3–4 columns | 2–3 columns | 2 columns |

### Footer
| Desktop | Tablet | Mobile |
|---|---|---|
| 4 columns | 2 columns | 1 column |

### Hero Stat Ticker
| Desktop | Tablet | Mobile |
|---|---|---|
| 4 columns | 4 columns | 2 columns |

### Contact / ProgramDetail Two-Column Layout
| Desktop | Mobile |
|---|---|
| Info (1fr) + Form (1.5fr) | Stacked, info above form |
| Left + Registration sidebar | Stacked, details above sidebar |

---

## 16. Accessibility Requirements

### Color Contrast
- All body text on white backgrounds meets WCAG AA (4.5:1 minimum):
  - `#111827` on `white`: ~17:1 ✓
  - `#374151` on `white`: ~10:1 ✓
  - `#6B7280` on `white`: ~4.6:1 ✓ (borderline — verify with tool)
  - `#9CA3AF` on `white`: ~2.9:1 ✗ — **Use only for non-essential decorative text (timestamps, placeholder); never for primary content**
- `white` on `#2563EB` button: ~4.7:1 ✓
- Hero text `white` on dark overlay: confirmed ✓ (overlay is >= 0.80 opacity at densest point)

### Touch Targets
- All interactive elements must have a minimum touch target of `44px × 44px`
- Buttons with `padding: 9px 20px` at `14px` font render ~36px tall — wrap with `min-height: 44px` on mobile
- Icon-only buttons (social icons, hamburger) must be `≥ 44px × 44px` on mobile

### Focus States
- All focusable elements must show a visible focus ring
- Use `outline: 2px solid #2563EB; outline-offset: 2px` for custom elements
- PrimeNG components: override via `--p-focus-ring-color: #2563EB` in the Angular theme
- Never set `outline: none` without providing an equivalent focus indicator

### Keyboard Navigation
- Nav drawer: Trap focus inside open drawer; close on `Escape`
- Accordion / FAQ: Standard `Enter`/`Space` to toggle, `Arrow` keys to navigate items
- Modal/overlay: Not currently in design but if added, trap focus
- Form submission: `Enter` in text fields should not submit unintentionally (use `type="button"` for non-submit buttons)

### ARIA Labels
- Logo link: `aria-label="Riverside Recreation Council — Home"`
- Hamburger: `aria-label="Open navigation"` / `"Close navigation"`, `aria-expanded`
- Social icon links: `aria-label="{Platform Name}"` (e.g., `"Facebook"`)
- Status badge dots (decorative 6px circles): `aria-hidden="true"`
- Image cards: `alt` text on all `<img>` elements — describe content, not file names
- Program status badge: include status in `aria-label` on the button or the card container

### Semantic HTML
- Page headers: `<header>`, nav: `<nav>`, main: `<main>`, footer: `<footer>`
- Section headings: proper `<h1>` → `<h2>` → `<h3>` hierarchy per page
- Each page has exactly one `<h1>` (the page hero heading or page title)
- Event dates: use `<time datetime="YYYY-MM-DD">` element
- News article dates: `<time>` element
- Lists of links (nav, footer columns): `<ul>` / `<li>` wrappers
- Form inputs: always paired with `<label for="...">` or `aria-label`

### Form Error Messaging
- Error messages are associated with inputs via `aria-describedby`
- Error state announced to screen readers via `aria-live="polite"` on the error region
- Required fields: both `required` attribute and visible asterisk

---

## 17. Design Token → Angular SCSS Mapping

### `styles/_colors.scss`
```scss
// Brand
$color-primary: #2563EB;
$color-primary-dark: #1D4ED8;
$color-primary-gradient: linear-gradient(135deg, #2563EB, #1D4ED8);

// Semantic
$color-success: #16A34A;
$color-success-dark: #15803D;
$color-success-text: #166534;
$color-success-bg: #DCFCE7;
$color-warning: #CA8A04;
$color-warning-text: #713F12;
$color-warning-bg: #FEF9C3;
$color-error: #DC2626;
$color-error-text: #991B1B;
$color-error-bg: #FEF2F2;
$color-error-border: #FECACA;
$color-purple: #7C3AED;
$color-purple-text: #4C1D95;
$color-purple-bg: #EDE9FE;
$color-orange: #F97316;

// Text
$text-primary: #111827;
$text-secondary: #374151;
$text-body: #4B5563;
$text-muted: #6B7280;
$text-placeholder: #9CA3AF;
$text-inverse: #FFFFFF;
$text-link: #2563EB;
$text-footer-body: #94A3B8;
$text-footer-heading: #F1F5F9;
$text-footer-legal: #475569;

// Surfaces
$surface-white: #FFFFFF;
$surface-bg: #F8FAFC;
$surface-subtle: #F9FAFB;
$surface-input: #FAFAFA;
$surface-footer: #0F172A;
$surface-divider: #F3F4F6;
$surface-nav-pill-active: #EFF6FF;

// Borders
$border-default: #E5E7EB;
$border-subtle: #F3F4F6;
$border-focus: #2563EB;
$border-primary-light: #BFDBFE;

// Social brand colors
$color-facebook: #3B82F6;
$color-twitter: #60A5FA;
$color-instagram: #F472B6;
$color-youtube: #EF4444;

// Badge palette map
$badge-colors: (
  'registration': (#DBEAFE, #1E40AF),
  'programs':     (#DCFCE7, #166534),
  'history':      (#FEF3C7, #92400E),
  'leadership':   (#EDE9FE, #5B21B6),
  'sports':       (#EDE9FE, #5B21B6),
  'community':    (#FEF3C7, #92400E),
);

// Program status badge colors
$status-open:         (#DCFCE7, #166534, #16A34A);
$status-closing-soon: (#FEF9C3, #713F12, #CA8A04);
$status-full:         (#FEE2E2, #991B1B, #DC2626);
$status-coming-soon:  (#EDE9FE, #4C1D95, #7C3AED);
```

### `styles/_spacing.scss`
```scss
$space-1:  4px;
$space-2:  8px;
$space-3:  12px;
$space-4:  16px;
$space-5:  20px;
$space-6:  24px;
$space-7:  28px;
$space-8:  32px;
$space-10: 40px;
$space-12: 48px;
$space-14: 56px;
$space-16: 64px;
$space-20: 80px;
$space-24: 96px;

$content-max-width: 1200px;
$section-gutter:    24px;
$nav-height:        64px;
```

### `styles/_typography.scss`
```scss
$font-family: 'Inter', system-ui, sans-serif;

// Scale
$text-hero:           clamp(40px, 6vw, 72px);
$text-page-hero:      clamp(34px, 5vw, 56px);
$text-detail-hero:    clamp(30px, 4.5vw, 52px);
$text-section:        clamp(26px, 3.5vw, 42px);
$text-card-heading:   22px;
$text-card-title:     18px;
$text-article-title:  17px;
$text-body-lg:        19px;
$text-body-md:        17px;
$text-body-sm:        15px;
$text-body-xs:        14px;
$text-label:          13px;
$text-micro:          12px;
$text-nano:           11px;

// Weights
$weight-normal:   400;
$weight-medium:   500;
$weight-semibold: 600;
$weight-bold:     700;
$weight-extrabold: 800;
$weight-black:    900;

// Letter spacing
$tracking-hero:    -1.5px;
$tracking-heading: -0.6px;
$tracking-card:    -0.3px;
$tracking-label:   0.8px;
$tracking-micro:   1px;
```

### `styles/_variables.scss`
```scss
// Border radius
$radius-sm:      6px;
$radius-md:      8px;
$radius-lg:      9px;
$radius-xl:      10px;
$radius-2xl:     11px;
$radius-card:    14px;
$radius-card-lg: 16px;
$radius-card-xl: 20px;
$radius-login:   20px;
$radius-logo:    10px;
$radius-logo-lg: 14px;
$radius-icon:    10px;
$radius-pill:    100px;
$radius-circle:  50%;

// Shadows
$shadow-card:         0 2px 12px rgba(0,0,0,0.05);
$shadow-card-hover:   0 14px 40px rgba(0,0,0,0.11);
$shadow-card-md:      0 4px 24px rgba(0,0,0,0.07);
$shadow-card-lg:      0 8px 40px rgba(0,0,0,0.08);
$shadow-sticky-card:  0 8px 32px rgba(0,0,0,0.08);
$shadow-image:        0 24px 64px rgba(0,0,0,0.14);
$shadow-nav:          0 1px 24px rgba(0,0,0,0.09);
$shadow-btn-primary:  0 4px 20px rgba(37,99,235,0.28);
$shadow-btn-success:  0 4px 20px rgba(22,163,74,0.30);

// Transitions
$transition-fast:   0.15s ease;
$transition-card:   0.22s ease;
$transition-image:  0.4s ease;
$transition-lift:   transform 0.2s ease, box-shadow 0.2s ease;

// Breakpoints
$bp-mobile:  767px;   // max-width
$bp-tablet:  959px;   // max-width
$bp-desktop: 960px;   // min-width
```

### `styles/_utilities.scss`
```scss
// Content container
.container {
  max-width: $content-max-width;
  margin: 0 auto;
  padding: 0 $section-gutter;
}

// Section vertical padding
.section-padding {
  padding: $space-24 $section-gutter; // 96px top/bottom
}

// Badge base (all pill badges extend this)
@mixin badge-base {
  display: inline-flex;
  align-items: center;
  padding: 4px 14px;
  border-radius: $radius-pill;
  font-size: $text-micro;
  font-weight: $weight-bold;
  letter-spacing: $tracking-label;
  text-transform: uppercase;
  line-height: 1;
}

// Card base mixin
@mixin card-base {
  background: $surface-white;
  border: 1px solid $border-default;
  border-radius: $radius-card-lg;
  box-shadow: $shadow-card;
  overflow: hidden;
  transition: transform $transition-card, box-shadow $transition-card;

  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-card-hover;
  }
}

// Icon container
@mixin icon-container($size: 44px, $radius: $radius-icon, $color: $color-primary) {
  width: $size;
  height: $size;
  border-radius: $radius;
  background: rgba($color, 0.08);
  color: $color;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

// Focus ring
@mixin focus-ring {
  outline: 2px solid $border-focus;
  outline-offset: 2px;
}
```

### `styles/styles.scss`
```scss
@use 'colors';
@use 'spacing';
@use 'typography';
@use 'variables';
@use 'utilities';

// Google Fonts import
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

*, *::before, *::after { box-sizing: border-box; }

body {
  font-family: $font-family;
  background-color: $surface-bg;
  color: $text-primary;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
}

// PrimeNG theme overrides
:root {
  --p-primary-color: #{$color-primary};
  --p-primary-hover-color: #{$color-primary-dark};
  --p-focus-ring-color: #{$color-primary};
  --p-content-border-radius: #{$radius-card-lg};
  --p-inputtext-border-color: #{$border-default};
  --p-inputtext-focus-border-color: #{$border-focus};
}
```

---

## 18. Angular Development Agent Instructions

You are an Angular 22 coding agent responsible for implementing the shared UI components for the Riverside Recreation Council website. This document is your primary specification. Do not redesign anything — implement the designs exactly as documented here.

### Before You Begin

1. Read this entire handoff document.
2. Explore the existing Angular project structure (`src/`, `styles/`, `app/`) before creating any files.
3. Identify which components, services, models, and routes already exist.
4. Do not overwrite or break existing routing, the existing Header, Footer, or any established feature modules.

### Implementation Checklist

#### 1. Styles Setup
- Populate `styles/_colors.scss`, `styles/_spacing.scss`, `styles/_typography.scss`, `styles/_variables.scss`, `styles/_utilities.scss` using the exact token values in § 17.
- Wire `@use` imports in `styles/styles.scss`.
- Add the Inter Google Fonts `@import` as the first statement in `styles/styles.scss`.
- Add PrimeNG CSS theme override custom properties (§ 17 `styles.scss`).

#### 2. Shared Components (implement in order)
Implement these in `src/app/shared/components/`:

1. `LogoComponent` — inline SVG + wordmark; two size variants (nav, login)
2. `AppBadgeComponent` — wraps `p-tag`; inputs: `status`, `category`, `label`; auto-colors via § 9
3. `AppButtonComponent` — wraps `p-button`; inputs: `variant`, `size`, `loading`, `disabled`; full spec in § 8
4. `SectionHeaderComponent` — eyebrow + H2 + optional sub + optional CTA; inputs: `eyebrow`, `heading`, `sub`, `ctaLabel`, `ctaRoute`, `alignment`
5. `BreadcrumbComponent` — wraps `p-breadcrumb`; inputs: `items`, `variant` (light/inverse)
6. `MapPlaceholderComponent` — static; inputs: `address`, `height`
7. `SocialIconButtonComponent` — inputs: `platform`, `href`; colors auto via platform
8. `InfoCardComponent` — icon + label + value; inputs: `icon`, `label`, `value`, `iconColor`
9. `EmptyStateComponent` — inputs: `emoji`, `heading`, `body`, `ctaLabel`, `ctaFn`
10. `FormFieldComponent` — wraps form control with label/error; inputs: `label`, `required`, `errorMessage`
11. `AppInputComponent` — wraps `p-inputtext`; inputs: `type`, `placeholder`, `iconLeft`, `iconRight`
12. `AppSelectComponent` — wraps `p-select`; inputs: `options`, `placeholder`
13. `AppTextareaComponent` — wraps `p-textarea`; inputs: `rows`, `placeholder`
14. `AppCheckboxComponent` — wraps `p-checkbox`; inputs: `label`

#### 3. Card Components (implement in `src/app/shared/cards/`)
1. `ProgramCardComponent` — full spec in § 11.2
2. `EventCardComponent` — full spec in § 11.3
3. `NewsCardComponent` — inputs: `article`, `featured: boolean`; renders standard or featured layout per § 11.4/11.5
4. `SponsorCardComponent` — § 11.6

#### 4. Page-Structural Components
1. `PageHeroComponent` — inputs: `variant` (home | interior), `imageUrl`, `heading`, `subtitle`, `ctaPrimary`, `ctaSecondary`; home variant includes stats ticker
2. `StatTickerComponent` — inputs: `stats: {value, label}[]`
3. `SectionHeaderComponent` — (already listed above)
4. `FaqAccordionComponent` — wraps `p-accordion`; inputs: `items: {q, a}[]`

### Implementation Rules

- **PrimeNG first.** Use `p-button`, `p-tag`, `p-inputtext`, `p-select`, `p-textarea`, `p-checkbox`, `p-accordion`, `p-breadcrumb`, `p-timeline` where specified. Do not hand-roll equivalents.
- **No long Tailwind strings.** Tailwind is permitted for layout utilities: `flex`, `grid`, `gap-*`, `items-center`, `justify-between`, `w-full`, `overflow-hidden`, `relative`, `absolute`, `sticky`, `top-0`, `z-50`. All brand-specific styles (colors, shadows, radius, typography) belong in component SCSS files using the token variables from § 17.
- **Angular Signals.** Use `signal()` for component state (open/closed, form values, scroll state, filter values). Use `computed()` for derived values (filtered program list).
- **No duplicate markup.** If a pattern appears in more than one place, it must be a shared component.
- **Responsive is required.** Every component must respond to the breakpoints in § 2. Use `@media (max-width: #{$bp-mobile})` etc. in component SCSS.
- **Accessibility is required.** Apply ARIA labels, semantic HTML, and focus ring styles per § 16 on every interactive element.
- **PrimeIcons only.** Do not introduce a second icon library. Use the mapping in § 3.

### File Structure per Component
Each shared component must have:
```
component-name/
├── component-name.component.ts     (Angular component class)
├── component-name.component.html   (template)
├── component-name.component.scss   (component styles using $tokens from styles/)
└── component-name.component.spec.ts (basic unit tests)
```

### After Implementation
1. Run `ng build` — resolve all TypeScript and template errors.
2. Run `ng test` — ensure all spec files pass.
3. Report any visual discrepancies between this spec and the existing Angular application's design.
4. Report any cases where a PrimeNG component could not faithfully reproduce the spec, and document the fallback approach taken.
5. Do not commit if build or tests fail.

### What Not to Do
- Do not redesign any component layout or color
- Do not change the existing routing configuration
- Do not modify the existing Header or Footer unless specifically instructed
- Do not introduce component abstractions that are not justified by actual reuse
- Do not use `!important` in SCSS (use specificity or `:host` instead)
- Do not use inline styles in templates (use SCSS class bindings)
- Do not create placeholder/lorem-ipsum content — use the data models from the existing application

---

*End of Handoff Document*
