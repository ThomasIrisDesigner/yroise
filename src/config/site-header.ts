import type { FriseHautFill } from '@/components/ui/frise-haut'

/** Fond du header site — réservé pour évolutions DA par rubrique */
export type SiteHeaderTone = 'default' | 'histoires' | 'collections'

export const SITE_HEADER_TONE_CLASSES: Record<
  SiteHeaderTone,
  { header: string; friseFill: FriseHautFill }
> = {
  default: {
    header: 'bg-background',
    friseFill: 'text',
  },
  /** Liste Histoires — frise blanche sur bandeau page noir */
  histoires: {
    header: 'bg-background',
    friseFill: 'on-dark',
  },
  collections: {
    header: 'bg-glaz-100',
    friseFill: 'glaz-900',
  },
}

/** Header blanc + frise noire par défaut ; liste Histoires → frise blanche. */
export function resolveSiteHeaderTone(pathname: string): SiteHeaderTone {
  if (pathname === '/histoires') return 'histoires'
  return 'default'
}
