import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faStar,
	faLink,
	faGlobe,
	faUserFriends,
} from '@fortawesome/free-solid-svg-icons'

export const User = ({ user }) => {
	return (
		<div className='max-w-3xl w-full rounded-lg shadow-lg p-4 mb-4 flex md:flex-row'>
			<a href={user.url} rel='noopener noreferrer' target='_blank'>
				<img
					src={user.avatarUrl}
					alt={user.name}
					className='rounded-full border border-gray-500 w-16 h-16 mr-5'
				/>
			</a>
			<div className='flex-1'>
				<div className='flex items-center'>
					<a
						href={user.url}
						rel='noopener noreferrer'
						target='_blank'
					>
						<h3 className='font-semibold text-md tracking-wide'>
							{user.name}<span className='text-gray-400 text-sm mx-2 font-light'>({user.login})
							</span>
						</h3>
					</a>
				</div>
				<p className='text-gray-500 text-sm my-1'>
					{!user.bio ? "Hi, I'm a github user!" : user.bio}
				</p>
			</div>
			<div className='flex flex-col border-l border-gray-100 mb-1 ml-2 w-1/4 divide-y divide-gray-100'>
				<span className='text-gray-300 ml-2 mb-2 text-xs'>
					<FontAwesomeIcon
						icon={faStar}
						className='text-gray-300 mr-2 text-xs'
					/>
					{user.starredRepositories.totalCount}
				</span>
				{!user.websiteUrl ? (
					''
				) : (
					<span className='text-gray-300 ml-2 mb-2 pt-2 text-xs'>
						<a
							href={user.websiteUrl}
							rel='noopener noreferrer'
							target='_blank'
						>
							<FontAwesomeIcon
								icon={faLink}
								className='text-gray-300 mr-2 text-xs'
							/>
							website
						</a>
					</span>
				)}
				<span className='text-gray-300 ml-2 mb-2 pt-2 text-xs'>
					<FontAwesomeIcon
						icon={faUserFriends}
						className='text-gray-300 mr-2 text-xs'
					/>
					{user.followers.totalCount}
				</span>
				<span className='text-gray-300 ml-2 mb-2 pt-2 text-xs'>
					<FontAwesomeIcon
						icon={faGlobe}
						className='text-gray-300 mr-2 text-xs'
					/>
					{user.location}
				</span>
			</div>
		</div>
	)
}