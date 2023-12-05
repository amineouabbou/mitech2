import React from 'react'
import { motion } from 'framer-motion'

import Vericalbox from '../Ui/Others/Vericalbox'
import { titesStagger } from '../../data/useVariants'

const Whymitech = ({ data }) => {
  return (
    <section className="bg-[#f3f4f6] py-[60px] lg:pt-[50px] lg:pb-[100px]">
      <div className="container mx-auto md:max-w-[985px]">
        <h2 className="text-center text-[31px] leading-[40px] lg:text-[39px] lg:leading-[50px] font-medium mb-[55px]">
          {data?.title}
        </h2>

        <motion.div
          variants={titesStagger()}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-x-[22px] gap-y-[15px] lg:gap-y-[22px]"
        >
          {data?.advantagesListRep.map((item, index) => (
            <Vericalbox
              key={index}
              icone={{ url: item?.icone?.mediaItemUrl }}
              title={{ title: item?.label }}
              description={item?.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Whymitech
