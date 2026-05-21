interface GmbImagePairProps {
  leftLabel: string
  rightLabel: string
  caption: string
}

/** Double image Drupal — 2 colonnes + légende partagée (wireframe GMB). */
export function GmbImagePair({ leftLabel, rightLabel, caption }: GmbImagePairProps) {
  return (
    <figure>
      <div className="flex gap-3">
        <div
          className="flex h-28 flex-1 items-center justify-center rounded-md bg-muted"
          aria-hidden
        >
          <span className="text-xs italic text-text/40">{leftLabel}</span>
        </div>
        <div
          className="flex h-28 flex-1 items-center justify-center rounded-md bg-muted"
          aria-hidden
        >
          <span className="text-xs italic text-text/40">{rightLabel}</span>
        </div>
      </div>
      <figcaption className="mt-2 text-sm italic leading-snug text-text/60">
        {caption}
      </figcaption>
    </figure>
  )
}
