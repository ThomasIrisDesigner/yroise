export const CARD_SLIDER_SPECS = [
  { token: 'display', value: 'flex' },
  { token: 'gap', value: '24px' },
  { token: 'padding-left', value: 'var(--space-section-x) · 16px' },
  { token: 'scroll-padding-left', value: 'var(--space-section-x) · 16px' },
  { token: 'scroll-snap-type', value: 'x mandatory' },
  { token: 'scrollbar', value: 'none (masquée)' },
  { token: '.card:last-child', value: 'margin-right var(--space-section-x)' },
  { token: '.collection-item:last-child', value: 'margin-right var(--space-section-x)' },
  { token: '.card', value: 'width calc(var(--card-slider-viewport) - 80px) · 390px en mockup/DS' },
  { token: '.card-collection', value: 'width 140px · flex-shrink 0 · snap-start' },
] as const

export const CARD_HISTOIRE_SPECS = [
  { token: 'container', value: 'flex column · relative · overflow hidden · bg #fff' },
  { token: 'container padding', value: 'aucun — image pleine largeur' },
  { token: 'border / radius', value: 'aucun' },
  { token: '.card-image', value: 'width 100% · aspect-ratio 16/9 · object-fit cover · display block · full bleed' },
  { token: 'card-body', value: 'padding 16px 0 · flex column · flex 1' },
  { token: 'card-title', value: 'Outfit 500 · 22px (1.375rem) · lh 1.875rem · ls 0.1px · line-clamp 2' },
  { token: 'card-title color', value: '#010101 · hover #2D7D8A · transition 0.15s' },
  { token: 'card-title margin', value: 'margin-bottom 8px' },
  { token: 'card-excerpt', value: 'Outfit 400 · 16px (1rem) · lh 1.5rem · ls 0.1px · #010101 · line-clamp 2' },
  { token: 'card-cta spacing', value: '24px entre extrait et bouton (pt-6 sur .card-cta-wrap)' },
  {
    token: 'card-cta',
    value:
      'Button secondary sm · h 36px · pl 18px · pr 14px · gap 10px · border 1.5px rgba(1,1,1,0.2) · △ 8px · décoratif (card entière cliquable)',
  },
  { token: 'a11y', value: '.card-title a::before { inset: 0 } sur .card relative' },
] as const

export const CARD_HISTOIRE_LIST_SPECS = [
  { token: 'container', value: 'max-width 310px · centré · bg #fff' },
  { token: '.card-image--list', value: 'identique .card-image · aspect-ratio 16/9 · object-fit cover' },
  { token: 'card-body', value: 'padding 16px 0 · gap 8px' },
  { token: 'card-excerpt (liste)', value: 'Outfit 400 · 14px desktop / 16px mobile · lh 1.55 · line-clamp 4' },
  { token: 'card-excerpt (1er billet)', value: 'Outfit 400 · 16px · card-excerpt · line-clamp 4' },
  { token: 'card-cta spacing', value: '8px entre extrait et bouton (pt-2)' },
  { token: 'card-cta spacing (à la une)', value: '24px entre extrait et bouton (gap 8px + pt-4)' },
] as const

export const CARD_JEUNESSE_SPECS = [
  { token: 'structure', value: 'identique Card Histoires sans extrait' },
  { token: 'card-label', value: 'TypeLabel · text-aurore-700' },
  { token: 'border / radius', value: 'aucun' },
] as const
