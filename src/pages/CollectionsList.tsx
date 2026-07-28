import * as React from 'react'

import { CollectionListCard } from '@/components/features/collections/CollectionListCard'
import { ListLoadMore } from '@/components/features/site/ListLoadMore'
import { PageContainer } from '@/components/features/site/PageContainer'
import { SectionListHeader } from '@/components/features/site/SectionListHeader'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { COLLECTIONS } from '@/data/collections'

const GRID_PAGE_SIZE = 9

export function CollectionsList() {
  const [visibleCount, setVisibleCount] = React.useState(GRID_PAGE_SIZE)
  const visibleItems = COLLECTIONS.slice(0, visibleCount)
  const hasMore = visibleCount < COLLECTIONS.length

  return (
    <SitePageShell>
      <div className="collections-list-page flex flex-col bg-glaz-100">
        <SectionListHeader
          title="Collections"
          tone="collections"
          className="collections-list-header"
        />

        <PageContainer className="collections-list-main">
          <ul className="collections-list-grid">
            {visibleItems.map((collection) => (
              <li key={collection.slug} className="collections-list-grid-item">
                <CollectionListCard collection={collection} />
              </li>
            ))}
          </ul>

          {hasMore ? (
            <ListLoadMore
              className="collections-list-more-block"
              label="Voir plus de collections"
              onClick={() =>
                setVisibleCount((count) =>
                  Math.min(count + GRID_PAGE_SIZE, COLLECTIONS.length)
                )
              }
            />
          ) : null}
        </PageContainer>
      </div>
    </SitePageShell>
  )
}
