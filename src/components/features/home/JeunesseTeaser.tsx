import { Link } from 'react-router-dom'

import { PageContainer } from '@/components/features/site/PageContainer'
import { JeunesseIllustration } from '@/components/features/jeunesse/JeunesseIllustration'
import { Button } from '@/components/ui/button'
import { typography } from '@/styles/typography'

export function JeunesseTeaser() {
  return (
    <section className="home-jeunesse-section page-full-bleed bg-aurore-100 pt-10 pb-10">
      <PageContainer className="home-jeunesse-container">
        <div className="home-jeunesse-layout">
          <p className={`home-jeunesse-label prototype-mobile-only ${typography.homeSectionLabel} text-center`}>
            Jeunesse
          </p>

          <div className="home-jeunesse-icon mt-6 flex justify-center">
            <div className="h-[86px] w-[100px]">
              <JeunesseIllustration className="h-full w-full" />
            </div>
          </div>

          <div className="home-jeunesse-copy mt-7">
            <p className={`home-jeunesse-title prototype-desktop-only ${typography.homeSectionLabel}`}>
              Jeunesse
            </p>
            <p className={`home-jeunesse-text text-center ${typography.cardExcerpt}`}>
              Jeux et ateliers pour explorer le patrimoine.
            </p>
            <div className="home-jeunesse-cta mt-8 flex justify-center">
              <Button asChild variant="primary">
                <Link to="/jeunesse">Découvrir</Link>
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
