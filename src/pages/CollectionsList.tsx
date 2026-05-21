import { COLLECTIONS } from '@/data/collections'
import { LOREM } from '@/data/placeholders'
import { CollectionListCard } from '@/components/features/collections/CollectionListCard'
import { Breadcrumb } from '@/components/features/site/Breadcrumb'
import { SitePageShell } from '@/components/features/site/SitePageShell'

export function CollectionsList() {
  return (
    <SitePageShell>
      <Breadcrumb items={[{ label: 'Accueil', to: '/prototype' }, { label: 'Collections' }]} />
      <div className="px-4 pt-4 pb-8">
        <h1 className="text-xl font-extrabold tracking-tight text-text">Collections</h1>
        <p className="mt-1 text-sm text-text/70">{LOREM.line}</p>
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
