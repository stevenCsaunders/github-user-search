import { gql } from '@apollo/client'

export const GET_USERS_QUERY = gql`
query GetUsers {
  search(query: "Steven ", type: USER, first: 10) {
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
						starredRepositories {
							totalCount
						}
						followers {
							totalCount
						}
					}
				}
			}
		}
	}
`
