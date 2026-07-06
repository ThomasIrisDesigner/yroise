import type { JeunesseActiviteContent } from '@/types/jeunesseContent'
import { LOREM } from '@/data/placeholders'

const DEFAULT_CONTENT: JeunesseActiviteContent = {
  chapeau: LOREM.paragraph,
  heroImageAlt: '',
  presentation: LOREM.paragraph,
  sources: [
    {
      prefix: 'Document source',
      label: LOREM.short,
      detail: 'détails',
      href: '#',
    },
  ],
}

const PUZZLE_RADE_BREST: JeunesseActiviteContent = {
  chapeau:
    'Reconstitue la carte de la rade à partir de fragments d’une carte du XVIIIe siècle. Un jeu proposé par les bibliothécaires de Brest.',
  heroImageSrc: '/images/Jeunesse_photo.jpg',
  heroImageAlt: 'Voilier sur la rade de Brest',
  presentation:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.',
  sources: [
    {
      prefix: 'Carte de la rade',
      label: 'Carte',
      detail: 'détails',
      href: '#',
    },
  ],
}

const JEUNESSE_CONTENTS: Record<string, JeunesseActiviteContent> = {
  'puzzle-rade-brest': PUZZLE_RADE_BREST,
}

export function getJeunesseContent(slug: string): JeunesseActiviteContent {
  return JEUNESSE_CONTENTS[slug] ?? DEFAULT_CONTENT
}
