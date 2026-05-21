import { Link } from 'react-router-dom'

import { FOOTER_LINKS } from '@/data/navigation'

export function SiteFooter() {
  return (
    <footer className="mt-8 bg-primary px-5 py-6 text-surface">
      <p className="mb-4 text-sm font-extrabold tracking-widest">YROISE</p>
      <nav className="-mx-2 flex flex-col">
        {FOOTER_LINKS.map((link) => (
          <Link
            key={link.slug}
            to={link.slug}
            className="inline-flex min-h-11 items-center px-2 text-sm text-surface/70 hover:text-surface"
          >
            {link.label === 'Nous contacter' ? 'Contact' : link.label}
          </Link>
        ))}
      </nav>
    </footer>
  )
}
