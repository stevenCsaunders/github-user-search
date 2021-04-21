import { createHttpLink} from '@apollo/client'

  const httplink = createHttpLink({
		uri: `${process.env.NEXT_PUBLIC_API_URI}`
	})

export default httplink;