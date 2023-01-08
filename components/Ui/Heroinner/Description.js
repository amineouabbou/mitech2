import React from 'react'
import { motion } from 'framer-motion'
import { shortFadeUp } from '../../../data/useVariants'

const Description = ({ description }) => {
  return (
    <motion.div
      variants={shortFadeUp(1.5)}
      className="text-[17px] leading-[22px] lg:text-[22px] text-primary"
    >
      {description}
    </motion.div>
  )
}

export default Description
