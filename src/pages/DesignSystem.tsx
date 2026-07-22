import * as React from 'react'
import { Link } from 'react-router-dom'

import { CollectionListCard } from '@/components/features/collections/CollectionListCard'
import {
  DsTwoColumnBlock,
  type CompactSpecRow,
} from '@/components/features/design-system/DsTwoColumnBlock'
import { ArticleByline } from '@/components/features/site/ArticleByline'
import { SectionRubriqueLink } from '@/components/features/site/SectionRubriqueLink'
import { Button } from '@/components/ui/button'
import { CardSlider } from '@/components/ui/card-slider'
import { FriseHaut } from '@/components/ui/frise-haut'
import { HistoireCard } from '@/components/ui/histoire-card'
import { JeunesseCard } from '@/components/ui/jeunesse-card'
import { SectionTitleOrnament } from '@/components/ui/section-title-ornament'
import { TitleH1Triangle } from '@/components/ui/title-h1-triangle'
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
import {
  CARD_HISTOIRE_LIST_SPECS,
  CARD_HISTOIRE_SPECS,
  CARD_JEUNESSE_SPECS,
  CARD_SLIDER_SPECS,
} from '@/styles/card-tokens'
import { TYPE_LABEL_BASE_SPECS } from '@/styles/label-tokens'
import { SECTION_PADDING_SPECS } from '@/styles/spacing-tokens'
import {
  typography,
  TYPOGRAPHY_FONT_EDITORIAL,
  TYPOGRAPHY_FONT_FAMILY,
  TYPOGRAPHY_FONT_UI,
  type TypographyStyleSpec,
} from '@/styles/typography'

/**
 * Typographie — organisée par contexte d’usage pour les développeurs.
 * Source : `typography` dans src/styles/typography.ts (uniquement tokens utilisés).
 */
const TYPO_PAGES: TypographyStyleSpec[] = [
  {
    key: 'titleXl',
    token: 'titleXl',
    usage: 'H1 pages liste (Histoires, Collections, Jeunesse)',
    label: 'H1 liste',
    className: typography.titleXl,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 28,
    weight: 700,
    color: '#010101',
    lineHeight: '1.25',
    letterSpacing: '0.1px',
    contextNote:
      'Sur les pages liste : uppercase + tracking 3px (mobile) / 6px (≥1024). Triangle TitleH1Triangle à droite.',
  },
  {
    key: 'homeSectionLabel',
    token: 'homeSectionLabel',
    usage: 'Titres de rubrique home — HISTOIRES, COLLECTIONS, CARTE, JEUNESSE',
    label: 'Rubrique home',
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
    token: 'trouvailleLabel',
    usage: 'Label « La trouvaille »',
    label: 'La trouvaille',
    className: typography.trouvailleLabel,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 20,
    weight: 600,
    color: '#010101',
    lineHeight: '1.4',
    letterSpacing: '0.4px',
  },
  {
    key: 'titleL',
    token: 'titleL',
    usage: 'Titres de section / accroches (ex. carte home)',
    label: 'Titre L',
    className: typography.titleL,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 20,
    weight: 600,
    color: '#010101',
    lineHeight: '1.375',
    letterSpacing: 'normal',
  },
  {
    key: 'sectionTitleRebond',
    token: 'sectionTitleRebond',
    usage: 'Titre « Nos autres histoires » (fond sombre)',
    label: 'Titre rebonds',
    className: typography.sectionTitleRebond,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 19,
    weight: 600,
    color: '#FFFFFF',
    lineHeight: '1.25',
    letterSpacing: '1px',
    contextNote: 'md : 1.5rem · lg : 2rem. Ornement SectionTitleOrnament en glaz-700.',
  },
  {
    key: 'sectionTitleSm',
    token: 'sectionTitleSm',
    usage: 'Titres compacts — Sources & références',
    label: 'Titre compact',
    className: typography.sectionTitleSm,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 14,
    weight: 600,
    color: 'Contextuelle',
    lineHeight: '1.25',
    letterSpacing: '1px',
  },
]

