import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

interface SectionBackLinkProps {
  to: string
  children: ReactNode
  className?: string
}

/** Lien retour discret — pages profondes uniquement (remplace le fil d'Ariane). */
export function SectionBackLink({ to, children, className }: SectionBackLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        'inline-flex min-h-9 items-center font-outfit text-[13px] text-muted transition-colors hover:text-text',
        className
      )}
    >
      {children}
    </Link>
  )
}
