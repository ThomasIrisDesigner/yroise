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
          className={`inline-flex h-9 items-center hover:text-text ${typography.meta}`}
        >
          Tout voir →
        </Link>
      </div>
      <HorizontalCarousel gapPx={mobileCarousel.gapPx} aria-label="Collections">
        {COLLECTIONS.map((col) => (
          <Link
            key={col.slug}
            to={`/collections/${col.slug}`}
            aria-label={`Découvrir la collection ${col.name}`}
            className="block shrink-0 snap-start rounded-md text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glaz-700/30"
            style={{ width: cardWidthPx }}
            draggable={false}
          >
            <div
              className="w-full rounded-md border border-border bg-surface"
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
