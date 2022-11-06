import Image from 'next/image'
import React from 'react'

const Mtos = ({ data }) => {
  return (
    <section className="bg-white md:py-[85px]">
      <div className="container mx-auto md:max-w-[985px]">
        <h2
          className="text-center text-[39px] leading-[50px] font-medium mb-[22px] tracking-[0.04em]"
          dangerouslySetInnerHTML={{ __html: data?.title }}
        ></h2>

        <p className="tracking-[0.04em] text-[16px] leading-[34px] mb-[60px] text-center">
          {data?.description}
        </p>

        <div
          className={`box bg-white border-[#e4e6ec] md:px-[50px] border-[1px] py-[34px] md:flex`}
        >
          <div className="col md:flex">
            <div className="bloc flex grow flex-col items-center">
              <div className="text-[19px] text-primary font-medium tracking-[0.04em]">
                Diaspora
              </div>
              <div className="grow flex items-center">
                <div>
                  <Image
                    src="/icons/fat-arrow.png"
                    width={79}
                    height={282}
                    alt=""
                  />
                </div>
              </div>
              <div className="text-[19px] text-primary py-[10px] font-medium tracking-[0.04em] mt-auto">
                Beneficiary
              </div>
            </div>
          </div>
          <div className="col md:flex md:grow md:pl-[75px]">
            {data?.blocsListRep.map((item, index) => (
              <div
                key={index}
                className={`bloc min-w-[315px] max-w-[315px] ${
                  index === 1 ? 'ml-auto' : 'text-[#7f7f90]'
                }`}
              >
                <div className="flex items-center ml-[25px] mb-[40px]">
                  <div className="icone mr-[25px]">
                    <Image
                      src={item?.titleGroup?.icone?.mediaItemUrl}
                      width={38}
                      height={39}
                      alt=""
                    />
                  </div>
                  <div
                    className="uppercase leading-[28px] text-[22px] tracking-[0.04em]"
                    dangerouslySetInnerHTML={{
                      __html: item?.titleGroup?.title,
                    }}
                  ></div>
                </div>

                <ul className={`bg-white border-[#e3e5eb] text-[16px]`}>
                  {item?.listeRep.map((item, indx) => (
                    <li
                      key={indx}
                      className={`before:block before:h-[9px] before:w-[9px] ${
                        index === 0
                          ? 'before:bg-[#737386]'
                          : 'before:bg-secondary'
                      }  before:rounded before:absolute before:top-[6px] before:left-0 relative pl-[20px] leading-[22px] font-medium mb-[25px] last:m-0`}
                    >
                      {item?.label}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-center pt-[35px]">
                  <div
                    className="uppercase text-center leading-[28px] text-[22px] tracking-[0.04em]"
                    dangerouslySetInnerHTML={{
                      __html: item?.bottomText,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mtos
