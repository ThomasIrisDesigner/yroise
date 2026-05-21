import * as React from 'react'

import { CarteDocumentPopup } from '@/components/features/carte/CarteDocumentPopup'
import { CartePinButton } from '@/components/features/carte/CartePinButton'
import { MapIllustration } from '@/components/features/carte/MapIllustration'
import { Breadcrumb } from '@/components/features/site/Breadcrumb'
import { SitePageShell } from '@/components/features/site/SitePageShell'
import { CARTE_INTRO, CARTE_PINS } from '@/data/carte'

export function Carte() {
  const [selectedId, setSelectedId] = React.useState<string | null>(null)
  const selectedPin = CARTE_PINS.find((p) => p.id === selectedId)

  return (
    <SitePageShell fillMockup>
      <Breadcrumb items={[{ label: 'La carte' }]} />

      <div className="shrink-0 border-b border-border bg-surface px-4 py-2">
        <p className="text-xs italic text-text">{CARTE_INTRO.lead}</p>
        <p className="mt-1 text-[11px] leading-snug text-text/60">
          {CARTE_INTRO.sub}
          {' · '}
          <span className="font-bold text-secondary">{CARTE_INTRO.lieuxCount} lieux</span>
          {' géolocalisés'}
        </p>
      </div>

      <div
        className="relative min-h-0 flex-1 w-full"
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
          <p className="absolute bottom-2 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-surface/90 px-2 py-0.5 text-[10px] italic text-text/50">
            {CARTE_INTRO.hintClose}
          </p>
        ) : null}
      </div>

      {!selectedPin ? (
        <div className="shrink-0 border-t border-border bg-muted/50 px-4 py-2">
          <p className="text-center text-[11px] italic text-secondary">{CARTE_INTRO.hint}</p>
        </div>
      ) : null}
    </SitePageShell>
  )
}
