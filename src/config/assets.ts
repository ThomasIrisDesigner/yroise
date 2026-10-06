export const SITE_LOGO = {
  src: '/brand/yroise-logo.svg',
  alt: 'YROISE',
  /** Largeur logo header mobile (mockup) — état initial. Sync: --header-logo-width-expanded */
  widthExpandedPx: 120,
  /** Hauteur logo header mobile expanded — Figma 118:25646 */
  heightExpandedPx: 24,
  /** Largeur logo header — après scroll + responsive <1024. Sync: --header-logo-width-collapsed.
   * Desktop ≥1024 : le logo expanded passe en hauteur 32px (largeur ~163px, proportionnelle). */
  widthCollapsedPx: 96,
} as const

