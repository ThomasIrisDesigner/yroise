export type HistoireContentType = 'curiosite' | 'exposition'
export type JeunesseContentType = 'jeu' | 'sequence'

export type ContentType = HistoireContentType | JeunesseContentType

export const CONTENT_TYPE_LABELS: Record<ContentType, string> = {
  curiosite: 'Curiosité',
  exposition: 'Exposition',
  jeu: 'Jeu',
  sequence: 'Séquence',
}
