# Design System Specification: High-Tech Trading & Prop Firm

## 1. Overview & Creative North Star

### Creative North Star: "The Obsidian Pulse"
This design system is built upon the concept of "The Obsidian Pulse"—a high-velocity, high-stakes environment where data is the lifeblood and precision is the primary currency. We avoid the "SaaS template" look by leaning into an editorial, high-tech aesthetic that mimics the feeling of a premium physical cockpit.

The visual language is defined by intense tonal depth, where the "pitch black" void (`surface`) is punctuated by hyper-vibrant neon accents (`primary_container`). We break the rigid grid through intentional "Atmospheric Depth"—using glowing gradients and glassmorphism to create a sense of infinite space, rather than a flat web page. It is professional, authoritative, and unapologetically modern.

---

## 2. Colors

The color palette is engineered for extreme contrast and ocular comfort during long trading sessions.

### Color Tokens
*   **Background / Surface:** `#131313` (The void)
*   **Primary Accent:** `#BFFF00` (Neon Green / `primary_container`)
*   **Secondary (Subtle UI):** `#AED45D` (Muted Lime)
*   **Neutral Surfaces:** From `surface_container_lowest` (`#0E0E0E`) to `surface_container_highest` (`#353535`).

### The "No-Line" Rule
To maintain a bespoke, high-end feel, **1px solid borders are strictly prohibited for sectioning.** Conventional lines make a UI feel "boxy" and cheap. Instead, define boundaries using:
1.  **Background Color Shifts:** Place a `surface_container_low` section directly against a `surface` background.
2.  **Vertical Space:** Use the Spacing Scale (specifically `8`, `10`, or `12`) to allow content to breathe.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
*   **Base:** `surface` (#131313)
*   **Sections:** `surface_container_low` (#1B1B1B)
*   **Interactive Cards:** `surface_container` (#1F1F1F)
*   **Floating Menus:** `surface_bright` (#393939)

### The "Glass & Gradient" Rule
For hero elements and the trading terminal preview, use Glassmorphism. 
*   **Terminal Background:** Use `surface_container` at 60% opacity with a `backdrop-blur` of 20px. 
*   **Atmospheric Glow:** Incorporate subtle radial gradients transitioning from `primary_container` (#BFFF00) to transparent (0% opacity) behind key components to create "visual soul."

---

## 3. Typography

The typography strategy pairs the technical precision of **Inter** with the editorial character of **Plus Jakarta Sans**.

*   **Display & Headlines (Plus Jakarta Sans):** Used for marketing copy and major section titles (e.g., `display-lg` to `headline-sm`). This font provides a contemporary, high-end "editorial" feel that differentiates the brand from standard technical documentation.
*   **Titles & Body (Inter):** Used for functional data, trading pairs, and terminal labels (e.g., `title-md` to `body-sm`). Inter provides maximum legibility at small scales, essential for rapid data processing.

**Hierarchy Note:** Use `on_surface_variant` (#C3CAAC) for secondary body text to ensure a clear visual distinction from primary headings in `on_surface` (#E2E2E2).

---

## 4. Elevation & Depth

We eschew traditional shadows in favor of **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by "stacking." A `surface_container_highest` card placed on a `surface_container_low` background creates a natural lift.
*   **Ambient Shadows:** If a floating element (like a modal) requires a shadow, it must be highly diffused.
    *   *Blur:* 40px - 60px
    *   *Opacity:* 6% - 10%
    *   *Color:* Use a tinted version of `primary` or `surface_tint`.
*   **The "Ghost Border" Fallback:** If accessibility requires a container edge, use a "Ghost Border": `outline_variant` (#434933) at **15% opacity**. Never use 100% opaque lines.
*   **Glassmorphism Depth:** The trading terminal preview must feel like a "HUD." Use a 1px "Ghost Border" at the top edge only to simulate a light catch on a glass pane.

---

## 5. Components

### Buttons
*   **Primary (Action):** `primary_container` (#BFFF00) background with `on_primary_container` (#506E00) text. Roundedness: `full`. No border.
*   **Secondary (Outline):** Background `transparent`, "Ghost Border" using `outline`. Text `primary`.
*   **Tertiary (Ghost):** No background or border. `on_surface` text. Use for "More" or "Cancel" actions.

### Trading Terminal (Custom Component)
*   **Layout:** Use `surface_container_lowest` for the sidebar and `surface_container` for the main chart area.
*   **Separation:** Use 0.5rem (Spacing `2.5`) gutters rather than dividers.
*   **Data Points:** Positive values in `primary_container`, negative values in `error` (#FFB4AB).

### Inputs & Fields
*   **Style:** `surface_container_highest` background. No border.
*   **Focus State:** A subtle 1px "Ghost Border" using `primary` at 40% opacity.
*   **Roundedness:** `md` (0.75rem) to maintain the "sleek" aesthetic.

### Cards & Lists
*   **Rule:** Forbid divider lines. Separate items in a list using a subtle background hover state (`surface_bright` at 10% opacity) or vertical white space `spacing-3`.

---

## 6. Do's and Don'ts

### Do
*   **DO** use extreme vertical spacing (e.g., `16` or `20`) to separate major marketing sections.
*   **DO** use `primary_container` (#BFFF00) sparingly as a "laser pointer" to guide the eye to the CTA.
*   **DO** ensure all glassmorphism elements have a `backdrop-blur` to maintain text legibility over busy chart backgrounds.

### Don't
*   **DON'T** use pure white (#FFFFFF) for body text; use `on_surface` (#E2E2E2) to reduce eye strain in dark mode.
*   **DON'T** use standard 1px borders to separate columns. Use background color shifts.
*   **DON'T** use sharp 90-degree corners. Even for "high-tech" looks, the minimum roundedness should be `sm` (0.25rem).
*   **DON'T** use heavy drop shadows that look like "mud" on a black background. Use tonal shifts instead.

---

## 7. Spacing & Rhythm

All layouts must follow the defined spacing scale. For high-end editorial layouts, lean toward the larger end of the scale (`8`, `10`, `12`) for section margins to create an "expansive" feel.

*   **Component Padding:** Typically `3` or `4`.
*   **Section Gaps:** `16` or `20`.
*   **Grid Gutter:** `6` (1.3rem).

This system is designed to feel like a high-performance instrument. Every pixel must serve the purpose of clarity, speed, and premium positioning.