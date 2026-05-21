import type { HistoireBillet } from '@/data/histoires'

/** Blocs éditoriaux Drupal GMB — modèle page Billet (wireframe v2). */

export type HistoireContentBlock =
  | { type: 'paragraph'; text: string }
  | {
      type: 'blockquote'
      quote: string
      attribution: string
    }
  | {
      type: 'image'
      placeholder: string
      caption: string
      linkLabel?: string
      linkHref?: string
    }
  | {
      type: 'imageDouble'
      leftLabel: string
      rightLabel: string
      caption: string
    }
  | {
      type: 'carousel'
      slides: { label: string }[]
      initialIndex?: number
      caption: string
    }
  | {
      type: 'youtube'
      title: string
      href: string
    }

export interface HistoireBilletContent {
  chapeau: string
  auteur: string
  institution: string
  datePublication: string
  heroPlaceholder: string
  heroCaption: string
  blocks: HistoireContentBlock[]
  sources: { label: string; href: string }[]
  rebonds: HistoireBillet[]
}
