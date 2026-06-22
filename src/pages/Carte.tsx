import * as React from 'react'

import { CarteDocumentPopup } from '@/components/features/carte/CarteDocumentPopup'
import { CartePinButton } from '@/components/features/carte/CartePinButton'
import { MapIllustration } from '@/components/features/carte/MapIllustration'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { CARTE_INTRO, CARTE_PINS } from '@/data/carte'
import { typography } from '@/styles/typography'

export function Carte() {
  const [selectedId, setSelectedId] = React.useState<string | null>(null)
  const selectedPin = CARTE_PINS.find((p) => p.id === selectedId)

  return (
    <SitePageShell>
      <div className="shrink-0 border-b border-border bg-surface px-section py-3">
        <p className={typography.titleL}>{CARTE_INTRO.lead}</p>
        <p className={`mt-1 ${typography.meta}`}>
          {CARTE_INTRO.sub}
          {' · '}
          <span className={typography.titleM}>{CARTE_INTRO.lieuxCount} lieux</span>
          {' géolocalisés'}
        </p>
      </div>

      <div
        className="relative min-h-0 w-full flex-1"
        onClick={() => setSelectedId(null)}
        role="presentation"
      >
        <MapIllustration />
        {CARTE_PINS.map((pin) => (
          <CartePinButton
            key={pin.id}
            left={pin.left}
            top={pin.top}
            selected={pin.id === selectedId}
            label={pin.titre}
            onClick={() => setSelectedId(pin.id)}
          />
        ))}
        {selectedPin ? (
          <CarteDocumentPopup pin={selectedPin} onClose={() => setSelectedId(null)} />
        ) : null}
        {selectedPin ? (
          <p
            className={`absolute bottom-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-surface/90 px-3 py-1 ${typography.editorialCaption}`}
          >
            {CARTE_INTRO.hintClose}
          </p>
        ) : null}
      </div>

      {!selectedPin ? (
        <div className="shrink-0 border-t border-border bg-surface/50 px-section py-3">
          <p className={`text-center ${typography.editorialCaption}`}>{CARTE_INTRO.hint}</p>
        </div>
      ) : null}
    </SitePageShell>
  )
}
