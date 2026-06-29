import { Button } from '@/components/ui/button'
import { HistoireListCard } from '@/components/features/histoires/HistoireListCard'
import { SectionListHeader } from '@/components/features/site/SectionListHeader'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { HISTOIRES_LIST } from '@/data/histoires'

export function HistoiresList() {
  return (
    <SitePageShell>
      <div className="flex flex-col bg-background pb-8">
        <SectionListHeader title="Histoires" layout="centered" />

        <ul className="flex flex-col items-center gap-6 px-10 pt-0 pb-10">
          {HISTOIRES_LIST.flatMap((histoire, index) => {
            const items = []

            if (index > 0) {
              items.push(
                <li key={`sep-${histoire.slug}`} aria-hidden className="w-full">
                  <hr className="m-0 h-px w-full border-0 bg-list-separator/20" />
                </li>
              )
            }

            items.push(
              <li key={histoire.slug} className="w-full">
                <HistoireListCard
                  histoire={histoire}
                  featuredExcerpt={index === 0}
                />
              </li>
            )

            return items
          })}
        </ul>

        <div className="flex justify-center px-section">
          <Button variant="secondary" size="sm" showTriangle={false}>
            Voir plus d'histoires
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
