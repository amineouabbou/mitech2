import Image from 'next/image'
import React from 'react'
import Button from '../html/Button'

const Frontbrand = ({ data }) => {
  return (
    <section className="bg-[#f3f4f6] py-[60px] lg:pb-[40px] relative before:block lg:before:h-[55px] lg:before:bg-white lg:before:content-[''] lg:before:absolute lg:before:top-0 lg:before:w-full">
      <div className="container mx-auto max-w-[1010px]">
        <div className="flex">
          <div className="md:w-3/5 flex flex-col justify-end md:pl-[40px]">
            <div className="bloc text-[#242e5e] md:pb-[60px] relative">
              <div className="dots w-[2px] h-[310px] bg-[url('/bgs/vertical-dots.png')] bg-contain  absolute right-0 left-0 translate-x-[7px] mx-auto -top-[404px] bg-[center_bottom_-120px] bg-no-repeat"></div>
              <div className="font-medium text-[15px] lg:text-[17px] tracking-[0.18em] text-primary uppercase mb-[15px]">
                {data?.subTitle}
              </div>
              <div className="font-semibold text-[28px] lg:text-[31px] leading-[36px] lg:leading-[43px]  tracking-[0.02em] mb-[35px]">
                <div dangerouslySetInnerHTML={{ __html: data?.title }} />
              </div>
              <p className="text-[18px] lg:text-[22px] leading-[28px] lg:leading-[32px] tracking-[0.02em] mb-[40px] lg:mb-[55px]">
                <span dangerouslySetInnerHTML={{ __html: data?.description }} />
              </p>
              <div className="read-more flex justify-center lg:justify-start">
                <Button title="Dicover Front Brand" />
              </div>
            </div>
          </div>
          <div className="md:w-2/5 hidden md:flex flex-col items-end translate-x-[155px]">
            <div className="relative md:w-[319px] md:h-[610px]">
              <div className="box bg-white drop-shadow-[0px_0px_26px_rgba(112,123,132,0.2)] h-[65px] w-[245px] rounded-[10px] absolute -left-[148px] top-[180px] z-10 flex flex-col justify-center items-center">
                <div className="ball bg-primary rounded-full h-[9px] w-[9px] absolute left-[15px] top-auto bottom-auto"></div>
                <div className="dots w-[2px] h-[310px] bg-[url('/bgs/vertical-dots.png')] bg-contain absolute left-[18px] bottom-[calc(100%_-_23px)] hidden lg:block"></div>
                <div>
                  <Image
                    src="/logos/front-brand-gray.svg"
                    width="180"
                    height="35px"
                    alt=""
                  />
                </div>
              </div>
              <Image
                src={data?.illustration?.mediaItemUrl}
                layout="fill"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Frontbrand
