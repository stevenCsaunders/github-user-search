import { setContext } from '@apollo/client/link/context'

const authLink = setContext((_, { headers }) => {
  //Auth token from local storage
  const token = `${process.env.GITHUB_AUTH_PAT}`;
  //Return to context for http link
  return {
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export default authLink;