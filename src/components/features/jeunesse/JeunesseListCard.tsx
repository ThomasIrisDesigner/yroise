import { JeunesseCard } from '@/components/ui/jeunesse-card'
import type { JeunesseActivite } from '@/data/jeunesse'

interface JeunesseListCardProps {
  activite: JeunesseActivite
}

export function JeunesseListCard({ activite }: JeunesseListCardProps) {
  return (
    <JeunesseCard
      to={`/jeunesse/${activite.slug}`}
      titre={activite.titre}
      type={activite.type}
      meta={activite.meta}
      className="w-full"
    />
  )
}
