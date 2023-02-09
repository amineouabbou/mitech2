import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'
import { globaleasing } from '../../../data/useVariants'
import { useGlobalState } from '../../../providers/globalProvider'

const Overlaybg = () => {
  const {
    state: { isMenuOpen },
    handleMobileMenu,
    megamenuOpened,
    changeMegaMenuOpened,
  } = useGlobalState()

  const handleClosePoup = () => {
    changeMegaMenuOpened()
  }

  return (
    <motion.div
      onClick={handleClosePoup}
      initial={{ opacity: 0, visibility: 'hidden' }}
      animate={{ opacity: 1, visibility: 'visible' }}
      exit={{ opacity: 0, visibility: 'hidden' }}
      transition={{ ease: globaleasing, duration: 0.7 }}
      className={clsx(
        'overlay-bg bg-gray-300/70 fixed top-0 bottom-0 left-0 right-0 m-auto z-10  backdrop-blur-md backdrop-brightness-100'
      )}
    ></motion.div>
  )
}

export default Overlaybg
