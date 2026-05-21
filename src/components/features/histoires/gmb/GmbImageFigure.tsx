interface GmbImageFigureProps {
  placeholder: string
  caption: string
  linkLabel?: string
  linkHref?: string
}

/** Image inline pleine largeur + légende + lien document (wireframe GMB). */
export function GmbImageFigure({
  placeholder,
  caption,
  linkLabel,
  linkHref = '#',
}: GmbImageFigureProps) {
  return (
    <figure>
      <div
        className="flex h-32 w-full items-center justify-center rounded-md bg-muted"
        role="img"
        aria-label={placeholder}
      >
        <span className="text-sm italic text-text/40">{placeholder}</span>
      </div>
      <figcaption className="mt-2 text-sm italic leading-snug text-text/60">
        {caption}
        {linkLabel ? (
          <>
            {' '}
            <a href={linkHref} className="font-semibold text-secondary not-italic">
              {linkLabel} →
            </a>
          </>
        ) : null}
      </figcaption>
    </figure>
  )
}
