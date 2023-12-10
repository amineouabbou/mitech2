import Image from 'next/image'
import React from 'react'
import Button from '../html/Button'

const DataAnays = ({ data }) => {
  return (
    <section className="bg-[#fcfcfc] py-[60px] lg:pt-[80px] lg:pb-[110px] relative ">
      <div className="container mx-auto max-w-[1150px]">
        <div className="grid lg:grid-cols-12">
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-end order-2 lg:order-1 lg:pl-[65px]">
            <div className="bloc text-[#242e5e] relative">
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
          <div className="col-span-12 lg:col-span-5 order-1 lg:order-2 mb-7 lg:mb-0">
            <div className="relative w-full md:w-[462px] h-[300px] md:h-[403px] ">
              <div className="box bg-white drop-shadow-[0px_0px_26px_rgba(112,123,132,0.2)] h-[50px] lg:h-[65px] w-[235px] lg:w-[248px] rounded-[10px] absolute -top-[30px] left-[0] lg:left-[15px] lg:-top-[25px] z-10 flex flex-col justify-center items-center">
                <div className="ball bg-primary rounded-full h-[9px] w-[9px] absolute left-[15px] top-auto bottom-auto"></div>
                <div className="dots w-[2px] h-[310px] bg-[url('/bgs/vertical-dots.png')] bg-no-repeat bg-cover bg-[center_bottom_-150px] absolute left-[18px] bottom-[calc(100%_-_23px)]"></div>
                <div>
                  <Image src="/logos/DA_.svg" height="22" width="173" alt="" />
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
        </div>
      </div>
    </section>
  )
}

export default DataAnays
