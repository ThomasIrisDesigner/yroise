import { Navigate, useParams } from 'react-router-dom'

import { CollectionArticleHeader } from '@/components/features/collections/CollectionArticleHeader'
import { CollectionDetailBody } from '@/components/features/collections/CollectionDetailBody'
import { HistoireArticleHero } from '@/components/features/histoires/HistoireArticleHero'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { getCollectionDetail } from '@/data/collectionDetails'
import { COLLECTIONS, COLLECTION_EXAMPLE_IMAGE } from '@/data/collections'

/** Page collection — même grille responsive que billet article (Figma 115:516). */
export function CollectionDetail() {
  const { slug } = useParams<{ slug: string }>()
  const collection = COLLECTIONS.find((c) => c.slug === slug)

  if (!collection) {
    return <Navigate to="/collections" replace />
  }

  const content = getCollectionDetail(collection.slug)

  return (
    <SitePageShell>
      <div className="collection-article-page section-collections bg-background">
        <div className="article-page-header-wrap bg-glaz-100 collection-article-header-wrap">
          <CollectionArticleHeader
            titre={collection.name}
            chapeau={content.chapeau}
            documentCount={collection.documentCount}
            gallicaHref={content.gallicaHref}
          />
        </div>

        <div className="article-page-hero-wrap collection-article-hero-wrap">
          <HistoireArticleHero
            imageSrc={COLLECTION_EXAMPLE_IMAGE}
            placeholder="Image de collection"
            caption={content.heroCaption}
            meta={content.heroMeta}
            linkLabel={content.heroLinkLabel}
            linkHref={content.heroLinkHref}
          />
        </div>

        <div className="article-page-content-wrap">
          <CollectionDetailBody
            content={content}
            documentCount={collection.documentCount}
          />
        </div>
      </div>
    </SitePageShell>
  )
}
