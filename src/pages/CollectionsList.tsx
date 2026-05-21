import { COLLECTIONS } from '@/data/collections'
import { LOREM } from '@/data/placeholders'
import { CollectionListCard } from '@/components/features/collections/CollectionListCard'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { typography } from '@/styles/typography'

export function CollectionsList() {
  return (
    <SitePageShell>
      <div className="px-5 pt-5 pb-10">
        <h1 className={typography.pageTitle}>Collections</h1>
        <p className={`mt-2 ${typography.pageSubtitle}`}>{LOREM.line}</p>
        <ul className="mt-6 flex flex-col gap-6">
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
