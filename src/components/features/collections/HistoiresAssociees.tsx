import { Link } from 'react-router-dom'

import type { HistoireBillet } from '@/data/histoires'
import { typography } from '@/styles/typography'

interface HistoiresAssocieesProps {
  billets: HistoireBillet[]
}

export function HistoiresAssociees({ billets }: HistoiresAssocieesProps) {
  if (billets.length === 0) return null

  return (
    <section className="border-t border-border pt-6">
      <h2 className={typography.sectionLabel}>Histoires de Brest associées</h2>
      <ul className="mt-4 flex flex-col gap-3">
        {billets.map((billet) => (
          <li key={billet.slug}>
            <Link
              to={`/histoires/${billet.slug}`}
              className="flex gap-3 rounded-md border border-border bg-muted/50 p-3"
            >
              <div className="h-12 w-12 shrink-0 rounded bg-border" aria-hidden />
              <div>
                <p className={typography.cardTitle}>{billet.titre}</p>
                <p className={typography.cardMeta}>{billet.accroche}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
