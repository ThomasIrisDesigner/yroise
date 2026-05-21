import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { HOME_TROUVAILLE } from '@/data/home'
import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

export function TrouvailleSection() {
  return (
    <section className="px-4 pt-6">
      <h2 className={typography.sectionLabel}>La trouvaille</h2>
      <div
        className="mt-2 flex h-24 w-full items-center justify-center rounded border border-border bg-muted"
        aria-hidden
      />
      <h3 className={cn('mt-3', typography.cardTitle)}>{HOME_TROUVAILLE.titre}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text/80">{HOME_TROUVAILLE.chapeau}</p>
      <Button variant="outline" size="sm" className="mt-4 gap-1 border-2 border-primary">
        {HOME_TROUVAILLE.ctaLabel}
        <ArrowRight className="h-3.5 w-3.5" />
      </Button>
    </section>
  )
}
