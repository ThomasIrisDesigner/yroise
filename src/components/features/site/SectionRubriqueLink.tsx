import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { PastilleTriangle } from '@/components/ui/pastille-triangle'
import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

interface SectionRubriqueLinkProps {
  to: string
  children: ReactNode
  className?: string
}

/** Fil d'Ariane rubrique — 0.75rem bold uppercase (Histoires, Collections…). */
export function SectionRubriqueLink({
  to,
  children,
  className,
}: SectionRubriqueLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        typography.articleRubrique,
        'inline-flex h-4 items-center gap-2 transition-opacity hover:opacity-80',
        className
      )}
    >
      <PastilleTriangle />
      {children}
    </Link>
  )
}
