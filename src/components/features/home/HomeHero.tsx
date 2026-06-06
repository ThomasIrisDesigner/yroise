import { HOME_HERO } from '@/data/home'
import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

export function HomeHero() {
  return (
    <section className="relative">
      <div
        className="flex h-48 w-full items-center justify-center bg-surface"
        role="img"
        aria-label={HOME_HERO.imageAlt}
      >
        <span className={typography.editorialCaption}>{HOME_HERO.imageAlt}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-text/85 to-transparent px-section pb-4 pt-14">
        <p className={cn(typography.titleL, 'font-normal italic text-white')}>
          &ldquo;{HOME_HERO.quote}&rdquo;
        </p>
        <p className={cn('mt-1', typography.meta, 'text-white/60')}>
          {HOME_HERO.attribution}
        </p>
      </div>
    </section>
  )
}
