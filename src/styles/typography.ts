export const typography = {
  projectKicker: 'text-xs tracking-widest text-text/70 uppercase',
  pageTitle: 'text-2xl font-semibold tracking-tight text-text',
  pageSubtitle: 'text-sm text-text/70',
  footer: 'text-xs text-text/50',
  sectionLabel: 'text-xs font-bold tracking-widest text-text uppercase',
  heroQuote: 'text-sm font-semibold italic leading-snug text-surface',
  heroAttribution: 'text-xs text-surface/70',
  cardTitle: 'text-sm font-bold leading-snug text-text',
  /** Cards carousels home (wireframe mobile) */
  carouselTitle: 'text-[11px] font-medium leading-tight text-text',
  carouselMeta: 'text-[10px] leading-tight text-text/55',
  carouselCollectionLabel: 'text-[11px] leading-tight text-text/70',
  cardMeta: 'text-xs text-text/60',
  editorialLead: 'text-sm font-bold leading-snug text-text',
  histoireType:
    'text-[10px] font-bold uppercase tracking-widest text-text/55',
} as const

export const typeScale = [
  { label: 'Display', className: 'text-4xl font-semibold tracking-tight text-text', sizePx: 36, weight: 600 },
  { label: 'H1', className: 'text-2xl font-semibold tracking-tight text-text', sizePx: 24, weight: 600 },
  { label: 'H2', className: 'text-xl font-semibold tracking-tight text-text', sizePx: 20, weight: 600 },
  { label: 'Body', className: 'text-sm text-text', sizePx: 14, weight: 400 },
  { label: 'Small', className: 'text-xs text-text/70', sizePx: 12, weight: 400 },
] as const

