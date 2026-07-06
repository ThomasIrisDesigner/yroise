import { Button } from '@/components/ui/button'
import { JeunesseListCard } from '@/components/features/jeunesse/JeunesseListCard'
import { SectionListHeader } from '@/components/features/site/SectionListHeader'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { JEUNESSE_LIST } from '@/data/jeunesse'

export function JeunesseList() {
  return (
    <SitePageShell>
      <div className="section-jeunesse flex flex-col bg-background pb-8">
        <SectionListHeader title="Jeunesse" layout="centered" tone="jeunesse" />

        <ul className="flex flex-col items-center gap-8 bg-background p-10 pb-0">
          {JEUNESSE_LIST.map((activite) => (
            <li key={activite.slug} className="w-full">
              <JeunesseListCard activite={activite} />
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center px-section">
          <Button variant="secondary" size="sm" showTriangle={false}>
            Voir plus de jeux
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
    </SitePageShell>
  )
}