const TYPO_UI: TypographyStyleSpec[] = [
  {
    key: 'cardTitleEditorial',
    token: 'cardTitleEditorial',
    usage: 'Titres cards Histoires / Collections / rebonds',
    label: 'Titre card',
    className: typography.cardTitleEditorial,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 22,
    weight: 500,
    color: '#010101',
    lineHeight: '1.875rem',
    letterSpacing: '0.1px',
  },
  {
    key: 'cardExcerpt',
    token: 'cardExcerpt',
    usage: 'Extraits de cards · accroche La trouvaille (alias trouvailleChapeau)',
    label: 'Extrait',
    className: typography.cardExcerpt,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 16,
    weight: 400,
    color: '#010101',
    lineHeight: '1.5rem',
    letterSpacing: '0.1px',
  },
  {
    key: 'meta',
    token: 'meta',
    usage: 'Métadonnées — footer, search, références',
    label: 'Meta',
    className: typography.meta,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 13,
    weight: 400,
    color: '#71717a',
    lineHeight: '1.375',
    letterSpacing: 'normal',
  },
  {
    key: 'uiLink',
    token: 'uiLink',
    usage: 'Liens footer (couleur via classe contextuelle)',
    label: 'Lien UI',
    className: typography.uiLink,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 13,
    weight: 400,
    color: 'Contextuelle',
    lineHeight: '1.375',
    letterSpacing: 'normal',
  },
  {
    key: 'uiXs',
    token: 'uiXs',
    usage: 'Microcopy — références, légendes secondaires',
    label: 'UI xs',
    className: typography.uiXs,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 11,
    weight: 400,
    color: '#71717a',
    lineHeight: '1.25',
    letterSpacing: 'normal',
  },
  {
    key: 'editorialCaption',
    token: 'editorialCaption',
    usage: 'Légende-titre figures GMB',
    label: 'Légende-titre',
    className: typography.editorialCaption,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 14,
    weight: 400,
    color: '#71717a',
    lineHeight: '1.5',
    letterSpacing: '0.1px',
  },
]

const TYPO_ARTICLE: TypographyStyleSpec[] = [
  {
    key: 'articleRubrique',
    token: 'articleRubrique',
    usage: "Fil d'Ariane rubrique (via SectionRubriqueLink)",
    label: 'Rubrique',
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
    token: 'articleTitle',
    usage: 'H1 pages article',
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
    label: 'Chapô',
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
    token: 'articleByline',
    usage: 'Auteur sous le chapô (alias articleMetaCaps)',
    label: 'Byline',
    className: typography.articleByline,
    fontFamily: TYPOGRAPHY_FONT_UI,
    sizePx: 12,
    weight: 400,
    color: '#010101',
    lineHeight: '1.5',
    letterSpacing: '2px',
    contextNote: 'PAR / rôle en regular · prénom en medium.',
  },
  {
    key: 'articleMetaCaps',
    token: 'articleMetaCaps',
    usage: 'Crédit figure, légende type',
    label: 'Meta caps',
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
    token: 'articleHeading',
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
    token: 'editorialBody',
    usage: 'Corps de texte des billets (Source Serif 4)',
    label: 'Corps',
    className: typography.editorialBody,
    fontFamily: TYPOGRAPHY_FONT_EDITORIAL,
    sizePx: 19,
    weight: 400,
    color: '#010101',
    lineHeight: '1.6',
    letterSpacing: 'normal',
    contextNote: 'Empiler les blocs avec typography.editorialBodyStack (gap 24px).',
  },
  {
    key: 'editorialQuote',
    token: 'editorialQuote',
    usage: 'Citation éditoriale (bloc GMB)',
    label: 'Citation',
    className: typography.editorialQuote,
    fontFamily: TYPOGRAPHY_FONT_EDITORIAL,
    sizePx: 20,
    weight: 600,
    color: '#010101',
    lineHeight: '1.6',
    letterSpacing: 'normal',
    contextNote: 'Semibold italic.',
  },
]

const CARD_COLLECTION_LIST_SPECS: CompactSpecRow[] = [
  { token: 'hublot', value: '224×224px · radius 50% · border 9px #010101 · hover glaz-700' },
  { token: 'titre', value: 'cardTitleEditorial · centré' },
  { token: 'accroche', value: 'cardExcerpt · line-clamp-4 · centré' },
  { token: 'cta', value: 'Button secondary sm — Explorer' },
]

const CARD_COLLECTION_HOME_SPECS: CompactSpecRow[] = [
  { token: 'composant', value: 'CollectionsCarousel (pas CollectionListCard)' },
  { token: 'hublot mobile', value: '198×198px · border 9px · hover glaz-700' },
  { token: 'hublot desktop', value: '280×280px · border 9px · hover glaz-700' },
  { token: 'titre', value: 'Outfit 600 · 22px desktop / 20px mobile · hover glaz-700' },
  { token: 'frises', value: 'FriseHaut fill glaz-100 au-dessus et en dessous' },
]

