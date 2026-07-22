import * as React from 'react'
import { ExternalLink, FolderTree } from 'lucide-react'
import { Link } from 'react-router-dom'

import { PROJECT_DISPLAY_NAME } from '@/config/project'
import { WIREFRAME_STEPS } from '@/config/wireframe-status'
import { HISTOIRES_LIST } from '@/data/histoires'
import { JEUNESSE_LIST } from '@/data/jeunesse'
import {
  FOOTER_LINKS,
  MAIN_NAV_LABELS,
  NAV_SECTIONS,
  type NavTreeItem,
} from '@/data/navigation'
import { resetPageScroll } from '@/lib/resetPageScroll'
import { cn } from '@/lib/utils'

/** Routes réellement branchées dans App.tsx — pour distinguer structure vs prototype cliquable. */
const PROTOTYPED_PREFIXES = [
  '/prototype',
  '/histoires',
  '/collections',
  '/carte',
  '/jeunesse',
  '/informations-pratiques',
  '/faq',
  '/accessibilite',
  '/mentions-legales',
] as const

const EXAMPLE_SLUGS: Record<string, string> = {
  '/histoires/:slug': `/histoires/${HISTOIRES_LIST[0]?.slug ?? 'ocean-liberty-1947'}`,
  '/histoires/expositions/:slug': `/histoires/${HISTOIRES_LIST.find((h) => h.type === 'exposition')?.slug ?? 'marcel-bories-plaques'}`,
  '/jeunesse/jeux': `/jeunesse/${JEUNESSE_LIST.find((a) => a.type === 'jeu')?.slug ?? 'puzzle-rade-brest'}`,
  '/jeunesse/sequences': `/jeunesse/${JEUNESSE_LIST.find((a) => a.type === 'sequence')?.slug ?? 'vie-brest-xviii'}`,
}

function resolveHref(item: NavTreeItem): string | null {
  if (item.external || !item.slug) return null
  if (EXAMPLE_SLUGS[item.slug]) return EXAMPLE_SLUGS[item.slug]
  if (item.slug.includes(':')) return null
  return item.slug
}

function isPrototypedPath(href: string | null): boolean {
  if (!href) return false
  return PROTOTYPED_PREFIXES.some(
    (prefix) => href === prefix || href.startsWith(`${prefix}/`)
  )
}

function LevelBadge({ level }: { level: NavTreeItem['level'] }) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 rounded px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide',
        level === 'page'
          ? 'bg-glaz-100 text-glaz-900'
          : 'bg-surface text-muted'
      )}
    >
      {level === 'page' ? 'page' : 'sous-page'}
    </span>
  )
}

function StatusDot({ status }: { status: 'done' | 'partial' | 'todo' }) {
  return (
    <span
      className={cn(
        'inline-block size-2 shrink-0 rounded-full',
        status === 'done' && 'bg-glaz-500',
        status === 'partial' && 'bg-aurore-700',
        status === 'todo' && 'bg-border'
      )}
      aria-hidden
    />
  )
}

function TreeItem({ item }: { item: NavTreeItem }) {
  const href = resolveHref(item)
  const prototyped = isPrototypedPath(href)
  const indent = item.level === 'sub'

  return (
    <li
      className={cn(
        'flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-border/60 py-2.5 last:border-0',
        indent && 'pl-6'
      )}
    >
      <LevelBadge level={item.level} />
      <span className="min-w-0 flex-1 font-outfit text-sm text-text">
        {item.label}
      </span>
      {item.slug ? (
        <code className="font-mono text-[11px] text-muted">{item.slug}</code>
      ) : null}
      {item.external ? (
        <span className="inline-flex items-center gap-1 font-outfit text-[11px] text-muted">
          <ExternalLink className="size-3" aria-hidden />
          hors scope / externe
        </span>
      ) : null}
      {href && prototyped ? (
        <Link
          to={href}
          className="font-outfit text-[11px] font-medium text-glaz-700 hover:underline"
        >
          Ouvrir
          {href !== item.slug ? ' (ex.)' : ''}
        </Link>
      ) : null}
      {href && !prototyped ? (
        <span className="font-outfit text-[11px] text-muted">non branché</span>
      ) : null}
    </li>
  )
}

