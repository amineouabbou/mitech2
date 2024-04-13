import Image from 'next/image'
import React from 'react'
import { twclsx } from '../../../libs/twclsx'

const OurVision = ({ data }) => {
  const { photo, listPointsRepeater } = data
  return (
    <div className="lg:flex w-full">
      <div className="bloc lg:min-w-[440px] max-w-[500px] text-[14px] lg:text-[17px] text-[#636e88] ">
        {listPointsRepeater.map((item, index) => (
          <div
            key={index}
            className={twclsx('item flex items-start has-ul-dots-gray', {
              ' hidden': index === 1,
            })}
          >
            {/* <div className="min-w-[18px] mr-[15px]">
              <span className="relative top-[2px]">
                <Image
                  src="/icons/check-orange.svg"
                  width={18}
                  height={13}
                  alt="icon"
                />
              </span>
            </div> */}
            <div
              className="[&>p]:font-medium [&>ul]:leading-[27px]  [&>p]:mb-[30px]  [&>ul]:mb-[30px]"
              dangerouslySetInnerHTML={{ __html: item.texte }}
            />
          </div>
        ))}
      </div>

      {photo && (
        <div className="bloc-img lg:min-w-[417px] max-w-[417px] ml-auto mt-[50px] lg:-mt-[105px]">
          <span>
            <Image width={417} height={510} alt="" src={photo.mediaItemUrl} />
          </span>
        </div>
      )}
    </div>
  )
}

export default OurVision
