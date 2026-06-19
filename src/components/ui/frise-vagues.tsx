/** Frise décorative vagues — transition Jeunesse (aurore-100) → Footer (ocean-900) */
export function FriseVagues() {
  return (
    <div className="h-8 w-full shrink-0 bg-aurore-100" aria-hidden>
      <svg
        viewBox="0 0 390 16"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block h-4 w-full translate-y-4"
      >
        <path
          d="M0,8 C6,2 12,2 18,8 C24,14 30,14 36,8 C42,2 48,2 54,8 C60,14 66,14 72,8 C78,2 84,2 90,8 C96,14 102,14 108,8 C114,2 120,2 126,8 C132,14 138,14 144,8 C150,2 156,2 162,8 C168,14 174,14 180,8 C186,2 192,2 198,8 C204,14 210,14 216,8 C222,2 228,2 234,8 C240,14 246,14 252,8 C258,2 264,2 270,8 C276,14 282,14 288,8 C294,2 300,2 306,8 C312,14 318,14 324,8 C330,2 336,2 342,8 C348,14 354,14 360,8 C366,2 372,2 378,8 C384,14 390,14 390,8 L390,16 L0,16 Z"
          fill="rgb(var(--ocean-900))"
        />
      </svg>
    </div>
  )
}
