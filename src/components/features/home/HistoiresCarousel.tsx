import { Link } from 'react-router-dom'

import { HorizontalCarousel } from '@/components/features/home/HorizontalCarousel'
import { mobileCarousel } from '@/config/wireframe-mobile'
import { HISTOIRES_RECENTES } from '@/data/histoires'
import { typography } from '@/styles/typography'

const { cardWidthPx, imageHeightPx } = mobileCarousel.histoires

export function HistoiresCarousel() {
  return (
    <section className="border-t border-border pt-6">
      <div className="mb-2 flex items-center justify-between px-4">
        <h2 className={typography.sectionLabel}>Histoires</h2>
        <Link to="/histoires" className="text-xs text-text/60 hover:text-text">
          Tout voir →
        </Link>
      </div>
      <HorizontalCarousel gapPx={mobileCarousel.gapPx} aria-label="Histoires récentes">
        {HISTOIRES_RECENTES.map((item) => (
          <Link
            key={item.slug}
            to={`/histoires/${item.slug}`}
            className="block shrink-0 snap-start"
            style={{ width: cardWidthPx }}
            draggable={false}
          >
            <div
              className="w-full rounded border border-border bg-muted"
              style={{ height: imageHeightPx }}
              aria-hidden
            />
            <p className={`mt-1.5 ${typography.carouselTitle}`}>{item.titre}</p>
            <p className={`mt-0.5 ${typography.carouselMeta}`}>{item.accroche}</p>
          </Link>
        ))}
      </HorizontalCarousel>
    </section>
  )
}
