import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { typography } from '@/styles/typography'

/** Illustration globe inspirée de la maquette — cercle photo + anneau aurore */
function GlobeIllustration() {
  return (
    <div className="relative mx-auto h-[86px] w-[72px]">
      {/* Anneau décoratif */}
      <svg
        viewBox="0 0 72 86"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        {/* Corps de l'anneau */}
        <ellipse
          cx="36"
          cy="34"
          rx="32"
          ry="32"
          fill="none"
          stroke="rgb(var(--aurore-900))"
          strokeWidth="6"
        />
        {/* Anneau planétaire incliné */}
        <ellipse
          cx="36"
          cy="34"
          rx="30"
          ry="10"
          fill="none"
          stroke="rgb(var(--aurore-900))"
          strokeWidth="4"
          transform="rotate(-20 36 34)"
        />
        {/* Pied/support */}
        <line
          x1="36"
          y1="66"
          x2="36"
          y2="82"
          stroke="rgb(var(--aurore-900))"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="28"
          y1="80"
          x2="44"
          y2="80"
          stroke="rgb(var(--aurore-900))"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      {/* Photo dans le cercle */}
      <div className="absolute left-1/2 top-[2px] h-[64px] w-[64px] -translate-x-1/2 overflow-hidden rounded-full">
        <img
          src="/images/voilier-brest.png"
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>
    </div>
  )
}

export function JeunesseTeaser() {
  return (
    <section className="bg-aurore-100 px-section pt-10 pb-10">
      <div className="flex flex-col items-center gap-4">
        <GlobeIllustration />

        <div className="text-center">
          <p className={typography.sectionLabel}>Jeunesse</p>
          <p className="mt-1 font-outfit text-[13px] font-normal leading-snug text-text/70">
            Jeux et ateliers pour découvrir le patrimoine.
          </p>
        </div>

        <Button asChild variant="primary">
          <Link to="/jeunesse">Jouer</Link>
        </Button>
      </div>
    </section>
  )
}
