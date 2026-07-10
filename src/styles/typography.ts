/**
 * Système typographique YROISE — Outfit (UI) + Source Serif 4 (éditorial).
 * Mobile-first ; tailles responsive sur les titres article (md+).
 */
const ui = 'font-outfit'
const editorial = 'font-editorial'

/** Tokens Outfit — display & UI */
const titleXl = `${ui} text-[28px] font-bold leading-tight tracking-[0.1px] text-text`
/** H1 billet article — 2rem mobile · 2.5rem desktop · lh 1.2. */
const articleTitle = `${ui} text-[2rem] font-semibold leading-[1.2] tracking-[0.1px] text-text md:text-[2.5rem]`
const titleL = `${ui} text-[20px] font-semibold leading-snug text-text`
/** Intertitre corps d'article — 1.5rem · lh 1.5 · ls 0.5px. */
const articleHeading = `${ui} text-2xl font-bold leading-[1.5] tracking-[0.5px] text-text`
const titleM = `${ui} text-base font-medium leading-[1.3] tracking-[0.1px] text-text`
const titleMCard = `${titleM} line-clamp-3`
const cardTitleEditorial = `${ui} text-[1.375rem] font-medium leading-[1.875rem] tracking-[0.1px] text-text`
/** Chapô article — 1.1875rem · lh 1.4 · ls 0.1px. */
const chapeau = `${ui} text-[1.1875rem] font-normal leading-[1.4] tracking-[0.1px] text-text`
const label = `${ui} text-base font-semibold uppercase tracking-[2px] text-text`
/** Titres de rubrique home — HISTOIRES, COLLECTIONS… (24px). */
const homeSectionLabel = `${ui} text-[24px] font-semibold uppercase tracking-[2px] leading-tight text-text`
/** Sous-titre home hors menu — legacy aside (22px). Préférer trouvailleLabel pour La trouvaille. */
const homeSectionAsideLabel = `${ui} text-[22px] font-semibold uppercase tracking-[2px] leading-tight text-text`
/** Rubrique La trouvaille — label (16px semibold, tracking 0.32px). */
const trouvailleLabel = `${ui} text-base font-semibold leading-[1.4] tracking-[0.32px] text-text`
/** Accroche La trouvaille — sous le label (16px regular, lh 1.55). */
const trouvailleChapeau = `${ui} text-base font-normal leading-[1.55] text-text`
const meta = `${ui} text-[13px] font-normal leading-snug text-muted`
const cardExcerpt = `${ui} text-base font-normal leading-6 tracking-[0.1px] text-text`
/** Légende-titre figure — 0.875rem · lh 1.5 · ls 0.1px. */
const editorialCaption = `${ui} text-sm font-normal leading-[1.5] tracking-[0.1px] text-muted`
const uiXs = `${ui} text-[11px] font-normal leading-tight text-muted`
/** Fil d'Ariane rubrique article — 0.75rem · lh 1.4 · ls 3px. */
const articleRubrique = `${ui} text-xs font-bold uppercase tracking-[3px] leading-[1.4] text-glaz-700`
/** Meta article en capitales — auteur, légende type (0.75rem · lh 1.5 · ls 2px). */
const articleMetaCaps = `${ui} text-xs font-normal uppercase tracking-[2px] leading-[1.5] text-text`
/** Byline article — alias sémantique de articleMetaCaps. */
const articleByline = articleMetaCaps
/** Titres de section compacts — sources, rebonds (14px, tracking 1px). */
const sectionTitleSm = `${ui} text-sm font-semibold uppercase tracking-[1px]`
/** Titre section rebonds — 1.1875rem · md 1.5rem · lg 2rem. */
const sectionTitleRebond = `${ui} text-[1.1875rem] font-semibold uppercase tracking-[1px] md:text-2xl lg:text-[2rem]`
/** Liens UI — couleur selon le contexte (fond clair ou sombre). */
const uiLink = `${ui} text-[13px] font-normal leading-snug`

/** Logo texte (header si pas SVG) — hors catalogue DS. */
const logo = `${ui} text-base font-bold text-text`

/** Tokens Source Serif 4 — corps d'article */
const editorialBody = `${editorial} text-[1.1875rem] font-normal leading-[1.6] text-text`
const editorialMuted = `${editorial} text-[1.1875rem] font-normal leading-[1.6] text-text/70`
/** Citation éditoriale — 1.25rem · lh 1.6 · semibold italic. */
const editorialQuote = `${editorial} text-xl font-semibold italic leading-[1.6] text-text`

