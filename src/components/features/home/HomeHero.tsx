import { HOME_HERO } from '@/data/home'
import { typography } from '@/styles/typography'

export function HomeHero() {
  return (
    <section className="relative">
      <div
        className="flex h-40 w-full items-center justify-center bg-muted"
        role="img"
        aria-label={HOME_HERO.imageAlt}
      >
        <span className="text-xs italic text-text/40">{HOME_HERO.imageAlt}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent px-4 pb-3 pt-12">
        <p className={typography.heroQuote}>&ldquo;{HOME_HERO.quote}&rdquo;</p>
        <p className={typography.heroAttribution}>{HOME_HERO.attribution}</p>
      </div>
    </section>
  )
}
