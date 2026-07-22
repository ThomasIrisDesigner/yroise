import { cn } from '@/lib/utils'

/** Triangle décoratif à droite des H1 pages liste — `public/images/Icon_trianggle_titresH1.svg`. */
export function TitleH1Triangle({ className }: { className?: string }) {
  return (
    <svg
      width="10"
      height="12"
      viewBox="0 0 10 12"
      fill="none"
      aria-hidden
      className={cn('shrink-0 -scale-x-100', className)}
    >
      <path
        d="M1.33822e-05 7.29507e-05L9.70081 5.7791L0.0414713 11.5664L1.33822e-05 7.29507e-05Z"
        fill="currentColor"
      />
    </svg>
  )
}
