/**
 * Labels de type (JEU, ATELIER) — documentation affichée sur /design-system.
 * Implémentation : `src/components/ui/type-label.tsx`.
 * La couleur n'est pas dans le token : elle est passée par la card appelante.
 */
export const TYPE_LABEL_BASE_SPECS = [
  { token: 'font-family', value: 'Outfit' },
  { token: 'font-size', value: '0.6875rem / 11px' },
  { token: 'font-weight', value: '700' },
  { token: 'letter-spacing', value: '3px' },
  { token: 'text-transform', value: 'uppercase' },
  { token: 'line-height', value: '1' },
  { token: 'fond / bordure', value: 'aucun' },
  { token: 'couleur par défaut', value: '#71717a (muted) — à surcharger' },
  { token: 'card Jeunesse', value: '#FF6050 (aurore-700)' },
  { token: 'card Jeunesse à la une', value: '#F0A5B4 (aurore-300), sur fond sombre' },
] as const
