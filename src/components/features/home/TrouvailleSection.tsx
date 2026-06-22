import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { HOME_TROUVAILLE } from '@/data/home'
import { typography } from '@/styles/typography'

export function TrouvailleSection() {
  return (
    <section className="bg-sable-200 px-section pt-10 pb-10">
      {/* Label centré */}
      <p className={`${typography.sectionLabel} text-center`}>La trouvaille</p>

      {/* Titre centré */}
      <h2 className={`mt-2 text-center ${typography.editorialLead}`}>
        {HOME_TROUVAILLE.titre}
      </h2>

      {/* Photo pleine largeur */}
      <img
        src={HOME_TROUVAILLE.imageSrc}
        alt={HOME_TROUVAILLE.imageAlt}
        className="mt-4 block aspect-[4/3] w-full object-cover"
        draggable={false}
      />

      {/* CTA centré */}
      <div className="mt-8 flex justify-center">
        <Button asChild variant="primary">
          <Link to="#">{HOME_TROUVAILLE.ctaLabel}</Link>
        </Button>
      </div>
    </section>
  )
}
