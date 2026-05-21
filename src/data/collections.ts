export interface Collection {
  slug: string
  name: string
  shortLabel: string
  accroche: string
  documentCount?: number
}

export const COLLECTIONS: Collection[] = [
  {
    slug: 'en-mer',
    name: 'En mer',
    shortLabel: 'En mer',
    accroche: 'Navigation, marines et vie portuaire',
    documentCount: 234,
  },
  {
    slug: 'brest-et-environs',
    name: 'Brest et ses environs',
    shortLabel: 'Brest',
    accroche: 'La ville et son territoire, de l’Ancien Régime à nos jours',
    documentCount: 412,
  },
  {
    slug: 'en-images',
    name: 'En images',
    shortLabel: 'En images',
    accroche: 'Photographies, dessins et cartes du Finistère',
    documentCount: 189,
  },
  {
    slug: 'finistere-monde-artistique',
    name: 'Le Finistère et le monde artistique',
    shortLabel: 'Finistère',
    accroche: 'Artistes et créations autour de la pointe bretonne',
    documentCount: 156,
  },
  {
    slug: 'breton-brezhoneg',
    name: 'Breton Brezhoneg',
    shortLabel: 'Breton',
    accroche: 'Langue, littérature et culture bretonnes',
    documentCount: 98,
  },
  {
    slug: 'livres-anciens',
    name: 'Livres anciens',
    shortLabel: 'Livres',
    accroche: 'Manuscrits et imprimés rares du fonds patrimonial',
    documentCount: 267,
  },
  {
    slug: 'presse-ancienne',
    name: 'Presse ancienne',
    shortLabel: 'Presse',
    accroche: 'Journaux et périodiques finistériens',
    documentCount: 321,
  },
  {
    slug: 'sciences-et-techniques',
    name: 'Sciences et techniques',
    shortLabel: 'Sciences',
    accroche: 'Ingénierie, médecine et savoirs des XVIIIe–XXe siècles',
    documentCount: 143,
  },
]
