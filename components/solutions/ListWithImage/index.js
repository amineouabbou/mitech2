import Image from 'next/image'
import React from 'react'
import List2 from '../../Ui/List2'

const ListWithImage = ({ data }) => {
  return (
    <div className="lg:flex items-center">
      <List2 className="max-w-[395px] " data={data.advantagesRepeater} />
      <div className="bloc-img ml-auto h-[400px] lg:h-[408px] lg:w-[540px] relative mt-10 lg:mt-0 hidden lg:block">
        <Image
          alt=""
          width={200}
          height={200}
          src={data.ilustration.mediaItemUrl}
          layout="fill"
          className="object-contain"
        />
      </div>

      <div className=" relative -right-[20px]">
        <div className="h-[330px] relative lg:hidden">
          <Image
            alt=""
            src="/delete/dash-solution-mobile.png"
            layout="fill"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default ListWithImage
