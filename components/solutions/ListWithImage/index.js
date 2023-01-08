import Image from 'next/image'
import React from 'react'
import List2 from '../../Ui/List2'

const ListWithImage = ({ data }) => {
  return (
    <div className="flex items-center">
      <List2 className="max-w-[395px] " data={data} />
      <div className="bloc-img ml-auto h-[408px] w-[540px] relative">
        <Image
          alt=""
          width={200}
          height={200}
          src="/delete/dash-solution.png"
          layout="fill"
        />
      </div>
    </div>
  )
}

export default ListWithImage
