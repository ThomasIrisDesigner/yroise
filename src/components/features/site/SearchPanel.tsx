import * as React from 'react'

import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

interface SearchPanelProps {
  open: boolean
  onClose: () => void
}

const SEARCH_LINKS = [
  {
    label: 'Recherche avancée',
    href: '#',
    iconSrc: '/images/Icon_recherche-avancee.svg',
  },
  {
    label: 'Tutoriel de recherche Gallica',
    href: '#',
    iconSrc: '/images/Icon_lien-externe.svg',
    external: true,
  },
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

/** Figma menu — titres principaux : 22px / 3px */
const menuMainClass =
  'font-outfit text-[1.375rem] font-bold leading-normal tracking-[0.1875rem] text-on-dark uppercase'

const searchLinkClass =
  'font-outfit text-base font-normal leading-[1.3] tracking-[0.1px] text-on-dark'

const resourcesHeadingClass =
  'font-outfit text-base font-bold uppercase leading-normal tracking-[1px] text-on-dark'

export function SearchPanel({ open, onClose }: SearchPanelProps) {
  const [query, setQuery] = React.useState('')
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (!open) {
      setQuery('')
      return
    }

    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus()
    }, 0)

    return () => window.clearTimeout(focusTimer)
  }, [open])

  if (!open) return null

  return (
    <div
      className="absolute inset-0 z-[60] overflow-y-auto overscroll-y-contain bg-ocean-900 text-on-dark scrollbar-none [-webkit-overflow-scrolling:touch]"
      role="dialog"
      aria-modal="true"
      aria-label="Recherche"
    >
      <div className="flex min-h-full flex-col">
        <div className="flex h-[4.5rem] shrink-0 items-center justify-end px-section">
          <button
            type="button"
            aria-label="Fermer la recherche"
            onClick={onClose}
            className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-on-dark"
          >
            <img
              src="/images/Icon_fermer.svg"
              alt=""
              aria-hidden
              className="size-6"
              draggable={false}
            />
          </button>
        </div>

        <div className="flex flex-col gap-10 px-8 pb-8">
          <section
            className="flex flex-col gap-6"
            aria-labelledby="search-panel-rechercher"
          >
            <h2 id="search-panel-rechercher" className={menuMainClass}>
              Rechercher
            </h2>

            <form
              className="flex h-12 w-full items-center rounded-full border-2 border-glaz-100 bg-background pl-4 pr-2 transition-[border-color] focus-within:border-ocean-300"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                ref={inputRef}
                type="text"
                role="searchbox"
                inputMode="search"
                enterKeyHint="search"
                autoComplete="off"
                spellCheck={false}
                placeholder="Trouver un document"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="min-w-0 flex-1 bg-transparent font-outfit text-base text-text placeholder:text-text/50 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Lancer la recherche"
                className="flex size-9 shrink-0 items-center justify-center rounded-full text-glaz-700"
              >
                <svg viewBox="0 0 24 24" aria-hidden className="size-6">
                  <path
                    d="M10.9342 18.8169C15.2641 18.8169 18.7741 15.3068 18.7741 10.9769C18.7741 6.64697 15.2641 3.13689 10.9342 3.13689C6.6043 3.13689 3.09424 6.64697 3.09424 10.9769C3.09424 15.3068 6.6043 18.8169 10.9342 18.8169Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M20.9055 20.8631L16.6426 16.7707"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>

            <ul className="flex flex-col gap-4 pl-2">
              {SEARCH_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={'external' in link && link.external ? '_blank' : undefined}
                    rel={
                      'external' in link && link.external
                        ? 'noreferrer noopener'
                        : undefined
                    }
                    className="inline-flex min-h-11 items-center gap-1.5"
                  >
                    <span className={searchLinkClass}>{link.label}</span>
                    <img
                      src={link.iconSrc}
                      alt=""
                      aria-hidden
                      className="size-6 shrink-0"
                      draggable={false}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <div className="h-px w-full bg-on-dark/40" aria-hidden />

          <section
            className="flex flex-col gap-6"
            aria-labelledby="search-panel-autres-ressources"
          >
            <h2 id="search-panel-autres-ressources" className={resourcesHeadingClass}>
              Autres ressources
            </h2>

            <ul className="flex flex-col gap-6 pl-2">
              {EXTERNAL_RESOURCES.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex flex-col gap-1"
                  >
                    <span className="inline-flex items-center">
                      <span className={searchLinkClass}>{item.label}</span>
                      <img
                        src="/images/Icon_lien-externe.svg"
                        alt=""
                        aria-hidden
                        className="size-6 shrink-0"
                        draggable={false}
                      />
                    </span>
                    <span className={cn(typography.meta, 'text-on-dark/80')}>
                      {item.description}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
