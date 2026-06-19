import { HOME_HERO } from '@/data/home'
import { FriseHaut } from '@/components/ui/frise-haut'

export function HomeHero() {
  return (
    <section className="relative">
      <FriseHaut className="absolute inset-x-0 top-0 z-10 block" />
      <img
        src="/images/voilier-brest.png"
        alt={HOME_HERO.imageAlt}
        className="block h-48 w-full object-cover"
        draggable={false}
      />
    </section>
  )
}
