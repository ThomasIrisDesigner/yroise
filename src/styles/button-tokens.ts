/**
 * Spécifications des boutons — documentation affichée sur /design-system.
 * Implémentation réelle : `src/components/ui/button.tsx`.
 */
export type ButtonSpecRow = {
  token: string
  value: string
}

export const BUTTON_COMMON_SPECS: ButtonSpecRow[] = [
  { token: 'font-family', value: 'Outfit' },
  { token: 'font-size', value: '0.875rem / 14px (--button-font-size)' },
  { token: 'font-weight', value: '500 (classe font-medium)' },
  { token: 'letter-spacing', value: '0.03em (--button-letter-spacing)' },
  { token: 'border-radius', value: '999px (pill)' },
  { token: 'transition', value: 'all 0.15s ease' },
  { token: 'gap default', value: '12px' },
  { token: 'gap sm', value: '10px' },
]

export const BUTTON_SIZE_SPECS: ButtonSpecRow[] = [
  { token: 'default', value: 'height 44px · pl 24px · pr 20px · △ 10px' },
  { token: 'sm', value: 'height 36px · pl 18px · pr 14px · △ 8px' },
]

/** Un variant = ses couleurs + le contexte où on l'emploie. */
export const BUTTON_VARIANT_SPECS: ButtonSpecRow[] = [
  {
    token: 'primary',
    value:
      '#010101 fond · texte blanc · △ #00C8A0 · hover #333 — CTA home et collections',
  },
  {
    token: 'secondary',
    value:
      'transparent · texte #010101 · bordure rgba(1,1,1,0.2) → #010101 — cards, La trouvaille, pagination',
  },
  {
    token: 'secondary inverted',
    value: 'Même style en blanc — rebonds et cards sur fond sombre',
  },
  {
    token: 'showTriangle={false}',
    value: 'Retire le triangle — boutons « Voir plus » des pages liste',
  },
]
