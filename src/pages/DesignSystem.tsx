import * as React from 'react'
import { Link } from 'react-router-dom'

import {
  DsTwoColumnBlock,
  type CompactSpecRow,
} from '@/components/features/design-system/DsTwoColumnBlock'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { CardSlider } from '@/components/ui/card-slider'
import { CollectionHublotCard } from '@/components/ui/collection-hublot-card'
import { HistoireCard } from '@/components/ui/histoire-card'
import { JeunesseCard } from '@/components/ui/jeunesse-card'
import { TypeLabel } from '@/components/ui/type-label'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { PROJECT_DISPLAY_NAME } from '@/config/project'
import {
  BUTTON_COMMON_SPECS,
  BUTTON_EXTRA_SPECS,
  BUTTON_SIZE_LINES,
  BUTTON_VARIANT_COLOR_SPECS,
} from '@/styles/button-tokens'
import {
  COLOR_TOKEN_SECTIONS,
  type ColorTokenEntry,
} from '@/styles/color-tokens'
import {
  TYPE_LABEL_BASE_SPECS,
  TYPE_LABEL_SECTION_COLORS,
  TYPE_LABEL_SECTORS,
} from '@/styles/label-tokens'
import {
  CARD_COLLECTION_SPECS,
  CARD_HISTOIRE_SPECS,
  CARD_JEUNESSE_SPECS,
  CARD_SLIDER_SPECS,
} from '@/styles/card-tokens'
import {
  SECTION_LABEL_EXAMPLES,
  SECTION_LABEL_NOTE,
  SECTION_LABEL_SPECS,
} from '@/styles/section-label-tokens'
import { SECTION_PADDING_SPECS } from '@/styles/spacing-tokens'
import { typography } from '@/styles/typography'
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

function parseArrowSpec(line: string): CompactSpecRow {
  const sep = line.indexOf(' → ')
  if (sep === -1) return { token: 'note', value: line }
  return { token: line.slice(0, sep), value: line.slice(sep + 3) }
}

