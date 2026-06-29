import { COLLECTIONS } from '@/data/collections'
import { HISTOIRES_LIST_INTRO } from '@/data/histoires'
import { CollectionListCard } from '@/components/features/collections/CollectionListCard'
import { SectionListHeader } from '@/components/features/site/SectionListHeader'
import { SitePageShell } from '@/components/features/site/SitePageShell'

export function CollectionsList() {
  return (
    <SitePageShell>
      <div className="flex flex-col bg-background pb-8">
        <SectionListHeader
          tone="collections"
          breadcrumbTo="/prototype"
          breadcrumbLabel="Accueil"
          title="Collections"
          chapeau={HISTOIRES_LIST_INTRO.chapeau}
        />

        <ul className="flex flex-col gap-6 px-section py-10">
          {COLLECTIONS.map((col) => (
            <li key={col.slug}>
              <CollectionListCard collection={col} />
            </li>
          ))}
        </ul>
      </div>
    </SitePageShell>
  )
}
