import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { HOME_TROUVAILLE } from '@/data/home'
import { typography } from '@/styles/typography'

export function TrouvailleSection() {
  return (
    <section className="bg-sable-200 px-section pt-8 pb-10">
      <p className={`${typography.homeSectionLabel} text-center`}>
        La trouvaille
      </p>

      <div className="mt-4 overflow-hidden rounded border-[2.5px] border-solid border-text">
        <img
          src={HOME_TROUVAILLE.imageSrc}
          alt={HOME_TROUVAILLE.imageAlt}
          className="block h-[269px] w-full object-cover"
          draggable={false}
        />
      </div>

      <p className={`mt-6 ${typography.cardExcerpt} leading-[1.55]`}>
        {HOME_TROUVAILLE.chapeau}
      </p>

      <div className="mt-8 flex justify-center">
        <Button asChild variant="secondary" size="sm" className="h-10">
          <Link to="#">{HOME_TROUVAILLE.ctaLabel}</Link>
        </Button>
      </div>
    </section>
  )
}
