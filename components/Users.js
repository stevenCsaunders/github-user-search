import { useQuery } from '@apollo/client'
import { GET_USERS_QUERY } from '../GraphQL/Queries'
import { User } from './User'

export default function Users() {
	const { data, error, loading } = useQuery(GET_USERS_QUERY)

	if (loading) return <h2>Loading...</h2>
	if (error) {
		console.error(error)
		return null
	}

	const users = data.search.edges

	return (
    <section className='flex flex-col items-center mx-5'>
      {users.map((user) => (
					<User key={user.node.id} user={user.node} />
				))}
    </section>
  )
}
