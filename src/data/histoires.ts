import { LOREM } from '@/data/placeholders'

export type HistoireType = 'curiosite' | 'exposition'

export interface HistoireBillet {
  slug: string
  type: HistoireType
  titre: string
  accroche?: string
  auteur?: string
  fonds?: string
}

export const HISTOIRE_TYPE_LABELS: Record<HistoireType, string> = {
  curiosite: 'Curiosité',
  exposition: 'Exposition',
}

export const HISTOIRES_LIST: HistoireBillet[] = [
  {
    slug: 'ocean-liberty-1947',
    type: 'curiosite',
    titre: "L'explosion de l'Océan Liberty, 28 juillet 1947",
  },
  {
    slug: 'marcel-bories-plaques',
    type: 'exposition',
    titre: 'Marcel Boriès, 1428 plaques de verre sur Brest',
  },
  {
    slug: 'dictionnaire-coetanlem',
    type: 'curiosite',
    titre: 'Le Dictionnaire de Coëtanlem',
  },
  {
    slug: 'brest-ville-fortifiee',
    type: 'curiosite',
    titre: 'Brest ville fortifiée — plans du XVIIe siècle',
  },
  {
    slug: 'alguiers-herbiers',
    type: 'exposition',
    titre: "Les alguiers, collections d'herbiers marins",
  },
  {
    slug: 'dumont-durville-1837',
    type: 'curiosite',
    titre: "L'expédition de Dumont d'Urville, 1837",
  },
]

export const HISTOIRES_RECENTES = HISTOIRES_LIST.slice(0, 3).map((item) => ({
  ...item,
  accroche: LOREM.line,
}))

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
  auteur: 'Carole Le Natur, bibliothécaire — Médiathèques de Brest',
  corps: LOREM.paragraph,
  sources: [
    { label: "Journal de bord de l'Océan Liberty, 1947", href: '#' },
    { label: 'La une du Télégramme, 29 juillet 1947', href: '#' },
    { label: "Rapport d'enquête maritime, 1948", href: '#' },
  ],
  rebonds: [
    {
      slug: 'brest-ville-fortifiee',
      type: 'curiosite' as const,
      titre: 'Brest ville fortifiée — plans du XVIIe siècle',
    },
    {
      slug: 'cable-transatlantique',
      type: 'curiosite' as const,
      titre: 'Le câble transatlantique Brest — Cape Cod',
    },
  ],
}

export function getHistoireBySlug(slug: string): HistoireBillet | undefined {
  return HISTOIRES_LIST.find((h) => h.slug === slug)
}
