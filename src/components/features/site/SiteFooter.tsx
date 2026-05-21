import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

const FOOTER_MOBILE_LINKS = [
  { label: 'Qui sommes-nous', slug: '/qui-sommes-nous' },
  { label: 'Contact', slug: '/contact' },
  { label: 'FAQ', slug: '/faq' },
  { label: 'Accessibilité', slug: '/accessibilite' },
  { label: 'Mentions légales', slug: '/mentions-legales' },
] as const

export function SiteFooter() {
  return (
    <footer className="mt-6 bg-primary px-4 py-6 text-surface">
      <p className="mb-4 text-xs font-extrabold tracking-widest">YROISE</p>
      <nav className="flex flex-wrap gap-x-4 gap-y-2">
        {FOOTER_MOBILE_LINKS.map((link) => (
          <a
            key={link.slug}
            href={link.slug}
            className={cn(typography.footer, 'text-surface/50 hover:text-surface/80')}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  )
}
