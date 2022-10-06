import { gql } from '@apollo/client'

export const GET_PAGE = gql`
  query Page($slug: String) {
    findSlug(modelName: "page", slug: $slug) {
      ... on PageEntityResponse {
        data {
          id
        }
      }
    }
  }
`

export const GET_HOME = gql`
  query Home {
    home {
      data {
        attributes {
          seo {
            ...seo
          }
          hero {
            ...herohome
          }
          sections {
            ...about
            ...reinsurance
            ...features
            ...prices
            ...screenshots
            ...team
            ...faq
          }
        }
      }
    }
  }

  fragment image on UploadFileEntityResponse {
    data {
      attributes {
        url
        width
        height
      }
    }
  }

  fragment collection on UploadFileRelationResponseCollection {
    data {
      attributes {
        url
        width
        height
      }
    }
  }

  fragment seo on ComponentSharedSeo {
    metaTitle
  }

  fragment herohome on ComponentSectionHeroHome {
    title
    subtitle
    image {
      ...image
    }
  }

  fragment sectionheader on ComponentSharedHeader {
    title
    subtitle
  }

  fragment feature on ComponentSharedFeature {
    icon {
      ...image
    }
    title
    text
  }

  fragment textlist on ComponentSharedTextlistitem {
    text
  }

  fragment price on ComponentSharedPrice {
    price
    description
    title
    currency
    strongpoints {
      ...textlist
    }
    link {
      href
      label
      target
    }
  }

  fragment person on ComponentSharedPerson {
    name
    title
    description
    image {
      ...image
    }
    socials {
      url
      type
      label
    }
  }

  fragment about on ComponentSectionAbout {
    header {
      ...sectionheader
    }
    image {
      ...image
    }
    features {
      ...feature
    }
  }

  fragment reinsurance on ComponentSectionReinsurance {
    features {
      ...feature
    }
  }

  fragment screenshots on ComponentSectionScreenshots {
    collection {
      ...collection
    }
  }

  fragment prices on ComponentSectionPrices {
    header {
      ...sectionheader
    }
    prices {
      ...price
    }
  }

  fragment team on ComponentSectionTeam {
    header {
      ...sectionheader
    }
    team {
      ...person
    }
  }

  fragment faq on ComponentSectionFaq {
    header {
      ...sectionheader
    }
    image {
      ...image
    }
    accordions {
      title
      text
    }
  }

  fragment features on ComponentSectionFeatures {
    header {
      ...sectionheader
    }
    features {
      ...feature
    }
  }
`
