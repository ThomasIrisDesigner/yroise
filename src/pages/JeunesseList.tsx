import { Button } from '@/components/ui/button'
import { JeunesseListCard } from '@/components/features/jeunesse/JeunesseListCard'
import { Breadcrumb } from '@/components/features/site/Breadcrumb'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { JEUNESSE_INTRO, JEUNESSE_LIST } from '@/data/jeunesse'

export function JeunesseList() {
  return (
    <SitePageShell>
      <Breadcrumb items={[{ label: 'Jeunesse' }]} />
      <div className="px-4 pt-4 pb-8">
        <h1 className="text-xl font-extrabold tracking-tight text-text">Jeunesse</h1>
        <p className="mt-1 text-sm text-text/70">{JEUNESSE_INTRO}</p>
        <ul className="mt-6 flex flex-col gap-3">
          {JEUNESSE_LIST.map((activite) => (
            <li key={activite.slug}>
              <JeunesseListCard activite={activite} />
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
