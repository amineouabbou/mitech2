import Image from 'next/image'
import React from 'react'
import Button from '../html/Button'

const WorldFastPay = ({ data }) => {
  return (
    <section className="bg-[#f3f4f6] py-[60px] lg:pt-[55px] lg:pb-[50px]">
      <div className="container mx-auto flex flex-col items-end lg:max-w-[1214px]">
        <div className="lg:flex w-full">
          <div className="md:w-1/2 md:flex flex-col mb-7 lg:mb-0">
            <div className="relative w-full md:w-[577px] h-[380px] lg:h-[501px]">
              <div className="box bg-white drop-shadow-[0px_0px_26px_rgba(112,123,132,0.2)] h-[50px] lg:h-[66px] w-[240px] lg:w-[291px] rounded-[10px] absolute mx-auto bottom-[calc(100%_+_30px)] lg:top-0 md:left-[135px] z-10 flex flex-col justify-center px-[17px]">
                <div className="ball bg-primary rounded-full h-[9px] w-[9px] absolute right-[15px] top-auto bottom-auto"></div>
                <div className="dots w-[2px] h-[270px] bg-[url('/bgs/vertical-dots.png')] bg-contain  absolute right-[18px] bottom-[calc(100%_-_23px)] bg-[center_bottom_-100px] bg-no-repeat"></div>
                <div>
                  <Image
                    src="/logos/WP_.svg"
                    width="225"
                    height="19"
                    className="w-[190px] h-[15] lg:w-[225px] lg:h-[19]"
                    alt=""
                  />
                </div>
              </div>
              <Image
                src={data?.illustration?.mediaItemUrl}
                fill
                alt=""
                className="object-contain"
              />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col items-end justify-center">
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

export default WorldFastPay
