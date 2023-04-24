import Image from 'next/image'
import React from 'react'

const IntroOc = ({ data }) => {
  const { description, photo } = data
  return (
    <div className="grid lg:grid-cols-2 gap-x-10 ">
      <div
        className="bloc bloc-Solution-pres leading-[28px] text-[14px] lg:text-[18px] text-[#737483] lg:pl-[20px] lg:pr-[50px] pt-[20px] [&>p]:mb-7"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      {photo && (
        <div className="bloc-img">
          <Image alt="OC" height={441} width={549} src={photo.mediaItemUrl} />
        </div>
      )}
    </div>
  )
}

export default IntroOc
