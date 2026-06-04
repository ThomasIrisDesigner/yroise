import { Link } from 'react-router-dom'

import type { HistoireBillet } from '@/data/histoires'
import { typography } from '@/styles/typography'

interface HistoiresAssocieesProps {
  billets: HistoireBillet[]
}

export function HistoiresAssociees({ billets }: HistoiresAssocieesProps) {
  if (billets.length === 0) return null

  return (
    <section className="mt-8 border-t border-border pt-6">
      <h2 className={typography.sectionLabel}>Histoires associées</h2>
      <ul className="mt-4 flex flex-col gap-4">
        {billets.map((billet) => (
          <li key={billet.slug}>
            <Link
              to={`/histoires/${billet.slug}`}
              className="flex gap-4 rounded-md border border-border bg-surface/50 p-4"
            >
              <div className="h-16 w-16 shrink-0 rounded bg-border" aria-hidden />
              <div className="min-w-0">
                <p className={typography.cardTitle}>{billet.titre}</p>
                <p className={`mt-1 ${typography.cardMeta}`}>{billet.accroche}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
