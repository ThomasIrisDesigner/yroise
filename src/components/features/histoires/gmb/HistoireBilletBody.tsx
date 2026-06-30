import type { HistoireContentBlock } from '@/types/histoireContent'
import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

import { GmbEditorialQuote } from './GmbEditorialQuote'
import { GmbImageFigure } from './GmbImageFigure'
import { GmbImagePair } from './GmbImagePair'
import { GmbMediaCarousel } from './GmbMediaCarousel'
import { GmbVideoEmbed } from './GmbVideoEmbed'

interface HistoireBilletBodyProps {
  blocks: HistoireContentBlock[]
}

export function HistoireBilletBody({ blocks }: HistoireBilletBodyProps) {
  let headingCount = 0

  return (
    <div className={typography.editorialBodyStack}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'heading': {
            const isFirst = headingCount === 0
            headingCount += 1
            return (
              <h2
                key={i}
                className={cn(
                  typography.titleL,
                  'font-bold leading-7',
                  !isFirst && 'pt-6'
                )}
              >
                {block.text}
              </h2>
            )
          }
          case 'paragraph':
            if (block.segments?.length) {
              return (
                <p key={i} className={typography.editorialBody}>
                  {block.segments.map((segment, j) =>
                    segment.italic ? (
                      <em key={j}>{segment.text}</em>
                    ) : (
                      <span key={j}>{segment.text}</span>
                    )
                  )}
                </p>
              )
            }
            return (
              <p key={i} className={typography.editorialBody}>
                {block.text}
              </p>
            )
          case 'blockquote':
            return (
              <GmbEditorialQuote
                key={i}
                quote={block.quote}
                meta={block.meta}
                linkLabel={block.linkLabel}
                linkHref={block.linkHref}
              />
            )
          case 'image':
            return (
              <GmbImageFigure
                key={i}
                placeholder={block.placeholder}
                caption={block.caption}
                meta={block.meta}
                linkLabel={block.linkLabel}
                linkHref={block.linkHref}
                imageSrc={block.imageSrc}
              />
            )
          case 'imageDouble':
            return (
              <GmbImagePair
                key={i}
                leftLabel={block.leftLabel}
                rightLabel={block.rightLabel}
                caption={block.caption}
                meta={block.meta}
                linkLabel={block.linkLabel}
                linkHref={block.linkHref}
              />
            )
          case 'carousel':
            return (
              <GmbMediaCarousel
                key={i}
                slides={block.slides}
                caption={block.caption}
                meta={block.meta}
                linkLabel={block.linkLabel}
                linkHref={block.linkHref}
                initialIndex={block.initialIndex}
              />
            )
          case 'youtube':
            return (
              <GmbVideoEmbed
                key={i}
                title={block.title}
                href={block.href}
                embedSrc={block.embedSrc}
                posterSrc={block.posterSrc}
                caption={block.caption}
                meta={block.meta}
              />
            )
          default:
            return null
        }
      })}
    </div>
  )
}
