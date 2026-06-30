import * as React from 'react'

import { cn } from '@/lib/utils'

import { gmbMediaAspectClass } from './gmb-shared'
import { GmbFigureLegend } from './GmbFigureLegend'

interface GmbVideoEmbedProps {
  title: string
  href: string
  embedSrc?: string
  posterSrc?: string
  caption?: string
  meta?: string
  linkLabel?: string
}

/** Embed vidéo — vignette cliquable, lecteur inline (Vimeo / YouTube). */
export function GmbVideoEmbed({
  title,
  href,
  embedSrc,
  posterSrc,
  caption,
  meta,
  linkLabel,
}: GmbVideoEmbedProps) {
  const [playing, setPlaying] = React.useState(false)
  const legendCaption = caption ?? title
  const playerSrc = embedSrc ?? href

  return (
    <figure className="flex flex-col gap-2">
      <div
        className={cn(
          gmbMediaAspectClass,
          'overflow-hidden rounded border-2 border-text'
        )}
      >
        {playing && playerSrc ? (
          <iframe
            src={`${playerSrc}${playerSrc.includes('?') ? '&' : '?'}autoplay=1`}
            title={title}
            className="h-full w-full border-0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="relative h-full w-full cursor-pointer"
            aria-label={`Lire la vidéo : ${title}`}
          >
            {posterSrc ? (
              <img
                src={posterSrc}
                alt=""
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-ocean-900" />
            )}
            <span className="absolute inset-0 flex items-center justify-center">
              <span
                className="flex h-7 w-11 items-center justify-center rounded-md bg-danger"
                aria-hidden
              >
                <span className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-surface" />
              </span>
            </span>
          </button>
        )}
      </div>
      <GmbFigureLegend
        caption={legendCaption}
        meta={meta}
        linkLabel={linkLabel}
        linkHref={linkLabel ? href : undefined}
      />
    </figure>
  )
}