function TypographyTable({ styles }: { styles: TypographyStyleSpec[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[980px] border-collapse text-left">
        <thead>
          <tr className="border-b border-border bg-surface/40 font-outfit text-[11px] font-semibold uppercase tracking-wide text-muted">
            <th className="px-3 py-2.5">Token</th>
            <th className="min-w-[200px] px-3 py-2.5">Usage</th>
            <th className="px-3 py-2.5">Exemple</th>
            <th className="px-3 py-2.5">Police</th>
            <th className="px-3 py-2.5">Taille</th>
            <th className="px-3 py-2.5">Graisse</th>
            <th className="px-3 py-2.5">Interlettrage</th>
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
              <td className="px-3 py-3">{style.letterSpacing}</td>
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

const titleMContextNote = typographyUiCatalog.find(
  (s) => s.key === 'titleM'
)?.contextNote

const BUTTON_SIZE_SPEC_ROWS = BUTTON_SIZE_LINES.map(parseArrowSpec)
const BUTTON_EXTRA_SPEC_ROWS = BUTTON_EXTRA_SPECS.map(parseArrowSpec)
const BUTTON_VARIANT_SPEC_ROWS: CompactSpecRow[] = BUTTON_VARIANT_COLOR_SPECS.map(
  ({ variant, spec }) => ({ token: variant, value: spec })
)
const BUTTON_ETATS_SPEC_ROWS: CompactSpecRow[] = [
  { token: 'hover primary', value: 'fond #333333' },
  { token: 'hover secondary', value: 'bordure #010101' },
  { token: 'hover ghost', value: 'underline' },
  ...BUTTON_EXTRA_SPEC_ROWS,
]
const TYPE_LABEL_COLOR_SPEC_ROWS: CompactSpecRow[] = TYPE_LABEL_SECTION_COLORS.map(
  (row) => ({ token: row.section, value: row.spec })
)

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
          <a className="hover:text-text" href="#labels-section">
            Labels de section
          </a>
          <a className="hover:text-text" href="#boutons">
            Boutons
          </a>
          <a className="hover:text-text" href="#labels">
            Labels de type
          </a>
          <a className="hover:text-text" href="#cards">
            Cards
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
              {titleMContextNote ? (
                <p className="mt-3 font-outfit text-[11px] leading-snug text-muted">
                  <span className="font-mono text-text">title-m</span> — {titleMContextNote}
                </p>
              ) : null}
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

          <Section id="labels-section" title="LABELS DE SECTION">
            <DsTwoColumnBlock
              preview={
                <div className="flex flex-col gap-4">
                  {SECTION_LABEL_EXAMPLES.map((example) => (
                    <p key={example} className={typography.label}>
                      {example}
                    </p>
                  ))}
                </div>
              }
              specs={SECTION_LABEL_SPECS}
              note={`Token label (sectionLabel). ${SECTION_LABEL_NOTE}`}
            />
          </Section>

          <Section id="boutons" title="BOUTONS">
            <div className="grid gap-10">
              <DsTwoColumnBlock
                title="Style commun"
                preview={
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                }
                specs={BUTTON_COMMON_SPECS}
                note="Typo libellé via --button-font-size, --button-font-weight et --button-letter-spacing — tous les variants."
              />
              <DsTwoColumnBlock
                title="Variants"
                preview={
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                }
                specs={BUTTON_VARIANT_SPEC_ROWS}
              />
              <DsTwoColumnBlock
                title="Tailles"
                preview={
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant="primary" size="default">
                      Default (44px)
                    </Button>
                    <Button variant="primary" size="sm">
                      Small (36px)
                    </Button>
                  </div>
                }
                specs={BUTTON_SIZE_SPEC_ROWS}
              />
              <DsTwoColumnBlock
                title="États"
                preview={
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant="primary">Actif</Button>
                    <Button variant="primary" disabled>
                      Disabled
                    </Button>
                    <Button variant="secondary" disabled>
                      Secondary disabled
                    </Button>
                  </div>
                }
                specs={BUTTON_ETATS_SPEC_ROWS}
                note="Survoler les boutons actifs pour prévisualiser les hovers."
              />
              <DsTwoColumnBlock
                title="Sur fond sombre"
                preview={
                  <div className="-m-4 rounded-lg bg-ocean-900 p-6">
                    <Button variant="primary" inverted>
                      Primary inversé
                    </Button>
                  </div>
                }
                specs={[
                  {
                    token: 'inverted',
                    value: 'fond #FFFFFF · texte #010101 · triangle #2D7D8A',
                  },
                  { token: 'usage', value: 'footer, hero' },
                ]}
                previewClassName="border-0 bg-transparent p-0"
              />
            </div>
          </Section>

          <Section id="labels" title="LABELS DE TYPE">
            <div className="grid gap-10">
              <DsTwoColumnBlock
                title="Fond blanc"
                preview={
                  <div className="grid gap-4 sm:grid-cols-2">
                    {TYPE_LABEL_SECTORS.map((sector) => (
                      <div key={sector.id}>
                        <p className="mb-2 font-outfit text-[11px] font-semibold uppercase tracking-wide text-muted">
                          {sector.title}
                        </p>
                        <div className="flex flex-wrap gap-x-5 gap-y-2">
                          {sector.types.map((type) => (
                            <TypeLabel key={type} type={type} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                }
                specs={TYPE_LABEL_BASE_SPECS}
                note="Couleur par défaut #71717a. Pas de type sur Collections ni La carte."
              />
              <DsTwoColumnBlock
                title="Fonds colorés de section"
                preview={
                  <div className="grid gap-4">
                    {TYPE_LABEL_SECTORS.map((sector) => (
                      <div
                        key={sector.id}
                        className={`rounded-lg border border-border p-4 ${sector.surfaceClass} ${sector.sectionClass}`}
                      >
                        <p className="mb-3 font-outfit text-[11px] font-semibold uppercase tracking-wide text-text/70">
                          {sector.title}
                        </p>
                        <div className="flex flex-wrap gap-x-5 gap-y-2">
                          {sector.types.map((type) => (
                            <TypeLabel key={type} type={type} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                }
                specs={TYPE_LABEL_COLOR_SPEC_ROWS}
                note="Classes parentes : section-histoires, section-jeunesse."
              />
            </div>
          </Section>

          <Section id="cards" title="CARDS">
            <div className="grid gap-10">
              <DsTwoColumnBlock
                title="Card Histoires"
                preview={
                  <div className="section-histoires">
                    <HistoireCard
                      to="/histoires/ocean-liberty-1947"
                      titre="L'explosion de l'Océan Liberty, 28 juillet 1947"
                      extrait="Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                    />
                  </div>
                }
                specs={CARD_HISTOIRE_SPECS}
                previewClassName="flex justify-center"
              />
              <DsTwoColumnBlock
                title="Card Collections — hublot"
                preview={
                  <div className="flex justify-center">
                    <CollectionHublotCard to="/collections/en-mer" titre="En mer" />
                  </div>
                }
                specs={CARD_COLLECTION_SPECS}
              />
              <DsTwoColumnBlock
                title="Card Jeu / Séquence"
                preview={
                  <div className="section-jeunesse">
                    <JeunesseCard
                      to="/jeunesse/puzzle-rade-brest"
                      titre="Le puzzle de la rade de Brest"
                      type="jeu"
                      meta="6–10 ans · 5 min"
                    />
                  </div>
                }
                specs={CARD_JEUNESSE_SPECS}
                previewClassName="flex justify-center"
              />
              <DsTwoColumnBlock
                title="Slider"
                preview={
                  <div className="card-slider-viewport section-histoires -mx-4 overflow-hidden bg-surface/30 py-4">
                    <CardSlider aria-label="Démo slider cards">
                      <HistoireCard
                        to="#"
                        titre="Exemple histoire slider"
                        extrait="Aperçu du peek — card suivante visible à droite."
                        sliderItem
                      />
                      <HistoireCard
                        to="#"
                        titre="Deuxième card"
                        extrait="Scroll horizontal · snap · gap 12px."
                        sliderItem
                      />
                      <CollectionHublotCard to="#" titre="En mer" />
                      <CollectionHublotCard to="#" titre="Brest" />
                    </CardSlider>
                  </div>
                }
                specs={CARD_SLIDER_SPECS}
                previewClassName="overflow-hidden border-0 bg-transparent p-0"
              />
            </div>
          </Section>

          <Section id="espacement" title="ESPACEMENT">
            <p className="mb-8 font-outfit text-sm text-muted">
              Grille 8px — utiliser les multiples Tailwind (p-2, p-4, p-6…). Gouttière
              horizontale des sections : <code className="text-text">px-section</code> (16px).
            </p>
            <div className="mb-10">
              <DsTwoColumnBlock
                title="Gouttière section"
                preview={
                  <div className="border-l-4 border-glaz-700 pl-section">
                    <p className="font-outfit text-sm text-text">
                      Contenu aligné à 16px du bord
                    </p>
                  </div>
                }
                specs={SECTION_PADDING_SPECS}
              />
            </div>
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

