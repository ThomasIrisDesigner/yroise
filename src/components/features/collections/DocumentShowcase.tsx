import { ChevronLeft, ChevronRight } from 'lucide-react'
import * as React from 'react'

import type { FeaturedDocument } from '@/data/collectionDetails'
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
      <div
        className="flex h-32 w-full items-center justify-center bg-muted"
        role="img"
        aria-label={doc.titre}
      >
        <span className="text-xs italic text-text/40">Document pleine largeur</span>
      </div>
      <div className="bg-surface p-3">
        <p className={typography.cardTitle}>{doc.titre}</p>
        <p className="mt-1 text-xs text-text/60">{doc.fonds}</p>
        {total > 1 ? (
          <div className="mt-3 flex items-center justify-between">
            <div className="flex gap-1">
              {documents.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-sm ${i === index ? 'w-3.5 bg-primary' : 'w-1.5 bg-border'}`}
                  aria-hidden
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Document précédent"
                onClick={goPrev}
                className="text-text/40 hover:text-text"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-xs text-text/60">
                {index + 1} / {total}
              </span>
              <button
                type="button"
                aria-label="Document suivant"
                onClick={goNext}
                className="text-text hover:text-secondary"
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
