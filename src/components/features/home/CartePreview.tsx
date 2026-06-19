import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { HOME_CARTE } from '@/data/home'
import { typography } from '@/styles/typography'

export function CartePreview() {
  return (
    <section className="bg-sable-200 px-section pt-10 pb-10">
      {/* Label centré */}
      <p className={`${typography.sectionLabel} text-center`}>La carte interactive</p>

      {/* Photo pleine largeur */}
      <img
        src="/images/voilier-brest.png"
        alt="Aperçu de la carte interactive de Brest"
        className="mt-6 block h-48 w-full object-cover"
        draggable={false}
      />

      {/* Titre centré */}
      <h2 className={`mt-6 text-center ${typography.editorialLead}`}>
        {HOME_CARTE.titre}
      </h2>

      {/* Chapeau centré */}
      <p className="mt-3 text-center font-outfit text-[14px] font-normal leading-[1.55] text-text">
        {HOME_CARTE.chapeau}
      </p>

      {/* CTA centré */}
      <div className="mt-8 flex justify-center">
        <Button asChild variant="primary">
          <Link to="/carte">{HOME_CARTE.ctaLabel}</Link>
        </Button>
      </div>
    </section>
  )
}
