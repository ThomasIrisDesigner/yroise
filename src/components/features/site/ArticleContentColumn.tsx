import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface ArticleContentColumnProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'article' | 'section'
}

/** Colonne éditoriale article — 792px max centrée (desktop). */
export function ArticleContentColumn({
  children,
  className,
  as: Tag = 'div',
}: ArticleContentColumnProps) {
  return <Tag className={cn('article-content-column', className)}>{children}</Tag>
}
