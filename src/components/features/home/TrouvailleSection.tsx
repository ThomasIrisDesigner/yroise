import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { HOME_TROUVAILLE } from '@/data/home'
import { typography } from '@/styles/typography'

export function TrouvailleSection() {
  return (
    <section className="px-5 pt-8 pb-10">
      <h2 className={typography.sectionLabel}>La trouvaille</h2>
      <div
        className="mt-4 flex h-32 w-full items-center justify-center rounded-md border border-border bg-muted"
        aria-hidden
      />
      <h3 className={`mt-5 ${typography.editorialLead}`}>{HOME_TROUVAILLE.titre}</h3>
      <p className={`mt-3 ${typography.bodyMuted}`}>{HOME_TROUVAILLE.chapeau}</p>
      <Button variant="outline" className="mt-6 gap-1 border-2 border-primary">
        {HOME_TROUVAILLE.ctaLabel}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </section>
  )
}
