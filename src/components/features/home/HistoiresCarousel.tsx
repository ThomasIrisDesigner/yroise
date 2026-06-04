import { Link } from 'react-router-dom'

import { HorizontalCarousel } from '@/components/features/home/HorizontalCarousel'
import { mobileCarousel } from '@/config/wireframe-mobile'
import { HISTOIRES_RECENTES } from '@/data/histoires'
import { typography } from '@/styles/typography'

const { cardWidthPx, imageHeightPx } = mobileCarousel.histoires

export function HistoiresCarousel() {
  return (
    <section className="border-t border-border pt-10 pb-8">
      <div className="mb-4 flex items-center justify-between px-5">
        <h2 className={typography.sectionLabel}>Histoires</h2>
        <Link
          to="/histoires"
          className={`inline-flex h-9 items-center hover:text-text ${typography.meta}`}
        >
          Tout voir →
        </Link>
      </div>
      <HorizontalCarousel gapPx={mobileCarousel.gapPx} aria-label="Histoires récentes">
        {HISTOIRES_RECENTES.map((item) => (
          <Link
            key={item.slug}
            to={`/histoires/${item.slug}`}
            aria-label={`Lire l'histoire : ${item.titre}`}
            className="block shrink-0 snap-start rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sable-700/30"
            style={{ width: cardWidthPx }}
            draggable={false}
          >
            <div
              className="w-full rounded-md border border-border bg-surface"
              style={{ height: imageHeightPx }}
              aria-hidden
            />
            <p className={`mt-2 ${typography.carouselTitle}`}>{item.titre}</p>
            {item.accroche ? (
              <p className={`mt-1 ${typography.carouselMeta}`}>{item.accroche}</p>
            ) : null}
          </Link>
        ))}
      </HorizontalCarousel>
    </section>
  )
}
