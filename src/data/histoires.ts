import { LOREM } from '@/data/placeholders'

export interface HistoireBillet {
  slug: string
  titre: string
  accroche: string
  categorie: 'billet' | 'exposition'
}

export const HISTOIRES_RECENTES: HistoireBillet[] = [
  { slug: 'histoire-1', titre: LOREM.short, accroche: LOREM.line, categorie: 'billet' },
  { slug: 'histoire-2', titre: LOREM.short, accroche: LOREM.line, categorie: 'billet' },
  { slug: 'histoire-3', titre: LOREM.short, accroche: LOREM.line, categorie: 'exposition' },
]

export const HISTOIRES_COLLECTION_EN_MER: HistoireBillet[] = [
  { slug: 'histoire-4', titre: LOREM.short, accroche: LOREM.line, categorie: 'billet' },
  { slug: 'histoire-5', titre: LOREM.short, accroche: LOREM.line, categorie: 'billet' },
]
