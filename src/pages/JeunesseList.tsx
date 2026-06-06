import { Button } from '@/components/ui/button'
import { JeunesseListCard } from '@/components/features/jeunesse/JeunesseListCard'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { JEUNESSE_INTRO, JEUNESSE_LIST } from '@/data/jeunesse'
import { typography } from '@/styles/typography'

export function JeunesseList() {
  return (
    <SitePageShell>
      <div className="section-jeunesse px-section pt-4 pb-10">
        <h1 className={typography.pageTitle}>Jeunesse</h1>
        <p className={`mt-2 ${typography.pageSubtitle}`}>{JEUNESSE_INTRO}</p>
        <ul className="mt-6 flex flex-col gap-4">
          {JEUNESSE_LIST.map((activite) => (
            <li key={activite.slug}>
              <JeunesseListCard activite={activite} />
            </li>
          ))}
        </ul>
        <div className="mt-8 flex justify-center">
          <Button variant="secondary">Voir plus</Button>
        </div>
      </div>
    </SitePageShell>
  )
}
