import { HistoireCard } from '@/components/ui/histoire-card'
import type { HistoireBillet } from '@/data/histoires'
import { LOREM } from '@/data/placeholders'

interface HistoireListCardProps {
  histoire: HistoireBillet
}

export function HistoireListCard({ histoire }: HistoireListCardProps) {
  return (
    <HistoireCard
      to={`/histoires/${histoire.slug}`}
      titre={histoire.titre}
      type={histoire.type}
      extrait={histoire.accroche ?? LOREM.line}
      imageSrc="/images/voilier-brest.png"
      imageAlt=""
      className="w-full"
    />
  )
}
