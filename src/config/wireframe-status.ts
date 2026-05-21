/**
 * Suivi d’implémentation — Wireframes mobile v2 (Yroise_Wireframes_Mobile)
 * Mettre à jour le statut au fil des étapes.
 */
export type WireframeStepStatus = 'done' | 'partial' | 'todo'

export interface WireframeStep {
  id: string
  label: string
  screens: string[]
  status: WireframeStepStatus
}

export const WIREFRAME_STEPS: WireframeStep[] = [
  {
    id: 'home',
    label: 'Home mobile',
    screens: ['Hero', 'La trouvaille', 'Histoires ×3', 'Collections', 'La carte aperçu', 'Bloc Jeunesse', 'Footer'],
    status: 'done',
  },
  {
    id: 'nav',
    label: 'Navigation mobile',
    screens: ['Repos', 'Menu', 'Collections accordéon', 'Overlay recherche'],
    status: 'done',
  },
  {
    id: 'collections',
    label: 'Collections',
    screens: ['Liste 8 fonds', 'Détail collection (ex. En mer)'],
    status: 'done',
  },
  {
    id: 'histoires',
    label: 'Histoires',
    screens: [
      'Liste (curiosité / exposition)',
      'Billet GMB (NatGeo + composants Drupal)',
      'Sources + rebonds',
    ],
    status: 'done',
  },
  {
    id: 'carte',
    label: 'La carte',
    screens: ['Carte plein écran + épingles', 'Popup / fiche document'],
    status: 'done',
  },
  {
    id: 'jeunesse',
    label: 'Jeunesse',
    screens: ['Liste jeux / séquences', 'Fiche jeu (embed Geniali)'],
    status: 'done',
  },
]
