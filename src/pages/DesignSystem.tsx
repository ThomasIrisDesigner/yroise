import * as React from 'react'
import { Link } from 'react-router-dom'

import { CollectionListCard } from '@/components/features/collections/CollectionListCard'
import {
  CompactSpecsTable,
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
  BUTTON_SIZE_SPECS,
  BUTTON_VARIANT_SPECS,
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
  typographyTokensByGroup,
  TYPOGRAPHY_FONT_EDITORIAL,
  TYPOGRAPHY_FONT_FAMILY,
} from '@/styles/typography'

/**
 * Typographie — dérivée de TYPOGRAPHY_TOKENS (src/styles/typography.ts).
 * Aucune valeur n'est ressaisie ici : la doc suit automatiquement le code.
 */
const TYPO_PAGES = typographyTokensByGroup('pages')
const TYPO_UI = typographyTokensByGroup('ui')
const TYPO_ARTICLE = typographyTokensByGroup('article')

type TypographyRow = (typeof TYPO_PAGES)[number]

/** Sommaire — l'ordre de ce tableau pilote la navigation et les ancres. */
const DS_SECTIONS = [
  { id: 'conventions', nav: 'Conventions' },
  { id: 'couleurs', nav: 'Couleurs' },
  { id: 'typographie', nav: 'Typographie' },
  { id: 'ornements', nav: 'Ornements' },
  { id: 'boutons', nav: 'Boutons' },
  { id: 'labels', nav: 'Labels' },
  { id: 'cards', nav: 'Cards' },
  { id: 'espacement', nav: 'Espacement' },
] as const

const SOURCE_FILE_SPECS: CompactSpecRow[] = [
  { token: 'Couleurs', value: 'src/styles/theme.css (:root) + tailwind.config.ts' },
  { token: 'Typographie', value: 'src/styles/typography.ts — TYPOGRAPHY_TOKENS' },
  { token: 'Layout & responsive', value: 'src/styles/theme.css' },
  { token: 'Composants UI', value: 'src/components/ui/' },
  { token: 'Composants métier', value: 'src/components/features/' },
  { token: 'Contenus de démo', value: 'src/data/' },
]

const CONVENTION_SPECS: CompactSpecRow[] = [
  { token: 'Tailles de texte', value: 'toujours en rem (1rem = 16px), jamais en px' },
  { token: 'Interlettrage', value: 'en px, comme dans Figma — tracking-[3px], tracking-[0.22px]…' },
  { token: 'Interlignage', value: 'sans unité (leading-[1.4]) ou échelle Tailwind (leading-snug)' },
  { token: 'Espacements', value: 'en px, sur la grille de 8 (8 · 16 · 24 · 32 · 40…)' },
  { token: 'Couleurs', value: 'jamais en dur — via un token, jamais de #hex dans un composant' },
  { token: 'Typographie', value: 'className={typography.<token>} — pas de classe typo ad hoc' },
  { token: 'Priorité', value: 'classes Tailwind ; theme.css réservé aux layouts complexes' },
]

const BREAKPOINT_SPECS: CompactSpecRow[] = [
  { token: 'base', value: 'Mobile — une colonne, gouttières 16px (contenu) / 40px (listes)' },
  { token: '≥ 480px', value: 'Cards des pages liste jusqu’à 30rem au lieu de 310px' },
  { token: '≥ 520px', value: 'Menu mobile en version tablette — titres 2rem, gap 64px' },
  { token: '≥ 768px', value: 'Header 80px · logo 30px · signature 12px' },
  { token: '≥ 1024px', value: 'Header 96px · logo 32px · signature 13px · nav en flex' },
  { token: '≥ 1281px', value: 'Label « Rechercher » à côté de l’icône' },
]

const CAROUSEL_RESPONSIVE_SPECS: CompactSpecRow[] = [
  { token: 'Mobile (< 1024px)', value: 'Carrousel pleine largeur · gouttière px-section (16px) des deux côtés' },
  { token: 'Desktop (≥ 1024px) — départ', value: 'Première card calée à 72px du bord gauche (scroll-padding-left: 72px)' },
  { token: 'Desktop (≥ 1024px) — droite', value: 'Pas de marge forcée à droite — les cards dépassent jusqu\'au bord de la fenêtre' },
  { token: 'Navigation', value: 'Par page (pas par card) — une flèche = défilement d\'une page de cards visibles' },
  { token: 'Composants', value: 'HistoiresCarousel · CollectionsCarousel (src/components/features/home/)' },
]

