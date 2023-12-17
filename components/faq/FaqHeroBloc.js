import React from 'react'
import Categories from './Categories'
import { motion } from 'framer-motion'

import { shortFadeUp } from '../../data/useVariants'
import Image from 'next/image'

const FaqHeroBloc = ({ data, searchQuery, setSearchQuery }) => {
  const handleInputChange = (e) => {
    const queryLowered = e.target.value.toLowerCase()
    console.log('queryLowered', queryLowered)
    setSearchQuery(queryLowered)
  }
  return (
    <>
      <motion.div
        variants={shortFadeUp(1.5)}
        className="flex w-full lg:w-auto items-center justify-center mt-[45px] relative"
      >
        <div className="icone absolute w-[18px] h-[18px] lg:h-[23px] lg:w-[23px] top-0 bottom-0 my-auto right-[23px]">
          <Image alt="" src="/icons/search-icon.svg" width={23} height={23} />
        </div>
        <input
          type="text"
          className="h-[45px] lg:h-[56px] w-full lg:w-auto lg:min-w-[600px] rounded-[40px] pl-[25px] pr-[60px] lg:px-[32px] py-[8px] text-[12px] lg:text-[16px] tracking-[0.04em] text-[#a0a1b3]"
          name="email"
          placeholder="Have a question? Find the answer here..."
          onChange={handleInputChange}
        />
      </motion.div>
      <Categories data={data} />
    </>
  )
}

export default FaqHeroBloc
