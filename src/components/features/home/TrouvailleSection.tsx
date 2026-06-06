import { Button } from '@/components/ui/button'
import { HOME_TROUVAILLE } from '@/data/home'
import { typography } from '@/styles/typography'

export function TrouvailleSection() {
  return (
    <section className="px-section pt-8 pb-10">
      <h2 className={typography.sectionLabel}>La trouvaille</h2>
      <div
        className="mt-4 flex h-32 w-full items-center justify-center rounded-md border border-border bg-surface"
        aria-hidden
      />
      <h3 className={`mt-5 ${typography.editorialLead}`}>{HOME_TROUVAILLE.titre}</h3>
      <p className={`mt-3 ${typography.bodyMuted}`}>{HOME_TROUVAILLE.chapeau}</p>
      <Button variant="secondary" className="mt-6">
        {HOME_TROUVAILLE.ctaLabel}
      </Button>
    </section>
  )
}
