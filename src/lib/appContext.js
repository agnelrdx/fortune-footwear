import React, { createContext, useState } from 'react'
import { initialAppData } from './constants'

export const appContext = createContext()

export const AppProvider = (props) => {
  const [appData, setAppData] = useState(initialAppData)

  return (
    <appContext.Provider value={[appData, setAppData]}>
      {props.children}
    </appContext.Provider>
  )
}
