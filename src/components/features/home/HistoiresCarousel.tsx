import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { CardSlider } from '@/components/ui/card-slider'
import { HistoireCard } from '@/components/ui/histoire-card'
import { HISTOIRES_RECENTES } from '@/data/histoires'
import { typography } from '@/styles/typography'

export function HistoiresCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const counter = `${String(activeIndex + 1).padStart(2, '0')} – ${String(HISTOIRES_RECENTES.length).padStart(2, '0')}`

  return (
    <section className="section-histoires bg-background pt-10 pb-10">
      <div className="flex flex-col items-center gap-0 px-section">
        <h2 className={typography.sectionLabel}>Histoires</h2>
        <p className="mt-1 font-outfit text-[14px] font-normal leading-[1.55] text-text">
          {counter}
        </p>
      </div>

      <div className="mt-4">
        <CardSlider
          aria-label="Histoires récentes"
          onActiveIndexChange={setActiveIndex}
        >
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
      </div>

      <div className="mt-8 flex justify-center px-section">
        <Button asChild variant="primary">
          <Link to="/histoires">Toutes nos histoires</Link>
        </Button>
      </div>
    </section>
  )
}
