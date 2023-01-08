import React from 'react'
import { motion } from 'framer-motion'
import { shortFadeUp } from '../../../data/useVariants'
import { twclsx } from '../../../libs/twclsx'

const SubTitle = ({ subtitle, className }) => {
  return (
    <>
      <motion.p
        variants={shortFadeUp(1.5)}
        className={twclsx(
          'hero-subtitle text-[17px] leading-[22px] lg:text-[28px] mb-[13px] lg:mb-[20px]',
          {
            [className]: className,
          }
        )}
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />
    </>
  )
}

export default SubTitle
