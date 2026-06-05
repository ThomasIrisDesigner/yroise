import { Button } from '@/components/ui/button'
import { typography } from '@/styles/typography'

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
        className="flex h-32 w-full items-center justify-center rounded-md bg-surface"
        role="img"
        aria-label={placeholder}
      >
        <span className={typography.editorialCaption}>{placeholder}</span>
      </div>
      <figcaption className={`mt-2 ${typography.editorialCaption}`}>
        {caption}
        {linkLabel ? (
          <>
            {' '}
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="inline-flex h-auto min-h-0 gap-2 px-0 py-0 not-italic"
            >
              <a href={linkHref}>{linkLabel}</a>
            </Button>
          </>
        ) : null}
      </figcaption>
    </figure>
  )
}
