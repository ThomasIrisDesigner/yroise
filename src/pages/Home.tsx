import { CartePreview } from '@/components/features/home/CartePreview'
import { CollectionsCarousel } from '@/components/features/home/CollectionsCarousel'
import { HistoiresCarousel } from '@/components/features/home/HistoiresCarousel'
import { HomeHero } from '@/components/features/home/HomeHero'
import { JeunesseTeaser } from '@/components/features/home/JeunesseTeaser'
import { TrouvailleSection } from '@/components/features/home/TrouvailleSection'
import { SiteFooter } from '@/components/features/site/SiteFooter'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { FriseVagues } from '@/components/ui/frise-vagues'

export function Home() {
  return (
    <SitePageShell>
      <HomeHero />
      <TrouvailleSection />
      <HistoiresCarousel />
      <CollectionsCarousel />
      <CartePreview />
      <JeunesseTeaser />
      <FriseVagues />
      <SiteFooter />
    </SitePageShell>
  )
}
