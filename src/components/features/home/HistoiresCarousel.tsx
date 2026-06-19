import { Link } from 'react-router-dom'

import { CardSlider } from '@/components/ui/card-slider'
import { HistoireCard } from '@/components/ui/histoire-card'
import { TriangleYroise } from '@/components/ui/triangle-yroise'
import { HISTOIRES_RECENTES } from '@/data/histoires'
import { typography } from '@/styles/typography'

export function HistoiresCarousel() {
  return (
    <section className="section-histoires border-t border-border pt-10 pb-8">
      <div className="mb-4 flex items-center justify-between px-section">
        <h2 className={typography.sectionLabel}>Histoires</h2>
        <Link to="/histoires" aria-label="Voir toutes les histoires">
          <TriangleYroise size={18} color="rgb(var(--glaz-700))" />
        </Link>
      </div>
      <CardSlider aria-label="Histoires récentes">
        {HISTOIRES_RECENTES.map((item) => (
          <HistoireCard
            key={item.slug}
            to={`/histoires/${item.slug}`}
            titre={item.titre}
            extrait={item.accroche}
            imageSrc="/images/voilier-brest.png"
            imageAlt=""
            sliderItem
          />
        ))}
      </CardSlider>
    </section>
  )
}