const ARTICLE_LAYOUT_SPECS: CompactSpecRow[] = [
  { token: 'En-tête article (mobile)', value: 'px-section (16px) · padding-top: 16px' },
  { token: 'En-tête article (desktop)', value: 'padding-inline: 72px · max-width 1128px centré · padding-block: 24px' },
  { token: 'Corps article (mobile)', value: 'px-section (16px)' },
  { token: 'Corps article (desktop)', value: 'padding-inline: 72px · colonne max-width 792px centrée' },
  { token: 'Pages institutionnelles', value: 'Header et corps dans la même colonne 792px (pas 1128px) — pas de chapeau ni d\'image hero' },
  { token: 'Composant colonne', value: 'ArticleContentColumn (src/components/features/site/) · classe CSS : article-content-column' },
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
  { token: 'titre', value: 'Outfit 600 · 1.375rem mobile / 1.25rem desktop · hover glaz-700' },
  { token: 'frises', value: 'FriseHaut fill glaz-100 au-dessus et en dessous' },
]

const JEUNESSE_TYPE_LABEL_SPECS: CompactSpecRow[] = [
  { token: 'types', value: 'JEU · ATELIER (page liste Jeunesse uniquement)' },
  { token: 'couleur', value: 'text-aurore-700' },
]

const ORNEMENT_SPECS: CompactSpecRow[] = [
  { token: 'TitleH1Triangle', value: 'À droite du H1 pages liste · gap 8px' },
  { token: 'couleurs triangle', value: 'histoires on-dark · collections glaz-500 · jeunesse aurore-700' },
  { token: 'SectionTitleOrnament', value: 'Sous titre rebonds article · stroke currentColor' },
  { token: 'FriseHaut', value: 'Dents 10×8 · fills utilisés : text | on-dark | glaz-100' },
  { token: 'FriseVagues', value: 'Transition Trouvaille → suite · footer ocean' },
]

const COLLECTION_LIST_PREVIEW = COLLECTIONS[0]!

function ColorSwatch({ name, hex, usage }: ColorTokenEntry) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-background p-3">
      <div
        className="h-16 w-full rounded-md border border-border"
        style={{ backgroundColor: hex }}
        aria-hidden
      />
      <p className="mt-2 font-mono text-[0.6875rem] font-semibold leading-tight text-text">
        {name}
      </p>
      <p className="font-mono text-[0.6875rem] text-muted">{hex}</p>
      {usage ? (
        <p className="mt-1.5 font-outfit text-[0.6875rem] leading-snug text-muted">{usage}</p>
      ) : null}
    </div>
  )
}

/** Le token uiLink n'embarque pas de couleur : on en force une pour l'aperçu. */
function typographyPreviewClassName(row: TypographyRow) {
  return row.name === 'uiLink' ? `${row.className} text-text` : row.className
}

/** « 1.75rem » → « 1.75rem · 28px » — les deux repères utiles au dev. */
function formatSize(size: string) {
  const rem = Number.parseFloat(size)
  return Number.isNaN(rem) ? size : `${size} · ${Math.round(rem * 16)}px`
}

