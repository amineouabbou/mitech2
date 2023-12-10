import Image from 'next/image'
import React from 'react'
import Button from '../html/Button'

const OpenRemit = ({ data }) => {
  return (
    <section className="bg-[#f3f4f6] py-[60px] lg:pt-[80px] lg:pb-[25px]">
      <div className="container mx-auto flex flex-col items-end">
        <div className="lg:flex w-full">
          <div className="md:w-1/2 md:flex flex-col mb-7 lg:mb-0">
            <div className="relative w-full md:w-[544px] h-[380px] lg:h-[496px]">
              <div className="box bg-white drop-shadow-[0px_0px_26px_rgba(112,123,132,0.2)] h-[50px] lg:h-[65px] w-[190px] lg:w-[258px] rounded-[10px] absolute mx-auto top-0 lg:top-[36px] md:left-[150px] z-10 flex flex-col justify-center items-center">
                <div className="ball bg-primary rounded-full h-[9px] w-[9px] absolute right-[15px] top-auto bottom-auto"></div>
                <div className="dots w-[2px] h-[290px] bg-[url('/bgs/vertical-dots2.png')] bg-contain  absolute right-[18px] bottom-[calc(100%_-_23px)] bg-[center_bottom_-120px] lg:bg-[center_bottom_0] bg-no-repeat"></div>
                <div>
                  <Image
                    src="/logos/OR_.svg"
                    className="w-[130px] lg:w-[170px]"
                    width="170"
                    height="23"
                    alt=""
                  />
                </div>
              </div>
              <Image
                // src={data?.illustration?.mediaItemUrl}
                src="/delete/or-illustration.png"
                fill
                alt=""
                className="object-contain"
              />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col lg:pt-[40px] items-end">
            <div className="bloc text-[#242e5e]">
              <div className="font-medium text-[15px] lg:text-[17px] tracking-[0.18em] text-primary uppercase mb-[15px]">
                {data?.subTitle}
              </div>
              <div className="font-semibold text-[28px] lg:text-[31px] leading-[36px] lg:leading-[43px]  tracking-[0.02em] mb-[35px]">
                <div dangerouslySetInnerHTML={{ __html: data?.title }} />
              </div>
              <div
                className="text-[18px] lg:text-[22px] leading-[28px] lg:leading-[32px] tracking-[0.02em] mb-[40px] lg:mb-[55px] [&>p>strong]:font-medium"
                dangerouslySetInnerHTML={{ __html: data?.description }}
              />
              {data?.cta && (
                <div className="read-more flex justify-center lg:justify-start">
                  <Button url={data?.cta?.slug} title={data?.cta?.label} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OpenRemit
