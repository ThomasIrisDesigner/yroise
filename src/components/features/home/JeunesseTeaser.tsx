import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { typography } from '@/styles/typography'

/** Illustration Jeunesse — visuel globe (maquette) */
function GlobeIllustration() {
  return (
    <div className="relative mx-auto h-[86px] w-[100px]">
      <img
        src="/images/Jeunesse_Visuel.png"
        alt=""
        aria-hidden
        className="h-full w-full object-contain"
        draggable={false}
      />
    </div>
  )
}

export function JeunesseTeaser() {
  return (
    <section className="bg-aurore-100 px-section pt-10 pb-10">
      <p className={`${typography.sectionLabel} text-center`}>Jeunesse</p>

      <div className="mt-6 flex justify-center">
        <GlobeIllustration />
      </div>

      <p className={`mt-7 text-center ${typography.cardExcerpt}`}>
        Jeux et ateliers
        <br />
        pour découvrir le patrimoine.
      </p>

      <div className="mt-8 flex justify-center">
        <Button asChild variant="primary">
          <Link to="/jeunesse">Jouer</Link>
        </Button>
      </div>
    </section>
  )
}
