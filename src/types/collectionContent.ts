/** Contenu éditorial page collection — maquette Figma 115:516. */

export interface CollectionApercuItem {
  caption: string
  meta?: string
  linkLabel?: string
  linkHref?: string
  imageSrc?: string
}

export interface CollectionDetailContent {
  chapeau: string
  heroCaption: string
  heroMeta?: string
  heroLinkLabel?: string
  heroLinkHref?: string
  presentationBody: string
  apercuItems: CollectionApercuItem[]
  gallicaHref: string
}
