import { HomeCarouselNav } from '@/components/features/home/HomeCarouselNav'
import { CardSlider } from '@/components/ui/card-slider'
import { HistoireCard } from '@/components/ui/histoire-card'
import { SectionTitleOrnament } from '@/components/ui/section-title-ornament'
import type { HistoireBillet } from '@/data/histoires'
import { useCarouselScrollControl } from '@/lib/useCarouselScrollControl'
import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

interface HistoireRelatedCarouselProps {
  items: HistoireBillet[]
}

/** Section « Vous aimerez aussi » — carousel fond noir (mobile type home · desktop Figma 132:8451). */
export function HistoireRelatedCarousel({ items }: HistoireRelatedCarouselProps) {
  const carousel = useCarouselScrollControl(items.length)

  if (items.length === 0) return null

  return (
    <section
      className="histoire-related-section page-full-bleed section-histoires home-carousel-section"
      aria-labelledby="histoire-related-title"
    >
      <div className="histoire-related-header px-section">
        <div className="home-section-header home-section-header--carousel histoire-related-header-inner flex flex-col items-center">
          <h2
            id="histoire-related-title"
            className={cn(
              typography.sectionTitleRebond,
              'histoire-related-title text-center text-on-dark'
            )}
          >
            Vous aimerez aussi
          </h2>
          <SectionTitleOrnament className="histoire-related-ornament mt-4 text-glaz-700" />
          <HomeCarouselNav
            tone="dark"
            className="home-carousel-nav--section-header mt-1 w-full justify-center"
            counter={carousel.counter}
            onPrev={carousel.prev}
            onNext={carousel.next}
            canPrev={carousel.canPrev}
            canNext={carousel.canNext}
          />
        </div>
      </div>

      <div className="histoire-related-track mt-4">
        <CardSlider
          aria-label="Histoires associées"
          sliderRef={carousel.sliderRef}
          onActiveIndexChange={carousel.onActiveIndexChange}
        >
          {items.map((item) => (
            <HistoireCard
              key={item.slug}
              to={`/histoires/${item.slug}`}
              titre={item.titre}
              extrait={item.accroche}
              imageSrc={item.imageSrc ?? '/images/voilier-brest.png'}
              imageAlt=""
              sliderItem
              onDark
            />
          ))}
        </CardSlider>
      </div>
    </section>
  )
}
