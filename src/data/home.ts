import { LOREM } from '@/data/placeholders'

export const HOME_HERO = {
  imageAlt: 'Photo archive',
  quote: LOREM.quote,
  attribution: LOREM.attribution,
} as const

export const HOME_TROUVAILLE = {
  titre: LOREM.short,
  chapeau: LOREM.paragraph,
  ctaLabel: 'Découvrir',
} as const

export const HOME_CARTE = {
  titre: LOREM.short,
  chapeau: LOREM.paragraph,
  indicateur: LOREM.line,
  note: LOREM.line,
  ctaLabel: 'Explorer',
} as const