const JEUNESSE_TYPE_LABEL_SPECS: CompactSpecRow[] = [
  { token: 'types', value: 'JEU · SÉQUENCE (page liste Jeunesse uniquement)' },
  { token: 'couleur', value: 'text-aurore-700' },
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
  { token: 'primary', value: 'CTA home, collections (default + sm)' },
  { token: 'secondary', value: 'Cards, La trouvaille, pagination listes (sm)' },
  { token: 'secondary inverted', value: 'Rebonds / cards sur fond sombre' },
  { token: 'showTriangle={false}', value: 'Boutons « Voir plus » des listes' },
]

const ORNEMENT_SPECS: CompactSpecRow[] = [
  { token: 'TitleH1Triangle', value: 'À droite du H1 pages liste · gap 8px' },
  { token: 'couleurs triangle', value: 'histoires on-dark · collections glaz-500 · jeunesse aurore-700' },
  { token: 'SectionTitleOrnament', value: 'Sous titre rebonds article · stroke currentColor' },
  { token: 'FriseHaut', value: 'Dents 10×8 · fills utilisés : text | on-dark | glaz-100' },
  { token: 'FriseVagues', value: 'Transition Trouvaille → suite · footer ocean' },
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
                {style.contextNote ? (
                  <span className="mt-1 block text-[10px] text-muted">
                    {style.contextNote}
                  </span>
                ) : null}
              </td>
              <td className={`max-w-[200px] px-3 py-3 ${typographyPreviewClassName(style)}`}>
                Aa — Exemple
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
          <div className="flex items-center gap-4">
            <Link
              to="/arborescence"
              className="text-sm text-text/70 hover:text-text"
            >
              Arborescence
            </Link>
            <Link to="/prototype" className="text-sm text-text/70 hover:text-text">
              Retour au prototype
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-24">
        <p className="mb-10 max-w-2xl font-outfit text-sm leading-relaxed text-muted">
          Tokens et composants réellement utilisés dans le prototype. Source typo :{' '}
          <code className="text-text">src/styles/typography.ts</code> · couleurs :{' '}
          <code className="text-text">theme.css</code>. Hors barre prototype et login.
        </p>

        <nav className="mb-10 flex flex-wrap gap-3 text-sm text-text/70">
          <a className="hover:text-text" href="#couleurs">
            Couleurs
          </a>
          <a className="hover:text-text" href="#typographie">
            Typographie
          </a>
          <a className="hover:text-text" href="#ornements">
            Ornements
          </a>
          <a className="hover:text-text" href="#boutons">
            Boutons
          </a>
          <a className="hover:text-text" href="#labels">
            Labels
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
            <p className="mb-8 font-outfit text-sm text-muted">
              Uniquement les tokens utilisés dans le prototype. Catalogue :{' '}
              <code className="text-text">src/styles/color-tokens.ts</code>.
            </p>
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
            <p className="mb-2 font-outfit text-sm text-muted">
              Polices : {TYPOGRAPHY_FONT_FAMILY}. Sur fond sombre, appliquer{' '}
              <code className="text-text">text-on-dark</code> /{' '}
              <code className="text-text">text-on-dark/80</code> par-dessus le token.
            </p>
            <p className="mb-10 font-outfit text-sm text-muted">
              {TYPOGRAPHY_FONT_EDITORIAL} est réservé au corps et aux citations
              d&apos;article. Tout le reste est Outfit.
            </p>

            <div className="mb-12">
              <h3 className="mb-2 font-outfit text-xs font-semibold uppercase tracking-[0.08em] text-text">
                1 · Pages &amp; sections
              </h3>
              <p className="mb-4 font-outfit text-sm text-muted">
                H1 listes, rubriques home, titres de sections.
              </p>
              <TypographyTable styles={TYPO_PAGES} />
            </div>

            <div className="mb-12">
              <h3 className="mb-2 font-outfit text-xs font-semibold uppercase tracking-[0.08em] text-text">
                2 · UI &amp; cards
              </h3>
              <p className="mb-4 font-outfit text-sm text-muted">
                Titres de cards, extraits, meta, liens, légendes.
              </p>
              <TypographyTable styles={TYPO_UI} />
            </div>

            <div>
              <h3 className="mb-2 font-outfit text-xs font-semibold uppercase tracking-[0.08em] text-text">
                3 · Pages article
              </h3>
              <p className="mb-4 font-outfit text-sm text-muted">
                Billets Histoires, Collections, Jeunesse, pages institutionnelles.
              </p>
              <TypographyTable styles={TYPO_ARTICLE} />

              <div className="mt-8 grid gap-6 rounded-lg border border-border bg-surface/30 p-6">
                <p className="font-outfit text-[11px] font-semibold uppercase tracking-wide text-muted">
                  Aperçu enchaînement
                </p>
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
            </div>
          </Section>

          <Section id="ornements" title="ORNEMENTS &amp; FRISES">
            <DsTwoColumnBlock
              preview={
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="mb-2 font-outfit text-[11px] font-semibold uppercase tracking-wide text-muted">
                      H1 liste + triangle
                    </p>
                    <div className="flex items-center gap-2">
                      <span className={`${typography.titleXl} uppercase tracking-[3px]`}>
                        Histoires
                      </span>
                      <TitleH1Triangle className="text-glaz-500" />
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 font-outfit text-[11px] font-semibold uppercase tracking-wide text-muted">
                      Ornement rebonds
                    </p>
                    <div className="flex flex-col items-start gap-2">
                      <span className={`${typography.sectionTitleRebond} text-text`}>
                        Nos autres histoires
                      </span>
                      <SectionTitleOrnament className="text-glaz-700" />
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 font-outfit text-[11px] font-semibold uppercase tracking-wide text-muted">
                      FriseHaut
                    </p>
                    <FriseHaut fill="glaz-100" />
                    <div className="mt-2 bg-text py-1">
                      <FriseHaut fill="on-dark" />
                    </div>
                  </div>
                </div>
              }
              specs={ORNEMENT_SPECS}
              note="Pages liste : SectionListHeader (centered) + TitleH1Triangle. Rebonds article : SectionTitleOrnament."
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
                  </div>
                }
                specs={BUTTON_COMMON_SPECS}
              />
              <DsTwoColumnBlock
                title="Variants &amp; tailles"
                preview={
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant="primary" size="default">
                      Default 44px
                    </Button>
                    <Button variant="primary" size="sm">
                      Small 36px
                    </Button>
                    <Button variant="secondary" size="sm" showTriangle={false}>
                      Voir plus
                    </Button>
                    <div className="rounded-lg bg-ocean-900 p-4">
                      <Button variant="secondary" inverted>
                        Explorer
                      </Button>
                    </div>
                  </div>
                }
                specs={[...BUTTON_VARIANT_SPEC_ROWS, ...BUTTON_SIZE_SPEC_ROWS, ...BUTTON_USAGE_SPEC_ROWS]}
                note="Survoler pour prévisualiser les hovers."
              />
            </div>
          </Section>

          <Section id="labels" title="LABELS DE TYPE">
            <DsTwoColumnBlock
              title="Jeunesse — page liste uniquement"
              preview={
                <div className="flex flex-wrap gap-x-5 gap-y-3">
                  <TypeLabel type="jeu" className="text-aurore-700" />
                  <TypeLabel type="sequence" className="text-aurore-700" />
                </div>
              }
              specs={[...TYPE_LABEL_BASE_SPECS, ...JEUNESSE_TYPE_LABEL_SPECS]}
              note="Pas de TypeLabel sur les cards Histoires."
            />
          </Section>

          <Section id="cards" title="CARDS">
            <div className="grid gap-10">
              <DsTwoColumnBlock
                title="Histoires — carousel home"
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
                title="Histoires — page liste"
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
                title="Collections — page liste"
                preview={
                  <div className="flex justify-center">
                    <CollectionListCard collection={COLLECTION_LIST_PREVIEW} />
                  </div>
                }
                specs={CARD_COLLECTION_LIST_SPECS}
              />
              <DsTwoColumnBlock
                title="Collections — carousel home (hublots)"
                preview={
                  <div className="flex justify-center py-2">
                    <div className="flex flex-col items-center gap-3">
                      <div className="size-[140px] overflow-hidden rounded-full border-[9px] border-text bg-surface" />
                      <p className="font-outfit text-xl font-semibold text-text">En mer</p>
                    </div>
                  </div>
                }
                specs={CARD_COLLECTION_HOME_SPECS}
                note="Implémentation dans CollectionsCarousel — distincte de CollectionListCard."
              />
              <DsTwoColumnBlock
                title="Jeunesse — page liste"
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
