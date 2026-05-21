import type { HistoireContentBlock } from '@/types/histoireContent'
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
  return (
    <div className="flex flex-col gap-8">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={i} className={typography.body}>
                {block.text}
              </p>
            )
          case 'blockquote':
            return (
              <GmbEditorialQuote
                key={i}
                quote={block.quote}
                attribution={block.attribution}
              />
            )
          case 'image':
            return (
              <GmbImageFigure
                key={i}
                placeholder={block.placeholder}
                caption={block.caption}
                linkLabel={block.linkLabel}
                linkHref={block.linkHref}
              />
            )
          case 'imageDouble':
            return (
              <GmbImagePair
                key={i}
                leftLabel={block.leftLabel}
                rightLabel={block.rightLabel}
                caption={block.caption}
              />
            )
          case 'carousel':
            return (
              <GmbMediaCarousel
                key={i}
                slides={block.slides}
                caption={block.caption}
                initialIndex={block.initialIndex}
              />
            )
          case 'youtube':
            return (
              <GmbVideoEmbed key={i} title={block.title} href={block.href} />
            )
          default:
            return null
        }
      })}
    </div>
  )
}
