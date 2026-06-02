---
name: Digital Governance Framework
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#784b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#996100'
  on-tertiary-container: '#ffeedd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  2xl: 3rem
  gutter: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 2.5rem
  max-width: 1280px
---

## Brand & Style

The design system is engineered to humanize the complexity of Indian bureaucracy through an interface that feels authoritative yet accessible. It targets a diverse demographic—ranging from urban professionals to rural citizens—requiring a UI that balances **Modern Corporate** efficiency with **Institutional Trust**.

The style is rooted in a refined, minimalist aesthetic. It avoids unnecessary decorative elements, favoring clarity, significant whitespace, and a high-contrast information hierarchy. The emotional goal is to replace "bureaucratic anxiety" with a sense of "digital empowerment." The interface should feel like a premium SaaS product—fast, responsive, and meticulously organized—ensuring that even the most complex benefit applications feel manageable.

## Colors

The palette is designed for maximum legibility and cognitive ease. 

- **Primary Blue (#2563EB):** Represents the stability of the state and the intelligence of the AI. Used for primary actions and brand presence.
- **Secondary Green (#10B981):** Symbolizes growth and progress. Used for positive states and success markers.
- **Surface & Background (#F8FAFC):** A slightly cool-tinted off-white that reduces eye strain while maintaining a crisp, modern feel.
- **Text & Contrast (#0F172A):** Deep navy is used instead of pure black to ensure high contrast that remains "soft" enough for long-form reading on digital displays.

The design system maintains a strict 4.5:1 contrast ratio (WCAG AA) for all text elements to ensure readability for users with varying visual abilities.

## Typography

This design system utilizes **Inter** exclusively to ensure a systematic and utilitarian feel. The font’s tall x-height and excellent legibility at small sizes make it ideal for data-heavy government forms and multilingual support (specifically when paired with Indic-script fallback fonts).

- **Headlines:** Use tight letter spacing (-0.01em to -0.02em) to maintain a modern, "compact" look.
- **Body Text:** Generous line heights are maintained (1.5x) to facilitate easy scanning of policy documents and instruction sets.
- **Multilingual Support:** Layouts must account for the 15-20% vertical expansion common in Hindi and other Indic scripts.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a maximum container width of 1280px to prevent excessive line lengths on ultra-wide monitors.

- **Grid:** A 12-column grid is used for desktop, 6-column for tablet, and a single-column stack for mobile.
- **Rhythm:** An 8pt spacing system (with 4pt increments for fine-tuning) ensures consistent vertical rhythm.
- **Padding:** Content-heavy cards should use a minimum of `lg` (24px) padding to maintain an "airy" and premium feel.
- **Breakpoints:**
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

## Elevation & Depth

This design system uses **Tonal Layers** and **Ambient Shadows** to create a clear sense of hierarchy without overwhelming the user with skeuomorphism.

- **Level 0 (Background):** #F8FAFC. The foundation layer.
- **Level 1 (Cards/Surfaces):** Pure white (#FFFFFF) with a soft, 1px neutral border (#E2E8F0) and a subtle, highly diffused shadow (Y: 2px, Blur: 4px, Opacity: 5%).
- **Level 2 (Modals/Popovers):** Higher elevation with a larger shadow (Y: 10px, Blur: 15px, Opacity: 10%) to draw focus and indicate interactivity.
- **Focus States:** A 2px solid offset ring in Primary Blue (#2563EB) is mandatory for all interactive elements to meet accessibility standards.

## Shapes

The shape language is **Rounded**, aligning with Shadcn/UI standards to provide a friendly yet professional appearance.

- **Standard Elements (Buttons, Inputs):** 0.5rem (8px) corner radius. This conveys a modern, approachable feel while remaining structured.
- **Large Elements (Cards, Containers):** 1rem (16px) corner radius to soften the layout and emphasize the "container" metaphor.
- **Interactive Indicators:** Small badges and tags may use a pill-shape (full rounding) to differentiate them from functional buttons.

## Components

### Buttons
Primary buttons use the Primary Blue background with white text. Hover states should darken the background color by 10%. Secondary buttons use a white background with a neutral border to avoid competing with the main CTA.

### Input Fields
Inputs must have a minimum height of 44px for touch-friendliness. Labels are always visible (not floating) to ensure clarity for non-technical users. Error states use a 1.5px red border with a supporting text message.

### Cards
The primary vehicle for benefit information. Cards must include a clear header, a body section for bulleted info, and an explicit action footer. Use `rounded-lg` for consistency.

### Chips & Badges
Used for status indicators (e.g., "Approved", "Pending"). Use a low-opacity background of the semantic color (e.g., Success Green at 10% opacity) with high-contrast text.

### Progress Steppers
Essential for bureaucratic processes. Steppers must be clearly numbered and include labels. Completed steps use the Secondary Green checkmark, and current steps use the Primary Blue.

### Multilingual Toggle
A prominent, easily accessible component in the navigation bar, allowing users to switch between English, Hindi, and regional languages at any time.