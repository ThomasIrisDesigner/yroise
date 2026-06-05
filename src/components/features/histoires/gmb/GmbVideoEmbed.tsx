import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

interface GmbVideoEmbedProps {
  title: string
  href: string
}

/** Embed vidéo YouTube — ratio 16:9, placeholder wireframe (hors lecteur réel). */
export function GmbVideoEmbed({ title, href }: GmbVideoEmbedProps) {
  return (
    <figure>
      <div className="relative w-full overflow-hidden rounded-md bg-ocean-900">
        <div className="pt-[56.25%]" aria-hidden />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-5">
          <div
            className="flex h-7 w-11 items-center justify-center rounded-md bg-danger"
            aria-hidden
          >
            <span className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-surface" />
          </div>
          <p className={cn('text-center', typography.meta, 'text-white/60')}>{title}</p>
        </div>
      </div>
      <figcaption className={`mt-2 flex flex-wrap items-center gap-2 ${typography.editorialCaption}`}>
        <span>{title}</span>
        <Button asChild variant="ghost" size="sm" className="not-italic">
          <a href={href}>Voir sur YouTube</a>
        </Button>
      </figcaption>
    </figure>
  )
}
