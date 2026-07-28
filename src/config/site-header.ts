import type { FriseHautFill } from '@/components/ui/frise-haut'

/**
 * Ton du header site — la frise doit contraster avec le haut de la page.
 * Ajouter un ton ici puis le renvoyer depuis `resolveSiteHeaderTone`.
 */
export type SiteHeaderTone = 'default' | 'histoires'

export const SITE_HEADER_TONE_CLASSES: Record<
  SiteHeaderTone,
  { header: string; friseFill: FriseHautFill }
> = {
  default: {
    header: 'bg-background',
    friseFill: 'text',
  },
  /** Liste Histoires — frise blanche, le bandeau de page en dessous est noir */
  histoires: {
    header: 'bg-background',
    friseFill: 'on-dark',
  },
}

/** Header blanc + frise noire par défaut ; liste Histoires → frise blanche. */
export function resolveSiteHeaderTone(pathname: string): SiteHeaderTone {
  if (pathname === '/histoires') return 'histoires'
  return 'default'
}
