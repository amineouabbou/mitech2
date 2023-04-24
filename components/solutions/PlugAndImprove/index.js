import Image from 'next/image'
import React from 'react'
import List2 from '../../Ui/List2'

const PlugAndImprove = ({ data }) => {
  const { photo, advantagesRepeater, watermark, mapBackground } = data
  return (
    <div
      style={{ backgroundImage: `url(${mapBackground.mediaItemUrl})` }}
      className="relative bg-[url('/delete/plug-map.png')] bg-no-repeat bg-contain lg:bg-[length:698px_354px] bg-[left_50%_top_50px] lg:bg-[left_77%_bottom_50px]"
    >
      <div className="hidden absolute top-0 bottom-0 left-0 right-0"></div>
      <div className="lg:flex">
        {photo && (
          <div className="bloc-img relative h-[265px] lg:h-[512px] lg:w-[370px] lg:mr-[65px] mb-6 lg:mb-0">
            <Image
              alt=""
              width={200}
              height={200}
              src={photo.mediaItemUrl}
              layout="fill"
              className="object-contain lg:object-none"
            />
          </div>
        )}

        <div className="bloc pt-[20px] z-10">
          <List2 className="max-w-[550px]" data={advantagesRepeater} />
        </div>
      </div>
      <div className="font-semibold text-[19px] leading-[25px] lg:text-[36px] text-primary lg:leading-[42px] flex flex-col items-end mt-[40px]">
        <div dangerouslySetInnerHTML={{ __html: watermark }} />
      </div>
    </div>
  )
}

export default PlugAndImprove
