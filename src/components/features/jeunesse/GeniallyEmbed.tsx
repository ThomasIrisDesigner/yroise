import * as React from 'react'
import { Maximize2, Minimize2 } from 'lucide-react'

import { useMediaQuery } from '@/lib/useMediaQuery'
import { cn } from '@/lib/utils'

interface GeniallyEmbedProps {
  /** URL iframe Genially — placeholder wireframe si absent (prototype). */
  src?: string
  title?: string
  className?: string
}

function GeniallyPlaceholder() {
  return (
    <>
      <div className="flex h-11 items-center gap-2 bg-aurore-700 px-4">
        <span className="h-2 w-2 rounded-full bg-surface/50" aria-hidden />
        <span className="font-outfit text-sm font-semibold text-surface">
          Jeu interactif — Genially
        </span>
      </div>
      <div className="flex aspect-[16/10] flex-col items-center justify-center gap-4 px-4 py-10">
        <div className="grid grid-cols-3 gap-1.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className={
                i === 4
                  ? 'h-12 w-12 rounded border-2 border-dashed border-border bg-transparent'
                  : 'h-12 w-12 rounded bg-surface'
              }
              aria-hidden
            />
          ))}
        </div>
        <p className="font-outfit text-sm italic text-aurore-900">
          Glisse les pièces pour reconstituer la carte
        </p>
      </div>
    </>
  )
}

/**
 * Bloc embed jeu Genially — largeur alignée sur le header.
 * Mobile : bouton plein écran YROISE (comme la carte). Desktop : plein écran natif Genially dans l’iframe.
 */
export function GeniallyEmbed({ src, title = 'Jeu interactif Genially', className }: GeniallyEmbedProps) {
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
        /* iOS / WebView — API indisponible dans l’iframe */
      }
    }

    setMobileFullscreen(true)
  }, [mobileFullscreen])

  React.useEffect(() => {
    if (!isMobile) return

    const onFullscreenChange = () => {
      setMobileFullscreen(Boolean(document.fullscreenElement))
    }

    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [isMobile])

  React.useEffect(() => {
    if (!mobileFullscreen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileFullscreen])

  return (
    <div
      ref={frameRef}
      className={cn(
        'genially-embed relative w-full',
        mobileFullscreen && 'genially-embed--mobile-fullscreen',
        className
      )}
      role="region"
      aria-label={title}
    >
      {isMobile ? (
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

      <div
        className={cn(
          'genially-embed-frame overflow-hidden rounded-lg border-4 border-aurore-700 bg-surface/50',
          mobileFullscreen && 'h-full rounded-none border-0'
        )}
      >
        {src ? (
          <iframe
            title={title}
            src={src}
            className="block aspect-[16/10] min-h-0 w-full border-0"
            allowFullScreen
            allow="fullscreen"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <GeniallyPlaceholder />
        )}
      </div>
    </div>
  )
}
