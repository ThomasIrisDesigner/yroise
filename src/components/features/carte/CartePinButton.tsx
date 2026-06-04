import { cn } from '@/lib/utils'

interface CartePinButtonProps {
  left: string
  top: string
  selected: boolean
  onClick: () => void
  label: string
}

/**
 * Pin carte avec touch target invisible 44x44 (ergo mobile) — le losange visible
 * reste petit pour ne pas masquer la carte.
 */
export function CartePinButton({ left, top, selected, onClick, label }: CartePinButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={selected}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      className="absolute inline-flex h-11 w-11 items-center justify-center"
      style={{ left, top, transform: 'translate(-50%, -50%)' }}
    >
      <span
        className={cn(
          'block h-3.5 w-3.5 rotate-45 rounded-sm border-2 border-surface shadow-sm transition-colors',
          selected ? 'bg-glaz-700' : 'bg-glaz-500'
        )}
        aria-hidden
      />
    </button>
  )
}
