import { Link } from 'react-router-dom'

import { PageContainer } from '@/components/features/site/PageContainer'
import { Button } from '@/components/ui/button'
import { HOME_TROUVAILLE } from '@/data/home'
import { typography } from '@/styles/typography'
import { cn } from '@/lib/utils'

function TrouvailleMedia({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'home-trouvaille-media overflow-hidden rounded border-[2.5px] border-solid border-text',
        className
      )}
    >
      <img
        src={HOME_TROUVAILLE.imageSrc}
        alt={HOME_TROUVAILLE.imageAlt}
        className="home-trouvaille-image block aspect-[587/440] w-full object-cover"
        draggable={false}
      />
    </div>
  )
}

function TrouvailleCta({ className }: { className?: string }) {
  return (
    <div className={cn('home-trouvaille-cta flex', className)}>
      <Button
        asChild
        variant="secondary"
        showTriangle
        className="home-trouvaille-cta-btn h-10 gap-2 px-4 py-2 text-[13px] font-normal tracking-[0.65px]"
      >
        <Link to="#">{HOME_TROUVAILLE.ctaLabel}</Link>
      </Button>
    </div>
  )
}

export function TrouvailleSection() {
  return (
    <section className="home-trouvaille-section page-full-bleed bg-sable-200 pt-8 pb-10">
      <PageContainer className="home-trouvaille-container">
        {/* Mobile — label · image · accroche · CTA */}
        <div className="home-trouvaille-layout prototype-mobile-only flex flex-col">
          <p className={`home-trouvaille-label ${typography.trouvailleLabel} text-center uppercase`}>
            La trouvaille
          </p>

          <TrouvailleMedia className="mt-4" />

          <p className={`home-trouvaille-copy mt-6 ${typography.trouvailleChapeau}`}>
            {HOME_TROUVAILLE.chapeau}
          </p>

          <TrouvailleCta className="mt-8 justify-center" />
        </div>

        {/* Desktop — image · texte (Figma intro-content) */}
        <div className="home-trouvaille-layout home-trouvaille-layout--desktop prototype-desktop-only gap-20">
          <TrouvailleMedia className="min-w-0 flex-1" />

          <div className="flex min-w-0 flex-1 flex-col gap-6">
            <div className="flex flex-col gap-4">
              <p className={`home-trouvaille-label ${typography.trouvailleLabel} uppercase`}>
                La trouvaille
              </p>

              <p className={`home-trouvaille-copy ${typography.trouvailleChapeau}`}>
                {HOME_TROUVAILLE.chapeau}
              </p>
            </div>

            <TrouvailleCta />
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
