import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { titlesAnimation } from '../../../data/useVariants'

const Vericalbox = ({ title, description, icone }) => {
  return (
    <motion.div
      variants={titlesAnimation}
      className="bg-white rounded-[10px] px-[26px] py-[30px] lg:py-[35px] drop-shadow-[1px_1px_18px_rgba(0,0,0,0.07)]"
    >
      <div className="icon-box mb-[10px]">
        <div className="w-[95px] h-[75px] flex flex-col justify-center items-center">
          <div className="w-[79%] h-[79%] relative">
            <Image src={icone} layout="fill" alt="" />
          </div>
        </div>
      </div>
      <div className="text-[19px] lg:text-[23px] lg:leading-[33px] text-primary font-medium tracking-[0.03em] mb-[8px] lg:mb-[14px]">
        {title}
      </div>
      <p className="font-medium lg:text-[16px] lg:leading-[25px] tracking-[0.025em]">
        {description}
      </p>
    </motion.div>
  )
}

export default Vericalbox
