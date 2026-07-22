export const SITE_LOGO = {
  src: '/brand/yroise-logo.svg',
  alt: 'YROISE',
  /** Largeur logo header — état initial (scroll 0) / desktop ≥1024. Sync: --header-logo-width-expanded */
  widthExpandedPx: 120,
  /** Largeur logo header — après scroll + responsive <1024. Sync: --header-logo-width-collapsed */
  widthCollapsedPx: 96,
} as const

export const LOGIN_ILLUSTRATION = {
  /**
   * Mets ton image dans `public/illustrations/login.png`
   * puis laisse cette valeur telle quelle (ou change le chemin si besoin).
   */
  src: '/illustrations/login.png',
  alt: 'YROISE — Bibliothèque numérique patrimoniale de Brest',
} as const

