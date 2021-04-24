
import { useQuery } from '@apollo/client'
import { GET_USERS_QUERY } from '../GraphQL/Queries'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import ClientOnly from '../components/ClientOnly'
import Users from '../components/Users'
import { perPage } from '../config'
import Pagination from '../components/Pagination'

export default function Search() {
	const { data, error, loading } = useQuery(GET_USERS_QUERY)

	if (loading) {
		return (
			<div className='w-full text-center'>
				<h3>Loading...</h3>
				<div className='spinner'>
					<div className='rect1'></div>
					<div className='rect2'></div>
					<div className='rect3'></div>
					<div className='rect4'></div>
					<div className='rect5'></div>
				</div>
			</div>
		)
	}
	if (error) {
		console.error(error)
		return null
	}

	const users = data.search.edges
	const userCount = data.search.userCount
	const pages = Math.ceil(userCount / perPage)

	return (
		<div className='flex flex-col items-center px-20'>
			<h2 className='mb-3 pt-0 text-center'>Who are you looking for?</h2>
			<div className='relative flex w-full flex-wrap items-stretch mb-3 max-w-3xl'>
				<input
					type='text'
					placeholder='Placeholder'
					className='px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10'
					onChange={(event) => {
						setSearchUser(event.target.value)
					}}
				/>
				<span className='z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3'>
					<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
				</span>
			</div>
			<button
				onClick={() => getUsers()}
				className='text-blueGray-500 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-500 hover:text-gray active:bg-blueGray-600 font-bold uppercase text-sm mb-5 px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
				type='button'
			>
				Search
			</button>
			<Pagination userCount={userCount} pages={pages} page={1} />
			<ClientOnly>
				<Users users={users} userCount={userCount} />
			</ClientOnly>
      <Pagination userCount={userCount} pages={pages} page={1} />
		</div>
	)
}