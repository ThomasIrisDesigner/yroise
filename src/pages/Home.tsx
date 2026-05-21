import { CartePreview } from '@/components/features/home/CartePreview'
import { CollectionsCarousel } from '@/components/features/home/CollectionsCarousel'
import { HistoiresCarousel } from '@/components/features/home/HistoiresCarousel'
import { HomeHero } from '@/components/features/home/HomeHero'
import { TrouvailleSection } from '@/components/features/home/TrouvailleSection'
import { SiteFooter } from '@/components/features/site/SiteFooter'
import { SitePageShell } from '@/components/features/site/SitePageShell'

export function Home() {
  return (
    <SitePageShell>
      <HomeHero />
      <TrouvailleSection />
      <HistoiresCarousel />
      <CollectionsCarousel />
      <CartePreview />
      <SiteFooter />
    </SitePageShell>
  )
}
