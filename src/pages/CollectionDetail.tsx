import { ArrowRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'

import { DocumentShowcase } from '@/components/features/collections/DocumentShowcase'
import { HistoiresAssociees } from '@/components/features/collections/HistoiresAssociees'
import { Breadcrumb } from '@/components/features/site/Breadcrumb'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { COLLECTIONS } from '@/data/collections'
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
      <Breadcrumb
        items={[
          { label: 'Collections', to: '/collections' },
          { label: collection.name },
        ]}
      />

      <section className="relative">
        <div
          className="flex h-40 w-full items-center justify-center bg-muted"
          aria-hidden
        >
          <span className="text-sm italic text-text/40">Image de collection</span>
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 to-transparent px-5 pb-4 pt-12">
          <h1 className="text-[26px] font-extrabold leading-tight tracking-tight text-surface">
            {collection.name}
          </h1>
          {collection.documentCount != null ? (
            <p className="mt-1 text-sm text-surface/80">{collection.documentCount} documents</p>
          ) : null}
        </div>
      </section>

      <div className="px-5 pt-5 pb-10">
        <p className={typography.body}>{detail.intro}</p>

        <section className="mt-7">
          <h2 className={typography.sectionLabel}>Quelques documents</h2>
          <div className="mt-4">
            <DocumentShowcase documents={detail.featuredDocuments} />
          </div>
        </section>

        <Button
          asChild
          variant="default"
          className="mt-6 h-12 w-full rounded-md text-base font-bold tracking-wide"
        >
          <a href="#" aria-label={`${detail.gallicaLabel} sur Gallica (externe)`}>
            {detail.gallicaLabel}
            <ArrowRight className="h-5 w-5" />
          </a>
        </Button>

        <HistoiresAssociees billets={detail.histoiresAssociees} />

        <p className="mt-10 flex justify-center">
          <Link
            to="/collections"
            className="inline-flex h-11 items-center text-sm font-medium text-secondary"
          >
            ← Toutes les collections
          </Link>
        </p>
      </div>
    </SitePageShell>
  )
}
