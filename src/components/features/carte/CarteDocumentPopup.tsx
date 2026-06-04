import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

import type { CartePin } from '@/data/carte'

interface CarteDocumentPopupProps {
  pin: CartePin
  onClose: () => void
}

export function CarteDocumentPopup({ pin, onClose }: CarteDocumentPopupProps) {
  return (
    <div
      className="absolute left-1/2 top-6 z-20 w-[260px] -translate-x-1/2 overflow-hidden rounded-md bg-surface shadow-xl"
      role="dialog"
      aria-label={pin.titre}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative flex h-24 items-center justify-center bg-surface text-sm italic text-text/40">
        Image document
        <button
          type="button"
          aria-label="Fermer"
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          className="absolute right-1 top-1 inline-flex h-11 w-11 items-center justify-center rounded-full text-text/70 hover:text-text"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-surface/95 shadow">
            <X className="h-4 w-4" />
          </span>
        </button>
      </div>
      <div className="p-4">
        <p className="text-xs font-bold uppercase tracking-widest text-glaz-700">
          {pin.collection}
        </p>
        <p className="mt-2 text-sm font-bold leading-snug text-text">{pin.titre}</p>
        <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
          <a
            href={pin.gallicaHref}
            className="inline-flex h-9 items-center text-sm font-semibold text-glaz-700"
          >
            Voir le document →
          </a>
          {pin.histoireHref ? (
            <Link
              to={pin.histoireHref}
              className="inline-flex h-9 items-center text-sm font-semibold text-text"
            >
              Lire →
            </Link>
          ) : null}
        </div>
      </div>
      <div
        className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[8px] border-t-[8px] border-x-transparent border-t-surface"
        aria-hidden
      />
    </div>
  )
}
