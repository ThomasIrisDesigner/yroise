import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { FriseHaut, type FriseHautFill } from '@/components/ui/frise-haut'
import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

type SectionListHeaderTone = 'histoires' | 'collections'

const toneClasses: Record<
  SectionListHeaderTone,
  {
    surface: string
    text: string
    title: string
    breadcrumb: string
    friseFill: FriseHautFill
  }
> = {
  histoires: {
    surface: 'bg-sable-100',
    text: 'text-sable-900',
    title: 'text-sable-900',
    breadcrumb: 'text-sable-900 hover:text-sable-900/80',
    friseFill: 'sable-900',
  },
  collections: {
    surface: 'bg-glaz-100',
    text: 'text-glaz-900',
    title: 'text-glaz-900',
    breadcrumb: 'text-glaz-900 hover:text-glaz-900/80',
    friseFill: 'glaz-900',
  },
}

interface SectionListHeaderProps {
  breadcrumbTo: string
  breadcrumbLabel: string
  title: string
  chapeau: ReactNode
  tone?: SectionListHeaderTone
  className?: string
}

/** En-tête de page liste — fil d'Ariane, titre H1, chapeau sur fond tonal */
export function SectionListHeader({
  breadcrumbTo,
  breadcrumbLabel,
  title,
  chapeau,
  tone = 'histoires',
  className,
}: SectionListHeaderProps) {
  const colors = toneClasses[tone]

  return (
    <div className={className}>
      <header
        className={cn(
          'flex flex-col gap-4 p-10',
          colors.surface,
          colors.text
        )}
      >
        <Link
          to={breadcrumbTo}
          className={cn(typography.editorialCaption, colors.breadcrumb)}
        >
          {breadcrumbLabel}
        </Link>
        <h1
          className={cn(
            typography.titleXl,
            'uppercase tracking-[1px]',
            colors.title
          )}
        >
          {title}
        </h1>
        <p className={cn(typography.chapeau, colors.text)}>{chapeau}</p>
      </header>
      <div
        className="h-[7px] w-full overflow-hidden bg-background"
        aria-hidden
      >
        <FriseHaut
          fill={colors.friseFill}
          className="block h-full w-full"
        />
      </div>
    </div>
  )
}
