import type { HistoireBillet } from '@/data/histoires'

/** Blocs éditoriaux Drupal GMB — modèle page Billet (wireframe v2). */

export type HistoireContentBlock =
  | { type: 'heading'; text: string }
  | {
      type: 'paragraph'
      text?: string
      segments?: { text: string; italic?: boolean }[]
    }
  | {
      type: 'blockquote'
      quote: string
      meta?: string
      linkLabel?: string
      linkHref?: string
    }
  | {
      type: 'image'
      placeholder: string
      caption: string
      meta?: string
      linkLabel?: string
      linkHref?: string
      imageSrc?: string
    }
  | {
      type: 'imageDouble'
      leftLabel: string
      rightLabel: string
      caption: string
      meta?: string
      linkLabel?: string
      linkHref?: string
    }
  | {
      type: 'carousel'
      slides: { label: string }[]
      initialIndex?: number
      caption: string
      meta?: string
      linkLabel?: string
      linkHref?: string
    }
  | {
      type: 'youtube'
      title: string
      href: string
      embedSrc?: string
      posterSrc?: string
      caption?: string
      meta?: string
    }

export interface HistoireSource {
  label: string
  href: string
  prefix?: string
  detail?: string
}

export interface HistoireBilletContent {
  chapeau: string | string[]
  auteur: string
  institution: string
  datePublication: string
  heroPlaceholder: string
  heroCaption: string
  heroImageSrc?: string
  heroMeta?: string
  heroLinkLabel?: string
  heroLinkHref?: string
  blocks: HistoireContentBlock[]
  sources: HistoireSource[]
  rebonds: HistoireBillet[]
}
