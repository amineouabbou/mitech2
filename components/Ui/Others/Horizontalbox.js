import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { titlesAnimation } from '../../../data/useVariants'

const Horizontalbox = ({ icon, title }) => {
  return (
    <motion.div
      variants={titlesAnimation}
      className="bg-white rounded-[10px] px-[20px] py-[18px] drop-shadow-[1px_1px_18px_rgba(0,0,0,0.07)]"
    >
      <div className="flex items-center">
        <div className="ball h-[67px] lg:h-[87px] w-[67px] lg:w-[87px] bg-[#f3f4f6] rounded-full flex flex-col justify-center items-center">
          <div className={`relative h-[75%] w-[75%]`}>
            <Image src={icon} alt="" layout="fill" />
          </div>
        </div>
        <div className="text-[16px] lg:text-[19px] font-medium grow text-center px-[5px] lg:px-[10px]">
          {title}
        </div>
      </div>
    </motion.div>
  )
}

export default Horizontalbox
