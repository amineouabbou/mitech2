import React from 'react'
import Categories from './Categories'
import { motion } from 'framer-motion'

import { shortFadeUp } from '../../data/useVariants'

const FaqHeroBloc = ({ data }) => {
  return (
    <>
      <motion.div
        variants={shortFadeUp(1.5)}
        className="flex items-center justify-center mt-[45px]"
      >
        <input
          type="text"
          className="h-[56px] w-full lg:w-auto lg:min-w-[600px] rounded-[40px] px-[32px] py-[8px] text-[16px] tracking-[0.04em] text-[#a0a1b3]"
          name="email"
          placeholder="Have a question? Find the answer here..."
        />
      </motion.div>
      <Categories data={data} />
    </>
  )
}

export default FaqHeroBloc
