import { TitleH1Triangle } from '@/components/ui/title-h1-triangle'
import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

/** Rubrique de la page liste — pilote le fond et la couleur du triangle. */
export type SectionListTone = 'histoires' | 'collections' | 'jeunesse'

const toneStyles: Record<
  SectionListTone,
  { header: string; title: string; triangle: string }
> = {
  // Histoires : bandeau noir pleine largeur, titre et triangle en blanc.
  histoires: {
    header: 'pt-12 px-10 pb-10 bg-text',
    title: 'text-on-dark',
    triangle: 'text-on-dark',
  },
  // Collections : le fond glaz-100 est porté par la page, le header est transparent.
  collections: {
    header: 'pt-12 px-10 pb-10 bg-transparent',
    title: 'text-text',
    triangle: 'text-glaz-500',
  },
  jeunesse: {
    header: 'p-10 bg-aurore-100',
    title: 'text-text',
    triangle: 'text-aurore-700',
  },
}

interface SectionListHeaderProps {
  title: string
  tone?: SectionListTone
  className?: string
}

/**
 * En-tête des pages liste (Histoires, Collections, Jeunesse) :
 * H1 centré en capitales suivi du triangle de rubrique.
 * Tailles et paddings desktop : voir « Pages liste » dans theme.css.
 */
export function SectionListHeader({
  title,
  tone = 'histoires',
  className,
}: SectionListHeaderProps) {
  const styles = toneStyles[tone]

  return (
    <header
      className={cn('flex flex-col items-center gap-4', styles.header, className)}
    >
      <div className="flex items-center justify-center gap-2">
        <h1
          className={cn(
            typography.titleXl,
            'text-center uppercase tracking-[3px]',
            styles.title
          )}
        >
          {title}
        </h1>
        <TitleH1Triangle className={styles.triangle} />
      </div>
    </header>
  )
}
