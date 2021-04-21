import { useLazyQuery } from '@apollo/client'
import{ GET_USERS_QUERY } from '../GraphQL/Queries'
 

export default function Users() {
  
  const { data, error, loading } = useLazyQuery(GET_USERS_QUERY);
  console.log(data, error, loading);

  return(
    <h1>Usrs page</h1>
  )
}