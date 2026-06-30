/** Classes partagées — cards éditoriales Histoires / Jeunesse */
import { typography } from '@/styles/typography'

export const editorialCardClass =
  'card group relative flex shrink-0 flex-col overflow-hidden bg-background'

export const editorialCardSliderClass = 'card-slider-item'

export const cardBodyClass =
  'card-body flex flex-1 flex-col pt-4 pb-4'

export const cardTitleClass = `card-title mb-2 ${typography.cardTitleEditorial}`

export const cardTitleLinkClass =
  'text-text transition-colors duration-150 hover:text-glaz-700 before:absolute before:inset-0 before:content-[""]'

export const cardTitleLinkOnDarkClass =
  'text-on-dark transition-colors duration-150 hover:text-glaz-300 before:absolute before:inset-0 before:content-[""]'

export const cardExcerptClass = `card-excerpt ${typography.cardExcerpt} line-clamp-2`

export const cardMetaClass =
  'card-meta mb-1 font-outfit text-xs font-normal text-muted'

export const cardLabelWrapClass = 'card-label mt-auto pt-2.5'

export const cardCtaWrapClass = 'card-cta-wrap mt-auto pt-6'

export const cardImageClass = 'card-image'

export const cardImageListClass = 'card-image card-image--list'

export const jeunesseListImageFrameClass =
  'overflow-hidden rounded border-[2.5px] border-solid border-aurore-700'

export const cardBodyListClass = 'card-body flex flex-1 flex-col gap-2 pt-4'

export const cardExcerptListClass = `card-excerpt ${typography.cardExcerpt} line-clamp-4`

export const cardCtaListWrapClass = 'card-cta-wrap pt-2'

/** Liste Histoires / Collections — 32px haut et bas → 64px entre CTA et image suivante */
export const listCardStackClass = 'py-8'

export const collectionCardClass =
  'card-collection collection-item relative flex w-[140px] shrink-0 snap-start flex-col items-center'

export const hublotClass =
  'hublot h-[120px] w-[120px] overflow-hidden rounded-full bg-surface shadow-[0_2px_8px_rgb(0_0_0/0.08)] transition-shadow duration-150 hover:shadow-[0_4px_16px_rgb(0_0_0/0.12)]'

export const collectionTitleClass =
  'card-title mt-2.5 w-full text-center font-outfit text-[13px] font-semibold leading-[1.3]'

export const collectionTitleLinkClass =
  'text-text transition-colors duration-150 hover:text-glaz-700 before:absolute before:inset-0 before:content-[""]'
