import type { HistoireBilletContent } from '@/types/histoireContent'
import { LOREM } from '@/data/placeholders'
import { HISTOIRE_DETAIL_DEFAULT } from '@/data/histoires'

const SOURCE_HREF =
  'https://bibliotheque.brest-metropole.fr/iguana/www.main.cls?surl=search&p=06473cb2-0843-11e5-b406-50568d242300#recordId=1.9529'

/** Contenu référence — Billet GMB (Océan Liberty), maquette Figma 102:738. */
const OCEAN_LIBERTY_CONTENT: HistoireBilletContent = {
  chapeau: [
    "Brest, été 1947. La ville sort à peine des décombres de la guerre quand une nouvelle catastrophe s'abat sur le port. Le 28 juillet, un cargo américain chargé de nitrate d'ammonium prend feu puis explose, soufflant des milliers d'habitations.",
    'Le Télégramme a retracé, jour après jour, ce drame qui a meurtri une ville déjà à genoux.',
  ],
  auteur: 'Carole, bibliothécaire',
  institution: 'Médiathèques de Brest',
  datePublication: '14 mars 2026',
  heroPlaceholder: 'Image bandeau',
  heroImageSrc: '/images/histoire_Hero_Ocean-liberty.png',
  heroCaption: "L'Océan Liberty en feu, rade de Brest, 28 juillet 1947.",
  heroMeta: 'Photographie, Archives Marines',
  heroLinkLabel: 'Voir le document',
  heroLinkHref: '#',
  blocks: [
    {
      type: 'heading',
      text: 'Un port entre deux guerres',
    },
    {
      type: 'paragraph',
      text: 'Brest en 1947 ressemble encore à un chantier. Les bombardements de la Seconde Guerre mondiale ont rasé la quasi-totalité de la ville : du vieux Brest, il ne subsiste que le château, la Tour Tanguy, quelques rues de Recouvrance et des faubourgs. La population vit dans des baraques, des structures temporaires montées à la hâte.',
    },
    {
      type: 'paragraph',
      text: "C'est dans ce Brest fragilisé qu'arrive le plan Marshall. Les États-Unis s'engagent à ravitailler l'Europe par voie maritime : 2710 liberty ships — ces gros cargos construits en série entre 1941 et 1945 pour approvisionner les Alliés — sont reconvertis pour transporter matériaux et denrées vers le continent dévasté. Brest, avec son port en eau profonde et sa position géographique, est l'un des premiers ports d'accueil.",
    },
    {
      type: 'paragraph',
      text: "Le 23 juillet 1947, l'Ocean Liberty accoste au 5e bassin du port de Commerce.",
    },
    {
      type: 'heading',
      text: 'Le 28 juillet, heure par heure',
    },
    {
      type: 'paragraph',
      text: "Il est 12 h 45 lorsqu'un départ de feu est signalé à bord. Les pompiers interviennent rapidement, mais les flammes se propagent : plusieurs foyers s'embrasent simultanément — sur le liberty ship, sur les docks de la chambre de commerce, dans les dépôts portuaires. Trois explosions successives se produisent en moins d'une heure.",
    },
    {
      type: 'paragraph',
      text: "À 13 h 30, les autorités prennent une décision : il faut sortir le navire du port. Le plan semble raisonnable — la marée est haute, le bateau peut emprunter la passe de l'est et s'échouer sur le banc de sable de Saint-Marc. Le remorqueur Le Portzic est dépêché. La manœuvre échoue.",
    },
    {
      type: 'paragraph',
      segments: [
        { text: 'La Marine envoie alors le bâtiment de guerre ' },
        { text: 'Le Goumier', italic: true },
        {
          text: ', avec pour mission de tirer des obus sous la ligne de flottaison pour tenter de couler le navire en flammes avant qu\'il ne soit trop tard.',
        },
      ],
    },
    {
      type: 'paragraph',
      text: "Il est 17 h 25 quand tout bascule. Une nouvelle explosion — d'une violence sans commune mesure — projette des fragments en fusion de plusieurs kilos depuis la coque du bateau. D'énormes vagues déferlent sur le port. L'onde de choc est ressentie jusqu'à Landerneau.",
    },
    {
      type: 'image',
      placeholder: 'Une du Télégramme, 30 juillet 1947',
      imageSrc: '/images/voilier-brest.png',
      caption: 'Le Télégramme, 30 juillet 1947.',
      meta: 'Article — Collection Méd. de Brest.',
      linkLabel: 'Voir le document',
      linkHref: '#',
    },
    {
      type: 'heading',
      text: '« La Catastrophe de Brest »',
    },
    {
      type: 'paragraph',
      text: "4 000 à 5 000 immeubles et maisons sont détruits. La rue Jules Guesde et la cité Levot sont rasées. Le bureau de poste est ravagé. Des toits soufflés, des vitres brisées dans des quartiers entiers. Les réservoirs d'essence de la société Jupiter, l'usine à gaz, les hangars de la chambre de commerce — remplis, eux aussi, de nitrate d'ammonium — prennent feu à leur tour.",
    },
    {
      type: 'paragraph',
      text: "Les hôpitaux de la ville sont rapidement débordés. L'hôpital Ponchelet devient un centre de triage ; l'hôpital maritime prend en charge les blessés les plus graves. Des centaines de personnes sont évacuées vers des établissements extérieurs à Brest. Une partie de la population se retrouve sans toit du jour au lendemain : tous les cars et camions de la ville sont réquisitionnés.",
    },
    {
      type: 'blockquote',
      quote: '« La Catastrophe de Brest »',
      meta: 'Une du Télégramme, 30 juillet 1947',
      linkLabel: 'Voir le document',
      linkHref: '#',
    },
    {
      type: 'paragraph',
      text: 'Le 30 juillet, le Télégramme titre en une : «La Catastrophe de Brest ». La ville entrera en deuil pour plusieurs jours.',
    },
    {
      type: 'paragraph',
      text: "L'État réagit : 250 millions de francs de crédit sont débloqués pour les réparations, et l'importation de nitrate d'ammonium est suspendue. Une commission d'enquête s'ouvre le 1er août. Le 6 août, ses conclusions sont sans appel : le nitrate d'ammonium est le seul responsable de la catastrophe.",
    },
    {
      type: 'youtube',
      title: 'Cours Dajot, explosion…',
      href: 'https://vimeo.com/170588892',
      embedSrc: 'https://player.vimeo.com/video/170588892',
      posterSrc: '/images/histoire_youtube.png',
      caption:
        "Cours Dajot, explosion... Film de Jean Banchet-Magon de la Lande, 1947. Format 9,5 mm, noir et blanc, muet, 1'30\".",
      meta: 'Archives filmées, cinémathèque de Bretagne',
    },
  ],
  sources: [
    {
      prefix: 'Jean-Claude Le Dro',
      label:
        'Historique de la bibliothèque municipale de Brest : des origines à 1979 inclus',
      href: SOURCE_HREF,
      detail:
        '1981, Brest, Médiathèque François Mitterrand - Les Capucins, FB X B778',
    },
    {
      prefix: 'Auteur',
      label: 'Titre avec lien vers la source',
      href: SOURCE_HREF,
      detail: 'détails',
    },
    {
      prefix: 'Le Télégramme',
      label: '29 juillet 1947',
      href: SOURCE_HREF,
    },
  ],
  rebonds: [
    {
      slug: 'marcel-bories-plaques',
      type: 'exposition',
      titre: 'Marcel Boriès, 1428 plaques de verre sur Brest',
      accroche:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageSrc: '/images/voilier-brest.png',
    },
    {
      slug: 'dictionnaire-coetanlem',
      type: 'curiosite',
      titre: 'Le Dictionnaire de Coëtanlem',
      accroche:
        'Publié en 1835, ce dictionnaire breton-français reste une référence pour comprendre la langue et la culture bretonnes au XIXe siècle.',
      imageSrc: '/images/voilier-brest.png',
    },
  ],
}

const DEFAULT_CONTENT: HistoireBilletContent = {
  chapeau: LOREM.line,
  auteur: 'Bibliothécaire',
  institution: 'Médiathèques de Brest',
  datePublication: '2026',
  heroPlaceholder: 'Image bandeau',
  heroCaption: LOREM.line,
  blocks: [
    { type: 'paragraph', text: HISTOIRE_DETAIL_DEFAULT.corps },
    { type: 'paragraph', text: LOREM.paragraph },
  ],
  sources: HISTOIRE_DETAIL_DEFAULT.sources,
  rebonds: HISTOIRE_DETAIL_DEFAULT.rebonds,
}

const BY_SLUG: Record<string, HistoireBilletContent> = {
  'ocean-liberty-1947': OCEAN_LIBERTY_CONTENT,
}

export function getHistoireContent(slug: string): HistoireBilletContent {
  return BY_SLUG[slug] ?? DEFAULT_CONTENT
}
