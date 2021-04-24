import Head from 'next/head'
import Link from 'next/link'

export default function Pagination({ userCount, pages, page }) {
	return (
		<>
			<Head>
				<title>
					Page {page} of {pages}
				</title>
			</Head>
			<nav className='text-center inline-grid grid-cols-4 items-stretch justify-center content-center mx-2 mb-5 border border-gray-200 rounded'>
				<Link href={`/users/${page - 1}`}>
					<a
						className='text-sm font-semibold m-0 border-r border-gray-200 px-5 py-5'
						aria-disabled={page <= 1}
					>
						&#8592; Previous
					</a>
				</Link>
				<p className='text-sm m-0 border-r border-gray-200 px-5 py-5'>
					Page {page} of {pages}
				</p>
				<p className='text-sm m-0 border-r border-gray-200 px-5 py-5'>
					{userCount} total items
				</p>
				<Link href={`/users/${page + 1}`} className=''>
					<a
						className='text-sm font-semibold m-0 px-5 py-5'
						aria-disabled={page >= pages}
					>
						Next &#8594;
					</a>
				</Link>
			</nav>
		</>
	)
}
