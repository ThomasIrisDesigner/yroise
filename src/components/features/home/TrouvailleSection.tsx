import { Link } from 'react-router-dom'

import { PageContainer } from '@/components/features/site/PageContainer'
import { Button } from '@/components/ui/button'
import { FriseVagues } from '@/components/ui/frise-vagues'
import { HOME_TROUVAILLE } from '@/data/home'
import { typography } from '@/styles/typography'
import { cn } from '@/lib/utils'

function TrouvailleMedia({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'home-trouvaille-media overflow-hidden border-solid',
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
    <section className="home-trouvaille-section page-full-bleed bg-sable-200 pt-8">
      <PageContainer className="home-trouvaille-container pb-10">
        {/*
          Mobile (<768) : image au-dessus du texte.
          ≥768 (vue desktop) : 2 colonnes image | texte — Figma 158:9165.
        */}
        <div className="home-trouvaille-layout flex flex-col gap-6">
          <TrouvailleMedia className="home-trouvaille-media-col min-w-0" />

          <div className="home-trouvaille-text-col flex min-w-0 flex-col gap-6">
            <div className="flex flex-col gap-4">
              <p className={`home-trouvaille-label ${typography.trouvailleLabel} uppercase`}>
                {HOME_TROUVAILLE.label}
              </p>

              <p className={`home-trouvaille-copy ${typography.trouvailleChapeau}`}>
                {HOME_TROUVAILLE.chapeau}
              </p>
            </div>

            <TrouvailleCta className="home-trouvaille-cta-wrap" />
          </div>
        </div>
      </PageContainer>

      <FriseVagues
        embed
        fill="rgb(var(--color-background))"
        className="home-trouvaille-frise"
      />
    </section>
  )
}
