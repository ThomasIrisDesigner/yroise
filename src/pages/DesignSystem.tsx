import * as React from 'react'
import { Link } from 'react-router-dom'

import { ArticleByline } from '@/components/features/site/ArticleByline'
import { CollectionListCard } from '@/components/features/collections/CollectionListCard'
import { SectionRubriqueLink } from '@/components/features/site/SectionRubriqueLink'
import {
  DsTwoColumnBlock,
  type CompactSpecRow,
} from '@/components/features/design-system/DsTwoColumnBlock'
import { Button } from '@/components/ui/button'
import { CardSlider } from '@/components/ui/card-slider'
import { HistoireCard } from '@/components/ui/histoire-card'
import { JeunesseCard } from '@/components/ui/jeunesse-card'
import { TypeLabel } from '@/components/ui/type-label'
import { PROJECT_DISPLAY_NAME } from '@/config/project'
import { COLLECTIONS } from '@/data/collections'
import { resetPageScroll } from '@/lib/resetPageScroll'
import {
  BUTTON_COMMON_SPECS,
  BUTTON_SIZE_LINES,
  BUTTON_VARIANT_COLOR_SPECS,
} from '@/styles/button-tokens'
import {
  COLOR_TOKEN_SECTIONS,
  type ColorTokenEntry,
} from '@/styles/color-tokens'
import { TYPE_LABEL_BASE_SPECS } from '@/styles/label-tokens'
import {
  CARD_HISTOIRE_LIST_SPECS,
  CARD_HISTOIRE_SPECS,
  CARD_JEUNESSE_SPECS,
  CARD_SLIDER_SPECS,
} from '@/styles/card-tokens'
import { SECTION_PADDING_SPECS } from '@/styles/spacing-tokens'
import { typography } from '@/styles/typography'
import {
  TYPOGRAPHY_FONT_FAMILY,
  TYPOGRAPHY_FONT_UI,
  type TypographyStyleSpec,
  typographyEditorialCatalog,
  typographyUiCatalog,
} from '@/styles/typography'

const UNUSED_COLOR_NAMES = new Set([
  '--sable-700',
  '--sable-300',
  '--ocean-700',
  '--ocean-100',
  '--color-success',
  '--color-warning',
])

const USED_COLOR_SECTIONS = COLOR_TOKEN_SECTIONS.map((section) => ({
  ...section,
  tokens: section.tokens.filter((token) => !UNUSED_COLOR_NAMES.has(token.name)),
})).filter((section) => section.tokens.length > 0)

const USED_UI_CATALOG_KEYS = new Set([
  'titleXl',
  'titleL',
  'titleM',
  'cardTitleEditorial',
  'label',
  'meta',
  'cardExcerpt',
  'uiXs',
  'uiLink',
])

const USED_EDITORIAL_KEYS = new Set(['editorialBody', 'editorialMuted'])

