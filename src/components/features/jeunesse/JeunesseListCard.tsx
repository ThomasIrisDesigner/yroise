import { JeunesseCard } from '@/components/ui/jeunesse-card'
import type { JeunesseActivite } from '@/data/jeunesse'

interface JeunesseListCardProps {
  activite: JeunesseActivite
}

export function JeunesseListCard({ activite }: JeunesseListCardProps) {
  return (
    <JeunesseCard
      layout="list"
      to={`/jeunesse/${activite.slug}`}
      titre={activite.titre}
      type={activite.type}
      meta={activite.meta}
      imageSrc={activite.imageSrc}
      imageAlt={activite.imageAlt}
    />
  )
}
