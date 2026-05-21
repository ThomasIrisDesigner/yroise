/**
 * Arborescence YROISE — Refonte 2026
 * Source : brief Thomas + Yroise_Arborescence (TSX / PDF)
 * Scope prototype : pages éditoriales Drupal uniquement.
 */

export type NavItemLevel = 'page' | 'sub'

export interface NavTreeItem {
  label: string
  level: NavItemLevel
  /** Slug route prototype (à compléter au fil des écrans) */
  slug?: string
  /** Lien externe ou Gallica — hors scope visionneuse */
  external?: boolean
}

export interface NavSection {
  id: string
  label: string
  note: string
  /** navigation principale | utilitaire overlay */
  kind: 'main' | 'utility'
  items: NavTreeItem[]
}

export const MAIN_NAV_LABELS = [
  'Histoires de Brest',
  'Collections',
  'La carte',
] as const

export const NAV_SECTIONS: NavSection[] = [
  {
    id: 'home',
    label: 'Accueil',
    note: 'Home éditoriale',
    kind: 'main',
    items: [
      { label: 'Hero — image forte + accroche', level: 'page', slug: '/' },
      { label: 'La trouvaille — focus éditorial', level: 'page' },
      { label: 'Histoires récentes (×3 cards)', level: 'page' },
      { label: 'Collections — carousel', level: 'page' },
      { label: 'La carte — aperçu OSM', level: 'page' },
    ],
  },
  {
    id: 'histoires',
    label: 'Histoires de Brest',
    note: 'Billets & expositions',
    kind: 'main',
    items: [
      { label: 'Page liste — Tous · Expositions', level: 'page', slug: '/histoires' },
      { label: 'Billet individuel', level: 'sub', slug: '/histoires/:slug' },
      { label: 'Exposition (format long)', level: 'sub', slug: '/histoires/expositions/:slug' },
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
    label: 'La carte',
    note: 'OSM Positron',
    kind: 'main',
    items: [
      { label: 'Carte OSM — épingles cliquables', level: 'page', slug: '/carte' },
      { label: 'Mini-fiche document → Gallica', level: 'sub', external: true },
    ],
  },
  {
    id: 'search',
    label: 'Recherche',
    note: 'Overlay au clic',
    kind: 'utility',
    items: [
      { label: 'Champ de recherche', level: 'page' },
      { label: 'Recherche avancée →', level: 'sub', external: true },
      { label: 'Tutoriel de recherche →', level: 'sub', external: true },
      { label: 'Bretania · Mille Feuilles', level: 'sub', external: true },
    ],
  },
]

export const FOOTER_LINKS = [
  { label: 'Qui sommes-nous', slug: '/qui-sommes-nous' },
  { label: 'Informations pratiques', slug: '/informations-pratiques' },
  { label: 'Nous contacter', slug: '/contact' },
  { label: 'Jeux / Parcours pédagogiques', slug: '/jeux-parcours', warning: true },
  { label: 'FAQ', slug: '/faq' },
  { label: 'Accessibilité', slug: '/accessibilite' },
  { label: 'Mentions légales · Cookies', slug: '/mentions-legales' },
] as const

export const COLLECTION_SLUGS = NAV_SECTIONS.find((s) => s.id === 'collections')!.items
  .filter((i) => i.level === 'sub')
  .map((i) => ({ label: i.label, slug: i.slug! }))