const ARTICLE_TYPOGRAPHY_STYLES: TypographyStyleSpec[] = [
  {
    key: 'articleRubrique',
    token: 'article-rubrique',
    usage: "Fil d'Ariane rubrique (HISTOIRES, COLLECTIONS…)",
    label: 'Rubrique article',
    className: typography.articleRubrique,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 12,
    weight: 700,
    color: '#2D7D8A',
    lineHeight: '1.4',
    letterSpacing: '3px',
  },
  {
    key: 'articleTitle',
    token: 'article-title',
    usage: 'H1 des pages article',
    label: 'H1 article',
    className: typography.articleTitle,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 32,
    weight: 600,
    color: '#010101',
    lineHeight: '1.2',
    letterSpacing: '0.1px',
    contextNote: 'Desktop (≥768px) : 2.5rem (40px).',
  },
  {
    key: 'chapeau',
    token: 'chapeau',
    usage: 'Chapô sous le H1',
    label: 'Chapô article',
    className: typography.chapeau,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 19,
    weight: 400,
    color: '#010101',
    lineHeight: '1.4',
    letterSpacing: '0.1px',
  },
  {
    key: 'articleByline',
    token: 'article-byline',
    usage: 'Auteur sous le chapô — prénom en medium',
    label: 'Byline article',
    className: typography.articleByline,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 12,
    weight: 400,
    color: '#010101',
    lineHeight: '1.5',
    letterSpacing: '2px',
    contextNote: 'PAR et rôle en regular · prénom en medium (font-medium).',
  },
  {
    key: 'editorialCaption',
    token: 'editorial-caption',
    usage: 'Légende-titre sous les figures GMB',
    label: 'Légende-titre',
    className: typography.editorialCaption,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 14,
    weight: 400,
    color: '#010101',
    lineHeight: '1.5',
    letterSpacing: '0.1px',
  },
  {
    key: 'articleMetaCaps',
    token: 'article-meta-caps',
    usage: 'Légende type figure, crédit citation',
    label: 'Meta capitales',
    className: typography.articleMetaCaps,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 12,
    weight: 400,
    color: '#010101',
    lineHeight: '1.5',
    letterSpacing: '2px',
  },
  {
    key: 'articleHeading',
    token: 'article-heading',
    usage: "Intertitres dans le corps d'article",
    label: 'Intertitre',
    className: typography.articleHeading,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 24,
    weight: 700,
    color: '#010101',
    lineHeight: '1.5',
    letterSpacing: '0.5px',
  },
  {
    key: 'editorialBody',
    token: 'editorial-body',
    usage: 'Corps de texte des billets',
    label: 'Corps de texte',
    className: typography.editorialBody,
    fontFamily: 'Source Serif 4',
    sizePx: 19,
    weight: 400,
    color: '#010101',
    lineHeight: '1.6',
    letterSpacing: 'normal',
  },
  {
    key: 'sectionTitleRebond',
    token: 'section-title-rebond',
    usage: 'Titre section « Nos autres histoires » (fond sombre)',
    label: 'Titre rebonds',
    className: typography.sectionTitleRebond,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 19,
    weight: 600,
    color: '#FFFFFF',
    lineHeight: '1.25',
    letterSpacing: '1px',
    contextNote: 'Centré · md (768px) : 1.5rem · lg (1024px) : 2rem.',
  },
  {
    key: 'editorialQuote',
    token: 'editorial-quote',
    usage: 'Citation éditoriale (bloc GMB)',
    label: 'Citation',
    className: typography.editorialQuote,
    fontFamily: 'Source Serif 4',
    sizePx: 20,
    weight: 600,
    color: '#010101',
    lineHeight: '1.6',
    letterSpacing: 'normal',
    contextNote: 'Semibold italic.',
  },
]

const EXTRA_TYPOGRAPHY_STYLES: TypographyStyleSpec[] = [
  {
    key: 'homeSectionLabel',
    token: 'home-section-label',
    usage: 'Rubriques home — HISTOIRES, COLLECTIONS, CARTE INTERACTIVE, JEUNESSE',
    label: 'Label rubrique home',
    className: typography.homeSectionLabel,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 24,
    weight: 600,
    color: '#010101',
    lineHeight: '1.25',
    letterSpacing: '2px',
  },
  {
    key: 'trouvailleLabel',
    token: 'trouvaille-label',
    usage: 'Bloc La trouvaille — label de rubrique',
    label: 'Label La trouvaille',
    className: typography.trouvailleLabel,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 16,
    weight: 600,
    color: '#010101',
    lineHeight: '1.4',
    letterSpacing: '0.32px',
  },
  {
    key: 'trouvailleChapeau',
    token: 'trouvaille-chapeau',
    usage: 'Bloc La trouvaille — accroche sous le label',
    label: 'Accroche La trouvaille',
    className: typography.trouvailleChapeau,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 16,
    weight: 400,
    color: '#010101',
    lineHeight: '1.55',
    letterSpacing: 'normal',
  },
  {
    key: 'sectionTitleSm',
    token: 'section-title-sm',
    usage: 'Titres compacts — Sources & références',
    label: 'Titre de section compact',
    className: typography.sectionTitleSm,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 14,
    weight: 600,
    color: 'Contextuelle',
    lineHeight: '1.25',
    letterSpacing: '1px',
  },
]

const USED_TYPOGRAPHY_UI = [
  ...EXTRA_TYPOGRAPHY_STYLES,
  ...typographyUiCatalog.filter((style) => USED_UI_CATALOG_KEYS.has(style.key)),
]

