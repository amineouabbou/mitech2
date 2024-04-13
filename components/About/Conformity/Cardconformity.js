import Image from 'next/image'
import React from 'react'

const Cardconformity = ({ data }) => {
  const { icone, title, descriptions, preDescription, photo } = data
  return (
    <div className="card border-[1px] border-[#dfe0e4] py-[0]  rounded-[10px] lg:flex items-center">
      <div className="bloc grow max-w-[690px] lg:pl-[50px] pt-[35px] pb-0 px-[25px] lg:px-0 lg:py-[30px]">
        <div className="mb-[50px] lg:mb-[15px] flex items-center">
          {icone && (
            <div className="mr-[15px] w-[35px] h-[35px] lg:w-[46px] lg:h-[46px]">
              <Image alt="" src={icone.mediaItemUrl} width={46} height={46} />
            </div>
          )}

          <h2 className="text-[22px] lg:text-[26px] font-semibold text-primary leading-[33px] tracking-[0.03em]">
            {title}
          </h2>
        </div>
        <div className="liste lg:pl-[30px]">
          {preDescription && <div className="mb-[10px]">{preDescription}</div>}

          {descriptions &&
            descriptions.map((item, index) => (
              <div
                key={index}
                className="flex items-start text-[15px] mb-[8px]"
              >
                <div className="min-w-[18px] mr-[15px]">
                  <span className="relative top-[1px]">
                    <Image
                      src="/icons/check-orange.svg"
                      width={18}
                      height={13}
                      alt="icon"
                    />
                  </span>
                </div>

                <div className="leading-[21px] tracking-[0.025em]">
                  {item.texte}
                </div>
              </div>
            ))}
        </div>
      </div>
      {photo && (
        <div className="bloc-img min-w-[290px] max-w-[290px] flex flex-col items-end ml-auto">
          <Image
            alt=""
            width={290}
            height={290}
            className="object-contain"
            src={photo.mediaItemUrl}
          />
        </div>
      )}
    </div>
  )
}

export default Cardconformity
