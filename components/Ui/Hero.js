import React from 'react'
import { motion } from 'framer-motion'
import Button from '../html/Button'
import { globaleasing, shortFadeUp, titesStagger } from '../../data/useVariants'

const Hero = ({ data }) => {
  const { title, advantagesRep, callToAction } = data
  const { label, slug } = callToAction
  return (
    <motion.div
      initial={{ backgroundColor: '#fff' }}
      animate={{
        backgroundColor: '#f3f4f6',
        transition: { ease: globaleasing, duration: 1.4 },
      }}
      className="hero-section min-h-[890px] lg:min-h-[630px] flex flex-col justify-end overflow-hidden"
    >
      <div className="container mx-auto max-w-[1090px] relative py-[20px] md:py-[90px] flex flex-col">
        <motion.div
          initial={{ x: 90, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { ease: globaleasing, duration: 3 },
          }}
          className="illustration hidden lg:block lg:w-[711px] h-[280px] lg:h-[542px] lg:absolute top-10 lg:-right-[150px] bg-[url('/bgs/bg-slide.png')] bg-no-repeat bg-contain lg:bg-[length:711px_542px] bg-center lg:bg-[right_0_top_0]"
        ></motion.div>
        <div className="illustration md:hidden">
          <img src="/bgs/bg-slide-mobile.png" alt="" />
        </div>
        <motion.div
          variants={titesStagger(0.2)}
          initial="initial"
          animate="animate"
          className="bloc mb-[60px] lg:mb-0"
        >
          <motion.h3
            variants={shortFadeUp(1.5)}
            className="text-[31px] lg:text-[42px] leading-[40px] lg:leading-[60px] font-medium mb-[25px]"
          >
            <div
              className="[&>p>strong]:font-semibold"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </motion.h3>
          <motion.ul
            variants={shortFadeUp(1.5)}
            className="text-[16px] lg:text-[18px] mb-[45px]"
          >
            {advantagesRep.map((item, index) => (
              <li
                className="relative mb-[14px] last:mb-0 before:block before:h-[9px] before:w-[9px] before:bg-[#a0a1b3] before:rounded before:absolute before:top-[6px] before:left-0 before:my-auto pl-[20px] [&>p>strong]:font-medium"
                key={index}
                dangerouslySetInnerHTML={{ __html: item.label }}
              ></li>
            ))}
          </motion.ul>
          <motion.div
            variants={shortFadeUp(1.5)}
            className="read-more flex justify-center lg:justify-start"
          >
            {label && <Button title={label} url={slug} />}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Hero