const USED_TYPOGRAPHY_EDITORIAL = typographyEditorialCatalog.filter((style) =>
  USED_EDITORIAL_KEYS.has(style.key)
)

const SECTION_LABEL_EXAMPLES = [
  {
    label: 'Rubrique home',
    className: typography.homeSectionLabel,
    example: 'Histoires',
  },
  {
    label: 'La trouvaille',
    className: typography.trouvailleLabel,
    example: 'La trouvaille',
  },
  {
    label: 'H1 page liste',
    className: typography.titleXl,
    example: 'Jeunesse',
  },
] as const

const SECTION_LABEL_SPECS: CompactSpecRow[] = [
  { token: 'homeSectionLabel', value: '24px · Outfit 600 · uppercase · ls 2px' },
  { token: 'trouvailleLabel', value: '16px · Outfit 600 · ls 0.32px' },
  { token: 'titleXl', value: '28px · Outfit 700 · H1 pages liste' },
  { token: 'sectionLabel', value: '16px · alias label — Sources, Histoires associées' },
]

const JEUNESSE_TYPE_LABEL_SPECS: CompactSpecRow[] = [
  { token: 'types', value: 'JEU · SÉQUENCE (page liste Jeunesse uniquement)' },
  { token: 'couleur liste', value: 'text-aurore-700' },
  { token: 'couleur à la une', value: 'text-aurore-300 sur fond aurore-900' },
]

const CARD_COLLECTION_LIST_SPECS: CompactSpecRow[] = [
  { token: 'hublot', value: '224×224px · radius 50% · border 9px #010101 · hover glaz-700' },
  { token: 'titre', value: 'cardTitleEditorial · centré' },
  { token: 'accroche', value: 'cardExcerpt · line-clamp-4 · centré' },
  { token: 'cta', value: 'Button secondary sm — Explorer' },
]

const BUTTON_SIZE_SPEC_ROWS = BUTTON_SIZE_LINES.map((line) => {
  const sep = line.indexOf(' → ')
  if (sep === -1) return { token: 'note', value: line }
  return { token: line.slice(0, sep), value: line.slice(sep + 3) }
})

const BUTTON_VARIANT_SPEC_ROWS: CompactSpecRow[] = BUTTON_VARIANT_COLOR_SPECS.map(
  ({ variant, spec }) => ({ token: variant, value: spec })
)

const BUTTON_USAGE_SPEC_ROWS: CompactSpecRow[] = [
  { token: 'primary', value: 'CTA home, login, collections (default + sm)' },
  { token: 'secondary', value: 'Cards, pagination listes, La trouvaille (sm)' },
  { token: 'secondary inverted', value: 'Card rebond sur fond sombre' },
  { token: 'ghost sm', value: 'Liens Sources (accordion)' },
  { token: 'showTriangle={false}', value: 'Boutons « Voir plus » des listes' },
]

const COLLECTION_LIST_PREVIEW = COLLECTIONS[0]!

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

const titleMContextNote = typographyUiCatalog.find(
  (style) => style.key === 'titleM'
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
        <h2 className="text-lg font-semibold tracking-tight text-text">{title}</h2>
      </div>
      <div className="mt-3 border-t border-border" />
      <div className="mt-6">{children}</div>
    </section>
  )
}

