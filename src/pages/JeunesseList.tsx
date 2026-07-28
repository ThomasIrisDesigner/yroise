import * as React from 'react'

import { JeunesseListCard } from '@/components/features/jeunesse/JeunesseListCard'
import { ListLoadMore } from '@/components/features/site/ListLoadMore'
import { PageContainer } from '@/components/features/site/PageContainer'
import { SectionListHeader } from '@/components/features/site/SectionListHeader'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { JEUNESSE_LIST } from '@/data/jeunesse'

const GRID_PAGE_SIZE = 9

export function JeunesseList() {
  const [visibleCount, setVisibleCount] = React.useState(GRID_PAGE_SIZE)
  const visibleItems = JEUNESSE_LIST.slice(0, visibleCount)
  const hasMore = visibleCount < JEUNESSE_LIST.length

  return (
    <SitePageShell>
      <div className="jeunesse-list-page section-jeunesse flex flex-col bg-background">
        <SectionListHeader
          title="Jeunesse"
          tone="jeunesse"
          className="jeunesse-list-header"
        />

        <PageContainer className="jeunesse-list-main">
          <ul className="jeunesse-list-grid">
            {visibleItems.map((activite) => (
              <li key={activite.slug} className="jeunesse-list-grid-item">
                <JeunesseListCard activite={activite} />
              </li>
            ))}
          </ul>

          {hasMore ? (
            <ListLoadMore
              className="jeunesse-list-more-block"
              label="Voir plus de jeux"
              onClick={() =>
                setVisibleCount((count) =>
                  Math.min(count + GRID_PAGE_SIZE, JEUNESSE_LIST.length)
                )
              }
            />
          ) : null}
        </PageContainer>
      </div>
    </SitePageShell>
  )
}
