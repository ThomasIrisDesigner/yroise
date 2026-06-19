import { useId } from 'react'

const UNIT_WIDTH = 10
const UNIT_HEIGHT = 8

const UNIT_PATH =
  'M9.88776 1.51026L4.94742 7.55515L0 1.5361L0 -9.53674e-07L9.88776 -7.86406e-07V1.51026Z'

/**
 * Frise dentelée — motif unitaire (ligne + dent) répété horizontalement sans gap.
 * Source : public/images/frise-haut-unit.svg (10×8).
 */
export function FriseHaut({ className }: { className?: string }) {
  const patternId = useId()

  return (
    <svg
      width="100%"
      height={UNIT_HEIGHT}
      className={className}
      overflow="hidden"
      aria-hidden
    >
      <defs>
        <pattern
          id={patternId}
          width={UNIT_WIDTH}
          height={UNIT_HEIGHT}
          patternUnits="userSpaceOnUse"
        >
          <path d={UNIT_PATH} fill="rgb(var(--color-text))" />
        </pattern>
      </defs>
      <rect width="100%" height={UNIT_HEIGHT} fill={`url(#${patternId})`} />
    </svg>
  )
}
