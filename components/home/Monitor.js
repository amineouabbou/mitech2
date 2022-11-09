import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import {
  globaleasing,
  titesStagger,
  titlesAnimation,
} from '../../data/useVariants'

const Monitor = ({ data }) => {
  return (
    <section className="bg-[#fcfcfc] py-[60px] lg:pt-[80px] lg:pb-[100px] relative before:hidden lg:before:block before:h-[65px] before:bg-[#f3f4f6] lg:before:content-[''] before:absolute before:bottom-0 before:w-full overflow-hidden">
      <div className="overlay absolute top-0 bottom-0 left-0 right-0 m-auto hidden md:flex flex-col items-end md:pt-[82px]">
        <motion.div
          className="w-1/2	relative h-full"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 2.5,
              delay: 0.2,
              ease: globaleasing,
            },
          }}
          viewport={{ once: true }}
        >
          <div className="-right-[55px] h-full w-full relative">
            <Image src="/bgs/console.png" layout="fill" alt="" />
          </div>
        </motion.div>
      </div>
      <div className="container mx-auto">
        <motion.div
          variants={titesStagger()}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bloc"
        >
          <motion.h2
            variants={titlesAnimation}
            className="text-[31px] leading-[40px] lg:text-[39px] lg:leading-[50px] font-medium mb-[45px]"
          >
            <span dangerouslySetInnerHTML={{ __html: data?.title }}></span>
          </motion.h2>

          <motion.div
            className="pl-[20px] lg:pl-[35px]"
            variants={titlesAnimation}
          >
            <ul className="text-[16px] lg:text-[18px] mb-[50px] lb:mb-[85px]">
              {data?.pointsList.map((item, index) => (
                <li
                  className="relative mb-[14px] last:mb-0 before:block before:h-[9px] before:w-[9px] before:bg-[#a0a1b3] before:rounded before:absolute before:top-0 before:bottom-0 before:left-0 before:my-auto pl-[20px]"
                  key={index}
                  dangerouslySetInnerHTML={{ __html: item.label }}
                ></li>
              ))}
            </ul>

            <div className="logos flex items-center">
              {data?.logos.map((item, index) => (
                <div className="relative mr-[45px] last:mr-0" key={index}>
                  <Image
                    src={item.mediaItemUrl}
                    width="156px"
                    height="30px"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Monitor
