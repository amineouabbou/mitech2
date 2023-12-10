import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BoxWithShadow = ({ data }) => {
  const { logo, description, discover, logoSize } = data || {}

  console.log('logoSize', logoSize)

  const getLogoDimensions = (str) => {
    if (!str) return
    const splitted = str.split('/')
    return {
      width: splitted[0],
      height: splitted[1],
    }
  }

  const { width, height } = getLogoDimensions(logoSize) || {}

  return (
    <div className="box bg-[#fcfcfc] pt-[44px] pb-[38px] px-[18px] drop-shadow-[0px_0px_20px_rgba(115,115,121,0.11)] rounded-[15px] flex flex-col">
      <div className="img-box flex flex-col justify-center items-center mb-[50px]">
        <div>
          <Image
            src={logo?.mediaItemUrl}
            width={width || 110}
            height={height || 47}
            alt=""
          />
        </div>
      </div>
      <div className="text-[15px] leading-[1.52rem] font-poppins font-normal text-[#4b4c65] mb-[30px] text-center grow">
        {description}
      </div>
      <div className="text-center">
        <Link
          className="text-[14px] font-poppins font-normal leading-[16px] text-primary underline block underline-offset-4 hover:text-secondary"
          href={`/${discover?.slug}`}
        >
          {discover?.label}
        </Link>
      </div>
    </div>
  )
}

export default BoxWithShadow
