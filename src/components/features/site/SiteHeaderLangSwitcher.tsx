import { cn } from '@/lib/utils'

export function SiteHeaderLangSwitcher({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'site-header-lang flex h-10 items-center gap-2 rounded-full border-[2.5px] border-solid border-text px-4',
        className
      )}
      role="group"
      aria-label="Langue"
    >
      <button
        type="button"
        aria-pressed
        className="flex items-center gap-2 font-outfit text-base font-medium tracking-[1px] text-text"
      >
        <span className="size-[5px] rounded-full bg-text" aria-hidden />
        FR
      </button>
      <button
        type="button"
        aria-pressed={false}
        className="font-outfit text-base font-medium tracking-[1px] text-muted"
      >
        BR
      </button>
    </div>
  )
}
