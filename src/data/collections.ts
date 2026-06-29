export interface Collection {
  slug: string
  name: string
  shortLabel: string
  accroche: string
  documentCount?: number
  /** Illustration du hublot (home, cards collections). */
  hublotImageSrc?: string
}

export const COLLECTIONS: Collection[] = [
  {
    slug: 'en-mer',
    name: 'En mer',
    shortLabel: 'En mer',
    accroche:
      "Revivez le quotidien d'une frégate-école. Embarquez pour l'Irlande, l'Inde ou d'autres destinations.",
    documentCount: 234,
    hublotImageSrc: '/images/Collection_En-mer_Hubot.jpg',
  },
  {
    slug: 'brest-et-environs',
    name: 'Brest et ses environs',
    shortLabel: 'Brest',
    accroche: 'Un aperçu de Brest à travers les siècles.',
    documentCount: 412,
    hublotImageSrc: '/images/Collection_Brest-et-ses-environs_Hublot.jpg',
  },
  {
    slug: 'en-images',
    name: 'En images',
    shortLabel: 'En images',
    accroche:
      'Cartes postales, plaques de verre, cartes : la pointe bretonne se dévoile en images.',
    documentCount: 189,
    hublotImageSrc: '/images/Collection_En-Images_Hublot.jpg',
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
