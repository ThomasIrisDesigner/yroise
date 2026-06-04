import { ArrowRight, ArrowUpRight, Search, X } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { typography } from '@/styles/typography'

interface SearchPanelProps {
  open: boolean
  onClose: () => void
}

const SEARCH_LINKS = [
  { label: 'Recherche avancée', href: '#' },
  { label: 'Tutoriel de recherche', href: '#' },
] as const

const EXTERNAL_RESOURCES = [
  {
    label: 'Bretania.bzh',
    description: 'Collections numériques de toute la Bretagne',
    href: 'https://bretania.bzh',
  },
  {
    label: 'Mille Feuilles',
    description: 'Articles sur le patrimoine écrit breton',
    href: '#',
  },
] as const

export function SearchPanel({ open, onClose }: SearchPanelProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-30 flex flex-col bg-surface">
      <div className="flex h-14 items-center justify-between border-b border-border px-5">
        <span className={typography.logo}>YROISE</span>
        <button
          type="button"
          aria-label="Fermer la recherche"
          onClick={onClose}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-surface text-text"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="scrollbar-none flex flex-1 flex-col gap-5 overflow-y-auto px-5 py-5">
        <h2 className={typography.titleL}>Rechercher</h2>

        <div className="flex h-12 items-center gap-2 rounded-md border-2 border-glaz-700 px-4">
          <Search className="h-5 w-5 shrink-0 text-text" />
          <Input
            type="search"
            placeholder="Titres, lieux, thèmes…"
            className="h-full border-0 bg-transparent px-0 py-0 shadow-none focus-visible:ring-0"
            autoFocus
          />
        </div>

        <ul>
          {SEARCH_LINKS.map((link) => (
            <li key={link.label} className="border-b border-border">
              <a
                href={link.href}
                className={`flex min-h-12 items-center justify-between py-3 ${typography.titleM}`}
              >
                {link.label}
                <ArrowRight className="h-5 w-5 text-text/40" />
              </a>
            </li>
          ))}
        </ul>

        <div>
          <p className={typography.sectionLabel}>Autres ressources</p>
          <ul className="mt-3 flex flex-col gap-3">
            {EXTERNAL_RESOURCES.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-col gap-1 rounded-md border border-border bg-surface px-4 py-3 transition-colors hover:border-glaz-700/40 hover:bg-surface/50"
                >
                  <span className={`inline-flex items-center gap-1.5 ${typography.titleM}`}>
                    {item.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                  <span className={typography.meta}>{item.description}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className={`mt-auto ${typography.editorialCaption}`}>
          Les résultats documentaires s'affichent sur Gallica (hors scope prototype).
        </p>
      </div>
    </div>
  )
}