export function DesignSystem() {
  React.useLayoutEffect(() => {
    resetPageScroll()
  }, [])

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
        <p className="mb-10 font-outfit text-sm text-muted">
          Catalogue des tokens et composants réellement utilisés dans le prototype
          (hors barre prototype, login et cette page).
        </p>

        <nav className="mb-10 flex flex-wrap gap-3 text-sm text-text/70">
          <a className="hover:text-text" href="#couleurs">
            Couleurs
          </a>
          <a className="hover:text-text" href="#typographie">
            Typographie
          </a>
          <a className="hover:text-text" href="#typographie-article">
            Typo article
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
        </nav>

        <div className="grid gap-14">
          <Section id="couleurs" title="COULEURS">
            <div className="grid gap-10">
              {USED_COLOR_SECTIONS.map((section) => (
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
              Polices : {TYPOGRAPHY_FONT_FAMILY}.
            </p>

            <div className="mb-12">
              <h3 className="mb-4 font-outfit text-xs font-semibold uppercase tracking-[0.08em] text-text">
                OUTFIT · Display &amp; UI
              </h3>
              <TypographyTable styles={USED_TYPOGRAPHY_UI} />
              <blockquote className="mt-4 border-l-2 border-border pl-4 font-outfit text-sm italic text-muted">
                Sur fond sombre : appliquer <code className="text-text">text-on-dark</code> ou{' '}
                <code className="text-text">text-on-dark/80</code> par-dessus le style existant.
              </blockquote>
              {titleMContextNote ? (
                <p className="mt-3 font-outfit text-[11px] leading-snug text-muted">
                  <span className="font-mono text-text">title-m</span> — {titleMContextNote}
                </p>
              ) : null}
            </div>

            <div>
              <h3 className="mb-4 font-outfit text-xs font-semibold uppercase tracking-[0.08em] text-text">
                SOURCE SERIF 4 · Éditorial (hors article)
              </h3>
              <TypographyTable styles={USED_TYPOGRAPHY_EDITORIAL} />
              <p className="mt-4 font-outfit text-[11px] leading-snug text-muted">
                Corps atténué (login). Corps et citation article : voir section Typo article.
              </p>
            </div>
          </Section>

          <Section id="typographie-article" title="TYPOGRAPHIE · PAGES ARTICLE">
            <p className="mb-6 font-outfit text-sm text-muted">
              Billets Histoires, pages Collections, Jeunesse, institutionnel — en-tête + corps GMB.
            </p>
            <TypographyTable styles={ARTICLE_TYPOGRAPHY_STYLES} />
            <div className="mt-8 grid gap-6 rounded-lg border border-border bg-surface/30 p-6">
              <SectionRubriqueLink to="/histoires">Histoires</SectionRubriqueLink>
              <h1 className={typography.articleTitle}>
                L&apos;explosion de l&apos;Océan Liberty le 28 juillet 1947
              </h1>
              <p className={typography.chapeau}>
                Brest, été 1947. La ville sort à peine des décombres de la guerre quand une
                nouvelle catastrophe s&apos;abat sur le port.
              </p>
              <ArticleByline auteur="Carole, bibliothécaire" />
              <div className="border-l border-text pl-[17px]">
                <p className={`${typography.editorialCaption} text-text`}>
                  L&apos;Océan Liberty en feu, rade de Brest, 28 juillet 1947.
                </p>
                <p className={typography.articleMetaCaps}>
                  Photographie, Archives Marines · Voir le document
                </p>
              </div>
              <h2 className={typography.articleHeading}>Un port entre deux guerres</h2>
              <p className={typography.editorialBody}>
                Brest en 1947 ressemble encore à un chantier. Les bombardements de la Seconde
                Guerre mondiale ont rasé la quasi-totalité de la ville.
              </p>
              <figure className="border-l border-glaz-700 bg-surface py-4 pl-[17px] pr-4">
                <blockquote className={typography.editorialQuote}>
                  « La Catastrophe de Brest »
                </blockquote>
              </figure>
            </div>
            {ARTICLE_TYPOGRAPHY_STYLES.filter((style) => style.contextNote).map((style) => (
              <p
                key={style.key}
                className="mt-3 font-outfit text-[11px] leading-snug text-muted"
              >
                <span className="font-mono text-text">{style.token}</span> — {style.contextNote}
              </p>
            ))}
          </Section>

          <Section id="labels-section" title="LABELS DE SECTION">
            <DsTwoColumnBlock
              preview={
                <div className="flex flex-col gap-6">
                  {SECTION_LABEL_EXAMPLES.map((example) => (
                    <div key={example.label}>
                      <p className="mb-2 font-outfit text-[11px] font-semibold uppercase tracking-wide text-muted">
                        {example.label}
                      </p>
                      <p className={example.className}>{example.example}</p>
                    </div>
                  ))}
                </div>
              }
              specs={SECTION_LABEL_SPECS}
              note="Les pages liste utilisent titleXl + SectionTitleOrnament (tons histoires, collections, jeunesse)."
            />
          </Section>

          <Section id="boutons" title="BOUTONS">
            <div className="grid gap-10">
              <DsTwoColumnBlock
                title="Style commun"
                preview={
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary" size="sm">
                      Secondary sm
                    </Button>
                    <Button variant="ghost" size="sm">
                      Ghost sm
                    </Button>
                  </div>
                }
                specs={BUTTON_COMMON_SPECS}
              />
              <DsTwoColumnBlock
                title="Variants"
                preview={
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary" size="sm">
                      Secondary
                    </Button>
                    <Button variant="ghost" size="sm">
                      Ghost
                    </Button>
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
                title="Usage dans le prototype"
                preview={
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant="secondary" size="sm" showTriangle={false}>
                      Voir plus
                    </Button>
                    <div className="-m-4 rounded-lg bg-ocean-900 p-6">
                      <Button variant="secondary" size="default" inverted>
                        Explorer
                      </Button>
                    </div>
                  </div>
                }
                specs={BUTTON_USAGE_SPEC_ROWS}
                previewClassName="border-0 bg-transparent p-0"
                note="Survoler les boutons actifs pour prévisualiser les hovers."
              />
            </div>
          </Section>

          <Section id="labels" title="LABELS DE TYPE">
            <DsTwoColumnBlock
              title="Jeunesse — page liste"
              preview={
                <div className="flex flex-wrap gap-x-5 gap-y-3">
                  <TypeLabel type="jeu" className="text-aurore-700" />
                  <TypeLabel type="sequence" className="text-aurore-700" />
                </div>
              }
              specs={[...TYPE_LABEL_BASE_SPECS, ...JEUNESSE_TYPE_LABEL_SPECS]}
              note="Affichés uniquement sur les cards Jeunesse en layout liste. Pas de label de type sur les cards Histoires."
            />
          </Section>

          <Section id="cards" title="CARDS">
            <div className="grid gap-10">
              <DsTwoColumnBlock
                title="Card Histoires — carousel home"
                preview={
                  <div className="section-histoires">
                    <HistoireCard
                      to="/histoires/ocean-liberty-1947"
                      titre="L'explosion de l'Océan Liberty le 28 juillet 1947"
                      extrait="Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                    />
                  </div>
                }
                specs={CARD_HISTOIRE_SPECS}
                previewClassName="flex justify-center"
              />
              <DsTwoColumnBlock
                title="Card Histoires — page liste"
                preview={
                  <div className="section-histoires">
                    <HistoireCard
                      layout="list"
                      to="/histoires/ocean-liberty-1947"
                      titre="L'explosion de l'Océan Liberty le 28 juillet 1947"
                      extrait="Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                    />
                  </div>
                }
                specs={CARD_HISTOIRE_LIST_SPECS}
                previewClassName="flex justify-center"
              />
              <DsTwoColumnBlock
                title="Card Collections — page liste"
                preview={
                  <div className="flex justify-center">
                    <CollectionListCard collection={COLLECTION_LIST_PREVIEW} />
                  </div>
                }
                specs={CARD_COLLECTION_LIST_SPECS}
              />
              <DsTwoColumnBlock
                title="Card Jeunesse — page liste"
                preview={
                  <div className="section-jeunesse">
                    <JeunesseCard
                      layout="list"
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
                title="CardSlider — home Histoires"
                preview={
                  <div className="card-slider-viewport section-histoires -mx-4 overflow-hidden bg-surface/30 py-4">
                    <CardSlider aria-label="Démo slider Histoires">
                      <HistoireCard
                        to="#"
                        titre="Exemple histoire slider"
                        extrait="Aperçu du peek — card suivante visible à droite."
                        sliderItem
                      />
                      <HistoireCard
                        to="#"
                        titre="Deuxième card"
                        extrait="Scroll horizontal · snap · gap 24px."
                        sliderItem
                      />
                    </CardSlider>
                  </div>
                }
                specs={CARD_SLIDER_SPECS}
                previewClassName="overflow-hidden border-0 bg-transparent p-0"
                note="Collections home : carousel desktop custom (hublots), pas CollectionHublotCard."
              />
            </div>
          </Section>

          <Section id="espacement" title="ESPACEMENT">
            <p className="mb-8 font-outfit text-sm text-muted">
              Grille 8px — gouttière horizontale standard :{' '}
              <code className="text-text">px-section</code> (16px).
            </p>
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
          </Section>
        </div>
      </div>
    </div>
  )
}
