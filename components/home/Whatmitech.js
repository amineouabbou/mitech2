import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Whatmitech = ({ data }) => {
  const { title, description, shema } = data
  return (
    <section className="what-mitech bg-white py-[60px] lg:pt-[85px] lg:pb-[45px]">
      <div className="container mx-auto max-w-[1010px]">
        <h2 className="text-[27px] leading-[30px] lg:leading-normal lg:text-[42px] mb-[30px] text-center">
          {title}
        </h2>
        <p
          className="text-[16px] lg:text-[19px] md:leading-[33px] text-[#707181] text-center mb-[45px]"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <motion.div className="schema flex flex-col items-center">
          <div>
            <Image src={shema?.mediaItemUrl} width="945" height="424" alt="" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Whatmitech
