import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

export interface BreadcrumbItem {
  label: string
  to?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Fil d'Ariane"
      className={cn('flex flex-wrap items-center gap-1 border-b border-border px-4 py-2', className)}
    >
      {items.map((item, i) => (
        <span key={`${item.label}-${i}`} className="flex items-center gap-1">
          {i > 0 ? <span className="text-xs text-border">›</span> : null}
          {item.to && i < items.length - 1 ? (
            <Link to={item.to} className="text-xs text-text/60 hover:text-text">
              {item.label}
            </Link>
          ) : (
            <span
              className={cn(
                'text-xs',
                i === items.length - 1 ? 'font-semibold text-text' : 'text-text/60'
              )}
            >
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
