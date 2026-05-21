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
          className="flex h-32 w-full items-center justify-center bg-muted"
          aria-hidden
        >
          <span className="text-xs italic text-text/40">Image de collection</span>
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent px-4 pb-3 pt-10">
          <h1 className="text-lg font-extrabold text-surface">{collection.name}</h1>
          {collection.documentCount != null ? (
            <p className="text-xs text-surface/70">{collection.documentCount} documents</p>
          ) : null}
        </div>
      </section>

      <div className="px-4 pt-4 pb-8">
        <p className="text-sm leading-relaxed text-text">{detail.intro}</p>

        <section className="mt-6">
          <h2 className={typography.sectionLabel}>Quelques documents</h2>
          <div className="mt-3">
            <DocumentShowcase documents={detail.featuredDocuments} />
          </div>
        </section>

        <Button
          asChild
          variant="default"
          className="mt-6 h-11 w-full rounded-md text-sm font-bold tracking-wide"
        >
          <a href="#" aria-label={`${detail.gallicaLabel} sur Gallica (externe)`}>
            {detail.gallicaLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>

        <HistoiresAssociees billets={detail.histoiresAssociees} />

        <p className="mt-8 text-center">
          <Link to="/collections" className="text-xs font-medium text-secondary">
            ← Toutes les collections
          </Link>
        </p>
      </div>
    </SitePageShell>
  )
}
