import Image from 'next/image'
import React from 'react'

const IntroAbout = ({ data }) => {
  const { description, photo } = data
  return (
    <div className="grid lg:grid-cols-2 gap-x-10 w-full lg:px-[45px] mt-[30px] lg:mt-0">
      <div
        className="bloc bloc-Solution-pres max-w-[518px] tracking-[0.02em] lg:leading-[24px] lg:text-[17px] text-[#737483] flex flex-col justify-center"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      {photo && (
        <div className="bloc-img flex flex-col items-end mt-[30px] lg:mt-0">
          <div>
            <Image alt="OC" height={203} width={484} src={photo.mediaItemUrl} />
          </div>
        </div>
      )}
    </div>
  )
}

export default IntroAbout
