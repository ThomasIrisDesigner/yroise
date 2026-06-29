import { HistoireCard } from '@/components/ui/histoire-card'
import type { HistoireBillet } from '@/data/histoires'
import { LOREM } from '@/data/placeholders'

interface HistoireListCardProps {
  histoire: HistoireBillet
  featuredExcerpt?: boolean
}

export function HistoireListCard({
  histoire,
  featuredExcerpt = false,
}: HistoireListCardProps) {
  return (
    <HistoireCard
      layout="list"
      featuredExcerpt={featuredExcerpt}
      to={`/histoires/${histoire.slug}`}
      titre={histoire.titre}
      extrait={histoire.accroche ?? LOREM.line}
      imageSrc={histoire.imageSrc ?? '/images/voilier-brest.png'}
      imageAlt=""
    />
  )
}
