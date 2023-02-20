import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SEO from '../components/SEO'
import Getintouch from '../components/Ui/Getintouch'
import SubTitle from '../components/Ui/Heroinner/SubTitle'
import Title from '../components/Ui/Heroinner/Title'
import HeroinnerSimple from '../components/Ui/HeroinnerSimple'
import { twclsx } from '../libs/twclsx'

const DATA = [
  {
    label: 'IOS and android App',
    options: [true, false],
  },
  {
    label: 'Fee pricing',
    options: [true, true],
  },
  {
    label: 'Forex pricing',
    options: [true, true],
  },
  {
    label: 'Account aggregation',
    options: [true, true],
  },
  {
    label: 'Collecting methods',
    options: [true, false],
  },
  {
    label: 'In app ads ',
    options: [true, true],
  },
  {
    label: 'Loyalty program',
    options: ['Built-in', true],
  },
  {
    label: 'eKYC',
    options: ['Built-in', true],
  },
  {
    label: 'AML',
    options: ['Built-in', true],
  },
]

const Pricing = () => {
  return (
    <>
      <SEO />
      <HeroinnerSimple
        title={<Title title="Pricing" />}
        subtitle={
          <SubTitle subtitle="We offer a pricing relevant to your need and use of Mitech" />
        }
        description="A customized offer means a customized price"
      />
      <div className="container mx-auto">
        <main className="bg-white min-h-[500px] drop-shadow-[0px_0px_25px_rgba(73,83,100,0.12)] p-[20px] lg:p-[65px] relative z-10 -mt-[70px] lg:-mt-[125px]">
          <div className="text-[18px] text-center leading-[35px] text-[#737483] mb-[45px]">
            Pricing depends on which product and services your need for your
            specific project.
            <br />
            Please{' '}
            <Link href="/contact">
              <span className="text-primary underline hover:text-secondary cursor-pointer">
                contact our sales
              </span>
            </Link>{' '}
            team to learn more about how we price our offer.
          </div>

          <div className="table-pricing">
            <div className="head grid grid-cols-3">
              <div className=""></div>
              <div className="col-span-2">
                <div className="grid grid-cols-2 border-[#dde0e7] rounded-[5px] rounded-b-none border-t-[1px] border-l-[1px] border-r-[1px]">
                  <div className="border-r-[1px] border-[#dde0e7] h-[86px] flex flex-col justify-center items-center">
                    <span>
                      <Image
                        alt="logo"
                        height="24"
                        width="189"
                        src="/logos/front-brand.svg"
                      />
                    </span>
                  </div>
                  <div className="h-[86px] flex flex-col justify-center items-center">
                    <span>
                      <Image
                        alt="logo"
                        height="24"
                        width="189"
                        src="/logos/open-remit.svg"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="box border-[1px] border-[#e1e4ea]">
              {DATA.map((item, index) => (
                <div
                  key={index}
                  className={twclsx(
                    ' border-b-[1px] border-[#dde0e7]',
                    'item grid grid-cols-3 ',
                    'h-[70px] px-[25px]',
                    'odd:bg-[#f3f4f6] even:bg-white',
                    'text-[13.9px] text-[#7b86a2] tracking-[0.03em] font-medium'
                  )}
                >
                  <div className="font-medium text-[16.7px] tracking-[0.03em] flex flex-col justify-center text-[#242754]">
                    <span>{item.label}</span>
                  </div>

                  {item.options.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center"
                    >
                      {item == true && (
                        <span>
                          <Image
                            alt=""
                            src="/icons/check-mark.svg"
                            height="16"
                            width="22"
                          />
                        </span>
                      )}

                      {item == false && <span>-</span>}

                      {item == 'Built-in' && <span className="">{item}</span>}
                    </div>
                  ))}
                </div>
              ))}

              <div className="head grid grid-cols-3">
                <div className="font-medium text-[16.7px] tracking-[0.03em] flex flex-col justify-center"></div>
                <div className="flex flex-col justify-center items-center py-[25px]">
                  <span className="text-[15.28px] text-[#232753] text-center leading-[20px] font-medium">
                    Custom Price based on <br /> the configurations
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center py-[25px]">
                  <span className="text-[15.28px] text-[#232753] text-center leading-[20px] font-medium">
                    Custom Price based on <br /> the configurations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Getintouch className="pt-[70px]" />
    </>
  )
}

export default Pricing
