import { Button } from '@/components/ui/button'
import { HistoireListCard } from '@/components/features/histoires/HistoireListCard'
import { SectionListHeader } from '@/components/features/site/SectionListHeader'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { HISTOIRES_LIST, HISTOIRES_LIST_INTRO } from '@/data/histoires'

export function HistoiresList() {
  return (
    <SitePageShell>
      <div className="flex flex-col bg-background pb-8">
        <SectionListHeader
          breadcrumbTo="/prototype"
          breadcrumbLabel="Accueil"
          title="Histoires"
          tone="histoires"
          chapeau={HISTOIRES_LIST_INTRO.chapeau}
        />

        <ul className="flex flex-col items-center gap-6 py-10">
          {HISTOIRES_LIST.map((histoire, index) => (
            <li key={histoire.slug} className="w-full">
              <HistoireListCard
                histoire={histoire}
                featuredExcerpt={index === 0}
              />
            </li>
          ))}
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
