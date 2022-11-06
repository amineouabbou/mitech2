import React from 'react'
import { motion } from 'framer-motion'

import Vericalbox from '../Ui/Others/Vericalbox'
import { titesStagger } from '../../data/useVariants'

const Whymitech = ({ data }) => {
  return (
    <section className="bg-[#f3f4f6] md:py-[50px]">
      <div className="container mx-auto md:max-w-[985px]">
        <h2 className="text-center text-[39px] leading-[50px] font-medium mb-[55px]">
          {data?.title}
        </h2>

        <motion.div
          variants={titesStagger()}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="md:grid md:grid-cols-3 gap-x-[22px] gap-y-[22px]"
        >
          {data?.advantagesListRep.map((item, index) => (
            <Vericalbox
              key={index}
              icone={item?.icone?.mediaItemUrl}
              title={item?.label}
              description={item?.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Whymitech
