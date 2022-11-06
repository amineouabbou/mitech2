import React from 'react'
import Nav from './Nav'
import { motion } from 'framer-motion'
import { globaleasing } from '../../../data/useVariants'

const Mobilemenu = () => {
  return (
    <motion.div
      initial={{ y: 90, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { ease: globaleasing, duration: 0.6 },
      }}
      exit={{
        y: 40,
        opacity: 0,
        transition: { ease: globaleasing, duration: 0.9 },
      }}
      className="mobile-nav mb:bg-white mb:absolute mb:top-[100%] mb:left-0 mb:right-0 bg-red-500"
    >
      <Nav />
    </motion.div>
  )
}

export default Mobilemenu
