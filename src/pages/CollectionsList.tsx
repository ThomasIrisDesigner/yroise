import * as React from 'react'

import { CollectionListCard } from '@/components/features/collections/CollectionListCard'
import { PageContainer } from '@/components/features/site/PageContainer'
import { SectionListHeader } from '@/components/features/site/SectionListHeader'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { Button } from '@/components/ui/button'
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
          layout="centered"
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
            <div className="collections-list-more-block">
              <hr className="collections-list-more-separator" aria-hidden />
              <div className="collections-list-more flex justify-center">
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  showTriangle={false}
                  onClick={() =>
                    setVisibleCount((count) =>
                      Math.min(count + GRID_PAGE_SIZE, COLLECTIONS.length)
                    )
                  }
                >
                  Voir plus de collections
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
          ) : null}
        </PageContainer>
      </div>
    </SitePageShell>
  )
}
