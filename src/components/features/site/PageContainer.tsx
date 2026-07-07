import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type PageContainerVariant = 'default' | 'header'

interface PageContainerProps {
  children: ReactNode
  className?: string
  /** Header : max 1280px avec 16px internes (pas la gouttière 72px). */
  variant?: PageContainerVariant
}

/** Conteneur éditorial — mobile inchangé (16px), desktop plein écran lg+ (1280px / 72px). */
export function PageContainer({
  children,
  className,
  variant = 'default',
}: PageContainerProps) {
  return (
    <div
      className={cn(
        'page-container',
        variant === 'header' && 'page-container--header',
        className
      )}
    >
      {children}
    </div>
  )
}
