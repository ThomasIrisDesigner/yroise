/**
 * Système typographique YROISE — Outfit (UI) + Source Serif 4 (éditorial).
 * Mobile-first ; pas de tailles desktop dans cette passe.
 */
const ui = 'font-outfit'
const editorial = 'font-editorial'

/** Tokens Outfit — display & UI */
const titleXl = `${ui} text-[28px] font-bold leading-tight tracking-tight text-text`
const titleL = `${ui} text-[20px] font-semibold leading-snug text-text`
const titleM = `${ui} text-base font-semibold leading-snug text-text`
const chapeau = `${ui} text-lg font-normal leading-[1.4] text-text`
const label = `${ui} text-xs font-semibold uppercase tracking-[0.08em] text-text`
const meta = `${ui} text-[13px] font-normal leading-snug text-muted`
const editorialCaption = `${ui} text-sm font-normal leading-[1.4] text-muted`
const uiXs = `${ui} text-[11px] font-normal leading-tight text-muted`
/** Liens UI — couleur selon le contexte (fond clair ou sombre). */
const uiLink = `${ui} text-[13px] font-normal leading-snug`

/** Logo texte (header si pas SVG) — hors catalogue DS. */
const logo = `${ui} text-base font-bold text-text`

/** Tokens Source Serif 4 — corps d'article uniquement */
const editorialBody = `${editorial} text-lg font-normal leading-[1.65] text-text`
const editorialMuted = `${editorial} text-lg font-normal leading-[1.65] text-text/70`

export const typography = {
  titleXl,
  titleL,
  titleM,
  chapeau,
  label,
  meta,
  editorialCaption,
  uiXs,
  uiLink,
  logo,
  editorialBody,
  editorialMuted,

  /** Espace vertical entre paragraphes éditoriaux (30px). */
  editorialBodyStack: 'flex flex-col gap-[30px]',

  /** @deprecated Alias — préférer titleXl */
  pageTitle: titleXl,
  /** @deprecated Alias — préférer titleL */
  h2: titleL,
  display: titleXl,
  /** @deprecated Alias — préférer label */
  sectionLabel: label,
  projectKicker: label,
  histoireType: label,
  /** @deprecated Alias — préférer editorialMuted */
  pageSubtitle: editorialMuted,
  editorialLead: titleL,
  body: editorialBody,
  bodyMuted: editorialMuted,
  /** @deprecated Alias — préférer chapeau (articles) ou titleL + text-white (hero) */
  editorialIntro: chapeau,
  /** @deprecated Alias — préférer titleL + text-white */
  heroQuote: titleL,
  /** @deprecated Alias — préférer meta + text-white/60 */
  heroAttribution: meta,
  cardTitle: titleM,
  carouselTitle: titleM,
  carouselMeta: meta,
  carouselCollectionLabel: meta,
  cardMeta: meta,
  institutionalSubtitle: uiXs,
  headerLogo: logo,
  /** @deprecated Alias — préférer uiLink */
  footer: uiLink,
} as const

export const TYPOGRAPHY_FONT_UI = 'Outfit'
export const TYPOGRAPHY_FONT_EDITORIAL = 'Source Serif 4'
export const TYPOGRAPHY_FONT_FAMILY = `${TYPOGRAPHY_FONT_UI} + ${TYPOGRAPHY_FONT_EDITORIAL}`

/** Note affichée sous le groupe Source Serif 4 dans le design system. */
export const TYPOGRAPHY_EDITORIAL_SECTION_NOTE =
  'Source Serif 4 est réservé exclusivement au corps de texte des articles. Tous les autres éléments textuels utilisent Outfit.'

export type TypographyStyleSpec = {
  key: keyof typeof typography
  token: string
  /** Description courte — colonne Usage du design system. */
  usage: string
  label: string
  className: string
  fontFamily: string
  sizePx: number
  weight: number | string
  color: string
  lineHeight: string
  letterSpacing: string
  /** Note affichée sous la fiche token (design system). */
  contextNote?: string
}

type CatalogSpec = Omit<TypographyStyleSpec, 'key' | 'token' | 'className'>

