import type { CollectionDetailContent } from '@/types/collectionContent'
import type { HistoireContentBlock } from '@/types/histoireContent'
import { COLLECTION_EXAMPLE_IMAGE } from '@/data/collections'
import { LOREM } from '@/data/placeholders'

const APERCU_ITEMS: HistoireContentBlock[] = [
  {
    type: 'image',
    placeholder: 'Titre',
    caption: 'Titre',
    meta: 'Type — origine',
    linkLabel: 'Voir le document',
    linkHref: '#',
    imageSrc: COLLECTION_EXAMPLE_IMAGE,
  },
  {
    type: 'image',
    placeholder: 'Titre',
    caption: 'Titre',
    meta: 'Type — origine',
    linkLabel: 'Voir le document',
    linkHref: '#',
    imageSrc: COLLECTION_EXAMPLE_IMAGE,
  },
  {
    type: 'image',
    placeholder: 'Titre',
    caption: 'Titre',
    meta: 'Type — origine',
    linkLabel: 'Voir le document',
    linkHref: '#',
    imageSrc: COLLECTION_EXAMPLE_IMAGE,
  },
]

function collectionBlocks(apercuCount: number): HistoireContentBlock[] {
  return [
    { type: 'heading', text: 'Présentation' },
    { type: 'paragraph', text: LOREM.paragraph },
    { type: 'heading', text: 'Aperçu' },
    ...APERCU_ITEMS.slice(0, apercuCount),
  ]
}

const EN_MER_CONTENT: CollectionDetailContent = {
  chapeau:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.',
  heroCaption: 'Légende',
  heroMeta: 'Photographie, Archives Marines',
  heroLinkLabel: 'Voir le document',
  heroLinkHref: '#',
  blocks: collectionBlocks(3),
  gallicaHref: '#',
}

const DEFAULT_CONTENT: CollectionDetailContent = {
  chapeau: LOREM.line,
  heroCaption: 'Légende',
  heroMeta: 'Archives',
  heroLinkLabel: 'Voir le document',
  heroLinkHref: '#',
  blocks: collectionBlocks(1),
  gallicaHref: '#',
}

const BY_SLUG: Record<string, CollectionDetailContent> = {
  'en-mer': EN_MER_CONTENT,
}

export function getCollectionDetail(slug: string): CollectionDetailContent {
  return BY_SLUG[slug] ?? DEFAULT_CONTENT
}
