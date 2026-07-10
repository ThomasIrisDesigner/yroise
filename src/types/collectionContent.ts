import type { HistoireContentBlock } from '@/types/histoireContent'

/** Contenu éditorial page collection — maquette Figma 115:516. */

export interface CollectionDetailContent {
  chapeau: string
  heroCaption: string
  heroMeta?: string
  heroLinkLabel?: string
  heroLinkHref?: string
  blocks: HistoireContentBlock[]
  gallicaHref: string
}
