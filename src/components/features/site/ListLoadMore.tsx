import { Button } from '@/components/ui/button'

interface ListLoadMoreProps {
  /** Libellé du bouton — « Voir plus d'histoires », « Voir plus de jeux »… */
  label: string
  onClick: () => void
  /** Classe de la rubrique — `histoires-list-more-block`, etc. (paddings theme.css). */
  className: string
}

/**
 * Pied de page liste : séparateur + bouton de pagination progressive.
 * Partagé par les pages Histoires, Collections et Jeunesse.
 */
export function ListLoadMore({ label, onClick, className }: ListLoadMoreProps) {
  return (
    <div className={className}>
      <hr className="list-more-separator" aria-hidden />
      <div className="flex justify-center">
        <Button
          type="button"
          variant="secondary"
          size="sm"
          showTriangle={false}
          onClick={onClick}
        >
          {label}
          <img
            src="/images/Icon_plus.svg"
            alt=""
            aria-hidden
            className="h-4 w-4 shrink-0"
            draggable={false}
          />
        </Button>
      </div>
    </div>
  )
}
