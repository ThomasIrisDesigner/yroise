export type ButtonSpecRow = {
  token: string
  value: string
}

export const BUTTON_VARIANTS = ['primary', 'secondary', 'ghost'] as const
export const BUTTON_SIZES = ['default', 'sm'] as const

export const BUTTON_COMMON_SPECS: ButtonSpecRow[] = [
  { token: 'font-family', value: 'Outfit' },
  { token: 'font-size', value: '14px (--button-font-size)' },
  { token: 'font-weight', value: '500 (--button-font-weight)' },
  { token: 'letter-spacing', value: '0.03em (--button-letter-spacing)' },
  { token: 'border-radius', value: '999px (pill)' },
  { token: 'transition', value: 'all 0.15s ease' },
  { token: 'gap default', value: '12px' },
  { token: 'gap sm', value: '10px' },
]

export const BUTTON_SIZE_LINES = [
  'default → height 44px · pl 24px · pr 20px · fs 14px · △ 10px',
  'sm → height 36px · pl 18px · pr 14px · fs 14px · △ 8px',
] as const

export const BUTTON_VARIANT_COLOR_SPECS = [
  {
    variant: 'primary',
    spec: '#010101 bg · blanc texte · #00C8A0 △ · hover #333',
  },
  {
    variant: 'secondary',
    spec: 'transparent · #010101 texte · #D9D9D9→#010101 border',
  },
  {
    variant: 'ghost',
    spec: 'transparent · #010101 texte · underline hover',
  },
] as const

export const BUTTON_EXTRA_SPECS = [
  'inverted (fond sombre) → fond #FFFFFF · texte #010101 · triangle #2D7D8A',
  'disabled → opacity 0.45 · triangle #D9D9D9',
] as const
