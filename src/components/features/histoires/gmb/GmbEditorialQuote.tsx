import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

interface GmbEditorialQuoteProps {
  quote: string
  attribution: string
}

/** Citation Drupal — bordure gauche accent (wireframe GMB). */
export function GmbEditorialQuote({ quote, attribution }: GmbEditorialQuoteProps) {
  return (
    <figure className="border-l-[3px] border-sable-700 py-0.5 pl-4">
      <blockquote className={cn(typography.editorialBody, 'italic')}>{quote}</blockquote>
      <figcaption className={`mt-2 ${typography.meta}`}>{attribution}</figcaption>
    </figure>
  )
}
