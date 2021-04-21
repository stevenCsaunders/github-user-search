import { createHttpLink} from '@apollo/client'

  const httplink = createHttpLink({
		uri: `${process.env.REACT_APP_API_URI}`
	})


export default httplink;