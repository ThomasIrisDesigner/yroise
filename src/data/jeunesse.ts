import { LOREM } from '@/data/placeholders'

export type JeunesseType = 'jeu' | 'sequence'

export interface JeunesseActivite {
  slug: string
  type: JeunesseType
  titre: string
  description: string
  /** Méta courte affichée sur la card (âge · durée ou niveau · durée). */
  meta: string
  imageSrc?: string
  imageAlt?: string
}

export { CONTENT_TYPE_LABELS as JEUNESSE_TYPE_LABELS } from '@/data/contentTypes'

export const JEUNESSE_INTRO =
  'Jeux et ateliers pour découvrir le patrimoine de Brest.'

export const JEUNESSE_LIST: JeunesseActivite[] = [
  {
    slug: 'puzzle-rade-brest',
    type: 'jeu',
    titre: 'Le puzzle de la rade de Brest',
    description: LOREM.paragraphLong,
    meta: '6–10 ans · 5 min',
  },
  {
    slug: 'vie-brest-xviii',
    type: 'sequence',
    titre: 'Consectetur adipiscing elit',
    description: LOREM.paragraphLong,
    meta: 'CM1-CM2 · 45 min',
  },
  {
    slug: 'qui-suis-je-portraits',
    type: 'jeu',
    titre: 'Sed do eiusmod tempor incididunt',
    description: LOREM.paragraphLong,
    meta: '8–12 ans · 10 min',
  },
  {
    slug: 'fortifications-vauban',
    type: 'sequence',
    titre: 'Ut enim ad minim veniam',
    description: LOREM.paragraphLong,
    meta: 'CM1-CM2 · 45 min',
  },
  {
    slug: 'coloriage-port-1780',
    type: 'jeu',
    titre: 'Quis nostrud exercitation ullamco',
    description: LOREM.paragraphLong,
    meta: '5–8 ans · 15 min',
  },
  {
    slug: 'memory-collections-marines',
    type: 'jeu',
    titre: 'Laboris nisi ut aliquip ex ea',
    description: LOREM.paragraphLong,
    meta: '6–10 ans · 5 min',
  },
  {
    slug: 'carte-tresor-brest',
    type: 'jeu',
    titre: 'Commodo consequat duis aute irure',
    description: LOREM.paragraphLong,
    meta: '7–11 ans · 20 min',
  },
  {
    slug: 'atelier-gravure',
    type: 'sequence',
    titre: 'Dolor in reprehenderit in voluptate',
    description: LOREM.paragraphLong,
    meta: 'CM2 · 60 min',
  },
  {
    slug: 'devinettes-marins',
    type: 'jeu',
    titre: 'Velit esse cillum dolore eu fugiat',
    description: LOREM.paragraphLong,
    meta: '6–9 ans · 10 min',
  },
  {
    slug: 'parcours-archives',
    type: 'sequence',
    titre: 'Nulla pariatur excepteur sint occaecat',
    description: LOREM.paragraphLong,
    meta: 'Cycle 3 · 45 min',
  },
  {
    slug: 'puzzle-fort-recouvrance',
    type: 'jeu',
    titre: 'Cupidatat non proident sunt in culpa',
    description: LOREM.paragraphLong,
    meta: '8–12 ans · 15 min',
  },
  {
    slug: 'coloriage-navires',
    type: 'jeu',
    titre: 'Qui officia deserunt mollit anim',
    description: LOREM.paragraphLong,
    meta: '5–8 ans · 15 min',
  },
]

export interface JeunesseDetailMeta {
  intro: string
  niveau: string
  duree: string
  documentSource: string
  documentGallicaHref: string
}

export const JEUNESSE_DETAILS: Record<string, JeunesseDetailMeta> = {
  'puzzle-rade-brest': {
    intro:
      'Reconstitue la carte de la rade à partir de fragments d’une carte du XVIIIe siècle. Un jeu proposé par les bibliothécaires de Brest.',
    niveau: 'Cycle 3 (CM1–6e)',
    duree: '10–15 minutes',
    documentSource: 'Carte de la rade, 1776 — Fonds En mer',
    documentGallicaHref: '#',
  },
}

export function getJeunesseBySlug(slug: string): JeunesseActivite | undefined {
  return JEUNESSE_LIST.find((a) => a.slug === slug)
}

export function getJeunesseDetail(slug: string): JeunesseDetailMeta {
  return (
    JEUNESSE_DETAILS[slug] ?? {
      intro: LOREM.paragraph,
      niveau: LOREM.line,
      duree: LOREM.line,
      documentSource: LOREM.short,
      documentGallicaHref: '#',
    }
  )
}
