import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import BoxWithShadow from '../Ui/List2/BoxWithShadow'

const Whatmitech = ({ data }) => {
  const { title, description, logoMitech, blocsRep } = data

  return (
    <section className="what-mitech bg-[#fcfcfc] pb-[50px] pt-[60px] lg:pt-[85px] lg:pb-[100px] lg:bg-[url('/bgs/bg-why-mitech.jpg')] bg-cover bg-no-repeat">
      <div className="container mx-auto max-w-[980px]">
        <h2 className="text-[27px] leading-[30px] lg:leading-[2.59rem] lg:text-[42px] mb-[30px] text-center">
          {title}
        </h2>
        <p
          className="text-[16px] lg:text-[19px] md:leading-[33px] text-[#707181] text-center mb-[45px]"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <div className=" flex-col justify-center items-center hidden md:flex">
          <div>
            <Image
              src={logoMitech?.mediaItemUrl}
              width={191}
              className="w-[160px] lg:w-[191px]"
              height="41"
              alt=""
            />
          </div>
        </div>

        <div className="hidden md:grid px-8 sm:px-0 lg:grid-cols-4 gap-[20px] pt-[15px] lg:pt-[30px] mt-[12px] lg:bg-[url('/bgs/about-bg.png')] bg-[length:368px_306px] bg-no-repeat bg-[center_top]">
          {blocsRep.map((item, index) => (
            <BoxWithShadow data={item} key={index} />
          ))}
        </div>

        {/* <motion.div className="schema flex flex-col items-center">
          <div className="hidden lg:block">
            <Image src={shema?.mediaItemUrl} width="945" height="424" alt="" />
          </div>
          <div className="md:hidden relative w-full h-[910px]">
            <Image
              src={schemaMobile?.mediaItemUrl}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default Whatmitech
