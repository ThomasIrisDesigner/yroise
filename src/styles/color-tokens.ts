export type ColorTokenEntry = {
  name: string
  hex: string
  /** Où la couleur est employée — colonne « usage » du design system. */
  usage?: string
}

export type ColorTokenSection = {
  title: string
  description?: string
  tokens: ColorTokenEntry[]
}

/**
 * Catalogue couleurs Yroise — miroir exact des variables `:root` de theme.css.
 * Un token n'apparaît ici que s'il est utilisé dans le prototype ; si une
 * couleur disparaît des maquettes, la retirer des deux fichiers.
 */
export const COLOR_TOKEN_SECTIONS: ColorTokenSection[] = [
  {
    title: 'Texte & surfaces',
    tokens: [
      { name: '--color-text', hex: '#010101', usage: 'Texte principal, fonds sombres' },
      { name: '--color-text-muted', hex: '#71717a', usage: 'Métadonnées, légendes' },
      { name: '--color-surface', hex: '#F6F6F6', usage: 'Fonds de zones secondaires' },
      { name: '--color-border', hex: '#D9D9D9', usage: 'Bordures, états désactivés' },
      {
        name: '--color-list-separator',
        hex: '#010101',
        usage: 'Filets de liste et bordures de boutons, à 10–20 % d’opacité',
      },
      { name: '--color-background', hex: '#FFFFFF', usage: 'Fond de page' },
      { name: '--color-text-on-dark', hex: '#FFFFFF', usage: 'Texte sur fond sombre' },
    ],
  },
  {
    title: 'Glaz · Bleu-vert breton',
    description: 'Collections et accents de marque',
    tokens: [
      { name: '--glaz-700', hex: '#2D7D8A', usage: 'Accent principal, survols, rubrique article' },
      { name: '--glaz-500', hex: '#00C8A0', usage: 'Triangle des boutons, triangle H1 Collections' },
      { name: '--glaz-300', hex: '#AAF5C8', usage: 'Survol des titres de card sur fond sombre' },
      { name: '--glaz-100', hex: '#DCEDE6', usage: 'Fond de la page Collections et de la rubrique home' },
    ],
  },
  {
    title: 'Sable · Archives & éditorial',
    description: 'Section La trouvaille',
    tokens: [
      { name: '--sable-400', hex: '#F4DDA4', usage: 'Encadrement du visuel La trouvaille' },
      { name: '--sable-200', hex: '#FAF0D7', usage: 'Fond de la section La trouvaille' },
    ],
  },
  {
    title: 'Océan · Footer & accents bleus',
    tokens: [
      { name: '--ocean-900', hex: '#1B2443', usage: 'Fond du footer' },
      { name: '--ocean-300', hex: '#8CDCFF', usage: 'Focus du champ de recherche' },
    ],
  },
  {
    title: 'Aurore · Jeunesse',
    tokens: [
      { name: '--aurore-900', hex: '#802828', usage: 'Mentions des embeds Genially' },
      { name: '--aurore-700', hex: '#FF6050', usage: 'Accent Jeunesse, labels de type, triangle H1' },
      { name: '--aurore-300', hex: '#F0A5B4', usage: 'Label de type sur card Jeunesse à la une' },
      { name: '--aurore-100', hex: '#FAD7D7', usage: 'Fond de l’en-tête Jeunesse' },
    ],
  },
  {
    title: 'État',
    tokens: [
      {
        name: '--color-danger',
        hex: '#DC2626',
        usage: 'Pastille de lecture vidéo, message d’erreur du login',
      },
    ],
  },
]
