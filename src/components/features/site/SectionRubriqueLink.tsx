import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { typography } from '@/styles/typography'

interface SectionRubriqueLinkProps {
  to: string
  children: ReactNode
}

/** Fil d'Ariane rubrique — lien uppercase 11px (Histoires, Collections…). */
export function SectionRubriqueLink({ to, children }: SectionRubriqueLinkProps) {
  return (
    <Link
      to={to}
      className={`${typography.articleRubrique} inline-flex h-6 items-center transition-opacity hover:opacity-80`}
    >
      {children}
    </Link>
  )
}
