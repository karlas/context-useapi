import { useContext } from 'react'
import { useAsync } from 'react-async-hook'
import { Context } from './context'

export const useGlobalContext = () => useContext(Context)

export const useAPI = apiMethod => {
  const { peopleId } = useGlobalContext()
  return useAsync(apiMethod, [ peopleId ])
}
