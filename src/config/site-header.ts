import type { FriseHautFill } from '@/components/ui/frise-haut'

/** Fond du header site — une tonalité par rubrique éditoriale */
export type SiteHeaderTone = 'default' | 'histoires' | 'collections'

/** Où afficher la frise dentelée sous le header site */
export type SiteFrisePlacement = 'chrome' | 'section-header'

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

export function resolveSiteHeaderTone(pathname: string): SiteHeaderTone {
  if (pathname === '/histoires' || pathname.startsWith('/histoires/')) {
    return 'histoires'
  }
  if (pathname === '/collections' || pathname.startsWith('/collections/')) {
    return 'collections'
  }
  return 'default'
}

/** Liste rubrique → frise sous l'en-tête de section ; détail → sous le header site */
export function resolveSiteFrisePlacement(pathname: string): SiteFrisePlacement {
  if (pathname === '/histoires' || pathname === '/collections') {
    return 'section-header'
  }
  return 'chrome'
}
