import { useId } from 'react'

type JeunesseIllustrationProps = {
  /** Photo affichée dans le cercle — swappable côté CMS */
  photoSrc?: string
  className?: string
}

const VIEWBOX = '0 0 77 86'
const CIRCLE = { cx: 35.4951, cy: 34.9185, r: 31.0732 }
const IMAGE_SIZE = CIRCLE.r * 2

/** Illustration Jeunesse — globe vectoriel + photo masquée dans le cercle */
export function JeunesseIllustration({
  photoSrc = '/images/Jeunesse_photo.jpg',
  className,
}: JeunesseIllustrationProps) {
  const clipId = useId()

  return (
    <svg
      viewBox={VIEWBOX}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <defs>
        <clipPath id={clipId}>
          <circle cx={CIRCLE.cx} cy={CIRCLE.cy} r={CIRCLE.r} />
        </clipPath>
      </defs>

      <image
        href={photoSrc}
        x={CIRCLE.cx - CIRCLE.r}
        y={CIRCLE.cy - CIRCLE.r}
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        preserveAspectRatio="xMidYMid slice"
        clipPath={`url(#${clipId})`}
      />

      <circle
        cx={CIRCLE.cx}
        cy={CIRCLE.cy}
        r={CIRCLE.r}
        className="stroke-aurore-700"
        strokeWidth={7}
      />

      <path
        d="M15.5457 74.3298L16.3558 67.5406L52.6895 72.0063L51.8576 78.7857L15.5457 74.3298Z"
        className="fill-aurore-700"
      />
      <path
        d="M28.7947 85.4003L34.1025 76.4832L39.418 85.3622L28.7947 85.4003Z"
        className="fill-aurore-700"
      />
      <path
        d="M76.0575 19.741L65.6888 19.3185L70.9665 10.417L76.0575 19.741Z"
        className="fill-aurore-700"
      />
    </svg>
  )
}
