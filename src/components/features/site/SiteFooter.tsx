import { Link } from 'react-router-dom'

import { FOOTER_LINKS } from '@/data/navigation'
import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

export function SiteFooter() {
  return (
    <footer className="bg-ocean-900 px-section py-6 text-on-dark">
      <p className={`mb-4 ${typography.logo} text-on-dark`}>YROISE</p>
      <nav className="-mx-2 flex flex-col">
        {FOOTER_LINKS.map((link) => (
          <Link
            key={link.slug}
            to={link.slug}
            className={cn(
              'inline-flex min-h-11 items-center px-2 text-white/70 hover:text-white',
              typography.uiLink
            )}
          >
            {link.label === 'Nous contacter' ? 'Contact' : link.label}
          </Link>
        ))}
      </nav>
    </footer>
  )
}
