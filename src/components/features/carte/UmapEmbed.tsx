import * as React from 'react'
import { Maximize2, Minimize2 } from 'lucide-react'

import { CARTE_UMAP_EMBED_SRC } from '@/data/carte'
import { useMediaQuery } from '@/lib/useMediaQuery'
import { cn } from '@/lib/utils'

interface UmapEmbedProps {
  className?: string
  /** Remplit l'espace restant sous le header site (page immersive) */
  immersive?: boolean
}

/** Carte interactive uMap — iframe sous le header site */
export function UmapEmbed({ className, immersive = false }: UmapEmbedProps) {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const [mobileFullscreen, setMobileFullscreen] = React.useState(false)
  const frameRef = React.useRef<HTMLDivElement>(null)

  const toggleMobileFullscreen = React.useCallback(async () => {
    if (mobileFullscreen) {
      setMobileFullscreen(false)
      if (document.fullscreenElement) {
        await document.exitFullscreen().catch(() => undefined)
      }
      return
    }

    const frame = frameRef.current
    if (frame?.requestFullscreen) {
      try {
        await frame.requestFullscreen()
        setMobileFullscreen(true)
        return
      } catch {
        /* iOS / WebView — API indisponible dans l'iframe */
      }
    }

    setMobileFullscreen(true)
  }, [mobileFullscreen])

  React.useEffect(() => {
    if (!immersive || !isMobile) return

    const onFullscreenChange = () => {
      setMobileFullscreen(Boolean(document.fullscreenElement))
    }

    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [immersive, isMobile])

  React.useEffect(() => {
    if (!mobileFullscreen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileFullscreen])

  const iframe = (
    <iframe
      title="Carte interactive YROISE — uMap"
      src={CARTE_UMAP_EMBED_SRC}
      className="block h-full min-h-0 w-full border-0"
      allowFullScreen
      allow="fullscreen; geolocation"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )

  return (
    <div
      className={cn(
        'carte-map-embed relative w-full',
        immersive && 'carte-map-embed--immersive',
        immersive && mobileFullscreen && 'carte-map-embed--mobile-fullscreen',
        className
      )}
    >
      {immersive && isMobile ? (
        <button
          type="button"
          onClick={() => void toggleMobileFullscreen()}
          aria-label={mobileFullscreen ? 'Quitter le plein écran' : 'Plein écran'}
          aria-pressed={mobileFullscreen}
          className="absolute right-4 top-4 z-20 inline-flex size-11 items-center justify-center rounded-full border border-text bg-surface text-text shadow-sm"
        >
          {mobileFullscreen ? (
            <Minimize2 className="size-5" aria-hidden />
          ) : (
            <Maximize2 className="size-5" aria-hidden />
          )}
        </button>
      ) : null}

      {immersive ? (
        <div
          ref={frameRef}
          className="carte-map-frame min-h-0 flex-1"
        >
          {iframe}
        </div>
      ) : (
        <div className="absolute inset-0">{iframe}</div>
      )}
    </div>
  )
}
