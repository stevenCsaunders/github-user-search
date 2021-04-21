
import { ApolloClient, InMemoryCache } from '@apollo/client'
import authLink from './github-auth'
import httplink from './httpLink'
		
const client = new ApolloClient({
		link: authLink.concat(httplink),
		cache: new InMemoryCache()
	})

export default client;