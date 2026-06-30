import { UmapEmbed } from '@/components/features/carte/UmapEmbed'
import { SitePageShell } from '@/components/features/site/SitePageShell'

export function Carte() {
  return (
    <SitePageShell immersive>
      <UmapEmbed immersive />
    </SitePageShell>
  )
}
