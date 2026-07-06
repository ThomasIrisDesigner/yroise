/** Bloc éditorial page institutionnelle — sous-titre + paragraphes. */
export interface InstitutionalSection {
  heading: string
  paragraphs: string[]
}

export interface InstitutionalPageData {
  /** Segment d’URL sans slash — ex. `mentions-legales` */
  slug: string
  titre: string
  sections: InstitutionalSection[]
}
