import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SEO from '../components/SEO'
import Getintouch from '../components/Ui/Getintouch'
import SubTitle from '../components/Ui/Heroinner/SubTitle'
import Title from '../components/Ui/Heroinner/Title'
import HeroinnerSimple from '../components/Ui/HeroinnerSimple'
import { twclsx } from '../libs/twclsx'
import { GET_PRICING_PAGE } from '../queries'
import { getPageData } from '../utils'
import { getGetInTouchBlock } from '../Utilis'

export default function Pricing({ globalProps, data }) {
  const { sectionsOthers } = globalProps?.page?.translation?.ACFGlobal || []

  const { data: getIntouchBlock } = getGetInTouchBlock(sectionsOthers || [])

  const {
    title,
    pagesHero: { subTitle, intro },
    pagePricing,
  } = data.page.translation
  const { introduction, tableRepeater } = pagePricing

  return (
    <>
      <SEO title={title} />
      <HeroinnerSimple
        title={<Title title={title} />}
        subtitle={<SubTitle subtitle={subTitle} />}
        description={intro}
      />
      <div className="container mx-auto px-0 md:px-4">
        <main className="bg-white min-h-[500px] drop-shadow-[0px_0px_25px_rgba(73,83,100,0.12)] p-[20px] lg:p-[65px] relative z-10 -mt-[70px] lg:-mt-[125px]">
          <div
            className="text-[15px] lg:text-[18px] text-center leading-[27px] lg:leading-[35px] text-[#737483] mb-[45px]"
            dangerouslySetInnerHTML={{ __html: introduction }}
          />

          <div className="table-pricing">
            <div className="head grid lg:grid-cols-3 sticky lg:static top-[84px] bg-white z-10 border-b-[1px] border-[#e2e2e2]">
              <div></div>
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 border-[#dde0e7] rounded-[5px] rounded-b-none border-t-[1px] border-l-[1px] border-r-[1px]">
                  <div className="border-r-[1px] pt-[5px] px-[10px] lg:p-0 border-[#dde0e7] lg:h-[86px] flex flex-col justify-center items-center">
                    <span className="hidden lg:block">
                      <Image
                        alt="logo"
                        height="24"
                        width="189"
                        src="/logos/front-brand.svg"
                      />
                    </span>
                    <span className="block lg:hidden">
                      <Image
                        alt="logo"
                        height="51"
                        width="90"
                        src="/logos/fb-vertical.svg"
                      />
                    </span>
                  </div>
                  <div className="lg:h-[86px] pt-[5px]  px-[10px] lg:p-0 flex flex-col justify-center items-center">
                    <span className="hidden lg:block">
                      <Image
                        alt="logo"
                        height="24"
                        width="189"
                        src="/logos/open-remit.svg"
                      />
                    </span>
                    <span className="block lg:hidden">
                      <Image
                        alt="logo"
                        height="51"
                        width="90"
                        src="/logos/or-vertical.svg"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="box border-[1px] border-[#e1e4ea] border-t-0">
              {tableRepeater.map((item, index) => (
                <div
                  key={index}
                  className={twclsx(
                    ' border-b-[1px] border-[#dde0e7]',
                    'item grid lg:grid-cols-3 ',
                    'lg:h-[70px]',
                    'odd:bg-[#f3f4f6] even:bg-white',
                    '',
                    'text-[13.9px] text-[#7b86a2] tracking-[0.03em] font-medium'
                  )}
                >
                  <div className="font-medium text-center lg:text-left py-[15px] lg:py-0 px-[25px] lg:text-[16.7px] tracking-[0.03em] flex flex-col justify-center text-[#242754] ">
                    <span>{item.texte}</span>
                  </div>

                  <div className="grid grid-cols-2 lg:col-span-2  py-[10px] lg:p-0">
                    {item.options.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col justify-center items-center"
                      >
                        {item.label == 'yes' && (
                          <span>
                            <Image
                              alt=""
                              src="/icons/check-mark.svg"
                              height="16"
                              width="22"
                            />
                          </span>
                        )}

                        {item.label == 'no' && <span>-</span>}

                        {item.label == 'built-in' && (
                          <span className="">{item.label}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="head grid grid-cols-2 lg:grid-cols-3">
                <div className="font-medium text-[16.7px] tracking-[0.03em] hidden lg:flex flex-col justify-center"></div>
                <div className="flex flex-col justify-center items-center px-[20px] lg:px-0 py-[15px] lg:py-[25px] [&>span>br]:hidden [&>span>br]:lg:block ">
                  <span className="text-[14px] lg:text-[15.28px] text-[#232753] text-center leading-[20px] font-medium">
                    Custom Price based on <br /> the configurations
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center px-[20px] lg:px-0  py-[15px] lg:py-[25px] [&>span>br]:hidden [&>span>br]:lg:block">
                  <span className="text-[14px] lg:text-[15.28px] text-[#232753] text-center leading-[20px] font-medium">
                    Custom Price based on <br /> the configurations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Getintouch data={getIntouchBlock} className=" pt-[50px] lg:pt-[70px]" />
    </>
  )
}

export async function getServerSideProps({ locale }) {
  const data = await getPageData(GET_PRICING_PAGE, 197, locale)

  return {
    props: {
      data,
    },
  }
}
