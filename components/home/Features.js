import React from 'react'
import { motion } from 'framer-motion'

import Horizontalbox from '../Ui/Others/Horizontalbox'
import { titesStagger, titlesAnimation } from '../../data/useVariants'
import Button from '../html/Button'

const Features = ({ data }) => {
  return (
    <section className="bg-[#f3f4f6] py-[60px] lg:py-[65px]">
      <div className="container mx-auto">
        {data.featuredListRep.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="text-[25px] lg:text-[28px] leading-[32px] lg:leading-[48px] text-center mb-[45px] [&>p>strong]:font-semibold"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />

              <motion.div
                variants={titesStagger()}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid lg:grid-cols-3 lg:gap-x-[20px] gap-y-[13px] lg:gap-y-[30px] mb-[45px]"
              >
                {item.listeRep.map((item, index) => (
                  <Horizontalbox
                    key={index}
                    icon={item.iconGroup?.icone?.mediaItemUrl}
                    title={item.title}
                  />
                ))}
              </motion.div>
            </div>
          )
        })}

        <motion.div
          variants={titlesAnimation}
          initial="initial"
          animate="animate"
          whileInView="animate"
          viewport={{ once: true }}
          className="read-more flex flex-col items-center"
        >
          <Button url="/features" title="Discover more" />
        </motion.div>
      </div>
    </section>
  )
}

export default Features
