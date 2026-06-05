import type { ContentType } from '@/data/contentTypes'

export type TypeLabelSector = {
  id: 'histoires' | 'jeunesse'
  title: string
  types: readonly ContentType[]
  surfaceClass: string
  surfaceHex: string
  sectionClass: string
  textHex: string
}

export const TYPE_LABEL_SECTORS: TypeLabelSector[] = [
  {
    id: 'histoires',
    title: 'Histoires',
    types: ['curiosite', 'exposition'],
    surfaceClass: 'bg-sable-100',
    surfaceHex: '#FAEDE6',
    sectionClass: 'section-histoires',
    textHex: '#7D4B26',
  },
  {
    id: 'jeunesse',
    title: 'Jeunesse',
    types: ['jeu', 'sequence'],
    surfaceClass: 'bg-aurore-100',
    surfaceHex: '#FAD7EB',
    sectionClass: 'section-jeunesse',
    textHex: '#641E46',
  },
]

export const TYPE_LABEL_BASE_SPECS = [
  { token: 'font-family', value: 'Outfit' },
  { token: 'font-size', value: '11px' },
  { token: 'font-weight', value: '700' },
  { token: 'letter-spacing', value: '3px' },
  { token: 'text-transform', value: 'uppercase' },
  { token: 'line-height', value: '1' },
  { token: 'fond / bordure', value: 'aucun' },
] as const

export const TYPE_LABEL_SECTION_COLORS = [
  {
    section: 'fond blanc',
    spec: '#71717a — Histoires : CURIOSITÉ · EXPOSITION · Jeunesse : JEU · SÉQUENCE',
  },
  {
    section: 'histoires',
    spec: 'fond #FAEDE6 · texte #7D4B26 · CURIOSITÉ · EXPOSITION',
  },
  {
    section: 'jeunesse',
    spec: 'fond #FAD7EB · texte #641E46 · JEU · SÉQUENCE',
  },
] as const
