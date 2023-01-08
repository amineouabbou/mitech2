import React from 'react'
import { motion } from 'framer-motion'
import { shortFadeUp } from '../../../data/useVariants'
import { twclsx } from '../../../libs/twclsx'

const Title = ({ title, className }) => {
  return (
    <motion.h1
      variants={shortFadeUp(1.5)}
      className={twclsx(
        'text-[31px] leading-[40px] lg:text-[44px] font-medium lg:leading-normal mb-[15px] lg:mb-[25px]',
        {
          [`${className}`]: className,
        }
      )}
    >
      {title}
    </motion.h1>
  )
}

export default Title
