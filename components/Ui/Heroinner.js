import React from 'react'
import { motion } from 'framer-motion'
import { shortFadeUp, titesStagger } from '../../data/useVariants'

const Heroinner = ({ title, subtitle, description, children, isFaq }) => {
  return (
    <div
      className={`hero-section min-h-[450px] md:min-h-[542px] flex flex-col bg-[#f1f2f4] bg- bg-[url('/bgs/hero-bg.png')] bg-no-repeat bg-cover bg-blend-color-burn bg-[center_top_6rem] ${
        isFaq ? 'justify-end' : 'justify-center'
      }`}
    >
      <div
        className={`container mx-auto max-w-[1030px] relative ${
          isFaq ? '' : 'md:py-[90px]'
        }`}
      >
        <motion.div
          variants={titesStagger(0.2)}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <motion.h1
            variants={shortFadeUp(1.5)}
            className="text-[31px]  leading-[40px] lg:text-[44px] font-medium lg:leading-normal mb-[15px] lg:mb-[25px]"
          >
            {title}
          </motion.h1>

          <motion.div variants={shortFadeUp(1.5)}>
            <p className="text-[17px] leading-[22px] lg:text-[28px] mb-[13px] lg:mb-[20px]">
              {subtitle}
            </p>
            <p className="text-[17px] leading-[22px] lg:text-[22px] text-primary">
              {description}
            </p>
          </motion.div>

          {children && (
            <motion.div variants={shortFadeUp(1.5)}>{children}</motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Heroinner
