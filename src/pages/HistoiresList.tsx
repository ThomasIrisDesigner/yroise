import { Button } from '@/components/ui/button'
import { HistoireListCard } from '@/components/features/histoires/HistoireListCard'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { HISTOIRES_LIST } from '@/data/histoires'
import { typography } from '@/styles/typography'

export function HistoiresList() {
  return (
    <SitePageShell>
      <div className="px-5 pt-5 pb-10">
        <h1 className={typography.pageTitle}>Histoires</h1>
        <ul className="mt-6 flex flex-col gap-5">
          {HISTOIRES_LIST.map((histoire) => (
            <li key={histoire.slug}>
              <HistoireListCard histoire={histoire} />
            </li>
          ))}
        </ul>
        <div className="mt-8 flex justify-center">
          <Button variant="outline" className="border-2 border-sable-700">
            Voir plus
          </Button>
        </div>
      </div>
    </SitePageShell>
  )
}
