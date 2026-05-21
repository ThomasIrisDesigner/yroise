/** Bloc embed jeu Geniali (wireframe — placeholder interactif). */
export function GenialiEmbed() {
  return (
    <div className="mb-6 overflow-hidden rounded-md border-2 border-dashed border-border bg-muted/50">
      <div className="flex items-center gap-2 bg-secondary px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-surface/50" aria-hidden />
        <span className="text-xs font-semibold text-surface">Jeu interactif — Geniali</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 py-8">
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className={
                i === 4
                  ? 'h-9 w-9 rounded border-2 border-dashed border-border bg-transparent'
                  : 'h-9 w-9 rounded bg-muted'
              }
              aria-hidden
            />
          ))}
        </div>
        <p className="text-xs italic text-secondary">
          Glisse les pièces pour reconstituer la carte
        </p>
      </div>
    </div>
  )
}
