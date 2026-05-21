/**
 * Tokens typo — mobile-first (cible 360–390px).
 *
 * Règles ergonomiques :
 *  - Body : 16px minimum, line-height 1.5
 *  - Métadonnées / labels / liens utilitaires : 14px minimum
 *  - H1 page : 24–26px
 *  - H2 section : 20–22px
 *  - Légendes purement décoratives (copyright carte, etc.) peuvent descendre à 12px.
 */
export const typography = {
  projectKicker: 'text-sm tracking-widest text-text/70 uppercase',
  pageTitle: 'text-[26px] font-extrabold leading-tight tracking-tight text-text',
  pageSubtitle: 'text-base leading-[1.5] text-text/70',
  body: 'text-base leading-[1.5] text-text',
  bodyMuted: 'text-base leading-[1.5] text-text/80',
  meta: 'text-sm leading-snug text-text/60',
  footer: 'text-sm text-surface/70',
  sectionLabel: 'text-sm font-bold tracking-widest text-text uppercase',
  heroQuote: 'text-base font-semibold italic leading-snug text-surface',
  heroAttribution: 'text-sm text-surface/80',
  cardTitle: 'text-base font-bold leading-snug text-text',
  /** Cards carousels home (mobile) — titre lisible, méta proche. */
  carouselTitle: 'text-sm font-semibold leading-snug text-text',
  carouselMeta: 'text-sm leading-snug text-text/60',
  carouselCollectionLabel: 'text-sm font-medium leading-snug text-text/80',
  cardMeta: 'text-sm text-text/60',
  editorialLead: 'text-lg font-bold leading-snug text-text',
  histoireType:
    'text-xs font-bold uppercase tracking-widest text-text/55',
} as const

export const typeScale = [
  { label: 'Display', className: 'text-4xl font-semibold tracking-tight text-text', sizePx: 36, weight: 600 },
  { label: 'H1', className: 'text-[26px] font-extrabold tracking-tight text-text', sizePx: 26, weight: 800 },
  { label: 'H2', className: 'text-xl font-bold tracking-tight text-text', sizePx: 20, weight: 700 },
  { label: 'Body', className: 'text-base leading-[1.5] text-text', sizePx: 16, weight: 400 },
  { label: 'Meta', className: 'text-sm text-text/70', sizePx: 14, weight: 400 },
] as const
