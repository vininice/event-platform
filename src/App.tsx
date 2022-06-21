import { gql } from '@apollo/client'
import { useEffect } from 'react'
import { client } from './lib/apollo'

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
      }
    }
  }
`

export const App = () => {
  useEffect(() => {
    client
      .query({
        query: GET_LESSONS_QUERY,
      })
      .then((res) => {
        console.log(res.data)
      })
  }, [])

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <h1 className="title">hello world</h1>
    </div>
  )
}
