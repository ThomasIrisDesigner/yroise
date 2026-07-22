export const FOOTER_INTRO =
  "Yroise rassemble et valorise les collections numériques du patrimoine breton. Cette plateforme vous permet d'explorer des milliers de documents historiques, d'images, de cartes marines et de témoignages qui racontent l'histoire maritime et culturelle de nos territoires."

export const FOOTER_STATS = [
  { value: '12,534', label: 'Documents' },
  { value: '8', label: 'Collections' },
  { value: '847', label: 'Acquisitions' },
] as const

export const FOOTER_SOCIAL_LINKS = [
  { label: 'Facebook', href: '#', iconSrc: '/images/Icon_facebook.svg' },
  { label: 'Instagram', href: '#', iconSrc: '/images/Icon_instagram.svg' },
  { label: 'YouTube', href: '#', iconSrc: '/images/icon_youtube.svg' },
] as const

export const FOOTER_ANNEX_LINKS = [
  { label: 'Informations pratiques', slug: '/informations-pratiques' },
  { label: 'FAQ', slug: '/faq' },
  { label: 'Accessibilité', slug: '/accessibilite' },
  { label: 'Mentions légales', slug: '/mentions-legales' },
] as const

export const FOOTER_PARTNER_LOGOS = [
  {
    label: 'Ville de Brest',
    src: '/images/logo_brest_couleur.svg',
    className: 'h-[39px] w-[133px]',
  },
  {
    label: 'Bibliothèque nationale de France',
    src: '/images/Logo_Bnf-gallica.png',
    className: 'h-[40px] w-auto',
  },
] as const
