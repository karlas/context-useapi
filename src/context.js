import React, { createContext, useState } from 'react'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [ peopleId, setPeopleId ] = useState(69)
  const contextValue = {
    peopleId, 
    changePeopleId : () => setPeopleId(Math.floor(Math.random() * 50))
  }
  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  )
}