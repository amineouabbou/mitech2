import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BoxWithShadow = () => {
  return (
    <div className="box bg-[#fcfcfc] pt-[44px] pb-[38px] px-[30px] drop-shadow-[0px_0px_20px_rgba(115,115,121,0.11)] rounded-[15px]">
      <div className="img-box flex flex-col justify-center items-center mb-[50px]">
        <div>
          <Image src="/logos/OR1.svg" height="47" width="110" alt="" />
        </div>
      </div>
      <div className="text-[15px] leading-[1.52rem] font-poppins font-normal text-[#4b4c65] mb-[30px] text-center">
        APIs and Web-views for simple integration in your existing apps and
        workflows
      </div>
      <div className="text-center">
        <Link
          className="text-[14px] font-poppins font-normal leading-[16px] text-primary underline block underline-offset-4 hover:text-secondary"
          href="/open-remit"
        >
          Discover Open Remit
        </Link>
      </div>
    </div>
  )
}

export default BoxWithShadow
