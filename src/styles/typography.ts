/**
 * Système typographique YROISE — Outfit (UI) + Source Serif 4 (éditorial).
 *
 * CONVENTION D'UNITÉS
 * - Tailles de texte : toujours en `rem` (base 1rem = 16px), jamais en px.
 *   Les échelles Tailwind (text-sm, text-xl, text-2xl…) sont déjà en rem.
 *   Pour une valeur hors échelle : `text-[1.1875rem]`.
 * - Interlettrage : en px (valeurs issues des maquettes Figma).
 * - Interlignage : ratio sans unité (leading-[1.4]) ou échelle Tailwind.
 *
 * SOURCE DE VÉRITÉ UNIQUE
 * La table `TYPOGRAPHY_TOKENS` ci-dessous alimente à la fois :
 * - `typography.<token>` → les classes à utiliser dans les composants ;
 * - la page /design-system → la documentation affichée aux développeurs.
 * Modifier un token ici met à jour le code ET la doc, sans risque de dérive.
 */

export const TYPOGRAPHY_FONT_UI = 'Outfit'
export const TYPOGRAPHY_FONT_EDITORIAL = 'Source Serif 4'
export const TYPOGRAPHY_FONT_FAMILY = `${TYPOGRAPHY_FONT_UI} + ${TYPOGRAPHY_FONT_EDITORIAL}`

const ui = 'font-outfit'
const editorial = 'font-editorial'

const COLOR_TEXT = '#010101'
const COLOR_MUTED = '#71717a'
const COLOR_CONTEXTUAL = 'Contextuelle'

/** Regroupement des tokens dans le design system. */
export type TypographyGroup = 'pages' | 'ui' | 'article'

export interface TypographyToken {
  group: TypographyGroup
  /** Libellé court affiché dans le design system. */
  label: string
  /** Où ce token est utilisé dans le site. */
  usage: string
  /** Classes Tailwind à appliquer. */
  className: string
  fontFamily: string
  /** Taille de base (mobile), en rem. */
  size: string
  weight: number
  color: string
  lineHeight: string
  letterSpacing: string
  /** Précision affichée sous la ligne du design system. */
  note?: string
}

/**
 * Catalogue des tokens réellement utilisés dans le prototype.
 * Ajouter un token ici uniquement s'il est employé dans une maquette validée.
 */
