import type { HistoireBilletContent } from '@/types/histoireContent'
import { LOREM } from '@/data/placeholders'
import { HISTOIRE_DETAIL_DEFAULT } from '@/data/histoires'

/** Contenu référence — Billet GMB (Océan Liberty), wireframe « Billet — composants GMB ». */
const OCEAN_LIBERTY_CONTENT: HistoireBilletContent = {
  chapeau:
    "Un navire américain explose en rade de Brest, causant l'une des pires catastrophes maritimes de l'après-guerre. L'histoire oubliée d'un drame qui a marqué la ville en pleine reconstruction.",
  auteur: 'Carole, bibliothécaire',
  institution: 'Médiathèques de Brest',
  datePublication: '14 mars 2026',
  heroPlaceholder: 'Image bandeau',
  heroCaption:
    "L'Océan Liberty en feu, rade de Brest, 28 juillet 1947. Archives Marines.",
  blocks: [
    {
      type: 'paragraph',
      text: LOREM.paragraph,
    },
    {
      type: 'blockquote',
      quote:
        '« La ville était encore sous les décombres de la guerre quand une nouvelle catastrophe la frappa. »',
      attribution: 'Le Télégramme, 29 juillet 1947',
    },
    {
      type: 'paragraph',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      type: 'image',
      placeholder: 'Plan de la rade, 1947',
      caption: 'Plan de la rade de Brest et position du navire — Archives Marines.',
      linkLabel: 'Voir sur Yroise',
      linkHref: '#',
    },
    {
      type: 'imageDouble',
      leftLabel: 'La rade avant',
      rightLabel: 'La rade après',
      caption: "La rade de Brest avant et après l'explosion — Photographies Marines.",
    },
    {
      type: 'paragraph',
      text: LOREM.line,
    },
    {
      type: 'carousel',
      slides: [
        { label: 'Photo 1 / 5' },
        { label: 'Photo 2 / 5' },
        { label: 'Photo 3 / 5' },
        { label: 'Photo 4 / 5' },
        { label: 'Photo 5 / 5' },
      ],
      initialIndex: 1,
      caption:
        'Vue de la rade depuis le château, vers 1890 — Archives municipales de Brest.',
    },
    {
      type: 'youtube',
      title: LOREM.line,
      href: '#',
    },
  ],
  sources: HISTOIRE_DETAIL_DEFAULT.sources,
  rebonds: HISTOIRE_DETAIL_DEFAULT.rebonds,
}

const DEFAULT_CONTENT: HistoireBilletContent = {
  chapeau: LOREM.line,
  auteur: 'Bibliothécaire',
  institution: 'Médiathèques de Brest',
  datePublication: '2026',
  heroPlaceholder: 'Image bandeau',
  heroCaption: LOREM.line,
  blocks: [
    { type: 'paragraph', text: HISTOIRE_DETAIL_DEFAULT.corps },
    { type: 'paragraph', text: LOREM.paragraph },
  ],
  sources: HISTOIRE_DETAIL_DEFAULT.sources,
  rebonds: HISTOIRE_DETAIL_DEFAULT.rebonds,
}

const BY_SLUG: Record<string, HistoireBilletContent> = {
  'ocean-liberty-1947': OCEAN_LIBERTY_CONTENT,
}

export function getHistoireContent(slug: string): HistoireBilletContent {
  return BY_SLUG[slug] ?? DEFAULT_CONTENT
}
