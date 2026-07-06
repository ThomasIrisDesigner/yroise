import { Navigate, useParams } from 'react-router-dom'

import { CollectionArticleHeader } from '@/components/features/collections/CollectionArticleHeader'
import { CollectionDetailBody } from '@/components/features/collections/CollectionDetailBody'
import { HistoireArticleHero } from '@/components/features/histoires/HistoireArticleHero'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { getCollectionDetail } from '@/data/collectionDetails'
import { COLLECTIONS, COLLECTION_EXAMPLE_IMAGE } from '@/data/collections'

/** Page collection — maquette Figma 115:516 (ex. En mer). */
export function CollectionDetail() {
  const { slug } = useParams<{ slug: string }>()
  const collection = COLLECTIONS.find((c) => c.slug === slug)

  if (!collection) {
    return <Navigate to="/collections" replace />
  }

  const content = getCollectionDetail(collection.slug)

  return (
    <SitePageShell>
      <div className="section-collections pb-10">
        <CollectionArticleHeader
          titre={collection.name}
          chapeau={content.chapeau}
          documentCount={collection.documentCount}
          gallicaHref={content.gallicaHref}
        />

        <HistoireArticleHero
          imageSrc={COLLECTION_EXAMPLE_IMAGE}
          placeholder="Image de collection"
          caption={content.heroCaption}
          meta={content.heroMeta}
          linkLabel={content.heroLinkLabel}
          linkHref={content.heroLinkHref}
        />

        <CollectionDetailBody
          content={content}
          documentCount={collection.documentCount}
        />
      </div>
    </SitePageShell>
  )
}
