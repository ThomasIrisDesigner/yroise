import { CARTE_UMAP_EMBED_SRC } from '@/data/carte'
import { cn } from '@/lib/utils'

interface UmapEmbedProps {
  className?: string
  /** Remplit l'espace restant sous le header site (page immersive) */
  immersive?: boolean
}

/** Carte interactive uMap — iframe sous le header site */
export function UmapEmbed({ className, immersive = false }: UmapEmbedProps) {
  const iframe = (
    <iframe
      title="Carte interactive YROISE — uMap"
      src={CARTE_UMAP_EMBED_SRC}
      className="block h-full min-h-0 w-full border-0"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )

  return (
    <div
      className={cn(
        'carte-map-embed relative w-full',
        immersive && 'carte-map-embed--immersive bg-sable-200 p-4',
        className
      )}
    >
      {immersive ? (
        <div className="carte-map-frame min-h-0 flex-1 overflow-hidden rounded border-[2.5px] border-solid border-text">
          {iframe}
        </div>
      ) : (
        <div className="absolute inset-0">{iframe}</div>
      )}
    </div>
  )
}
