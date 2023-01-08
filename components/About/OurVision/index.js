import Image from 'next/image'
import React from 'react'

const OurVision = () => {
  return (
    <div className="flex w-full">
      <div className="bloc min-w-[440px] max-w-[440px] lg:text-[17px] text-[#636e88]">
        <div className="item mb-[30px] flex items-start has-ul-dots-gray">
          <div className="min-w-[18px] mr-[15px]">
            <span className="relative top-[2px]">
              <Image
                src="/icons/check-orange.svg"
                width={18}
                height={13}
                alt="icon"
              />
            </span>
          </div>
          <div>
            <p className="font-medium flex items-top leading-[27px]">
              We believe in the sustainability power of digital remittance :
            </p>
            <ul className="leading-[27px]">
              <li>As it allows for lower costs</li>
              <li>More compliance</li>
              <li>Greater reach</li>
            </ul>
          </div>
        </div>
        <div className="item flex items-start">
          <div className="min-w-[18px] mr-[15px]">
            <span className="relative top-[2px]">
              <Image
                src="/icons/check-orange.svg"
                width={18}
                height={13}
                alt="icon"
              />
            </span>
          </div>
          <div>
            <p className="font-medium leading-[27px]">
              A world where every local institutions can propose its own
              remittance offer, to promote innovation and sustainability rather
              than keeping the status quo
            </p>
          </div>
        </div>
      </div>

      <div className="bloc-img min-w-[417px] max-w-[417px] ml-auto -mt-[105px]">
        <span>
          <Image
            width={417}
            height={510}
            alt=""
            src="/bgs/about-3persons.png"
          />
        </span>
      </div>
    </div>
  )
}

export default OurVision
