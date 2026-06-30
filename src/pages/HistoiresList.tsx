import { Button } from '@/components/ui/button'
import { HistoireListCard } from '@/components/features/histoires/HistoireListCard'
import { SectionListHeader } from '@/components/features/site/SectionListHeader'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { HISTOIRES_LIST } from '@/data/histoires'

export function HistoiresList() {
  const [featured, ...rest] = HISTOIRES_LIST

  return (
    <SitePageShell>
      <div className="flex flex-col bg-background pb-8">
        <SectionListHeader title="Histoires" layout="centered" />

        {featured ? (
          <section className="bg-text px-10 py-10">
            <HistoireListCard histoire={featured} featured />
          </section>
        ) : null}

        <ul
          className={`flex flex-col items-center px-10 pb-10 ${featured ? 'pt-2' : 'pt-0'}`}
        >
          {rest.map((histoire) => (
            <li key={histoire.slug} className="w-full">
              <HistoireListCard histoire={histoire} />
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
