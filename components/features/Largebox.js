import Image from 'next/image'
import React from 'react'

const Largebox = ({ icon, title, description, size }) => {
  return (
    <>
      <div className="flex items-center md:px-[20px] md:mb-[60px] first:mt-[40px]">
        <div className="ball min-w-[87px] h-[87px] w-[87px] rounded-full flex flex-col justify-center items-center">
          <div
            className={`${
              size === 'small' ? `h-[63%] w-[63%]` : 'h-[80%] w-[80%]'
            } relative`}
          >
            <Image src={icon} alt="" layout="fill" />
          </div>
        </div>
        <div className="md:ml-[60px]">
          <div className="text-[22px] leading-[37px] font-medium mb-[17px]">
            {title}
          </div>
          <p className="text-[16px] leading-[23px] text-[#46506f]">
            {description}
          </p>
        </div>
      </div>
    </>
  )
}

export default Largebox
