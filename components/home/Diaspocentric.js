import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { titesStagger, titlesAnimation } from '../../data/useVariants'
import Getintouch from '../Ui/Getintouch'
import Newsletter from './Newsletter'

const Diaspocentric = ({ data }) => {
  return (
    <>
      <Newsletter />
      <section className="bg-white md:pt-[60px]">
        <div className="container mx-auto">
          <div className="md:flex">
            <div className="w-3/5 md:pr-[25px]">
              <motion.div
                className="images md:flex w-full relative opacity-90"
                variants={titesStagger(0.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative h-[434px] w-[255px] mt-[28px]"
                  variants={titlesAnimation}
                >
                  <Image src="/delete/face-3.png" layout="fill" alt="" />
                </motion.div>
                <motion.div
                  className="absolute h-[434px] w-[255px] left-0 md:top-[105px] right-0 mx-auto z-10"
                  variants={titlesAnimation}
                >
                  <Image src="/delete/face-2.png" layout="fill" alt="" />
                </motion.div>
                <motion.div
                  className="relative h-[434px] w-[255px] ml-auto"
                  variants={titlesAnimation}
                >
                  <Image src="/delete/face-1.png" layout="fill" alt="" />
                </motion.div>
              </motion.div>
            </div>

            <div className="md:w-2/5 md:flex flex-col items-end justify-center">
              <motion.div
                variants={titesStagger()}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bloc max-w-[420px]"
              >
                <motion.h2
                  variants={titlesAnimation}
                  className="text-[39px] leading-[50px] font-medium mb-[45px]"
                >
                  <span dangerouslySetInnerHTML={{ __html: data?.title }} />
                </motion.h2>
                <motion.p
                  variants={titlesAnimation}
                  className="text-[22px] leading-[33px] text-primary"
                >
                  <span
                    dangerouslySetInnerHTML={{ __html: data?.description }}
                  />
                </motion.p>
              </motion.div>
            </div>
          </div>

          <div className="mt-[150px]">
            <Getintouch />
          </div>
        </div>
      </section>
    </>
  )
}

export default Diaspocentric
