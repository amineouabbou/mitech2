import Image from 'next/image'
import React from 'react'

const Item = ({ data }) => {
  return (
    <div className="text-[17px] leading-[23px] text-lightblue flex items-start mb-[20px] last:mb-0">
      <span className="mr-[20px] min-w-[17px]">
        <Image
          alt=""
          width={17}
          height={12}
          className="block"
          src="/icons/check-mark-orange.png"
        />
      </span>
      <div>
        <span className="font-semibold">{data.title} : </span>
        {data.description}
      </div>
    </div>
  )
}

export default Item
