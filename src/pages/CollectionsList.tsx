import { COLLECTIONS } from '@/data/collections'
import { CollectionListCard } from '@/components/features/collections/CollectionListCard'
import { SectionListHeader } from '@/components/features/site/SectionListHeader'
import { SitePageShell } from '@/components/features/site/SitePageShell'

export function CollectionsList() {
  return (
    <SitePageShell>
      <div className="flex flex-col bg-glaz-100 pb-8">
        <SectionListHeader title="Collections" layout="centered" />

        <ul className="flex flex-col items-center gap-6 px-10 pt-0 pb-10">
          {COLLECTIONS.flatMap((col, index) => {
            const items = []

            if (index > 0) {
              items.push(
                <li key={`sep-${col.slug}`} aria-hidden className="w-full">
                  <hr className="m-0 h-px w-full border-0 bg-list-separator/20" />
                </li>
              )
            }

            items.push(
              <li key={col.slug} className="w-full">
                <CollectionListCard collection={col} />
              </li>
            )

            return items
          })}
        </ul>
      </div>
    </SitePageShell>
  )
}
