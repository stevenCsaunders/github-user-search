
import { User } from './User'

export default function Users({ users }) {
	return (
    <section className='flex flex-col items-center mx-5'>
      {users.map((user) => (
					<User key={user.node.id} user={user.node} />
				))}
    </section>
  )
}
