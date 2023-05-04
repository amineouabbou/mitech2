import Image from 'next/image'
import React from 'react'
import List2 from '../../Ui/List2'

const PlugAndImprove = ({ data }) => {
  const { photo, advantagesRepeater, watermark, mapBackground } = data
  return (
    <div
      style={{ backgroundImage: `url(${mapBackground.mediaItemUrl})` }}
      className="relative bg-[url('/delete/plug-map.png')] bg-no-repeat bg-contain lg:bg-[length:698px_354px] bg-[left_50%_bottom_60px] lg:bg-[left_77%_bottom_50px]"
    >
      <div className="hidden absolute top-0 bottom-0 left-0 right-0"></div>
      <div className="flex flex-col lg:flex-row mb-[90px] lg:mb-0">
        {photo && (
          <div className="bloc-img relative h-[300px] lg:h-[512px] lg:w-[370px] lg:mr-[65px] order-2 lg:order-1">
            <Image
              alt=""
              width={200}
              height={200}
              src={photo.mediaItemUrl}
              className="object-contain lg:object-none"
            />
          </div>
        )}

        <div className="bloc pt-[20px] z-10 order-1 lg:order-2 mb-[30px] lg:mb-0">
          <List2 className="max-w-[550px]" data={advantagesRepeater} />
        </div>
      </div>
      <div className="font-semibold text-[19px] leading-[25px] lg:text-[36px] text-primary lg:leading-[42px] flex flex-col items-end px-[10px] pt-[60px] lg:p-0 lg:mt-[40px]">
        <div dangerouslySetInnerHTML={{ __html: watermark }} />
      </div>
    </div>
  )
}

export default PlugAndImprove
