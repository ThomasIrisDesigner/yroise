import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { SectionTitleOrnament } from '@/components/ui/section-title-ornament'
import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

type SectionListHeaderLayout = 'editorial' | 'centered'
type SectionListHeaderTone = 'histoires' | 'collections'

const toneClasses: Record<
  SectionListHeaderTone,
  { surface: string; text: string; title: string; breadcrumb: string }
> = {
  histoires: {
    surface: 'bg-sable-100',
    text: 'text-sable-900',
    title: 'text-sable-900',
    breadcrumb: 'text-sable-900 hover:text-sable-900/80',
  },
  collections: {
    surface: 'bg-glaz-100',
    text: 'text-glaz-900',
    title: 'text-glaz-900',
    breadcrumb: 'text-glaz-900 hover:text-glaz-900/80',
  },
}

interface SectionListHeaderProps {
  title: string
  layout?: SectionListHeaderLayout
  breadcrumbTo?: string
  breadcrumbLabel?: string
  chapeau?: ReactNode
  tone?: SectionListHeaderTone
  className?: string
}

/** En-tête de page liste — editorial (fil d'Ariane + chapeau) ou centered (H1 + ornement). */
export function SectionListHeader({
  title,
  layout = 'editorial',
  breadcrumbTo,
  breadcrumbLabel,
  chapeau,
  tone = 'histoires',
  className,
}: SectionListHeaderProps) {
  if (layout === 'centered') {
    return (
      <header
        className={cn(
          'flex flex-col items-center gap-4 bg-transparent pt-12 px-10 pb-10',
          className
        )}
      >
        <h1
          className={cn(
            typography.titleXl,
            'text-center uppercase tracking-[1px] text-text'
          )}
        >
          {title}
        </h1>
        <SectionTitleOrnament />
      </header>
    )
  }

  const colors = toneClasses[tone]

  return (
    <header
      className={cn(
        'flex flex-col gap-4 p-10',
        colors.surface,
        colors.text,
        className
      )}
    >
      {breadcrumbTo && breadcrumbLabel ? (
        <Link
          to={breadcrumbTo}
          className={cn(typography.editorialCaption, colors.breadcrumb)}
        >
          {breadcrumbLabel}
        </Link>
      ) : null}
      <h1
        className={cn(
          typography.titleXl,
          'uppercase tracking-[1px]',
          colors.title
        )}
      >
        {title}
      </h1>
      {chapeau ? (
        <p className={cn(typography.chapeau, colors.text)}>{chapeau}</p>
      ) : null}
    </header>
  )
}
