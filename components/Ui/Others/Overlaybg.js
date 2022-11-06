import React from 'react'
import { useGlobalState } from '../../../providers/globalProvider'

const Overlaybg = () => {
  const {
    state: { isMenuOpen },
  } = useGlobalState()

  return (
    <div
      className={`overlay-bg bg-gray-300/80 fixed top-0 bottom-0 left-0 right-0 m-auto z-10 transition-all duration-500 ${
        isMenuOpen ? ' opacity-100 visible' : 'opacity-0 invisible'
      }`}
    ></div>
  )
}

export default Overlaybg
