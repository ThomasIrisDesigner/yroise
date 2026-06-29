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
  histoires: {
    header: 'bg-sable-100',
    friseFill: 'sable-900',
  },
  collections: {
    header: 'bg-glaz-100',
    friseFill: 'glaz-900',
  },
}

/** Header blanc + frise noire sur toutes les pages éditoriales (comportement home). */
export function resolveSiteHeaderTone(_pathname: string): SiteHeaderTone {
  return 'default'
}
