import { Link } from 'react-router-dom'

import { HorizontalCarousel } from '@/components/features/home/HorizontalCarousel'
import { mobileCarousel } from '@/config/wireframe-mobile'
import { COLLECTIONS } from '@/data/collections'
import { typography } from '@/styles/typography'

const { cardWidthPx, imageHeightPx } = mobileCarousel.collections

export function CollectionsCarousel() {
  return (
    <section className="border-t border-border pt-10 pb-8">
      <div className="mb-4 flex items-center justify-between px-5">
        <h2 className={typography.sectionLabel}>Collections</h2>
        <Link
          to="/collections"
          className="inline-flex h-9 items-center text-sm text-text/60 hover:text-text"
        >
          Tout voir →
        </Link>
      </div>
      <HorizontalCarousel gapPx={mobileCarousel.gapPx} aria-label="Collections">
        {COLLECTIONS.map((col) => (
          <Link
            key={col.slug}
            to={`/collections/${col.slug}`}
            className="block shrink-0 snap-start text-center"
            style={{ width: cardWidthPx }}
            draggable={false}
          >
            <div
              className="w-full rounded border border-border bg-muted"
              style={{ height: imageHeightPx }}
              aria-hidden
            />
            <p className={`mt-2 ${typography.carouselCollectionLabel}`}>{col.shortLabel}</p>
          </Link>
        ))}
      </HorizontalCarousel>
    </section>
  )
}
