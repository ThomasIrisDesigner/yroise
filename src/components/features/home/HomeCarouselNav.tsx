import { TriangleYroise } from '@/components/ui/triangle-yroise'
import { cn } from '@/lib/utils'

const navButtonClass =
  'inline-flex h-10 w-[60px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-solid border-list-separator/20 bg-transparent text-text transition-all duration-150 ease-in-out hover:border-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glaz-700/30 disabled:cursor-default disabled:opacity-30 disabled:hover:border-list-separator/20'

function CarouselNavButton({
  direction,
  disabled,
  onClick,
  label,
}: {
  direction: 'left' | 'right'
  disabled?: boolean
  onClick: () => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={navButtonClass}
    >
      <span
        className={cn('inline-flex', direction === 'left' && 'rotate-180')}
        aria-hidden
      >
        <TriangleYroise
          color={
            disabled ? 'rgb(var(--color-border))' : 'rgb(var(--color-text))'
          }
          size={8}
        />
      </span>
    </button>
  )
}

interface HomeCarouselNavProps {
  counter: string
  onPrev: () => void
  onNext: () => void
  canPrev?: boolean
  canNext?: boolean
  className?: string
}

export function HomeCarouselNav({
  counter,
  onPrev,
  onNext,
  canPrev = true,
  canNext = true,
  className,
}: HomeCarouselNavProps) {
  return (
    <div className={cn('home-carousel-nav flex items-center gap-12', className)}>
      <p className="font-outfit text-sm font-normal leading-snug text-text">{counter}</p>
      <div className="flex items-center gap-[18px]">
        <CarouselNavButton
          direction="left"
          disabled={!canPrev}
          onClick={onPrev}
          label="Élément précédent"
        />
        <CarouselNavButton
          direction="right"
          disabled={!canNext}
          onClick={onNext}
          label="Élément suivant"
        />
      </div>
    </div>
  )
}
