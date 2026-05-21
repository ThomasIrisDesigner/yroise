import { LOREM } from '@/data/placeholders'

export const HOME_HERO = {
  imageAlt: 'Photo archive — Brest',
  quote: 'Plongez avec nous dans les histoires locales.',
  attribution: 'Les bibliothécaires de Brest',
} as const

export const HOME_TROUVAILLE = {
  titre: LOREM.short,
  chapeau: LOREM.paragraph,
  ctaLabel: 'Découvrir',
} as const

export const HOME_CARTE = {
  titre: 'Retrouvez votre quartier dans les archives.',
  chapeau: LOREM.line,
  indicateur: '3 nouveaux documents géolocalisés ce mois-ci',
  note: 'Vous reconnaissez un lieu ? Écrivez-nous.',
  ctaLabel: 'Explorer',
} as const
