import Image from 'next/image'

export default function Header() {
	return (
		<header className='flex flex-col items-center w-full '>
			<a
				href='https://www.github.com'
				rel='noopener noreferrer'
				target='_blank'
				className='my-5'
			>
				<Image
					src='/images/Octocat.png'
					alt='github octocat'
					width={100}
					height={100}
				/>
			</a>
			<h1 className='w-full text-center text-700 py-5 mb-10  bg-gray-500 text-white text-3xl font-bold'>
				GitHub User Search
			</h1>
		</header>
	)
}
