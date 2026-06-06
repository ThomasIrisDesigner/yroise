import { LOREM } from '@/data/placeholders'

export type JeunesseType = 'jeu' | 'sequence'

export interface JeunesseActivite {
  slug: string
  type: JeunesseType
  titre: string
  description: string
  /** Méta courte affichée sur la card (âge · durée ou niveau · durée). */
  meta: string
}

export { CONTENT_TYPE_LABELS as JEUNESSE_TYPE_LABELS } from '@/data/contentTypes'

export const JEUNESSE_INTRO =
  'Jeux et ateliers pour découvrir le patrimoine de Brest.'

export const JEUNESSE_LIST: JeunesseActivite[] = [
  {
    slug: 'puzzle-rade-brest',
    type: 'jeu',
    titre: 'Le puzzle de la rade de Brest',
    description:
      "Reconstitue la carte de la rade à partir de fragments d'une carte du XVIIIe siècle.",
    meta: '6–10 ans · 5 min',
  },
  {
    slug: 'vie-brest-xviii',
    type: 'sequence',
    titre: 'La vie à Brest au XVIIIe siècle',
    description:
      'Un parcours documentaire pour la classe de CM2 — 5 étapes, 12 documents.',
    meta: 'CM1-CM2 · 45 min',
  },
  {
    slug: 'qui-suis-je-portraits',
    type: 'jeu',
    titre: 'Qui suis-je ? Portraits du patrimoine',
    description:
      'Devine le personnage historique à partir d’indices issus des archives.',
    meta: '8–12 ans · 10 min',
  },
  {
    slug: 'fortifications-vauban',
    type: 'sequence',
    titre: 'Les fortifications de Vauban',
    description:
      'Séquence pédagogique cycle 3 — architecture militaire et histoire locale.',
    meta: 'CM1-CM2 · 45 min',
  },
  {
    slug: 'coloriage-port-1780',
    type: 'jeu',
    titre: 'Coloriage : le port de Brest en 1780',
    description: 'Colorie une gravure ancienne en t’aidant des descriptions d’époque.',
    meta: '5–8 ans · 15 min',
  },
  {
    slug: 'memory-collections-marines',
    type: 'jeu',
    titre: 'Mémory des collections marines',
    description: 'Retrouve les paires parmi 18 documents de la collection En mer.',
    meta: '6–10 ans · 5 min',
  },
]

export interface JeunesseDetailMeta {
  intro: string
  niveau: string
  duree: string
  documentSource: string
  documentGallicaHref: string
}

export const JEUNESSE_DETAILS: Record<string, JeunesseDetailMeta> = {
  'puzzle-rade-brest': {
    intro:
      'Reconstitue la carte de la rade à partir de fragments d’une carte du XVIIIe siècle. Un jeu proposé par les bibliothécaires de Brest.',
    niveau: 'Cycle 3 (CM1–6e)',
    duree: '10–15 minutes',
    documentSource: 'Carte de la rade, 1776 — Fonds En mer',
    documentGallicaHref: '#',
  },
}

export function getJeunesseBySlug(slug: string): JeunesseActivite | undefined {
  return JEUNESSE_LIST.find((a) => a.slug === slug)
}

export function getJeunesseDetail(slug: string): JeunesseDetailMeta {
  return (
    JEUNESSE_DETAILS[slug] ?? {
      intro: LOREM.paragraph,
      niveau: LOREM.line,
      duree: LOREM.line,
      documentSource: LOREM.short,
      documentGallicaHref: '#',
    }
  )
}
