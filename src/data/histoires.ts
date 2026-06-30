import { LOREM } from '@/data/placeholders'

export type HistoireType = 'curiosite' | 'exposition'

export interface HistoireBillet {
  slug: string
  type: HistoireType
  titre: string
  accroche?: string
  auteur?: string
  fonds?: string
  imageSrc?: string
}

export { CONTENT_TYPE_LABELS as HISTOIRE_TYPE_LABELS } from '@/data/contentTypes'

export const HISTOIRES_LIST_INTRO = {
  chapeau:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
} as const

export const HISTOIRES_LIST: HistoireBillet[] = [
  {
    slug: 'ocean-liberty-1947',
    type: 'curiosite',
    titre: "L'explosion de l'Océan Liberty le 28 juillet 1947",
    accroche:
      "Un navire américain explose en rade de Brest, causant l'une des pires catastrophes maritimes de l'après-guerre. L'histoire oubliée d'un drame qui a marqué la ville en pleine reconstruction.",
    imageSrc: '/images/voilier-brest.png',
  },
  {
    slug: 'marcel-bories-plaques',
    type: 'exposition',
    titre: 'Marcel Boriès, 1428 plaques de verre sur Brest',
    accroche:
      'Du port aux faubourgs, le photographe Marcel Boriès a fixé sur verre la Brest d’avant-guerre. Une exposition reconstitue le regard d’un témoin de la ville disparue.',
  },
  {
    slug: 'dictionnaire-coetanlem',
    type: 'curiosite',
    titre: 'Le Dictionnaire de Coëtanlem',
    accroche:
      'Publié en 1835, ce dictionnaire breton-français reste une référence pour comprendre la langue et la culture bretonnes au XIXe siècle.',
  },
  {
    slug: 'brest-ville-fortifiee',
    type: 'curiosite',
    titre: 'Brest ville fortifiée — plans du XVIIe siècle',
    accroche: LOREM.line,
  },
  {
    slug: 'alguiers-herbiers',
    type: 'exposition',
    titre: "Les alguiers, collections d'herbiers marins",
    accroche: LOREM.line,
  },
  {
    slug: 'dumont-durville-1837',
    type: 'curiosite',
    titre: "L'expédition de Dumont d'Urville, 1837",
    accroche: LOREM.line,
  },
]

export const HISTOIRES_RECENTES = HISTOIRES_LIST.slice(0, 3)

export const HISTOIRES_COLLECTION_EN_MER: HistoireBillet[] = [
  {
    slug: 'dumont-durville-1837',
    type: 'curiosite',
    titre: "L'expédition de Dumont d'Urville",
    accroche: '1837 — trois ans en mer depuis Brest',
  },
  {
    slug: 'cartographie-marine-xviii',
    type: 'curiosite',
    titre: 'La grande cartographie marine du XVIIIe',
    accroche: 'Quand les ingénieurs dessinaient la mer',
  },
]

export const HISTOIRE_DETAIL_DEFAULT = {
  auteur: 'Carole, bibliothécaire',
  corps: LOREM.paragraph,
  sources: [
    { label: "Journal de bord de l'Océan Liberty, 1947", href: '#' },
    { label: 'La une du Télégramme, 29 juillet 1947', href: '#' },
    { label: "Rapport d'enquête maritime, 1948", href: '#' },
  ],
  rebonds: [
    {
      slug: 'marcel-bories-plaques',
      type: 'exposition' as const,
      titre: 'Marcel Boriès, 1428 plaques de verre sur Brest',
    },
    {
      slug: 'dictionnaire-coetanlem',
      type: 'curiosite' as const,
      titre: 'Le Dictionnaire de Coëtanlem',
    },
  ],
}

export function getHistoireBySlug(slug: string): HistoireBillet | undefined {
  return HISTOIRES_LIST.find((h) => h.slug === slug)
}
