import { ArrowRight, ExternalLink, Search, X } from 'lucide-react'

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

const EXTERNAL_SEARCH = [
  { label: 'Bretania.bzh', href: 'https://bretania.bzh' },
  { label: 'Mille Feuilles', href: '#' },
] as const

export function SearchPanel({ open, onClose }: SearchPanelProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-30 flex flex-col bg-surface">
      <div className="flex h-14 items-center justify-between border-b border-border px-5">
        <span className="text-base font-extrabold tracking-wider text-secondary">YROISE</span>
        <button
          type="button"
          aria-label="Fermer la recherche"
          onClick={onClose}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-muted text-text"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="scrollbar-none flex flex-1 flex-col gap-5 overflow-y-auto px-5 py-5">
        <h2 className="text-xl font-bold text-text">Rechercher</h2>

        <div className="flex h-12 items-center gap-2 rounded-md border-2 border-primary px-4">
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
                className="flex min-h-12 items-center justify-between py-3 text-base font-medium text-text"
              >
                {link.label}
                <ArrowRight className="h-5 w-5 text-text/40" />
              </a>
            </li>
          ))}
        </ul>

        <div>
          <p className={typography.sectionLabel}>Rechercher aussi dans</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {EXTERNAL_SEARCH.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex h-11 items-center gap-1.5 rounded border border-border bg-muted px-4 text-sm font-medium text-secondary"
              >
                {item.label}
                <ExternalLink className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-auto text-sm text-text/50 italic">
          Les résultats documentaires s'affichent sur Gallica (hors scope prototype).
        </p>
      </div>
    </div>
  )
}
