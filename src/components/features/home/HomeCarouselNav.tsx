import { cn } from '@/lib/utils'

function PaginationArrow({
  direction,
  disabled,
  tone = 'light',
}: {
  direction: 'left' | 'right'
  disabled?: boolean
  tone?: 'light' | 'dark'
}) {
  const fill = disabled
    ? 'rgb(var(--color-border))'
    : tone === 'dark'
      ? 'rgb(var(--color-text-on-dark))'
      : 'rgb(var(--color-text))'

  return (
    <svg
      width="6.71"
      height="8"
      viewBox="0 0 6.71 8"
      aria-hidden
      className="shrink-0"
    >
      {direction === 'right' ? (
        <polygon points="0,0 0,8 6.71,4" fill={fill} />
      ) : (
        <polygon points="6.71,0 6.71,8 0,4" fill={fill} />
      )}
    </svg>
  )
}

const carouselNavButtonClass =
  'inline-flex size-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-solid border-transparent bg-transparent transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glaz-700/30 disabled:cursor-default disabled:hover:border-transparent'

const carouselNavButtonToneClass = {
  light: 'hover:border-text',
  dark: 'hover:border-on-dark',
} as const

function CarouselNavButton({
  direction,
  disabled,
  onClick,
  label,
  tone = 'light',
}: {
  direction: 'left' | 'right'
  disabled?: boolean
  onClick: () => void
  label: string
  tone?: 'light' | 'dark'
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={cn(carouselNavButtonClass, carouselNavButtonToneClass[tone])}
    >
      <PaginationArrow direction={direction} disabled={disabled} tone={tone} />
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
  /** Fond clair (défaut) ou sombre (section article) */
  tone?: 'light' | 'dark'
}

export function HomeCarouselNav({
  counter,
  onPrev,
  onNext,
  canPrev = true,
  canNext = true,
  className,
  tone = 'light',
}: HomeCarouselNavProps) {
  const isDark = tone === 'dark'

  return (
    <div className={cn('home-carousel-nav flex h-8 items-center gap-2', className)}>
      <CarouselNavButton
        direction="left"
        disabled={!canPrev}
        onClick={onPrev}
        label="Élément précédent"
        tone={tone}
      />
      <p
        className={cn(
          'min-w-[52px] text-center font-outfit text-sm font-normal leading-[1.55]',
          isDark ? 'text-on-dark' : 'text-text'
        )}
      >
        {counter}
      </p>
      <CarouselNavButton
        direction="right"
        disabled={!canNext}
        onClick={onNext}
        label="Élément suivant"
        tone={tone}
      />
    </div>
  )
}
