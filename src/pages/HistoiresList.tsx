import { Button } from '@/components/ui/button'
import { HistoireListCard } from '@/components/features/histoires/HistoireListCard'
import { Breadcrumb } from '@/components/features/site/Breadcrumb'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { HISTOIRES_LIST } from '@/data/histoires'

export function HistoiresList() {
  return (
    <SitePageShell>
      <Breadcrumb items={[{ label: 'Histoires' }]} />
      <div className="px-4 pt-4 pb-8">
        <h1 className="text-xl font-extrabold tracking-tight text-text">Histoires</h1>
        <ul className="mt-6 flex flex-col gap-4">
          {HISTOIRES_LIST.map((histoire) => (
            <li key={histoire.slug}>
              <HistoireListCard histoire={histoire} />
            </li>
          ))}
        </ul>
        <div className="mt-6 flex justify-center">
          <Button variant="outline" size="sm" className="border-2 border-primary">
            Voir plus
          </Button>
        </div>
      </div>
    </SitePageShell>
  )
}
