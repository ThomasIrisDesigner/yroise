import { HOME_HERO } from '@/data/home'
import { typography } from '@/styles/typography'

export function HomeHero() {
  return (
    <section className="relative">
      <div
        className="flex h-48 w-full items-center justify-center bg-muted"
        role="img"
        aria-label={HOME_HERO.imageAlt}
      >
        <span className="text-sm italic text-text/40">{HOME_HERO.imageAlt}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 to-transparent px-5 pb-5 pt-14">
        <p className={typography.heroQuote}>&ldquo;{HOME_HERO.quote}&rdquo;</p>
        <p className={`mt-1 ${typography.heroAttribution}`}>{HOME_HERO.attribution}</p>
      </div>
    </section>
  )
}
