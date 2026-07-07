import { Link } from 'react-router-dom'

import { PageContainer } from '@/components/features/site/PageContainer'
import { Button } from '@/components/ui/button'
import { HOME_TROUVAILLE } from '@/data/home'
import { typography } from '@/styles/typography'

export function TrouvailleSection() {
  return (
    <section className="home-trouvaille-section page-full-bleed bg-sable-200 pt-8 pb-10">
      <PageContainer className="home-trouvaille-container">
        <div className="home-trouvaille-layout">
          <p className={`home-trouvaille-label ${typography.homeSectionAsideLabel} text-center`}>
            La trouvaille
          </p>

          <div className="home-trouvaille-media mt-4 overflow-hidden rounded border-[2.5px] border-solid border-text">
            <img
              src={HOME_TROUVAILLE.imageSrc}
              alt={HOME_TROUVAILLE.imageAlt}
              className="home-trouvaille-image block h-[269px] w-full object-cover"
              draggable={false}
            />
          </div>

          <p className={`home-trouvaille-copy mt-6 ${typography.cardExcerpt} leading-[1.55]`}>
            {HOME_TROUVAILLE.chapeau}
          </p>

          <div className="home-trouvaille-cta mt-8 flex justify-center">
            <Button asChild variant="secondary" size="sm" className="h-10">
              <Link to="#">{HOME_TROUVAILLE.ctaLabel}</Link>
            </Button>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
