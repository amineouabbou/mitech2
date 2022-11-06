import React from 'react'
import { motion } from 'framer-motion'

import Horizontalbox from '../Ui/Others/Horizontalbox'
import { titesStagger, titlesAnimation } from '../../data/useVariants'
import Button from '../html/Button'

const Features = ({ data }) => {
  return (
    <section className="bg-[#f3f4f6] md:py-[65px]">
      <div className="container mx-auto">
        {data.featuredListRep.map((item, index) => {
          return (
            <div key={index}>
              <div className="text-[28px] leading-[48px] text-center mb-[45px]">
                <span dangerouslySetInnerHTML={{ __html: item.title }} />
              </div>

              <motion.div
                variants={titesStagger()}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="md:grid md:grid-cols-3 gap-x-[20px] gap-y-[30px] mb-[45px]"
              >
                {item.listeRep.map((item, index) => (
                  <Horizontalbox
                    key={index}
                    icon={item.iconGroup?.icone?.mediaItemUrl}
                    size={item.iconGroup?.size}
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
          <Button title="Discover more" />
        </motion.div>
      </div>
    </section>
  )
}

export default Features