export const TYPOGRAPHY_TOKENS = {
  /* ---------------------------------------------------------------- Pages */

  titleXl: {
    group: 'pages',
    label: 'H1 liste',
    usage: 'H1 pages liste (Histoires, Collections, Jeunesse)',
    className: `${ui} text-[1.75rem] font-bold leading-tight tracking-[0.1px] text-text`,
    fontFamily: TYPOGRAPHY_FONT_UI,
    size: '1.75rem',
    weight: 700,
    color: COLOR_TEXT,
    lineHeight: '1.25',
    letterSpacing: '0.1px',
    note: 'Pages liste : uppercase + tracking 3px (mobile) / 2.5rem + tracking 6px (≥1024px). Triangle TitleH1Triangle à droite.',
  },

  homeSectionLabel: {
    group: 'pages',
    label: 'Rubrique home',
    usage: 'Titres de rubrique home — HISTOIRES, COLLECTIONS, CARTE, JEUNESSE',
    className: `${ui} text-2xl font-semibold uppercase tracking-[2px] leading-tight text-text`,
    fontFamily: TYPOGRAPHY_FONT_UI,
    size: '1.5rem',
    weight: 600,
    color: COLOR_TEXT,
    lineHeight: '1.25',
    letterSpacing: '2px',
  },

  trouvailleLabel: {
    group: 'pages',
    label: 'La trouvaille',
    usage: 'Label « La trouvaille » (home)',
    className: `${ui} text-xl font-semibold leading-[1.4] tracking-[0.4px] text-text`,
    fontFamily: TYPOGRAPHY_FONT_UI,
    size: '1.25rem',
    weight: 600,
    color: COLOR_TEXT,
    lineHeight: '1.4',
    letterSpacing: '0.4px',
  },

  titleL: {
    group: 'pages',
    label: 'Titre L',
    usage: 'Titres de section et accroches (ex. bloc carte home)',
    className: `${ui} text-xl font-semibold leading-snug text-text`,
    fontFamily: TYPOGRAPHY_FONT_UI,
    size: '1.25rem',
    weight: 600,
    color: COLOR_TEXT,
    lineHeight: '1.375',
    letterSpacing: 'normal',
  },

  sectionTitleRebond: {
    group: 'pages',
    label: 'Titre rebonds',
    usage: 'Titre « Nos autres histoires » (fond sombre)',
    className: `${ui} text-[1.1875rem] font-semibold uppercase tracking-[1px] md:text-2xl lg:text-[2rem]`,
    fontFamily: TYPOGRAPHY_FONT_UI,
    size: '1.1875rem',
    weight: 600,
    color: COLOR_CONTEXTUAL,
    lineHeight: '1.25',
    letterSpacing: '1px',
    note: '≥768px : 1.5rem · ≥1024px : 2rem. Ornement SectionTitleOrnament en glaz-700 en dessous.',
  },

  sectionTitleSm: {
    group: 'pages',
    label: 'Titre compact',
    usage: 'Titres de section compacts — Sources & références',
    className: `${ui} text-sm font-semibold uppercase tracking-[1px]`,
    fontFamily: TYPOGRAPHY_FONT_UI,
    size: '0.875rem',
    weight: 600,
    color: COLOR_CONTEXTUAL,
    lineHeight: '1.25',
    letterSpacing: '1px',
  },

  /* ------------------------------------------------------------- UI/cards */

  cardTitleEditorial: {
    group: 'ui',
    label: 'Titre card',
    usage: 'Titres des cards Histoires, Collections et rebonds',
    className: `${ui} text-[1.375rem] font-medium leading-[1.875rem] tracking-[0.1px] text-text`,
    fontFamily: TYPOGRAPHY_FONT_UI,
    size: '1.375rem',
    weight: 500,
    color: COLOR_TEXT,
    lineHeight: '1.875rem',
    letterSpacing: '0.1px',
    note: 'Troncature à 2 lignes (line-clamp-2) dans les carousels.',
  },

  cardExcerpt: {
    group: 'ui',
    label: 'Extrait',
    usage: 'Extraits de cards et accroche de La trouvaille',
    className: `${ui} text-base font-normal leading-6 tracking-[0.1px] text-text`,
    fontFamily: TYPOGRAPHY_FONT_UI,
    size: '1rem',
    weight: 400,
    color: COLOR_TEXT,
    lineHeight: '1.5rem',
    letterSpacing: '0.1px',
    note: 'Troncature à 2 lignes en carousel, 4 lignes en page liste.',
  },

  meta: {
    group: 'ui',
    label: 'Meta',
    usage: 'Métadonnées — footer, recherche, références',
    className: `${ui} text-[0.8125rem] font-normal leading-snug text-muted`,
    fontFamily: TYPOGRAPHY_FONT_UI,
    size: '0.8125rem',
    weight: 400,
    color: COLOR_MUTED,
    lineHeight: '1.375',
    letterSpacing: 'normal',
  },

  uiLink: {
    group: 'ui',
    label: 'Lien UI',
    usage: 'Liens de navigation du footer',
    className: `${ui} text-[0.8125rem] font-normal leading-snug`,
    fontFamily: TYPOGRAPHY_FONT_UI,
    size: '0.8125rem',
    weight: 400,
    color: COLOR_CONTEXTUAL,
    lineHeight: '1.375',
    letterSpacing: 'normal',
    note: 'Sans classe de couleur : ajouter text-on-dark sur fond sombre.',
  },

  uiXs: {
    group: 'ui',
    label: 'UI xs',
    usage: 'Microcopy — références, légendes secondaires',
    className: `${ui} text-[0.6875rem] font-normal leading-tight text-muted`,
    fontFamily: TYPOGRAPHY_FONT_UI,
    size: '0.6875rem',
    weight: 400,
    color: COLOR_MUTED,
    lineHeight: '1.25',
    letterSpacing: 'normal',
  },

  editorialCaption: {
    group: 'ui',
    label: 'Légende-titre',
    usage: 'Légende-titre sous les figures GMB',
    className: `${ui} text-sm font-normal leading-[1.5] tracking-[0.1px] text-muted`,
    fontFamily: TYPOGRAPHY_FONT_UI,
    size: '0.875rem',
    weight: 400,
    color: COLOR_MUTED,
    lineHeight: '1.5',
    letterSpacing: '0.1px',
  },

  /* -------------------------------------------------------- Pages article */

  articleRubrique: {
    group: 'article',
    label: 'Rubrique',
    usage: "Fil d'Ariane rubrique (composant SectionRubriqueLink)",
    className: `${ui} text-xs font-bold uppercase tracking-[3px] leading-[1.4] text-glaz-700`,
    fontFamily: TYPOGRAPHY_FONT_UI,
    size: '0.75rem',
    weight: 700,
    color: '#2D7D8A',
    lineHeight: '1.4',
    letterSpacing: '3px',
  },

  articleTitle: {
    group: 'article',
    label: 'H1 article',
    usage: 'H1 des pages article (billet, exposition, collection, jeu)',
    className: `${ui} text-[2rem] font-semibold leading-[1.2] tracking-[0.1px] text-text md:text-[2.5rem]`,
    fontFamily: TYPOGRAPHY_FONT_UI,
    size: '2rem',
    weight: 600,
    color: COLOR_TEXT,
    lineHeight: '1.2',
    letterSpacing: '0.1px',
    note: '≥768px : 2.5rem.',
  },

  chapeau: {
    group: 'article',
    label: 'Chapô',
    usage: 'Chapô entre le H1 et le bloc auteur/date',
    className: `${ui} text-[1.1875rem] font-normal leading-[1.4] tracking-[0.1px] text-text`,
    fontFamily: TYPOGRAPHY_FONT_UI,
    size: '1.1875rem',
    weight: 400,
    color: COLOR_TEXT,
    lineHeight: '1.4',
    letterSpacing: '0.1px',
    note: "Pas d'italique — distingué du titre par la graisse (400 vs 600).",
  },

  articleMetaCaps: {
    group: 'article',
    label: 'Meta caps',
    usage: 'Byline auteur, crédit figure, légende type',
    className: `${ui} text-xs font-normal uppercase tracking-[2px] leading-[1.5] text-text`,
    fontFamily: TYPOGRAPHY_FONT_UI,
    size: '0.75rem',
    weight: 400,
    color: COLOR_TEXT,
    lineHeight: '1.5',
    letterSpacing: '2px',
    note: 'Byline : « PAR » et le rôle en regular, le prénom en medium.',
  },

  articleHeading: {
    group: 'article',
    label: 'Intertitre',
    usage: "Intertitres dans le corps d'article",
    className: `${ui} text-2xl font-bold leading-[1.5] tracking-[0.5px] text-text`,
    fontFamily: TYPOGRAPHY_FONT_UI,
    size: '1.5rem',
    weight: 700,
    color: COLOR_TEXT,
    lineHeight: '1.5',
    letterSpacing: '0.5px',
  },

  editorialBody: {
    group: 'article',
    label: 'Corps',
    usage: 'Corps de texte des billets — seul usage de Source Serif 4',
    className: `${editorial} text-[1.1875rem] font-normal leading-[1.6] text-text`,
    fontFamily: TYPOGRAPHY_FONT_EDITORIAL,
    size: '1.1875rem',
    weight: 400,
    color: COLOR_TEXT,
    lineHeight: '1.6',
    letterSpacing: 'normal',
    note: 'Empiler les blocs avec typography.editorialBodyStack (gap 24px).',
  },

  editorialQuote: {
    group: 'article',
    label: 'Citation',
    usage: 'Citation éditoriale (bloc GMB)',
    className: `${editorial} text-xl font-semibold italic leading-[1.6] text-text`,
    fontFamily: TYPOGRAPHY_FONT_EDITORIAL,
    size: '1.25rem',
    weight: 600,
    color: COLOR_TEXT,
    lineHeight: '1.6',
    letterSpacing: 'normal',
    note: 'Semibold italique.',
  },
} as const satisfies Record<string, TypographyToken>

export type TypographyTokenName = keyof typeof TYPOGRAPHY_TOKENS

/** Utilitaires typographiques sans équivalent « token » documenté. */
const utilities = {
  /** Espace vertical entre blocs éditoriaux (24px). */
  editorialBodyStack: 'flex flex-col gap-6',
} as const

/**
 * Classes à utiliser dans les composants : `className={typography.cardExcerpt}`.
 * Dérivé de TYPOGRAPHY_TOKENS — ne pas définir de classes typo ailleurs.
 */
export const typography = {
  ...(Object.fromEntries(
    Object.entries(TYPOGRAPHY_TOKENS).map(([name, token]) => [name, token.className])
  ) as { [K in TypographyTokenName]: string }),
  ...utilities,
}

/** Tokens d'un groupe, dans l'ordre de déclaration — utilisé par /design-system. */
export function typographyTokensByGroup(
  group: TypographyGroup
): Array<TypographyToken & { name: TypographyTokenName }> {
  return (
    Object.entries(TYPOGRAPHY_TOKENS) as Array<[TypographyTokenName, TypographyToken]>
  )
    .filter(([, token]) => token.group === group)
    .map(([name, token]) => ({ ...token, name }))
}
