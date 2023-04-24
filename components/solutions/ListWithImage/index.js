import Image from 'next/image'
import React from 'react'
import List2 from '../../Ui/List2'

const ListWithImage = ({ data }) => {
  return (
    <div className="lg:flex items-center">
      <List2 className="max-w-[395px] " data={data.advantagesRepeater} />
      <div className="bloc-img ml-auto h-[200px] lg:h-[408px] lg:w-[540px] relative mt-10 lg:mt-0">
        <Image
          alt=""
          width={200}
          height={200}
          src={data.ilustration.mediaItemUrl}
          layout="fill"
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default ListWithImage
