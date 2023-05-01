import React from 'react'
import Nav from './Nav'
import { motion } from 'framer-motion'
import { globaleasing } from '../../../data/useVariants'
import Button from '../../html/Button'

const Mobilemenu = ({ data }) => {
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
      className="mobile-nav mb:bg-white mb:absolute mb:top-[100%] mb:left-0 mb:right-0"
    >
      <Nav data={data} />
      <div className="md:ml-[25px] py-[20px] px-[25px] flex flex-col items-center hidden:lg">
        <Button
          lowercase="true"
          title="Get Started"
          largeur="small"
          url="/contact"
          className="min-w-[160px] text-center"
        />
      </div>
    </motion.div>
  )
}

export default Mobilemenu
