import dynamic from 'next/dynamic'

export function useDynamic({ typename }) {
  switch (typename) {
    case 'ComponentSectionAbout':
      return dynamic(() => import('@sections/About'))
    case 'ComponentSectionReinsurance':
      return dynamic(() => import('@sections/Reinsurance'))
    case 'ComponentSectionFeatures':
      return dynamic(() => import('@sections/Features'))
    case 'ComponentSectionScreenshots':
      return dynamic(() => import('@sections/Screenshots'))
    case 'ComponentSectionPrices':
      return dynamic(() => import('@sections/Prices'))
    case 'ComponentSectionTeam':
      return dynamic(() => import('@sections/Team'))
    case 'ComponentSectionFaq':
      return dynamic(() => import('@sections/Faq'))
    default:
      return null
  }
}
