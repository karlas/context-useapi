import React from 'react'
import { useAPI, useGlobalContext } from './hooks'
import { fetchPeople } from './api'

export default () => {
  const { loading, error, result } = useAPI(fetchPeople)
  const { changePeopleId } = useGlobalContext()
  return (
    <div>
      { loading ? 'Loading...' : (error ? `ERROR! ${ error }` : JSON.stringify(result)) }
      <button onClick={ changePeopleId }>
        <span>Change context id</span>
      </button>
    </div>
  )
}
