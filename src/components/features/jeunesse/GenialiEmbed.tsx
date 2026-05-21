/** Bloc embed jeu Geniali (wireframe — placeholder interactif). */
export function GenialiEmbed() {
  return (
    <div className="mb-6 mt-5 overflow-hidden rounded-md border-2 border-dashed border-border bg-muted/50">
      <div className="flex h-11 items-center gap-2 bg-secondary px-4">
        <span className="h-2 w-2 rounded-full bg-surface/50" aria-hidden />
        <span className="text-sm font-semibold text-surface">Jeu interactif — Geniali</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 px-4 py-10">
        <div className="grid grid-cols-3 gap-1.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className={
                i === 4
                  ? 'h-12 w-12 rounded border-2 border-dashed border-border bg-transparent'
                  : 'h-12 w-12 rounded bg-muted'
              }
              aria-hidden
            />
          ))}
        </div>
        <p className="text-sm italic text-secondary">
          Glisse les pièces pour reconstituer la carte
        </p>
      </div>
    </div>
  )
}
