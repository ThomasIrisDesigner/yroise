import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import type { HistoireBillet } from '@/data/histoires'
import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

interface HistoireRebondCardProps {
  histoire: HistoireBillet
}

/** Card rebond — section sombre « Nos autres histoires ». */
export function HistoireRebondCard({ histoire }: HistoireRebondCardProps) {
  return (
    <article className="flex flex-col gap-8">
      {histoire.imageSrc ? (
        <img
          src={histoire.imageSrc}
          alt=""
          className="card-image"
          draggable={false}
        />
      ) : (
        <div className="card-image bg-surface/10" aria-hidden />
      )}

      <div className="flex flex-col gap-4">
        <h3 className={cn(typography.cardTitleEditorial, 'text-on-dark leading-[1.4]')}>
          {histoire.titre}
        </h3>
        {histoire.accroche ? (
          <p className={cn(typography.cardExcerpt, 'text-on-dark leading-[1.55]')}>
            {histoire.accroche}
          </p>
        ) : null}
      </div>

      <Button asChild variant="secondary" size="default" inverted className="self-start">
        <Link to={`/histoires/${histoire.slug}`}>Lire</Link>
      </Button>
    </article>
  )
}
