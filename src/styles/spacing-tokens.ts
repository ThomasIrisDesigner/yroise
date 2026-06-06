/** Gouttière horizontale standard des sections éditoriales (16px · multiple de 8). */
export const SECTION_PADDING_X = '16px' as const

export const SECTION_PADDING_X_TOKEN = '--space-section-x' as const

/** Classe Tailwind — `px-section` · `pl-section` · `mr-section`… */
export const SECTION_PADDING_X_CLASS = 'px-section' as const

export const SECTION_PADDING_SPECS = [
  { token: SECTION_PADDING_X_TOKEN, value: SECTION_PADDING_X },
  { token: 'classe Tailwind', value: SECTION_PADDING_X_CLASS },
  { token: 'usage', value: 'contenu éditorial · headers · footers · sliders (pl + scroll-padding)' },
  {
    token: 'exceptions',
    value: 'hero image pleine largeur · overlays plein écran · page design system',
  },
] as const
