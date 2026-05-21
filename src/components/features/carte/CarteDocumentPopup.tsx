import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

import type { CartePin } from '@/data/carte'
import { typography } from '@/styles/typography'

interface CarteDocumentPopupProps {
  pin: CartePin
  onClose: () => void
}

export function CarteDocumentPopup({ pin, onClose }: CarteDocumentPopupProps) {
  return (
    <div
      className="absolute left-[28%] top-[20%] z-20 w-[138px] overflow-hidden rounded-md bg-surface shadow-lg"
      role="dialog"
      aria-label={pin.titre}
    >
      <div className="flex h-14 items-center justify-center bg-muted text-[10px] italic text-text/40">
        Image document
      </div>
      <div className="p-2">
        <p className="text-[10px] font-bold uppercase tracking-wider text-secondary">
          {pin.collection}
        </p>
        <p className={`mt-1 ${typography.cardTitle} text-xs leading-snug`}>{pin.titre}</p>
        <div className="mt-2 flex items-center justify-between border-t border-border pt-2">
          <a href={pin.gallicaHref} className="text-[10px] font-semibold text-secondary">
            Voir le document →
          </a>
          <button
            type="button"
            aria-label="Fermer"
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            className="text-text/40 hover:text-text"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
        {pin.histoireHref ? (
          <Link
            to={pin.histoireHref}
            className="mt-2 block text-[10px] font-semibold text-text"
            onClick={(e) => e.stopPropagation()}
          >
            Lire l'histoire →
          </Link>
        ) : null}
      </div>
      <div
        className="absolute -bottom-1.5 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[7px] border-t-[7px] border-x-transparent border-t-surface"
        aria-hidden
      />
    </div>
  )
}
