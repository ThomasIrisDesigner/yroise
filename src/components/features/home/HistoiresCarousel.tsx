import { Link } from 'react-router-dom'

import { HomeCarouselNav } from '@/components/features/home/HomeCarouselNav'
import { PageContainer } from '@/components/features/site/PageContainer'
import { Button } from '@/components/ui/button'
import { CardSlider } from '@/components/ui/card-slider'
import { HistoireCard } from '@/components/ui/histoire-card'
import { HISTOIRES_HOME_CAROUSEL } from '@/data/histoires'
import { useCarouselScrollControl } from '@/lib/useCarouselScrollControl'
import { typography } from '@/styles/typography'

export function HistoiresCarousel() {
  const carousel = useCarouselScrollControl(HISTOIRES_HOME_CAROUSEL.length)
  const mobileCounter = `${String(carousel.activeIndex + 1).padStart(2, '0')} – ${String(HISTOIRES_HOME_CAROUSEL.length).padStart(2, '0')}`

  return (
    <section className="home-histoires-section section-histoires home-carousel-section bg-background pt-10 pb-10">
      <PageContainer className="home-histoires-inner">
        <div className="home-section-header home-section-header--carousel flex flex-col items-center gap-0">
          <h2 className={typography.homeSectionLabel}>Histoires</h2>
          <p className="prototype-mobile-only mt-1 font-outfit text-[14px] font-normal leading-[1.55] text-text">
            {mobileCounter}
          </p>
          <HomeCarouselNav
            className="prototype-desktop-only"
            counter={carousel.counter}
            onPrev={carousel.prev}
            onNext={carousel.next}
            canPrev={carousel.canPrev}
            canNext={carousel.canNext}
          />
        </div>
      </PageContainer>

      <div className="home-carousel-track mt-4">
        <CardSlider
          aria-label="Histoires récentes"
          sliderRef={carousel.sliderRef}
          onActiveIndexChange={carousel.onActiveIndexChange}
        >
          {HISTOIRES_HOME_CAROUSEL.map((item) => (
            <HistoireCard
              key={item.slug}
              to={`/histoires/${item.slug}`}
              titre={item.titre}
              extrait={item.accroche}
              imageSrc={item.imageSrc ?? '/images/voilier-brest.png'}
              imageAlt=""
              sliderItem
            />
          ))}
        </CardSlider>
      </div>

      <PageContainer>
        <div className="home-section-cta home-section-cta--centered mt-8 flex justify-center">
          <Button asChild variant="primary">
            <Link to="/histoires">Toutes nos histoires</Link>
          </Button>
        </div>
      </PageContainer>
    </section>
  )
}
