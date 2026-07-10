import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

import { HomeCarouselNav } from '@/components/features/home/HomeCarouselNav'
import { PageContainer } from '@/components/features/site/PageContainer'
import { Button } from '@/components/ui/button'
import { CardSlider } from '@/components/ui/card-slider'
import { COLLECTIONS } from '@/data/collections'
import { useCarouselScrollControl } from '@/lib/useCarouselScrollControl'
import { useSwipeNavigation } from '@/lib/useSwipeNavigation'
import { typography } from '@/styles/typography'

function CollectionDesktopCard({
  slug,
  name,
  imageSrc,
}: {
  slug: string
  name: string
  imageSrc?: string
}) {
  return (
    <Link
      to={`/collections/${slug}`}
      className="home-collection-card card-slider-item group flex w-[310px] shrink-0 flex-col items-center gap-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glaz-700/30"
      aria-label={`Collection ${name}`}
    >
      <div className="hublot-frame home-collection-hublot relative size-[280px] shrink-0 overflow-hidden rounded-full border-[9px] border-text bg-surface transition-colors duration-150 group-hover:border-glaz-700">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden
            draggable={false}
          />
        ) : (
          <div className="absolute inset-0 bg-surface" aria-hidden />
        )}
      </div>
      <p className="w-full text-center font-outfit text-xl font-semibold text-text transition-colors duration-150 group-hover:text-glaz-700">
        {name}
      </p>
    </Link>
  )
}

export function CollectionsCarousel() {
  const [current, setCurrent] = useState(0)
  const total = COLLECTIONS.length
  const desktopCarousel = useCarouselScrollControl(Math.min(4, total))

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + total) % total),
    [total]
  )
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])
  const swipeHandlers = useSwipeNavigation(prev, next)

  const counter = `${String(current + 1).padStart(2, '0')} - ${String(total).padStart(2, '0')}`
  const collection = COLLECTIONS[current]!

  return (
    <section className="home-collections-section page-full-bleed bg-glaz-100">
      <PageContainer className="home-collections-inner">
        <div className="home-section-header home-section-header--carousel flex flex-col items-center gap-0">
          <h2 className={typography.homeSectionLabel}>Collections</h2>
          <HomeCarouselNav
            className="home-carousel-nav--section-header prototype-mobile-only mt-1 w-full justify-center"
            counter={counter}
            onPrev={prev}
            onNext={next}
            canPrev={current > 0}
            canNext={current < total - 1}
          />
          <HomeCarouselNav
            className="home-carousel-nav--section-header prototype-desktop-only"
            counter={desktopCarousel.counter}
            onPrev={desktopCarousel.prev}
            onNext={desktopCarousel.next}
            canPrev={desktopCarousel.canPrev}
            canNext={desktopCarousel.canNext}
          />
        </div>

        <div
          className="prototype-mobile-only mt-4 flex touch-pan-y items-center justify-center"
          onPointerDown={(e) => {
            if ((e.target as HTMLElement).closest('button')) return
            swipeHandlers.onPointerDown(e)
          }}
          onPointerUp={swipeHandlers.onPointerUp}
          onPointerCancel={swipeHandlers.onPointerCancel}
        >
          <Link
            to={`/collections/${collection.slug}`}
            className="group flex shrink-0 flex-col items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glaz-700/30"
            aria-label={`Collection ${collection.name}`}
          >
            <div className="hublot-frame relative size-[198px] shrink-0 overflow-hidden rounded-full border-[9px] border-text bg-surface transition-colors duration-150 group-hover:border-glaz-700">
              {COLLECTIONS.map((col, i) =>
                col.hublotImageSrc ? (
                  <img
                    key={col.slug}
                    src={col.hublotImageSrc}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
                    style={{ opacity: i === current ? 1 : 0 }}
                    aria-hidden={i !== current}
                    draggable={false}
                  />
                ) : (
                  <div
                    key={col.slug}
                    className="absolute inset-0 bg-surface transition-opacity duration-500"
                    style={{ opacity: i === current ? 1 : 0 }}
                    aria-hidden={i !== current}
                  />
                )
              )}
            </div>

            <p className="font-outfit text-[22px] font-semibold text-text transition-colors duration-150 group-hover:text-glaz-700">
              {collection.name}
            </p>
          </Link>
        </div>
      </PageContainer>

      <div className="home-collections-desktop-track prototype-desktop-only mt-4">
        <CardSlider
          aria-label="Collections"
          sliderRef={desktopCarousel.sliderRef}
          onActiveIndexChange={desktopCarousel.onActiveIndexChange}
        >
          {COLLECTIONS.slice(0, 4).map((col) => (
            <CollectionDesktopCard
              key={col.slug}
              slug={col.slug}
              name={col.name}
              imageSrc={col.hublotImageSrc}
            />
          ))}
        </CardSlider>
      </div>

      <PageContainer>
        <div className="home-section-cta-block">
          <hr className="home-section-cta-separator" aria-hidden />
          <div className="home-section-cta home-section-cta--centered flex justify-center">
            <Button asChild variant="primary">
              <Link to="/collections">Découvrir toutes les collections</Link>
            </Button>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
