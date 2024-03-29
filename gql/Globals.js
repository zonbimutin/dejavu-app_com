import { gql } from '@apollo/client'

// Queries
export const GET_GLOBALS = gql`
  query Global {
    global {
      data {
        attributes {
          header {
            ...header
          }
          footer {
            ...footer
          }
        }
      }
    }
  }

  fragment header on ComponentGlobalHeader {
    logo {
      ...image
    }
    socials {
      url
      type
    }
    menu {
      href
      target
      label
    }
  }

  fragment footer on ComponentGlobalFooter {
    logo {
      ...image
    }
    quicklinks {
      href
      label
      target
    }
    socials {
      url
      type
      label
    }
    contact {
      address
      phone
      email
    }
    terms {
      label
      href
      target
    }
  }

  fragment image on UploadFileEntityResponse {
    data {
      attributes {
        url
        width
        height
        previewUrl
        size
        caption
        ext
      }
    }
  }
`
