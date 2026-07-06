import type { HistoireSource } from '@/types/histoireContent'

/** Contenu éditorial page jeu / atelier Jeunesse — maquette Figma 117:1217. */
export interface JeunesseActiviteContent {
  chapeau: string
  heroImageSrc?: string
  heroImageAlt?: string
  presentation: string
  sources: HistoireSource[]
}
