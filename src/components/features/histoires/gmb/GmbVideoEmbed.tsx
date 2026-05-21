interface GmbVideoEmbedProps {
  title: string
  href: string
}

/** Embed vidéo YouTube — ratio 16:9, placeholder wireframe (hors lecteur réel). */
export function GmbVideoEmbed({ title, href }: GmbVideoEmbedProps) {
  return (
    <figure>
      <div className="relative w-full overflow-hidden rounded-md bg-primary">
        <div className="pt-[56.25%]" aria-hidden />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-5">
          <div
            className="flex h-7 w-11 items-center justify-center rounded-md bg-danger"
            aria-hidden
          >
            <span className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-surface" />
          </div>
          <p className="text-center text-sm italic text-surface/80">{title}</p>
        </div>
      </div>
      <figcaption className="mt-2 text-sm leading-snug text-text/60">
        <span className="italic">{title}</span>{' '}
        <a href={href} className="font-semibold text-secondary not-italic">
          Voir sur YouTube →
        </a>
      </figcaption>
    </figure>
  )
}
