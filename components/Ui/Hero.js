import React from 'react'
import { motion } from 'framer-motion'
import Button from '../html/Button'
import { globaleasing, shortFadeUp, titesStagger } from '../../data/useVariants'
import { useTranslation } from 'next-i18next'

const Hero = ({ data }) => {
  const { t } = useTranslation('common')
  const { title, advantagesRep } = data
  return (
    <motion.div
      initial={{ backgroundColor: '#fff' }}
      animate={{
        backgroundColor: '#f3f4f6',
        transition: { ease: globaleasing, duration: 1.4 },
      }}
      className="hero-section min-h-[630px] flex flex-col justify-end"
    >
      <div className="container mx-auto max-w-[1090px] relative md:py-[90px]">
        <motion.div
          initial={{ x: 90, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { ease: globaleasing, duration: 3 },
          }}
          className="illustration hidden md:block w-[711px] h-[542px] absolute top-10 -right-[150px] bg-[url('/bgs/bg-slide.png')] bg-no-repeat bg-[length:711px_542px] bg-[right_0_top_0]"
        ></motion.div>
        <motion.div
          variants={titesStagger(0.2)}
          initial="initial"
          animate="animate"
          className="bloc"
        >
          <motion.h3
            variants={shortFadeUp(1.5)}
            className="text-[42px] leading-[60px] font-medium mb-[25px]"
          >
            <div dangerouslySetInnerHTML={{ __html: title }} />
          </motion.h3>
          <motion.ul
            variants={shortFadeUp(1.5)}
            className="text-[18px] mb-[45px]"
          >
            {advantagesRep.map((item, index) => (
              <li
                className="relative mb-[14px] last:mb-0 before:block before:h-[9px] before:w-[9px] before:bg-[#a0a1b3] before:rounded before:absolute before:top-0 before:bottom-0 before:left-0 before:my-auto md:pl-[20px]"
                key={index}
                dangerouslySetInnerHTML={{ __html: item.label }}
              ></li>
            ))}
          </motion.ul>
          <motion.div variants={shortFadeUp(1.5)} className="read-more">
            <Button title={t('Contact our team')} url="/contact" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Hero
