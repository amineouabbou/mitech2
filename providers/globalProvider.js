import React, { createContext, useContext, useReducer, useState } from 'react'

const GlobalState = createContext()

const INITIAL_STATE = {
  isMenuOpen: false,
}

const GlobalProvider = ({ children }) => {
  const [state, setState] = useState(INITIAL_STATE)
  const [megamenuOpened, setMegamenuOpened] = useState(false)

  const handleMobileMenu = () => {
    setState((prevState) => ({
      ...prevState,
      isMenuOpen: !prevState.isMenuOpen,
    }))
  }

  const closeMobileNav = () => {
    setState((prevState) => ({
      ...prevState,
      isMenuOpen: false,
    }))
  }

  const changeMegaMenuOpened = (value) => {
    setMegamenuOpened(value)
  }

  const values = {
    state,
    handleMobileMenu,
    closeMobileNav,
    megamenuOpened,
    changeMegaMenuOpened,
  }

  return <GlobalState.Provider value={values}>{children}</GlobalState.Provider>
}

const useGlobalState = () => {
  const context = useContext(GlobalState)

  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalProvider')
  }

  return context
}

export { GlobalProvider, useGlobalState }
