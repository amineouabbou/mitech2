import Image from 'next/image'
import React from 'react'
import { twclsx } from '../../../libs/twclsx'

const Card = ({ data }) => {
  const { logo, title, detailsListRepeater } = data
  return (
    <div className="bg-white p-[25px] drop-shadow-[1px_0px_18px_rgba(0,0,0,0.07)] rounded-[10px] relative">
      <div className="vertical-line hidden lg:block w-[2px] h-[455px] absolute -top-[35px] my-auto -right-[28px] bg-contain bg-[url('/bgs/dashed-line-vertical.png')] bg-no-repeat"></div>
      <div className="w-0 h-0 border-x-[9.5px] border-t-[12px] border-b-0 border-x-transparent border-t-[#fff] border-b-transparent absolute -bottom-[12px] left-0 right-0 mx-auto"></div>
      <div className="icon flex flex-col justify-center items-center mb-[20px]">
        <div className="w-[75px] h-[75px] relative">
          <Image src={logo.mediaItemUrl} alt="" layout="fill" />
        </div>
      </div>
      <div className="text-[22px] lg:text-[19px] font-medium tracking-[0.03em] leading-[33px] mb-[20px] text-center">
        {title}
      </div>
      <ul className="text-[14px] text-[#7b86a2] tracking-[0.03em]">
        {detailsListRepeater.map((item, index) => (
          <li className="leading-[19px] mb-[15px] flex items-start" key={index}>
            <span className="mr-[10px] min-w-[12px]">
              <Image
                alt=""
                width={12}
                height={8}
                className="block"
                src="/icons/check-mark-orange.png"
              />
            </span>
            <span>{item.texte}</span>
          </li>
        ))}
      </ul>
      <div
        className={twclsx(
          'hidden lg:block ball w-[17px] h-[17px] rounded-full bg-secondary border-[2px] border-[#f1f2f4] absolute -bottom-[56px] left-0 right-0 mx-auto',
          {
            '-bottom-[36px]': data.id == 2,
          }
        )}
      ></div>
    </div>
  )
}

export default Card
