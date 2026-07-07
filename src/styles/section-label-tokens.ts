/** Labels de section home / pages liste — token typo `label` (alias sectionLabel). */
export const SECTION_LABEL_EXAMPLES = [
  'Histoires',
  'Collections',
  'La trouvaille',
  'Jeunesse',
] as const

export const SECTION_LABEL_SPECS = [
  { token: 'token', value: 'label (alias sectionLabel)' },
  { token: 'font-family', value: 'Outfit' },
  { token: 'font-size', value: '24px (home) · 16px (listes)' },
  { token: 'font-weight', value: '600' },
  { token: 'letter-spacing', value: '2px' },
  { token: 'text-transform', value: 'uppercase' },
  { token: 'line-height', value: '1.25' },
  { token: 'couleur', value: '#010101 (text)' },
] as const

export const SECTION_LABEL_NOTE =
  'Distinct des labels de type (CURIOSITÉ, JEU…) — voir section Labels de type.'
