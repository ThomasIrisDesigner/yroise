import { Navigate, useParams } from 'react-router-dom'

import { DocumentShowcase } from '@/components/features/collections/DocumentShowcase'
import { HistoiresAssociees } from '@/components/features/collections/HistoiresAssociees'
import { SectionRubriqueLink } from '@/components/features/site/SectionRubriqueLink'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { COLLECTIONS, COLLECTION_EXAMPLE_IMAGE } from '@/data/collections'
import {
  getCollectionDetail,
  getDefaultCollectionDetail,
} from '@/data/collectionDetails'
import { Button } from '@/components/ui/button'
import { typography } from '@/styles/typography'

export function CollectionDetail() {
  const { slug } = useParams<{ slug: string }>()
  const collection = COLLECTIONS.find((c) => c.slug === slug)

  if (!collection) {
    return <Navigate to="/collections" replace />
  }

  const detail = getCollectionDetail(collection.slug) ?? getDefaultCollectionDetail()

  return (
    <SitePageShell>
      <div className="section-collections">
        <header className="px-section pt-4">
          <SectionRubriqueLink to="/collections">Collections</SectionRubriqueLink>
        </header>

        <section className="relative">
          <div className="relative h-40 w-full overflow-hidden" aria-hidden>
            <img
              src={COLLECTION_EXAMPLE_IMAGE}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-text/85 to-transparent px-section pb-4 pt-12">
            <h1 className="text-[26px] font-extrabold leading-tight tracking-tight text-surface">
              {collection.name}
            </h1>
            {collection.documentCount != null ? (
              <p className="mt-1 text-sm text-surface/80">{collection.documentCount} documents</p>
            ) : null}
          </div>
        </section>

        <div className="px-section pt-4 pb-10">
        <p className={typography.editorialBody}>{detail.intro}</p>

        <section className="mt-7">
          <h2 className={typography.sectionLabel}>Quelques documents</h2>
          <div className="mt-4">
            <DocumentShowcase documents={detail.featuredDocuments} />
          </div>
        </section>

        <Button asChild variant="primary" className="mt-6 w-full justify-center">
          <a href="#" aria-label={`${detail.gallicaLabel} sur Gallica (externe)`}>
            {detail.gallicaLabel}
          </a>
        </Button>

          <HistoiresAssociees billets={detail.histoiresAssociees} />
        </div>
      </div>
    </SitePageShell>
  )
}
