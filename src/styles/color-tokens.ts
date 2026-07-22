export type ColorTokenEntry = {
  name: string
  hex: string
}

export type ColorTokenSection = {
  title: string
  description?: string
  tokens: ColorTokenEntry[]
}

/**
 * Catalogue couleurs Yroise — uniquement les tokens utilisés dans le prototype.
 * Source de vérité pour la page Design System.
 */
export const COLOR_TOKEN_SECTIONS: ColorTokenSection[] = [
  {
    title: 'Texte & surfaces',
    tokens: [
      { name: '--color-text', hex: '#010101' },
      { name: '--color-text-muted', hex: '#71717a' },
      { name: '--color-surface', hex: '#F6F6F6' },
      { name: '--color-border', hex: '#D9D9D9' },
      { name: '--color-background', hex: '#FFFFFF' },
      { name: '--color-text-on-dark', hex: '#FFFFFF' },
    ],
  },
  {
    title: 'Glaz · Bleu-vert breton',
    description: 'Collections + accents',
    tokens: [
      { name: '--glaz-700', hex: '#2D7D8A' },
      { name: '--glaz-500', hex: '#00C8A0' },
      { name: '--glaz-300', hex: '#AAF5C8' },
      { name: '--glaz-100', hex: '#DCEDE6' },
    ],
  },
  {
    title: 'Sable · Archives & éditorial',
    description: 'La trouvaille',
    tokens: [
      { name: '--sable-400', hex: '#F4DDA4' },
      { name: '--sable-200', hex: '#FAF0D7' },
    ],
  },
  {
    title: 'Océan · Footer & accents bleus',
    tokens: [
      { name: '--ocean-900', hex: '#1B2443' },
      { name: '--ocean-300', hex: '#8CDCFF' },
    ],
  },
  {
    title: 'Aurore · Jeunesse',
    tokens: [
      { name: '--aurore-900', hex: '#802828' },
      { name: '--aurore-700', hex: '#FF6050' },
      { name: '--aurore-100', hex: '#FAD7D7' },
    ],
  },
]
