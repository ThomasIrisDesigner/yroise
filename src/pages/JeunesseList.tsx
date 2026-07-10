import * as React from 'react'

import { Button } from '@/components/ui/button'
import { JeunesseListCard } from '@/components/features/jeunesse/JeunesseListCard'
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
          layout="centered"
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
            <div className="jeunesse-list-more-block">
              <hr className="jeunesse-list-more-separator" aria-hidden />
              <div className="jeunesse-list-more flex justify-center">
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  showTriangle={false}
                  onClick={() =>
                    setVisibleCount((count) =>
                      Math.min(count + GRID_PAGE_SIZE, JEUNESSE_LIST.length)
                    )
                  }
                >
                  Voir plus de jeux
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
