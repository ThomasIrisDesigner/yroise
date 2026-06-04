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
  headerLogo: 'text-base font-extrabold tracking-wider text-secondary',
  institutionalSubtitle: 'text-[10px] leading-tight text-text/50',
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
  /** Échelle documentaire — réservée phase DA / pages longues. */
  display: 'text-4xl font-semibold tracking-tight text-text',
  h2: 'text-xl font-bold tracking-tight text-text',
} as const

/** Police par défaut du prototype (pas de fonte custom chargée). */
export const TYPOGRAPHY_FONT_FAMILY =
  'Système (ui-sans-serif, sans-serif)'

export type TypographyStyleSpec = {
  key: keyof typeof typography
  label: string
  className: string
  /**
   * Présent dans le mockup mobile (écrans wireframe sous PrototypeLayout).
   * Exclut : page Design System, barre « Thomas Iris. Designer », login.
   */
  usedInMockup: boolean
  fontFamily: string
  sizePx: number
  weight: number | string
  color: string
  lineHeight: string
  letterSpacing: string
}

export const typographyCatalog: TypographyStyleSpec[] = [
  {
    key: 'headerLogo',
    label: 'Logo header (texte — remplacé par SVG)',
    className: typography.headerLogo,
    usedInMockup: false,
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    sizePx: 16,
    weight: 800,
    color: 'secondary (slate-700)',
    lineHeight: 'normal (hérité)',
    letterSpacing: '0.05em (tracking-wider)',
  },
  {
    key: 'institutionalSubtitle',
    label: 'Sous-titre institutionnel header',
    className: typography.institutionalSubtitle,
    usedInMockup: true,
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    sizePx: 10,
    weight: 400,
    color: 'text/50 (slate-800 à 50 %)',
    lineHeight: '1.25 (leading-tight)',
    letterSpacing: 'normal',
  },
  {
    key: 'pageTitle',
    label: 'Titre de page (H1)',
    className: typography.pageTitle,
    usedInMockup: true,
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    sizePx: 26,
    weight: 800,
    color: 'text (slate-800)',
    lineHeight: '1.25 (leading-tight)',
    letterSpacing: '-0.025em (tracking-tight)',
  },
  {
    key: 'pageSubtitle',
    label: 'Chapô / sous-titre de page',
    className: typography.pageSubtitle,
    usedInMockup: true,
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    sizePx: 16,
    weight: 400,
    color: 'text/70 (slate-800 à 70 %)',
    lineHeight: '1.5',
    letterSpacing: 'normal',
  },
  {
    key: 'sectionLabel',
    label: 'Label de section',
    className: typography.sectionLabel,
    usedInMockup: true,
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    sizePx: 14,
    weight: 700,
    color: 'text (slate-800)',
    lineHeight: '1.25 (défaut text-sm)',
    letterSpacing: '0.1em (tracking-widest)',
  },
  {
    key: 'editorialLead',
    label: 'Accroche éditoriale',
    className: typography.editorialLead,
    usedInMockup: true,
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    sizePx: 18,
    weight: 700,
    color: 'text (slate-800)',
    lineHeight: '1.375 (leading-snug)',
    letterSpacing: 'normal',
  },
  {
    key: 'body',
    label: 'Corps de texte',
    className: typography.body,
    usedInMockup: true,
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    sizePx: 16,
    weight: 400,
    color: 'text (slate-800)',
    lineHeight: '1.5',
    letterSpacing: 'normal',
  },
  {
    key: 'bodyMuted',
    label: 'Corps atténué',
    className: typography.bodyMuted,
    usedInMockup: true,
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    sizePx: 16,
    weight: 400,
    color: 'text/80 (slate-800 à 80 %)',
    lineHeight: '1.5',
    letterSpacing: 'normal',
  },
  {
    key: 'heroQuote',
    label: 'Citation hero home',
    className: typography.heroQuote,
    usedInMockup: true,
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    sizePx: 16,
    weight: 600,
    color: 'surface (blanc)',
    lineHeight: '1.375 (leading-snug)',
    letterSpacing: 'normal',
  },
  {
    key: 'heroAttribution',
    label: 'Attribution hero home',
    className: typography.heroAttribution,
    usedInMockup: true,
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    sizePx: 14,
    weight: 400,
    color: 'surface/80 (blanc à 80 %)',
    lineHeight: '1.25 (défaut text-sm)',
    letterSpacing: 'normal',
  },
  {
    key: 'cardTitle',
    label: 'Titre de card / liste',
    className: typography.cardTitle,
    usedInMockup: true,
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    sizePx: 16,
    weight: 700,
    color: 'text (slate-800)',
    lineHeight: '1.375 (leading-snug)',
    letterSpacing: 'normal',
  },
  {
    key: 'cardMeta',
    label: 'Méta de card',
    className: typography.cardMeta,
    usedInMockup: true,
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    sizePx: 14,
    weight: 400,
    color: 'text/60 (slate-800 à 60 %)',
    lineHeight: '1.25 (défaut text-sm)',
    letterSpacing: 'normal',
  },
  {
    key: 'carouselTitle',
    label: 'Titre carousel Histoires',
    className: typography.carouselTitle,
    usedInMockup: true,
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    sizePx: 14,
    weight: 600,
    color: 'text (slate-800)',
    lineHeight: '1.375 (leading-snug)',
    letterSpacing: 'normal',
  },
  {
    key: 'carouselMeta',
    label: 'Méta carousel Histoires',
    className: typography.carouselMeta,
    usedInMockup: true,
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    sizePx: 14,
    weight: 400,
    color: 'text/60 (slate-800 à 60 %)',
    lineHeight: '1.375 (leading-snug)',
    letterSpacing: 'normal',
  },
  {
    key: 'carouselCollectionLabel',
    label: 'Label carousel Collections',
    className: typography.carouselCollectionLabel,
    usedInMockup: true,
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    sizePx: 14,
    weight: 500,
    color: 'text/80 (slate-800 à 80 %)',
    lineHeight: '1.375 (leading-snug)',
    letterSpacing: 'normal',
  },
  {
    key: 'histoireType',
    label: 'Type d’histoire (badge)',
    className: typography.histoireType,
    usedInMockup: false,
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    sizePx: 12,
    weight: 700,
    color: 'text/55 (slate-800 à 55 %)',
    lineHeight: '1.25 (défaut text-xs)',
    letterSpacing: '0.1em (tracking-widest)',
  },
  {
    key: 'meta',
    label: 'Méta générique',
    className: typography.meta,
    usedInMockup: false,
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    sizePx: 14,
    weight: 400,
    color: 'text/60 (slate-800 à 60 %)',
    lineHeight: '1.375 (leading-snug)',
    letterSpacing: 'normal',
  },
  {
    key: 'footer',
    label: 'Liens footer',
    className: typography.footer,
    usedInMockup: false,
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    sizePx: 14,
    weight: 400,
    color: 'surface/70 (blanc à 70 %)',
    lineHeight: '1.25 (défaut text-sm)',
    letterSpacing: 'normal',
  },
  {
    key: 'projectKicker',
    label: 'Kicker projet (login)',
    className: typography.projectKicker,
    usedInMockup: false,
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    sizePx: 14,
    weight: 400,
    color: 'text/70 (slate-800 à 70 %)',
    lineHeight: '1.25 (défaut text-sm)',
    letterSpacing: '0.1em (tracking-widest)',
  },
  {
    key: 'h2',
    label: 'Titre H2',
    className: typography.h2,
    usedInMockup: false,
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    sizePx: 20,
    weight: 700,
    color: 'text (slate-800)',
    lineHeight: '1.25 (défaut text-xl)',
    letterSpacing: '-0.025em (tracking-tight)',
  },
  {
    key: 'display',
    label: 'Display',
    className: typography.display,
    usedInMockup: false,
    fontFamily: TYPOGRAPHY_FONT_FAMILY,
    sizePx: 36,
    weight: 600,
    color: 'text (slate-800)',
    lineHeight: '1.11 (défaut text-4xl)',
    letterSpacing: '-0.025em (tracking-tight)',
  },
]

/** Styles réellement utilisés dans le mockup mobile (wireframes). */
export const typographyMockupCatalog = typographyCatalog.filter(
  (style) => style.usedInMockup
)

/** @deprecated Utiliser typographyCatalog — conservé pour compatibilité. */
export const typeScale = typographyCatalog
  .filter((s) => ['pageTitle', 'body', 'meta', 'display', 'h2'].includes(s.key))
  .map((s) => ({
    label: s.label,
    className: s.className,
    sizePx: s.sizePx,
    weight: typeof s.weight === 'number' ? s.weight : 400,
  }))
