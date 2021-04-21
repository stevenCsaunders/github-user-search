import Header from '../components/Header'
import Users from '../components/Users'
import ClientOnly from '../components/ClientOnly'

export default function Home() {

	return (
		<>
			<Header />
			<ClientOnly>
				<Users />
			</ClientOnly>
		</>
	)
}
