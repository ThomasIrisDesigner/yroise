export interface CartePin {
  id: string
  left: string
  top: string
  collection: string
  titre: string
  gallicaHref: string
  histoireHref?: string
}

export const CARTE_INTRO = {
  lead: "L'histoire de Brest, au fil des contributions.",
  sub: 'Mise à jour par les bibliothécaires et les passionnés du patrimoine brestois',
  lieuxCount: 6,
  hint: 'Tapez sur une épingle pour découvrir le document',
  hintClose: 'Tapez ailleurs pour fermer',
} as const

export const CARTE_PINS: CartePin[] = [
  {
    id: 'arsenal-1680',
    left: '50%',
    top: '44%',
    collection: 'En mer',
    titre: "L'Arsenal de Brest — plan 1680",
    gallicaHref: '#',
    histoireHref: '/histoires/brest-ville-fortifiee',
  },
  {
    id: 'rade-1944',
    left: '38%',
    top: '30%',
    collection: 'Brest et ses environs',
    titre: 'La rade de Brest — vue aérienne',
    gallicaHref: '#',
  },
  {
    id: 'recouvrance',
    left: '62%',
    top: '24%',
    collection: 'En images',
    titre: 'Recouvrance, quartier ouvrier',
    gallicaHref: '#',
  },
  {
    id: 'port-1780',
    left: '74%',
    top: '38%',
    collection: 'En mer',
    titre: 'Le port de Brest en 1780',
    gallicaHref: '#',
  },
  {
    id: 'tramway',
    left: '28%',
    top: '52%',
    collection: 'Brest et ses environs',
    titre: 'Ligne de tramway, 1908',
    gallicaHref: '#',
  },
  {
    id: 'moulin-blanc',
    left: '56%',
    top: '58%',
    collection: 'En images',
    titre: 'Moulin Blanc — carte postale',
    gallicaHref: '#',
  },
]
