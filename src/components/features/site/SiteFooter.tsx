import { Link } from 'react-router-dom'

import { FOOTER_LINKS } from '@/data/navigation'
import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

export function SiteFooter() {
  return (
    <footer className="mt-6 bg-primary px-4 py-6 text-surface">
      <p className="mb-4 text-xs font-extrabold tracking-widest">YROISE</p>
      <nav className="flex flex-wrap gap-x-4 gap-y-2">
        {FOOTER_LINKS.map((link) => (
          <Link
            key={link.slug}
            to={link.slug}
            className={cn(typography.footer, 'text-surface/50 hover:text-surface/80')}
          >
            {link.label === 'Nous contacter' ? 'Contact' : link.label}
          </Link>
        ))}
      </nav>
    </footer>
  )
}
