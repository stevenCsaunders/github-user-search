import { gql } from '@apollo/client'

export const GET_USERS_QUERY = gql`
query GetUsers {
  search(query: "Steve", type: USER, first: 10) {
    userCount
    edges {
      node {
        ... on User {
          login
          name
          location
          avatarUrl
          bio
          company
          id
          url
          websiteUrl
        }
      }
      cursor
    }
    pageInfo {
      endCursor
    }
  }
}

`