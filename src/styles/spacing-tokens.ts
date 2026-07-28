/**
 * Espacement — documentation affichée sur /design-system.
 * Grille de base 8px. La gouttière des sections éditoriales est pilotée par
 * `--space-section-x` (theme.css), exposée en Tailwind via `px-section`.
 */
export const SECTION_PADDING_SPECS = [
  { token: '--space-section-x', value: '16px (72px ≥1024px via --page-padding-x-lg)' },
  { token: 'classe Tailwind', value: 'px-section · pl-section · mr-section…' },
  {
    token: 'usage',
    value: 'contenu éditorial · headers · footers · sliders (pl + scroll-padding)',
  },
  {
    token: 'exceptions',
    value: 'hero image pleine largeur · overlays plein écran · page design system',
  },
] as const
