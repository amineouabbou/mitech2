import Image from 'next/image'
import React from 'react'
import Button from '../html/Button'

const Opencloud = ({ data }) => {
  return (
    <section className="bg-[#fff] py-[60px] lg:pt-[120px] lg:pb-[50px]">
      <div className="container mx-auto flex flex-col items-end">
        <div className="flex w-full">
          <div className="md:w-1/2 hidden md:flex flex-col">
            <div className="relative md:w-[502px] md:h-[427px]">
              <div className="box bg-white drop-shadow-[0px_0px_26px_rgba(112,123,132,0.2)] h-[65px] w-[245px] rounded-[10px] absolute mx-auto bottom-[calc(100%_+_10px)] md:left-[60px] right-0 z-10 flex flex-col justify-center items-center">
                <div className="ball bg-primary rounded-full h-[9px] w-[9px] absolute right-[15px] top-auto bottom-auto"></div>
                <div className="dots w-[2px] h-[270px] bg-[url('/bgs/vertical-dots.png')] bg-contain  absolute right-[18px] bottom-[calc(100%_-_23px)] bg-[center_bottom_-100px] bg-no-repeat"></div>
                <div>
                  <Image
                    src="/logos/open-cloud-gray.svg"
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
          <div className="md:w-1/2 flex flex-col items-end">
            <div className="bloc text-[#242e5e]">
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
                <Button url="/open-remit" title="Discover Open Remit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Opencloud
