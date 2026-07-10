import type { HistoireSource } from '@/types/histoireContent'

/** Contenu éditorial page jeu / atelier Jeunesse — maquette Figma 117:1217. */
export interface JeunesseActiviteContent {
  chapeau: string
  /** Image hero pleine largeur (optionnelle). */
  heroImageSrc?: string
  heroImageAlt?: string
  heroPlaceholder?: string
  /** Jeu Genially au-dessus de « Présentation » — largeur alignée sur le header. */
  geniallyEmbed?: boolean
  /** URL iframe Genially — fournie par le CMS en production. */
  geniallyEmbedSrc?: string
  presentation: string
  sources: HistoireSource[]
}
