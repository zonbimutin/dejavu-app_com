import { gql } from '@apollo/client'

export const GET_BLOG_POSTS = gql`
  query Blogs {
    blogs {
      data {
        id
        attributes {
          thumbnail {
            ... on UploadFileEntityResponse {
              data {
                attributes {
                  height
                  width
                  previewUrl
                  url
                  formats
                }
              }
            }
          }
          title
          slug
          excerpt
        }
      }
    }
  }
`

export const GET_BLOG_POST = gql`
  query Blog($slug: String) {
    findSlug(modelName: "blog", slug: $slug) {
      ... on BlogEntityResponse {
        data {
          attributes {
            title
            excerpt
            content
            publishedAt
            thumbnail {
              ... on UploadFileEntityResponse {
                data {
                  attributes {
                    width
                    url
                    previewUrl
                    height
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