const uiSpecs: CatalogSpec[] = [
  {
    usage: 'H1 des pages intérieures',
    label: 'H1 pages',
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 28,
    weight: 700,
    color: '#18181b',
    lineHeight: '1.25 (leading-tight)',
    letterSpacing: '-0.025em (tracking-tight)',
  },
  {
    usage: 'Accroches éditoriales, H2 de section',
    label: 'Accroches éditoriales, H2',
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 20,
    weight: 600,
    color: '#18181b',
    lineHeight: '1.375 (leading-snug)',
    letterSpacing: 'normal',
  },
  {
    usage: 'Titres de cards et de listes',
    label: 'Titres de cards et listes',
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 16,
    weight: 600,
    color: '#18181b',
    lineHeight: '1.375 (leading-snug)',
    letterSpacing: 'normal',
  },
  {
    usage: 'Intro article, entre le H1 et le bloc auteur/date',
    label: 'Chapeau article (sous H1)',
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 18,
    weight: 400,
    color: '#18181b',
    lineHeight: '1.4',
    letterSpacing: 'normal',
    contextNote:
      "Utilisé uniquement dans les pages article, entre le H1 et le bloc auteur/date. Pas d'italic — distingué du titre par le poids (400 vs 700) et la taille.",
  },
  {
    usage: 'Labels de section, badges de type (CURIOSITÉ, JEU…)',
    label: 'Labels de section, badges',
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 12,
    weight: 600,
    color: '#18181b',
    lineHeight: '1.25 (défaut text-xs)',
    letterSpacing: '0.08em',
  },
  {
    usage: 'Dates, crédits, métadonnées',
    label: 'Dates, métadonnées, métas de cards',
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 13,
    weight: 400,
    color: '#71717a',
    lineHeight: '1.375 (leading-snug)',
    letterSpacing: 'normal',
  },
  {
    usage: 'Légendes sous les images',
    label: 'Légendes photos, crédits',
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 14,
    weight: 400,
    color: '#71717a',
    lineHeight: '1.4',
    letterSpacing: 'normal',
  },
  {
    usage: 'Sous-titre institutionnel dans le header',
    label: 'Sous-titre institutionnel header',
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 11,
    weight: 400,
    color: '#71717a',
    lineHeight: '1.25 (leading-tight)',
    letterSpacing: 'normal',
  },
  {
    usage: 'Liens navigation (footer, panneaux, ressources)',
    label: 'Liens navigation (footer, etc.)',
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 13,
    weight: 400,
    color: 'Contextuelle',
    lineHeight: '1.375 (leading-snug)',
    letterSpacing: 'normal',
  },
]

const editorialSpecs: CatalogSpec[] = [
  {
    usage: 'Corps de texte long — articles uniquement',
    label: 'Corps de texte article',
    fontFamily: TYPOGRAPHY_FONT_EDITORIAL,
    sizePx: 18,
    weight: 400,
    color: '#18181b',
    lineHeight: '1.65',
    letterSpacing: 'normal',
  },
  {
    usage: 'Corps atténué — notes, contexte secondaire',
    label: 'Corps atténué',
    fontFamily: TYPOGRAPHY_FONT_EDITORIAL,
    sizePx: 18,
    weight: 400,
    color: '#18181b à 70 %',
    lineHeight: '1.65',
    letterSpacing: 'normal',
  },
]

function buildCatalogEntry(
  key: TypographyStyleSpec['key'],
  token: string,
  spec: Omit<TypographyStyleSpec, 'key' | 'token' | 'className'>
): TypographyStyleSpec {
  return {
    ...spec,
    key,
    token,
    className: typography[key],
  }
}

/** OUTFIT · Display & UI — ordre du design system */
export const typographyUiCatalog: TypographyStyleSpec[] = (
  [
    ['titleXl', 'title-xl', 0],
    ['titleL', 'title-l', 1],
    ['titleM', 'title-m', 2],
    ['chapeau', 'chapeau', 3],
    ['label', 'label', 4],
    ['meta', 'meta', 5],
    ['editorialCaption', 'editorial-caption', 6],
    ['uiXs', 'ui-xs', 7],
    ['uiLink', 'ui-link', 8],
  ] as const
).map(([key, token, i]) => buildCatalogEntry(key, token, uiSpecs[i]!))

/** SOURCE SERIF 4 · Editorial — ordre du design system */
export const typographyEditorialCatalog: TypographyStyleSpec[] = (
  [
    ['editorialBody', 'editorial-body', 0],
    ['editorialMuted', 'editorial-muted', 1],
  ] as const
).map(([key, token, i]) => buildCatalogEntry(key, token, editorialSpecs[i]!))

/** @deprecated Utiliser typographyUiCatalog + typographyEditorialCatalog */
export const typographyCatalog = [
  ...typographyUiCatalog,
  ...typographyEditorialCatalog,
]

/** @deprecated Utiliser typographyUiCatalog + typographyEditorialCatalog */
export const typographyMockupCatalog = typographyCatalog

/** @deprecated Utiliser typographyCatalog */
export const typeScale = typographyCatalog
  .filter((s) => ['titleXl', 'editorialBody', 'meta', 'titleL'].includes(s.key))
  .map((s) => ({
    label: s.label,
    className: s.className,
    sizePx: s.sizePx,
    weight: typeof s.weight === 'number' ? s.weight : 400,
  }))
