import { cn } from '@/lib/utils'

/** Ornement sous-titre de section liste — vague (Figma Header row) */
export function SectionTitleOrnament({ className }: { className?: string }) {
  return (
    <svg
      width={20}
      height={5}
      viewBox="0 0 20 5"
      fill="none"
      aria-hidden
      className={cn('text-glaz-700', className)}
    >
      <path
        d="M1.25 3.54343C1.25 3.54343 3.0189 1.25002 5.85629 1.25C8.69368 1.24998 9.83259 3.54345 12.8748 3.54343C15.9171 3.54342 18.2279 1.25 18.2279 1.25"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    </svg>
  )
}