export function Arborescence() {
  React.useLayoutEffect(() => {
    resetPageScroll()
  }, [])

  const mainSections = NAV_SECTIONS.filter((s) => s.kind === 'main')
  const utilitySections = NAV_SECTIONS.filter((s) => s.kind === 'utility')

  return (
    <div className="min-h-dvh bg-background text-text">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6">
          <h1 className="flex items-center gap-2 text-sm font-semibold text-text">
            <FolderTree className="size-4 shrink-0 text-glaz-700" aria-hidden />
            Arborescence — {PROJECT_DISPLAY_NAME}
          </h1>
          <div className="flex items-center gap-4">
            <Link
              to="/design-system"
              className="text-sm text-text/70 hover:text-text"
            >
              Design System
            </Link>
            <Link
              to="/prototype"
              className="text-sm text-text/70 hover:text-text"
            >
              Retour au prototype
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-24">
        <p className="mb-6 max-w-2xl font-outfit text-sm leading-relaxed text-muted">
          Structure du site pour les développeurs — source{' '}
          <code className="text-text">src/data/navigation.ts</code>. Scope
          prototype : pages éditoriales Drupal uniquement. Consultation document
          (visionneuse Gallica) hors scope.
        </p>

        <div className="mb-10 flex flex-wrap gap-4 rounded-lg border border-border bg-surface/50 px-4 py-3 font-outfit text-[12px] text-muted">
          <span className="inline-flex items-center gap-1.5">
            <LevelBadge level="page" /> page dédiée (nav)
          </span>
          <span className="inline-flex items-center gap-1.5">
            <LevelBadge level="sub" /> sous-page / contenu
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ExternalLink className="size-3" aria-hidden /> lien externe / Gallica
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="font-medium text-glaz-700">Ouvrir</span> route
            prototypée
          </span>
        </div>

        <nav className="mb-10 flex flex-wrap gap-3 text-sm text-text/70">
          <a className="hover:text-text" href="#nav-principale">
            Nav principale
          </a>
          <a className="hover:text-text" href="#utilitaires">
            Utilitaires
          </a>
          <a className="hover:text-text" href="#footer">
            Footer
          </a>
          <a className="hover:text-text" href="#wireframes">
            Wireframes
          </a>
        </nav>

        <div className="grid gap-12">
          <section id="nav-principale" className="scroll-mt-20">
            <div className="mb-6">
              <h2 className="font-outfit text-xs font-semibold uppercase tracking-[0.08em] text-text">
                Navigation principale
              </h2>
              <p className="mt-2 font-outfit text-sm text-muted">
                Header : Logo · {MAIN_NAV_LABELS.join(' · ')} · 🔍 · FR | BR
              </p>
            </div>

            <div className="grid gap-8">
              {mainSections.map((section) => (
                <div key={section.id}>
                  <div className="mb-3 flex flex-wrap items-baseline gap-3">
                    <h3 className="font-outfit text-base font-semibold text-text">
                      {section.label}
                    </h3>
                    <span className="font-outfit text-xs text-muted">
                      {section.note}
                    </span>
                  </div>
                  <ul className="rounded-lg border border-border bg-background px-4">
                    {section.items.map((item) => (
                      <TreeItem
                        key={`${section.id}-${item.label}-${item.slug ?? ''}`}
                        item={item}
                      />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="utilitaires" className="scroll-mt-20">
            <h2 className="mb-6 font-outfit text-xs font-semibold uppercase tracking-[0.08em] text-text">
              Utilitaires
            </h2>
            <div className="grid gap-8">
              {utilitySections.map((section) => (
                <div key={section.id}>
                  <div className="mb-3 flex flex-wrap items-baseline gap-3">
                    <h3 className="font-outfit text-base font-semibold text-text">
                      {section.label}
                    </h3>
                    <span className="font-outfit text-xs text-muted">
                      {section.note}
                    </span>
                  </div>
                  <ul className="rounded-lg border border-border bg-background px-4">
                    {section.items.map((item) => (
                      <TreeItem
                        key={`${section.id}-${item.label}-${item.slug ?? ''}`}
                        item={item}
                      />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="footer" className="scroll-mt-20">
            <h2 className="mb-6 font-outfit text-xs font-semibold uppercase tracking-[0.08em] text-text">
              Footer
            </h2>
            <ul className="rounded-lg border border-border bg-background px-4">
              {FOOTER_LINKS.map((link) => {
                const prototyped = isPrototypedPath(link.slug)
                return (
                  <li
                    key={link.slug}
                    className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-border/60 py-2.5 last:border-0"
                  >
                    <LevelBadge level="page" />
                    <span className="min-w-0 flex-1 font-outfit text-sm text-text">
                      {link.label}
                    </span>
                    <code className="font-mono text-[11px] text-muted">
                      {link.slug}
                    </code>
                    {prototyped ? (
                      <Link
                        to={link.slug}
                        className="font-outfit text-[11px] font-medium text-glaz-700 hover:underline"
                      >
                        Ouvrir
                      </Link>
                    ) : (
                      <span className="font-outfit text-[11px] text-muted">
                        non branché
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
          </section>

          <section id="wireframes" className="scroll-mt-20">
            <h2 className="mb-2 font-outfit text-xs font-semibold uppercase tracking-[0.08em] text-text">
              Suivi wireframes mobile
            </h2>
            <p className="mb-6 font-outfit text-sm text-muted">
              Source <code className="text-text">src/config/wireframe-status.ts</code>
            </p>
            <ul className="rounded-lg border border-border bg-background px-4">
              {WIREFRAME_STEPS.map((step) => (
                <li
                  key={step.id}
                  className="flex flex-wrap items-start gap-x-3 gap-y-1 border-b border-border/60 py-3 last:border-0"
                >
                  <StatusDot status={step.status} />
                  <div className="min-w-0 flex-1">
                    <p className="font-outfit text-sm font-medium text-text">
                      {step.label}
                    </p>
                    <p className="mt-0.5 font-outfit text-xs text-muted">
                      {step.screens.join(' · ')}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] uppercase text-muted">
                    {step.status}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
