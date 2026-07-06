import { LOREM } from '@/data/placeholders'
import type { InstitutionalPageData } from '@/types/institutionalPage'

const LOREM_BODY = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
  'Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.',
  'Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.',
]

export const INSTITUTIONAL_PAGES: InstitutionalPageData[] = [
  {
    slug: 'informations-pratiques',
    titre: 'Informations pratiques',
    sections: [
      {
        heading: 'Horaires et accès',
        paragraphs: [
          'Les médiathèques de Brest mettent à disposition YROISE en ligne 24 h/24. Pour consulter les collections physiques ou obtenir de l’aide sur place, reportez-vous aux horaires des bibliothèques du réseau.',
          LOREM.paragraph,
        ],
      },
      {
        heading: 'Nous contacter',
        paragraphs: [
          'Pour toute question sur les collections, les droits de reproduction ou l’utilisation pédagogique des documents : bibliotheque@brest-metropole.fr',
          LOREM.paragraph,
        ],
      },
      {
        heading: 'Mentions utiles',
        paragraphs: LOREM_BODY,
      },
    ],
  },
  {
    slug: 'faq',
    titre: 'FAQ',
    sections: [
      {
        heading: 'Qu’est-ce que YROISE ?',
        paragraphs: [
          'YROISE est la bibliothèque numérique patrimoniale de Brest. Elle donne accès à des milliers de documents — cartes, photographies, archives — issus des collections des médiathèques, dans le cadre du programme Gallica Marque Blanche de la BnF.',
        ],
      },
      {
        heading: 'Les documents sont-ils librement réutilisables ?',
        paragraphs: [
          'Chaque document est soumis à un régime de droits propre. Les mentions de droits et les conditions de réutilisation sont indiquées sur la fiche document dans Gallica.',
          LOREM.paragraph,
        ],
      },
      {
        heading: 'Comment signaler une erreur ou un lien cassé ?',
        paragraphs: [
          'Utilisez le formulaire de contact des médiathèques ou écrivez à bibliotheque@brest-metropole.fr en précisant l’URL de la page concernée.',
        ],
      },
      {
        heading: 'YROISE est-il accessible sur mobile ?',
        paragraphs: LOREM_BODY,
      },
    ],
  },
  {
    slug: 'accessibilite',
    titre: 'Accessibilité',
    sections: [
      {
        heading: 'Engagement',
        paragraphs: [
          'Brest métropole s’engage à rendre ses sites internet accessibles conformément à l’article 47 de la loi n° 2005-102 du 11 février 2005.',
          LOREM.paragraph,
        ],
      },
      {
        heading: 'État de conformité',
        paragraphs: [
          'YROISE est en cours de mise en conformité avec le référentiel général d’amélioration de l’accessibilité (RGAA), version 4.',
          'Cette déclaration d’accessibilité s’applique au site YROISE.',
        ],
      },
      {
        heading: 'Signaler un problème',
        paragraphs: [
          'Si vous rencontrez un défaut d’accessibilité vous empêchant d’accéder à un contenu ou une fonctionnalité, contactez-nous à bibliotheque@brest-metropole.fr.',
        ],
      },
    ],
  },
  {
    slug: 'mentions-legales',
    titre: 'Mentions légales',
    sections: [
      {
        heading: 'Éditeur',
        paragraphs: LOREM_BODY,
      },
      {
        heading: 'Hébergement du site',
        paragraphs: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
        ],
      },
      {
        heading: 'Conception graphique',
        paragraphs: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
        ],
      },
    ],
  },
]

const pagesBySlug = new Map(
  INSTITUTIONAL_PAGES.map((page) => [page.slug, page])
)

export function getInstitutionalPage(
  slug: string
): InstitutionalPageData | undefined {
  return pagesBySlug.get(slug)
}

export const INSTITUTIONAL_PAGE_SLUGS = INSTITUTIONAL_PAGES.map(
  (page) => page.slug
)
