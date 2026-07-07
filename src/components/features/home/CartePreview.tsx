import { Link } from 'react-router-dom'

import { PageContainer } from '@/components/features/site/PageContainer'
import { Button } from '@/components/ui/button'
import { HOME_CARTE } from '@/data/home'
import { typography } from '@/styles/typography'

export function CartePreview() {
  return (
    <section className="home-carte-section page-full-bleed bg-sable-200 py-10">
      <PageContainer className="home-carte-container">
        <p className={`home-carte-label ${typography.homeSectionLabel} text-center`}>
          Carte interactive
        </p>

        <div className="home-carte-body mt-6">
          <img
            src={HOME_CARTE.imageSrc}
            alt={HOME_CARTE.imageAlt}
            className="home-carte-image block h-[194px] w-full object-cover"
            draggable={false}
          />

          <div className="home-carte-copy">
            <h2 className={`home-carte-title text-center ${typography.titleL}`}>
              {HOME_CARTE.titre}
            </h2>

            <p className={`home-carte-chapeau mt-3 text-center ${typography.cardExcerpt}`}>
              {HOME_CARTE.chapeau}
            </p>

            <div className="home-carte-cta mt-8 flex justify-center">
              <Button asChild variant="primary">
                <Link to="/carte">{HOME_CARTE.ctaLabel}</Link>
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
