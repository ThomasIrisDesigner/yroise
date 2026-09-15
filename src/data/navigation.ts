/**
 * Arborescence YROISE — Refonte 2026
 * Source : Yroise_Arborescence.tsx (dernière version Thomas)
 * Scope prototype : pages éditoriales Drupal uniquement.
 */

export type NavItemLevel = 'page' | 'section' | 'sub'

export interface NavTreeItem {
  label: string
  level: NavItemLevel
  slug?: string
  external?: boolean
  /** Libellé affiché à droite si `external` (défaut : hors scope / externe) */
  externalNote?: string
}

export interface NavSection {
  id: string
  label: string
  note: string
  kind: 'main' | 'utility'
  items: NavTreeItem[]
}

export const MAIN_NAV_LABELS = [
  'Histoires',
  'Collections',
  'Carte interactive',
  'Jeunesse',
] as const

export const NAV_SECTIONS: NavSection[] = [
  {
    id: 'home',
    label: 'Accueil',
    note: 'Home éditoriale',
    kind: 'main',
    items: [
      { label: 'Hero — image forte + accroche', level: 'section', slug: '/prototype' },
      { label: 'La trouvaille — focus éditorial (lien vers page interne ou externe)', level: 'section' },
      { label: 'Histoires récentes (×6 cards)', level: 'section' },
      { label: 'Collections — carousel', level: 'section' },
      { label: 'Carte interactive — visuel image', level: 'section' },
      { label: 'Jeunesse — bloc discret en bas', level: 'section', slug: '/jeunesse' },
    ],
  },
  {
    id: 'histoires',
    label: 'Histoires',
    note: 'Billets & expositions',
    kind: 'main',
    items: [
      { label: 'Page liste — Tous · Expositions', level: 'page', slug: '/histoires' },
      { label: 'Article', level: 'sub', slug: '/histoires/:slug' },
    ],
  },
  {
    id: 'collections',
    label: 'Collections',
    note: 'Page dédiée + sous-menu accordéon',
    kind: 'main',
    items: [
      { label: 'Tout voir → page liste', level: 'page', slug: '/collections' },
      { label: 'En mer', level: 'sub', slug: '/collections/en-mer' },
      { label: 'Brest et ses environs', level: 'sub', slug: '/collections/brest-et-environs' },
      { label: 'En images', level: 'sub', slug: '/collections/en-images' },
      {
        label: 'Le Finistère et le monde artistique',
        level: 'sub',
        slug: '/collections/finistere-monde-artistique',
      },
      { label: 'Breton Brezhoneg', level: 'sub', slug: '/collections/breton-brezhoneg' },
      { label: 'Livres anciens', level: 'sub', slug: '/collections/livres-anciens' },
      { label: 'Presse ancienne', level: 'sub', slug: '/collections/presse-ancienne' },
      { label: 'Sciences et techniques', level: 'sub', slug: '/collections/sciences-et-techniques' },
    ],
  },
  {
    id: 'carte',
    label: 'Carte interactive',
    note: 'OSM Positron',
    kind: 'main',
    items: [
      { label: 'Carte OSM — épingles cliquables', level: 'page', slug: '/carte' },
    ],
  },
  {
    id: 'jeunesse',
    label: 'Jeunesse',
    note: 'Jeux & parcours pédagogiques',
    kind: 'main',
    items: [
      { label: 'Page liste Jeunesse', level: 'page', slug: '/jeunesse' },
      { label: 'Jeux (puzzles, coloriages...)', level: 'sub', slug: '/jeunesse/jeux' },
      { label: 'Séquences pédagogiques', level: 'sub', slug: '/jeunesse/sequences' },
    ],
  },
  {
    id: 'search',
    label: 'Recherche',
    note: 'Overlay au clic',
    kind: 'utility',
    items: [
      { label: 'Champ de recherche', level: 'page' },
      {
        label: 'Recherche avancée →',
        level: 'sub',
        external: true,
        externalNote: 'lien vers page Gallica',
      },
      {
        label: 'Tutoriel de recherche →',
        level: 'sub',
        external: true,
        externalNote: 'lien vers page Gallica',
      },
      {
        label: 'Bretania · Mille Feuilles',
        level: 'sub',
        external: true,
        externalNote: 'liens externes direct — nouvel onglet',
      },
    ],
  },
]

export const FOOTER_LINKS = [
  { label: 'Nous contacter', slug: '/contact', note: 'lien externe' },
  { label: 'FAQ', slug: '/faq' },
  { label: 'Accessibilité', slug: '/accessibilite' },
  { label: 'Mentions légales · Cookies', slug: '/mentions-legales' },
] as const
