import { COLLECTIONS } from '@/data/collections'
import { CollectionListCard } from '@/components/features/collections/CollectionListCard'
import { SectionListHeader } from '@/components/features/site/SectionListHeader'
import { SitePageShell } from '@/components/features/site/SitePageShell'

export function CollectionsList() {
  return (
    <SitePageShell>
      <div className="flex flex-col bg-glaz-100 pb-8">
        <SectionListHeader title="Collections" layout="centered" />

        <ul className="flex flex-col items-center px-10 pt-0 pb-10">
          {COLLECTIONS.map((col) => (
            <li key={col.slug} className="w-full">
              <CollectionListCard collection={col} />
            </li>
          ))}
        </ul>
      </div>
    </SitePageShell>
  )
}
