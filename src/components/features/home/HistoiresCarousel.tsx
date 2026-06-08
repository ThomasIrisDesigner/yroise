import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { CardSlider } from '@/components/ui/card-slider'
import { HistoireCard } from '@/components/ui/histoire-card'
import { HISTOIRES_RECENTES } from '@/data/histoires'
import { typography } from '@/styles/typography'

export function HistoiresCarousel() {
  return (
    <section className="section-histoires border-t border-border pt-10 pb-8">
      <div className="mb-4 flex items-center justify-between px-section">
        <h2 className={typography.sectionLabel}>Histoires</h2>
        <Button asChild variant="ghost" size="sm">
          <Link to="/histoires">Tout voir</Link>
        </Button>
      </div>
      <CardSlider aria-label="Histoires récentes">
        {HISTOIRES_RECENTES.map((item) => (
          <HistoireCard
            key={item.slug}
            to={`/histoires/${item.slug}`}
            titre={item.titre}
            type={item.type}
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