export const typography = {
  titleXl,
  articleTitle,
  titleL,
  titleM,
  cardTitleEditorial,
  chapeau,
  label,
  homeSectionLabel,
  homeSectionAsideLabel,
  trouvailleLabel,
  trouvailleChapeau,
  meta,
  cardExcerpt,
  editorialCaption,
  uiXs,
  articleRubrique,
  articleByline,
  articleMetaCaps,
  articleHeading,
  sectionTitleSm,
  sectionTitleRebond,
  uiLink,
  logo,
  editorialBody,
  editorialMuted,
  editorialQuote,

  /** Espace vertical entre blocs éditoriaux (24px). */
  editorialBodyStack: 'flex flex-col gap-6',

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
  cardTitle: titleMCard,
  carouselTitle: cardTitleEditorial,
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
    color: '#010101',
    lineHeight: '1.25 (leading-tight)',
    letterSpacing: '0.1px',
  },
  {
    usage: 'Accroches éditoriales, H2 de section',
    label: 'Accroches éditoriales, H2',
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 20,
    weight: 600,
    color: '#010101',
    lineHeight: '1.375 (leading-snug)',
    letterSpacing: 'normal',
  },
  {
    usage: 'Titres de cards et de listes',
    label: 'Titres de cards et listes',
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 16,
    weight: 500,
    color: '#010101',
    lineHeight: '1.3',
    letterSpacing: '0.1px',
    contextNote:
      'Listes et cards compactes. Troncature à 3 lignes (line-clamp-3). Alias cardTitle.',
  },
  {
    usage: 'Titres des cards Histoires et Jeunesse (carousel home)',
    label: 'Titre card éditoriale',
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 22,
    weight: 500,
    color: '#010101',
    lineHeight: '1.875rem (leading-[1.875rem])',
    letterSpacing: '0.1px',
    contextNote:
      'Troncature à 2 lignes (line-clamp-2) dans le carousel. Alias carouselTitle.',
  },
  {
    usage: 'Intro article, entre le H1 et le bloc auteur/date',
    label: 'Chapeau article (sous H1)',
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 19,
    weight: 400,
    color: '#010101',
    lineHeight: '1.4',
    letterSpacing: '0.1px',
    contextNote:
      "Utilisé uniquement dans les pages article, entre le H1 et le bloc auteur/date. Pas d'italic — distingué du titre par le poids (400 vs 600) et la taille.",
  },
  {
    usage: 'Labels de section (HISTOIRES, COLLECTIONS…)',
    label: 'Labels de section',
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 16,
    weight: 600,
    color: '#010101',
    lineHeight: '1.25',
    letterSpacing: '2px',
    contextNote:
      'Titres de rubrique sur la home et les pages liste. Voir section DS « Labels de section ».',
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
    usage: 'Texte sous le titre des cards Histoires',
    label: 'Extrait card Histoires',
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 16,
    weight: 400,
    color: '#010101',
    lineHeight: '1.5rem (leading-6)',
    letterSpacing: '0.1px',
    contextNote: 'Troncature à 2 lignes (line-clamp-2) sur les cards du carousel.',
  },
  {
    usage: "Légende-titre sous les figures d'article",
    label: 'Légende-titre figure',
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 14,
    weight: 400,
    color: '#010101',
    lineHeight: '1.5',
    letterSpacing: '0.1px',
    contextNote:
      "Couleur text sur les légendes GMB. Fil d'Ariane pages liste : appliquer la couleur rubrique — voir SectionListHeader.",
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
    sizePx: 19,
    weight: 400,
    color: '#010101',
    lineHeight: '1.6',
    letterSpacing: 'normal',
  },
  {
    usage: 'Corps atténué — notes, contexte secondaire',
    label: 'Corps atténué',
    fontFamily: TYPOGRAPHY_FONT_EDITORIAL,
    sizePx: 19,
    weight: 400,
    color: '#010101 à 70 %',
    lineHeight: '1.6',
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
    ['cardTitleEditorial', 'card-title-editorial', 3],
    ['chapeau', 'chapeau', 4],
    ['label', 'label', 5],
    ['meta', 'meta', 6],
    ['cardExcerpt', 'card-excerpt', 7],
    ['editorialCaption', 'editorial-caption', 8],
    ['uiXs', 'ui-xs', 9],
    ['uiLink', 'ui-link', 10],
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
