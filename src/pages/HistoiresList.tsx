import * as React from 'react'

import { Button } from '@/components/ui/button'
import { HistoireListCard } from '@/components/features/histoires/HistoireListCard'
import { PageContainer } from '@/components/features/site/PageContainer'
import { SectionListHeader } from '@/components/features/site/SectionListHeader'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { HISTOIRES_LIST } from '@/data/histoires'

const GRID_PAGE_SIZE = 9

export function HistoiresList() {
  const [featured, ...rest] = HISTOIRES_LIST
  const [visibleCount, setVisibleCount] = React.useState(GRID_PAGE_SIZE)
  const visibleItems = rest.slice(0, visibleCount)
  const hasMore = visibleCount < rest.length

  return (
    <SitePageShell>
      <div className="histoires-list-page flex flex-col bg-background">
        <SectionListHeader
          title="Histoires"
          layout="centered"
          className="histoires-list-header"
        />

        {featured ? (
          <section className="histoires-list-featured page-full-bleed bg-text">
            <div className="histoires-list-featured-inner">
              <HistoireListCard histoire={featured} featured />
            </div>
          </section>
        ) : null}

        <PageContainer className="histoires-list-main">
          <ul className="histoires-list-grid">
            {visibleItems.map((histoire) => (
              <li key={histoire.slug} className="histoires-list-grid-item">
                <HistoireListCard histoire={histoire} />
              </li>
            ))}
          </ul>

          {hasMore ? (
            <div className="histoires-list-more-block">
              <hr className="histoires-list-more-separator" aria-hidden />
              <div className="histoires-list-more flex justify-center">
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  showTriangle={false}
                  onClick={() =>
                    setVisibleCount((count) =>
                      Math.min(count + GRID_PAGE_SIZE, rest.length)
                    )
                  }
                >
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
          ) : null}
        </PageContainer>
      </div>
    </SitePageShell>
  )
}
