import type { HistoireBillet } from '@/data/histoires'
import { HISTOIRES_COLLECTION_EN_MER } from '@/data/histoires'
import { LOREM } from '@/data/placeholders'

export interface FeaturedDocument {
  titre: string
  fonds: string
}

export interface CollectionDetailContent {
  intro: string
  featuredDocuments: FeaturedDocument[]
  gallicaLabel: string
  histoiresAssociees: HistoireBillet[]
}

const FEATURED_DOCS: FeaturedDocument[] = [
  { titre: LOREM.short, fonds: LOREM.line },
  { titre: LOREM.short, fonds: LOREM.line },
  { titre: LOREM.short, fonds: LOREM.line },
]

export const COLLECTION_DETAILS: Record<string, CollectionDetailContent> = {
  'en-mer': {
    intro: LOREM.paragraph,
    featuredDocuments: FEATURED_DOCS,
    gallicaLabel: 'Voir tous les documents',
    histoiresAssociees: HISTOIRES_COLLECTION_EN_MER,
  },
}

export function getCollectionDetail(slug: string): CollectionDetailContent | null {
  if (COLLECTION_DETAILS[slug]) return COLLECTION_DETAILS[slug]
  return null
}

export function getDefaultCollectionDetail(): CollectionDetailContent {
  return {
    intro: LOREM.paragraph,
    featuredDocuments: [FEATURED_DOCS[0]],
    gallicaLabel: 'Voir tous les documents',
    histoiresAssociees: [],
  }
}