function TypographyTable({ rows }: { rows: TypographyRow[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[980px] border-collapse text-left">
        <thead>
          <tr className="border-b border-border bg-surface/40 font-outfit text-[0.6875rem] font-semibold uppercase tracking-wide text-muted">
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
        <tbody className="font-outfit text-[0.6875rem] text-muted">
          {rows.map((row) => (
            <tr
              key={row.name}
              className="border-b border-border align-top last:border-b-0"
            >
              <td className="px-3 py-3 font-mono text-xs text-text">{row.name}</td>
              <td className="max-w-[240px] px-3 py-3 leading-snug text-text">
                {row.usage}
                {row.note ? (
                  <span className="mt-1 block text-[0.625rem] text-muted">{row.note}</span>
                ) : null}
              </td>
              <td className={`max-w-[200px] px-3 py-3 ${typographyPreviewClassName(row)}`}>
                Aa — Exemple
              </td>
              <td className="px-3 py-3">{row.fontFamily}</td>
              <td className="whitespace-nowrap px-3 py-3">{formatSize(row.size)}</td>
              <td className="px-3 py-3">{row.weight}</td>
              <td className="px-3 py-3">{row.letterSpacing}</td>
              <td className="px-3 py-3">{row.lineHeight}</td>
              <td className="px-3 py-3">{row.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** Bloc de specs autonome, sans colonne d'aperçu — section Conventions. */
function SpecCard({
  title,
  rows,
  note,
}: {
  title: string
  rows: readonly CompactSpecRow[]
  note?: string
}) {
  return (
    <div>
      <h3 className="mb-3 font-outfit text-xs font-semibold uppercase tracking-[0.08em] text-text">
        {title}
      </h3>
      <CompactSpecsTable rows={rows} />
      {note ? (
        <p className="mt-2 font-outfit text-[0.6875rem] leading-snug text-muted">{note}</p>
      ) : null}
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
    <section id={id} className="min-w-0 scroll-mt-20">
      <h2 className="text-lg font-semibold tracking-tight text-text">{title}</h2>
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
          Tokens et composants réellement utilisés dans le prototype. Un élément
          absent de cette page n&apos;est pas dans les maquettes validées. La barre
          du prototype et la page de connexion sont hors périmètre.
        </p>

        <nav className="mb-10 flex flex-wrap gap-3 text-sm text-text/70">
          {DS_SECTIONS.map((section) => (
            <a key={section.id} className="hover:text-text" href={`#${section.id}`}>
              {section.nav}
            </a>
          ))}
        </nav>

        <div className="grid gap-14">
          <Section id="conventions" title="CONVENTIONS">
            <div className="grid gap-6 md:grid-cols-2">
              <SpecCard title="Où vivent les tokens" rows={SOURCE_FILE_SPECS} />
              <SpecCard title="Règles d’écriture" rows={CONVENTION_SPECS} />
            </div>
            <div className="mt-6">
              <SpecCard
                title="Points de rupture"
                rows={BREAKPOINT_SPECS}
                note="Conception mobile-first : aucune media query pour le mobile, les paliers viennent enrichir. Dans le prototype, les règles desktop sont préfixées par [data-prototype-view='desktop'] pour ne pas s’appliquer au mockup mobile — ce préfixe disparaît à l’intégration."
              />
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <SpecCard
                title="Carrousels home — comportement responsive"
                rows={CAROUSEL_RESPONSIVE_SPECS}
                note="Le décalage gauche (72px) est obtenu par scroll-padding-left sur le slider et padding-left sur la piste, sans overflow:hidden sur le wrapper — la card de droite sort naturellement du viewport."
              />
              <SpecCard
                title="Layout article & pages institutionnelles"
                rows={ARTICLE_LAYOUT_SPECS}
                note="Les deux max-width coexistent dans la même page article (1128px header, 792px corps). À l'intégration, ne pas unifier sans vérifier la maquette — c'est intentionnel."
              />
            </div>
          </Section>

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
              <TypographyTable rows={TYPO_PAGES} />
            </div>

            <div className="mb-12">
              <h3 className="mb-2 font-outfit text-xs font-semibold uppercase tracking-[0.08em] text-text">
                2 · UI &amp; cards
              </h3>
              <p className="mb-4 font-outfit text-sm text-muted">
                Titres de cards, extraits, meta, liens, légendes.
              </p>
              <TypographyTable rows={TYPO_UI} />
            </div>

            <div>
              <h3 className="mb-2 font-outfit text-xs font-semibold uppercase tracking-[0.08em] text-text">
                3 · Pages article
              </h3>
              <p className="mb-4 font-outfit text-sm text-muted">
                Billets Histoires, Collections, Jeunesse, pages institutionnelles.
              </p>
              <TypographyTable rows={TYPO_ARTICLE} />

              <div className="mt-8 grid gap-6 rounded-lg border border-border bg-surface/30 p-6">
                <p className="font-outfit text-[0.6875rem] font-semibold uppercase tracking-wide text-muted">
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
                    <p className="mb-2 font-outfit text-[0.6875rem] font-semibold uppercase tracking-wide text-muted">
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
                    <p className="mb-2 font-outfit text-[0.6875rem] font-semibold uppercase tracking-wide text-muted">
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
                    <p className="mb-2 font-outfit text-[0.6875rem] font-semibold uppercase tracking-wide text-muted">
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
              note="Pages liste : SectionListHeader + TitleH1Triangle. Rebonds article : SectionTitleOrnament."
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
                title="Variants"
                preview={
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant="primary">Primary</Button>
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
                specs={BUTTON_VARIANT_SPECS}
                note="Survoler pour prévisualiser les hovers."
              />
              <DsTwoColumnBlock
                title="Tailles"
                preview={
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant="primary" size="default">
                      Default 44px
                    </Button>
                    <Button variant="primary" size="sm">
                      Small 36px
                    </Button>
                  </div>
                }
                specs={BUTTON_SIZE_SPECS}
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
