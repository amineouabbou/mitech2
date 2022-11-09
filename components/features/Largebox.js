import Image from 'next/image'
import React from 'react'

const Largebox = ({ icon, title, description, size }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:px-[20px] mb-[50px] lg:mb-[60px] first:mt-[40px]">
        <div className="ball min-w-[87px] h-[87px] w-[87px] rounded-full flex flex-col justify-center items-center">
          <div
            className={`${
              size === 'small' ? `h-[63%] w-[63%]` : 'h-[80%] w-[80%]'
            } relative mb-[20px] lg:mb-0`}
          >
            <Image src={icon} alt="" layout="fill" />
          </div>
        </div>
        <div className="md:ml-[60px]">
          <div className="text-[18px] leading-[27px] lg:text-[22px] lg:leading-[37px] font-medium mb-[17px] text-center lg:text-left">
            {title}
          </div>
          <p className="lg:text-[16px] leading-[23px] text-[#46506f] text-justify lg:text-inherit">
            {description}
          </p>
        </div>
      </div>
    </>
  )
}

export default Largebox
