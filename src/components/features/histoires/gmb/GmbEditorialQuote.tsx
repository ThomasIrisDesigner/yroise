interface GmbEditorialQuoteProps {
  quote: string
  attribution: string
}

/** Citation Drupal — bordure gauche accent (wireframe GMB). */
export function GmbEditorialQuote({ quote, attribution }: GmbEditorialQuoteProps) {
  return (
    <figure className="border-l-[3px] border-secondary py-0.5 pl-4">
      <blockquote className="text-base italic leading-[1.65] text-text">{quote}</blockquote>
      <figcaption className="mt-2 text-sm text-text/60">{attribution}</figcaption>
    </figure>
  )
}
