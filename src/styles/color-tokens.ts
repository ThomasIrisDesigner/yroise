export type ColorTokenEntry = {
  name: string
  hex: string
}

export type ColorTokenSection = {
  title: string
  description?: string
  tokens: ColorTokenEntry[]
}

/** Catalogue couleurs Yroise — source de vérité pour le design system. */
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
      { name: '--glaz-900', hex: '#19484B' },
      { name: '--glaz-700', hex: '#2D7D8A' },
      { name: '--glaz-500', hex: '#00C8A0' },
      { name: '--glaz-300', hex: '#AAF5C8' },
      { name: '--glaz-100', hex: '#DCEDE6' },
    ],
  },
  {
    title: 'Sable · Archives & éditorial',
    description: 'Histoires',
    tokens: [
      { name: '--sable-900', hex: '#7D4B26' },
      { name: '--sable-700', hex: '#E2A083' },
      { name: '--sable-300', hex: '#EBC8B9' },
      { name: '--sable-100', hex: '#FAEDE6' },
    ],
  },
  {
    title: 'Océan · Footer & accents bleus',
    tokens: [
      { name: '--ocean-900', hex: '#1B2443' },
      { name: '--ocean-700', hex: '#002DFF' },
      { name: '--ocean-300', hex: '#8CDCFF' },
      { name: '--ocean-100', hex: '#D7EBFA' },
    ],
  },
  {
    title: 'Aurore · Jeunesse',
    tokens: [
      { name: '--aurore-900', hex: '#641E46' },
      { name: '--aurore-700', hex: '#FF64C8' },
      { name: '--aurore-300', hex: '#FFB4EB' },
      { name: '--aurore-100', hex: '#FAD7EB' },
    ],
  },
  {
    title: 'États',
    tokens: [
      { name: '--color-danger', hex: '#DC2626' },
      { name: '--color-success', hex: '#16A34A' },
      { name: '--color-warning', hex: '#F59E0B' },
    ],
  },
]
