import * as React from 'react'
import { Link } from 'react-router-dom'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { PROJECT_DISPLAY_NAME } from '@/config/project'
import {
  COLOR_TOKEN_SECTIONS,
  type ColorTokenEntry,
} from '@/styles/color-tokens'
import {
  TYPOGRAPHY_EDITORIAL_SECTION_NOTE,
  TYPOGRAPHY_FONT_FAMILY,
  type TypographyStyleSpec,
  typographyEditorialCatalog,
  typographyUiCatalog,
} from '@/styles/typography'

function ColorSwatch({ name, hex }: ColorTokenEntry) {
  return (
    <div className="rounded-xl border border-border bg-background p-3">
      <div
        className="h-16 w-full rounded-md border border-border"
        style={{ backgroundColor: hex }}
        aria-hidden
      />
      <p className="mt-2 font-mono text-[11px] font-semibold leading-tight text-text">
        {name}
      </p>
      <p className="font-mono text-[11px] text-muted">{hex}</p>
    </div>
  )
}

function typographyPreviewClassName(style: TypographyStyleSpec) {
  return style.key === 'uiLink' ? `${style.className} text-text` : style.className
}

function compactLineHeight(value: string) {
  return value.split(' ')[0] ?? value
}

function TypographyTable({ styles }: { styles: TypographyStyleSpec[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[880px] border-collapse text-left">
        <thead>
          <tr className="border-b border-border bg-surface/40 font-outfit text-[11px] font-semibold uppercase tracking-wide text-muted">
            <th className="px-3 py-2.5">Token</th>
            <th className="min-w-[200px] px-3 py-2.5">Usage</th>
            <th className="px-3 py-2.5">Exemple</th>
            <th className="px-3 py-2.5">Police</th>
            <th className="px-3 py-2.5">Taille</th>
            <th className="px-3 py-2.5">Graisse</th>
            <th className="px-3 py-2.5">Interlignage</th>
            <th className="px-3 py-2.5">Couleur</th>
          </tr>
        </thead>
        <tbody className="font-outfit text-[11px] text-muted">
          {styles.map((style) => (
            <tr
              key={style.key}
              className="border-b border-border align-top last:border-b-0"
            >
              <td className="px-3 py-3 font-mono text-xs text-text">{style.token}</td>
              <td className="max-w-[240px] px-3 py-3 leading-snug text-text">
                {style.usage}
              </td>
              <td className={`max-w-[200px] px-3 py-3 ${typographyPreviewClassName(style)}`}>
                Aa — Exemple de texte
              </td>
              <td className="px-3 py-3">{style.fontFamily}</td>
              <td className="px-3 py-3">{style.sizePx}px</td>
              <td className="px-3 py-3">{style.weight}</td>
              <td className="px-3 py-3">{compactLineHeight(style.lineHeight)}</td>
              <td className="px-3 py-3">{style.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const chapeauContextNote = typographyUiCatalog.find(
  (s) => s.key === 'chapeau'
)?.contextNote

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-lg font-semibold tracking-tight text-text">
          {title}
        </h2>
      </div>
      <div className="mt-3 border-t border-border" />
      <div className="mt-6">{children}</div>
    </section>
  )
}

export function DesignSystem() {
  const spacing = [
    { px: 4, tw: 'p-1' },
    { px: 8, tw: 'p-2' },
    { px: 12, tw: 'p-3' },
    { px: 16, tw: 'p-4' },
    { px: 24, tw: 'p-6' },
    { px: 32, tw: 'p-8' },
    { px: 48, tw: 'p-12' },
    { px: 64, tw: 'p-16' },
  ] as const

  return (
    <div className="min-h-dvh bg-background text-text">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6">
          <h1 className="text-sm font-semibold text-text">
            Design System — {PROJECT_DISPLAY_NAME}
          </h1>
          <Link to="/prototype" className="text-sm text-text/70 hover:text-text">
            Retour au prototype
          </Link>
        </div>
      </header>

      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-24">
        <nav className="mb-10 flex flex-wrap gap-3 text-sm text-text/70">
          <a className="hover:text-text" href="#couleurs">
            Couleurs
          </a>
          <a className="hover:text-text" href="#typographie">
            Typographie
          </a>
          <a className="hover:text-text" href="#espacement">
            Espacement
          </a>
          <a className="hover:text-text" href="#composants">
            Composants
          </a>
        </nav>

        <div className="grid gap-14">
          <Section id="couleurs" title="COULEURS">
            <div className="grid gap-10">
              {COLOR_TOKEN_SECTIONS.map((section) => (
                <div key={section.title} className="grid gap-4">
                  <div>
                    <h3 className="font-outfit text-xs font-semibold uppercase tracking-[0.08em] text-text">
                      {section.title}
                    </h3>
                    {section.description ? (
                      <p className="mt-1 font-outfit text-sm text-muted">
                        {section.description}
                      </p>
                    ) : null}
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {section.tokens.map((token) => (
                      <ColorSwatch key={token.name} {...token} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="typographie" title="TYPOGRAPHIE">
            <p className="mb-6 font-outfit text-sm text-muted">
              Mockup mobile (wireframes) — polices : {TYPOGRAPHY_FONT_FAMILY}. Hors
              périmètre : barre prototype, page login, présentation de cette page.
            </p>

            <div className="mb-12">
              <h3 className="mb-4 font-outfit text-xs font-semibold uppercase tracking-[0.08em] text-text">
                OUTFIT · Display &amp; UI
              </h3>
              <TypographyTable styles={typographyUiCatalog} />
              <blockquote className="mt-4 border-l-2 border-border pl-4 font-outfit text-sm italic text-muted">
                Sur fond sombre : appliquer <code className="text-text">text-white</code> ou{' '}
                <code className="text-text">text-white/60</code> par-dessus le style existant.
                Pas de token séparé.
              </blockquote>
              {chapeauContextNote ? (
                <p className="mt-3 font-outfit text-[11px] leading-snug text-muted">
                  <span className="font-mono text-text">chapeau</span> — {chapeauContextNote}
                </p>
              ) : null}
            </div>

            <div>
              <h3 className="mb-4 font-outfit text-xs font-semibold uppercase tracking-[0.08em] text-text">
                SOURCE SERIF 4 · Éditorial
              </h3>
              <TypographyTable styles={typographyEditorialCatalog} />
              <p className="mt-4 font-outfit text-[11px] leading-snug text-muted">
                {TYPOGRAPHY_EDITORIAL_SECTION_NOTE}
              </p>
            </div>
          </Section>

          <Section id="espacement" title="ESPACEMENT">
            <div className="grid gap-3">
              {spacing.map((s) => (
                <div
                  key={s.px}
                  className="grid grid-cols-[64px_1fr_90px] items-center gap-4"
                >
                  <p className="text-xs font-semibold text-text">{s.px}px</p>
                  <div className="h-3 rounded bg-text/20">
                    <div
                      className="h-3 rounded bg-text"
                      style={{ width: `${s.px}px` }}
                    />
                  </div>
                  <p className="text-xs text-text/70">{s.tw}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="composants" title="COMPOSANTS">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <h3 className="text-sm font-semibold">Boutons</h3>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="default">Default</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-sm font-semibold">Inputs</h3>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid gap-2">
                      <p className="text-xs font-semibold text-text/70">
                        Normal
                      </p>
                      <Input placeholder="Placeholder" />
                    </div>
                    <div className="grid gap-2">
                      <p className="text-xs font-semibold text-text/70">
                        Focus
                      </p>
                      <Input autoFocus placeholder="AutoFocus" />
                    </div>
                    <div className="grid gap-2">
                      <p className="text-xs font-semibold text-text/70">
                        Erreur
                      </p>
                      <Input
                        placeholder="Erreur"
                        className="border-danger focus-visible:ring-danger/30"
                      />
                    </div>
                    <div className="grid gap-2">
                      <p className="text-xs font-semibold text-text/70">
                        Disabled
                      </p>
                      <Input placeholder="Disabled" disabled />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-sm font-semibold">Badges</h3>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-sm font-semibold">Cards</h3>
                </CardHeader>
                <CardContent>
                  <Card className="max-w-md">
                    <CardHeader>
                      <h4 className="text-sm font-semibold">Titre de card</h4>
                      <p className="text-sm text-text/70">
                        Sous-titre discret
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-text/70">
                        Exemple de contenu dans une card.
                      </p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-sm font-semibold">Alerts</h3>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    <Alert variant="info">
                      <AlertTitle>Info</AlertTitle>
                      <AlertDescription>
                        Message d'information.
                      </AlertDescription>
                    </Alert>
                    <Alert variant="success">
                      <AlertTitle>Succès</AlertTitle>
                      <AlertDescription>
                        Action réalisée avec succès.
                      </AlertDescription>
                    </Alert>
                    <Alert variant="error">
                      <AlertTitle>Erreur</AlertTitle>
                      <AlertDescription>
                        Une erreur est survenue.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}

