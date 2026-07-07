import { Link } from 'react-router-dom'

import { JeunesseIllustration } from '@/components/features/jeunesse/JeunesseIllustration'
import { Button } from '@/components/ui/button'
import { typography } from '@/styles/typography'

export function JeunesseTeaser() {
  return (
    <section className="bg-aurore-100 px-section pt-10 pb-10">
      <p className={`${typography.homeSectionLabel} text-center`}>Jeunesse</p>

      <div className="mt-6 flex justify-center">
        <div className="h-[86px] w-[100px]">
          <JeunesseIllustration className="h-full w-full" />
        </div>
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
