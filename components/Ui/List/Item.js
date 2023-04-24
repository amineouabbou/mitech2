import Image from 'next/image'
import React from 'react'

const Item = ({ data }) => {
  return (
    <div className="leading-normal lg:text-[17px] lg:leading-[23px] text-lightblue flex items-start mb-[20px] last:mb-0">
      <span className="mr-[20px] min-w-[17px]">
        <Image
          alt=""
          width={17}
          height={12}
          className="block"
          src="/icons/check-mark-orange.png"
        />
      </span>
      <div
        className="text-[14px] lg:text-[16px] text-[#737587] leading-[24px] lg:leading-[26px] [&>p>strong]:font-semibold"
        dangerouslySetInnerHTML={{ __html: data.texte }}
      />
    </div>
  )
}

export default Item
