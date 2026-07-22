import { useId } from 'react'

type JeunesseIllustrationProps = {
  /** Photo affichée dans le cercle — swappable côté CMS */
  photoSrc?: string
  className?: string
}

/** Figma desktop — Jeunesse_illustration.svg · 242×260 */
const VIEWBOX = '0 0 242 260'
const CIRCLE = { cx: 106.271, cy: 106.706, r: 98.5 }
const STROKE_WIDTH = 15
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
        strokeWidth={STROKE_WIDTH}
      />

      <path
        d="M40.4708 223.346L42.6064 206.1L166.783 220.687L164.572 237.906L40.4708 223.346Z"
        className="fill-aurore-700"
      />
      <path
        d="M85.7515 259.508L103.892 230.38L122.059 259.383L85.7515 259.508Z"
        className="fill-aurore-700"
      />
      <path
        d="M241.356 70.0385L205.919 68.6583L223.957 39.5818L241.356 70.0385Z"
        className="fill-aurore-700"
      />
    </svg>
  )
}
