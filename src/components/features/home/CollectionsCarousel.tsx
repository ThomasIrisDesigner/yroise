import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { CardSlider } from '@/components/ui/card-slider'
import { CollectionHublotCard } from '@/components/ui/collection-hublot-card'
import { COLLECTIONS } from '@/data/collections'
import { typography } from '@/styles/typography'

export function CollectionsCarousel() {
  return (
    <section className="border-t border-border pt-10 pb-8">
      <div className="mb-4 flex items-center justify-between px-section">
        <h2 className={typography.sectionLabel}>Collections</h2>
        <Button asChild variant="ghost" size="sm">
          <Link to="/collections">Tout voir</Link>
        </Button>
      </div>
      <CardSlider aria-label="Collections">
        {COLLECTIONS.map((col) => (
          <CollectionHublotCard
            key={col.slug}
            to={`/collections/${col.slug}`}
            titre={col.shortLabel}
            imageSrc="/images/voilier-brest.png"
            imageAlt={col.name}
          />
        ))}
      </CardSlider>
    </section>
  )
}
