import { ChevronLeft, ChevronRight } from 'lucide-react'
import * as React from 'react'

import type { FeaturedDocument } from '@/data/collectionDetails'
import { COLLECTION_EXAMPLE_IMAGE } from '@/data/collections'
import { typography } from '@/styles/typography'

interface DocumentShowcaseProps {
  documents: FeaturedDocument[]
}

export function DocumentShowcase({ documents }: DocumentShowcaseProps) {
  const [index, setIndex] = React.useState(0)
  const doc = documents[index]
  const total = documents.length

  function goPrev() {
    setIndex((i) => (i <= 0 ? total - 1 : i - 1))
  }

  function goNext() {
    setIndex((i) => (i >= total - 1 ? 0 : i + 1))
  }

  if (!doc) return null

  return (
    <div className="overflow-hidden rounded-md border border-border">
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={COLLECTION_EXAMPLE_IMAGE}
          alt={doc.titre}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="bg-surface p-4">
        <p className={typography.cardTitle}>{doc.titre}</p>
        <p className="mt-1 text-sm text-text/60">{doc.fonds}</p>
        {total > 1 ? (
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {documents.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-sm ${i === index ? 'w-4 bg-glaz-700' : 'w-1.5 bg-border'}`}
                  aria-hidden
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                aria-label="Document précédent"
                onClick={goPrev}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md text-text/60 hover:bg-surface hover:text-text"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="min-w-12 text-center text-sm text-text/60">
                {index + 1} / {total}
              </span>
              <button
                type="button"
                aria-label="Document suivant"
                onClick={goNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md text-text hover:bg-surface hover:text-glaz-700"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
