import { HOME_HERO } from '@/data/home'

export function HomeHero() {
  return (
    <section className="home-hero relative">
      <img
        src="/images/brest-rade-negatives.jpg"
        alt={HOME_HERO.imageAlt}
        className="home-hero-image block h-48 w-full object-cover object-bottom"
        draggable={false}
      />
    </section>
  )
}
