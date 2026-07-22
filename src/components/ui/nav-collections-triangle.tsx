import { cn } from '@/lib/utils'

/** Triangle nav Collections — Figma 158:8424 · retournement à l’ouverture. */
export function NavCollectionsTriangle({
  open,
  className,
}: {
  open: boolean
  className?: string
}) {
  return (
    <span
      aria-hidden
      className={cn(
        'nav-collections-triangle inline-flex size-6 shrink-0 items-center justify-center text-text',
        open && 'nav-collections-triangle--open',
        className
      )}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" className="block size-6">
        <path
          d="M9.5 8.03471L14.5 12.1211L9.52137 16.2133L9.5 8.03471Z"
          fill="currentColor"
        />
      </svg>
    </span>
  )
}
