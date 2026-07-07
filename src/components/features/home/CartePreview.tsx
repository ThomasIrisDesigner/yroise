import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { HOME_CARTE } from '@/data/home'
import { typography } from '@/styles/typography'

export function CartePreview() {
  return (
    <section className="bg-background px-section py-10">
      <div className="bg-sable-200 px-section py-10">
        <p className={`${typography.homeSectionLabel} text-center`}>Carte interactive</p>

        <img
          src={HOME_CARTE.imageSrc}
          alt={HOME_CARTE.imageAlt}
          className="mt-6 block h-[194px] w-full object-cover"
          draggable={false}
        />

        <h2 className={`mt-7 text-center ${typography.titleL}`}>{HOME_CARTE.titre}</h2>

        <p className={`mt-3 text-center ${typography.cardExcerpt}`}>{HOME_CARTE.chapeau}</p>

        <div className="mt-8 flex justify-center">
          <Button asChild variant="primary">
            <Link to="/carte">{HOME_CARTE.ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
