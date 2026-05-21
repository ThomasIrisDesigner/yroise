import { cn } from '@/lib/utils'

interface CartePinButtonProps {
  left: string
  top: string
  selected: boolean
  onClick: () => void
  label: string
}

export function CartePinButton({ left, top, selected, onClick, label }: CartePinButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      className={cn(
        'absolute h-3 w-3 rounded-sm border-2 border-surface shadow-sm transition-colors',
        selected ? 'bg-primary' : 'bg-secondary hover:bg-primary/80'
      )}
      style={{ left, top, transform: 'rotate(-45deg)' }}
    />
  )
}
