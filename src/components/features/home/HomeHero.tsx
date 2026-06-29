import { HOME_HERO } from '@/data/home'

export function HomeHero() {
  return (
    <section className="relative">
      <img
        src="/images/voilier-brest.png"
        alt={HOME_HERO.imageAlt}
        className="block h-48 w-full object-cover"
        draggable={false}
      />
    </section>
  )
}
