import React from 'react'

import SEO from '../components/SEO'
import Layout from '../components/Ui/Layout'
import Image from 'next/image'
import Button from '../components/html/Button'
import Horizontalbox from '../components/Ui/Others/Horizontalbox'
import Vericalbox from '../components/Ui/Others/Vericalbox'
import { FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'

export default function Home({ data }) {
  return (
    <Layout>
      <SEO />
      <div className="header py-[35px] bg-[#f3f4f6]">
        <div className="container mx-auto flex items-center">
          <div className="logo-box">
            <Image src="/logo.svg" width="193" height="41" alt="" />
          </div>

          <div className="right-side flex items-center ml-auto">
            <nav>
              <ul className="flex items-center">
                {[
                  'Products',
                  'Features',
                  'Use case',
                  'Pricing',
                  'About mitech',
                  'FAQ',
                ].map((item) => (
                  <li className="mx-[15px] px-[5px]" key={item}>
                    <a
                      className="hover:text-primary font-medium text-[15.28px]"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="md:ml-[25px]">
              <Button lowercase="true" title="Get Started" />
            </div>

            <div className="language-box md:ml-[35px]">
              <a href="#">
                <Image src="/icons/fr.png" width="29" height="28" alt="fr" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-section md:py-[90px] bg-[#f3f4f6] bg-[url('/bgs/bg-slide.png')] bg-[length:711px_542px] bg-no-repeat bg-[right_9rem_bottom_-4rem]">
        <div className="container mx-auto max-w-[1090px]">
          <div className="bloc">
            <h3 className="text-[42px] leading-[60px] font-medium mb-[25px]">
              Target directly the
              <span className="font-semibold"> diaspora</span>
              <br />
              through your own
              <span className="font-semibold"> brand</span>
            </h3>
            <ul className="text-[18px] mb-[45px]">
              {[
                `Free your institution from <span class="font-medium">MTOs intermediation</span>`,
                `Build your own branding, pricing, loyalty program …`,
                `Quick <span class="font-medium">go to market</span> through our licence and powerful <span class="font-medium">technology</span>`,
              ].map((item) => (
                <li
                  className="relative mb-[14px] last:mb-0 before:block before:h-[9px] before:w-[9px] before:bg-[#a0a1b3] before:rounded before:absolute before:top-0 before:bottom-0 before:left-0 before:my-auto md:pl-[20px]"
                  key={item}
                  dangerouslySetInnerHTML={{ __html: item }}
                ></li>
              ))}
            </ul>
            <div className="read-more">
              <Button title="Contact our team " />
            </div>
          </div>
        </div>
      </div>
      <section className="what-mitech bg-white py-[80px]">
        <div className="container mx-auto">
          <h2 className="md:text-[42px] mb-[30px] text-center">
            what mitech platform stands for ?
          </h2>
          <p className="text-[19px] leading-[33px] text-[#707181] text-center mb-[45px]">
            We bring transparent powerful technologies and efficient compliance
            <br />
            so you can focus on your strategy, and funds delivery
          </p>

          <div className="schema flex flex-col items-center">
            <div>
              <Image
                src="/delete/shema-pres.png"
                width="945"
                height="424"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f6] md:py-[100px]">
        <div className="container mx-auto">
          <div className="bloc text-[#242e5e]">
            <div className="font-medium text-[17px] tracking-[0.18em] text-primary uppercase mb-[15px]">
              Front brand solution
            </div>
            <div className="font-semibold text-[31px] leading-[43px]  tracking-[0.02em] mb-[35px]">
              Ready to use white label <br /> remittance app to build your own
              <br />
              cross-border remittance offer
            </div>
            <p className="text-[22px] leading-[32px] tracking-[0.02em] mb-[55px]">
              Free your institution from
              <span className="font-medium"> MTOs intermediation,</span>
              <br /> build your own branding, pricing, loyalty program
            </p>
            <div className="read-more">
              <Button title="Dicover Front Brand" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff] md:py-[100px]">
        <div className="container mx-auto flex flex-col items-end">
          <div className="bloc text-[#242e5e]">
            <div className="font-medium text-[17px] tracking-[0.18em] text-primary uppercase mb-[15px]">
              Open cloud solution
            </div>
            <div className="font-semibold text-[31px] leading-[43px]  tracking-[0.02em] mb-[35px]">
              Set of APIs and Web-views for <br />
              simple integration in your existing
              <br />
              apps and workflows
            </div>
            <p className="text-[22px] leading-[32px] tracking-[0.02em] mb-[55px]">
              Set of <span className="font-medium">APIs</span> and
              <span className="font-medium"> Web-views</span> for simple
              integration
              <br />
              in your existing apps and workflows
            </p>
            <div className="read-more">
              <Button title="Discover Open cloud" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f6] md:py-[65px]">
        <div className="container mx-auto">
          <div className="text-[28px] leading-[48px] text-center mb-[45px]">
            Cross-border remittance white label builder <br />
            empowered by rich
            <span className="font-semibold"> intuitive features</span>
          </div>

          <div className="grid grid-cols-3 gap-x-[20px] gap-y-[30px] mb-[45px]">
            <Horizontalbox
              icon="/icons/aggregation.svg"
              title="Account Aggregation"
            />
            <Horizontalbox
              icon="/icons/collecting.svg"
              title="Collecting methods"
            />
            <Horizontalbox
              icon="/icons/transaction-fee.svg"
              title="Transaction fee"
              size="medium"
            />
            <Horizontalbox icon="/icons/forex.svg" title="Forex" />

            <Horizontalbox
              icon="/icons/loyalty.svg"
              title="Loyalty program"
              size="medium"
            />

            <Horizontalbox icon="/icons/in-apps.svg" title="In-app Ads " />
          </div>

          <div className="text-[28px] leading-[48px] text-center mb-[30px]">
            with onboarded transparent
            <span className="font-semibold"> compliance tools</span>
          </div>

          <div className="grid grid-cols-3 gap-x-[20px] gap-y-[30px] mb-[45px]">
            <Horizontalbox icon="/icons/ekyc.svg" title="eKYC" size="small" />

            <Horizontalbox icon="/icons/aml.svg" title="AML" size="small" />

            <Horizontalbox
              icon="/icons/support.svg"
              title="Customer Support"
              size="small"
            />
          </div>

          <div className="read-more flex flex-col items-center">
            <Button title="Discover more" />
          </div>
        </div>
      </section>

      <section className="bg-[#fcfcfc] md:py-[75px]">
        <div className="container mx-auto">
          <div className="bloc">
            <h2 className="text-[39px] leading-[50px] font-medium mb-[45px]">
              Build and monitor your <br />
              remittance offer through the
              <br />
              mtech’s all in one console
            </h2>

            <div className="pl-[35px]">
              <ul className="text-[18px] mb-[85px]">
                {[
                  `360° Dashboard `,
                  `Transaction fee and forex 3D configuration`,
                  `Loyalty program management and Ads configuration `,
                  `Transaction live tracking`,
                  `Customer support ticketing and follow-up and much more…`,
                ].map((item) => (
                  <li
                    className="relative mb-[14px] last:mb-0 before:block before:h-[9px] before:w-[9px] before:bg-[#a0a1b3] before:rounded before:absolute before:top-0 before:bottom-0 before:left-0 before:my-auto md:pl-[20px]"
                    key={item}
                    dangerouslySetInnerHTML={{ __html: item }}
                  ></li>
                ))}
              </ul>

              <div className="logos flex items-center">
                <div className="relative mr-[45px]">
                  <Image
                    src="/logos/front-brand-gray.svg"
                    width="156px"
                    height="30px"
                    alt=""
                  />
                </div>

                <div className="relative">
                  <Image
                    src="/logos/open-cloud-gray.svg"
                    width="156px"
                    height="30px"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f6] md:py-[85px]">
        <div className="container mx-auto md:max-w-[985px]">
          <h2 className="text-center text-[39px] leading-[50px] font-medium mb-[55px]">
            why you need mitech
          </h2>

          <div className="grid grid-cols-3 gap-x-[22px] gap-y-[22px]">
            <Vericalbox
              icone="/icons/target.svg"
              title="Targeted offer"
              description="Ban money transfer operators intermediation and apply freely competitive forex and fees "
            />
            <Vericalbox
              icone="/icons/mto.svg"
              title="MTO banish"
              description="Build specific offer with your own strategy to reach efficiently the targeted diaspora"
            />

            <Vericalbox
              icone="/icons/100-digital.svg"
              title="100% Digital "
              description="mitech's digital solutions guarantee maximum reach to targeted customers"
            />

            <Vericalbox
              icone="/icons/cart.svg"
              title="Quick go-to market"
              description="Ready to use mitech’s solutions facilitates your product launch within a few weeks"
            />

            <Vericalbox
              icone="/icons/lock.svg"
              title="Secure volume"
              description="Your onboarded strategy will allow to secure transfer and foreigner currencies volumes"
            />

            <Vericalbox
              icone="/icons/console.svg"
              title="All in one console"
              description="Real time transactions follow-up, 360° configuration and much more from one console"
            />
          </div>
        </div>
      </section>

      <section className="bg-white md:py-[85px]">
        <div className="container mx-auto md:max-w-[985px]">
          <h2 className="text-center text-[39px] leading-[50px] font-medium mb-[22px] tracking-[0.04em]">
            MTOs are taking most of the revenue ! <br />
            take back your slice
          </h2>

          <p className="tracking-[0.04em] text-[16px] leading-[34px] mb-[60px] text-center">
            Why would you let the money transfer operators take the spotlight,
            and control a remittance that you deliver When you can take back
            control and exposure ?
          </p>

          <div className="box bg-[#f3f4f6] border-[#e4e6ec] border-[1px] py-[34px] flex">
            <div className="bloc min-w-[410px] max-w-[410px]">
              <div className="text-center uppercase text-[22px] tracking-[0.04em] text-[#737386] mb-[30px]">
                Remittance <br />
                <span className="font-semibold">Through MTO</span>
              </div>

              <ul className="bg-white border-[#e3e5eb] border-[1px] border-l-0 py-[35px] pl-[35px] pr-[45px] text-[16px]">
                <li className="before:block before:h-[9px] before:w-[9px] before:bg-[#a0a1b3] before:rounded before:absolute before:top-[6px] before:left-0 relative pl-[20px] leading-[22px] font-medium mb-[25px]">
                  Money transfer operators freely decide fees and forex to apply
                  on customer without notifying you !
                </li>

                <li className="before:block before:h-[9px] before:w-[9px] before:bg-[#a0a1b3] before:rounded before:absolute before:top-[6px] before:left-0 relative pl-[20px] leading-[22px] font-medium">
                  Money transfer operators give you very small share on the
                  revenue made on the transaction
                </li>
              </ul>
              <div className="flex items-center justify-center pt-[20px]">
                <div className="icone">
                  <Image src="/icons/close.png" width={38} height={39} alt="" />
                </div>
                <div className="text-[19px] leading-[28px] text-[#737386] ml-[24px]">
                  You deliver funds <br />
                  through <span className="font-semibold">MTO brand !</span>
                </div>
              </div>
            </div>

            <div className="bloc flex grow flex-col items-center">
              <div className="text-[19px] font-medium tracking-[0.04em]">
                Diaspora
              </div>
              <div>
                <Image
                  src="/icons/fat-arrow.png"
                  width={79}
                  height={282}
                  alt=""
                />
              </div>
              <div className="text-[19px] py-[10px] font-medium tracking-[0.04em] mt-auto">
                Beneficiary
              </div>
            </div>

            <div className="bloc min-w-[410px] max-w-[410px] ml-auto">
              <div className="text-center uppercase text-[22px] tracking-[0.04em] text-primary mb-[30px]">
                Remittance <br />
                <span className="font-semibold">through Your Brand</span>
              </div>

              <ul className="bg-white border-[#e3e5eb] border-[1px] border-r-0 py-[35px] pl-[35px] pr-[45px] text-[16px] text-[#fa9762]">
                <li className="before:block before:h-[9px] before:w-[9px] before:bg-[#fa9762] before:rounded before:absolute before:top-[6px] before:left-0 relative pl-[20px] leading-[22px] font-medium mb-[25px]">
                  We collect through your brand and your freely decide fees and
                  forex to apply on sender
                </li>

                <li className="before:block before:h-[9px] before:w-[9px] before:bg-[#fa9762] before:rounded before:absolute before:top-[6px] before:left-0 relative pl-[20px] leading-[22px] font-medium">
                  You keep 100% of the generated revenue that give that allows
                  you to be extremely competitive
                </li>
              </ul>
              <div className="flex items-center justify-center pt-[20px]">
                <div className="icone">
                  <Image
                    src="/icons/check-orange.png"
                    width={38}
                    height={39}
                    alt=""
                  />
                </div>
                <div className="text-[19px] leading-[28px] text-primary ml-[24px]">
                  You deliver exclusively <br />
                  through <span className="font-semibold">your brand</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter bg-[#f3f4f6] py-[48px]">
        <div className="container mx-auto md:max-w-[985px]">
          <div className="box">
            <div className="text-[27px] tracking-[0.025em] mb-[20px] text-center">
              For latest news sign up to our newletter
            </div>
            <div className="flex items-center justify-center">
              <input
                type="text"
                className="h-[56px] min-w-[480px] rounded-[40px] px-[32px] py-[8px] text-[16px] tracking-[0.04em] text-[#a0a1b3]"
                name="email"
                placeholder="Your email adress"
              />
              <div className="ml-[18px]">
                <Button type="button" title="submit" size="large">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white md:pt-[60px]">
        <div className="container mx-auto md:max-w-[985px]">
          <div className="flex flex-col items-end">
            <div className="bloc max-w-[420px]">
              <h2 className="text-[39px] leading-[50px] font-medium mb-[45px]">
                Becoming <br /> diaspora-centric
              </h2>
              <p className="text-[22px] leading-[33px] text-primary">
                We help financial institutions to speed up growth through
                remittance digital revolution empowered by
                <span className="font-semibold"> diaspora</span> direct access
              </p>
            </div>
          </div>

          <div className="container mx-auto md:max-w-[985px] mt-[70px]">
            <div className="get-in-touch bg-[#e7e9ee] rounded-[10px] p-[55px] bg-[url('/bgs/logo-bg.png')] bg-cover bg-blend-overlay">
              <div className="text-[41px] font-medium mb-[25px] text-center">
                Get in touch with mitech
              </div>
              <p className="text-center text-[22px] mb-[35px]">
                Contact our team to find out how we can help your projects…
              </p>
              <div className="read-more flex justify-center">
                <Button title="Contact-us" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="pt-[85px] pb-[35px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-5 gap-x-[40px]">
            <div className="bloc">
              <h3 className="font-semibold leading-[23px] mb-[25px]">
                Money International
              </h3>
              <ul>
                <li>
                  <a href="#">Money International</a>
                </li>
              </ul>
            </div>

            <div className="bloc">
              <h3 className="font-semibold leading-[23px] mb-[25px]">Mitech</h3>
              <ul>
                <li>
                  <a href="#">A propos</a>
                </li>
                <li>
                  <a href="#">Les solutions mitech</a>
                </li>
              </ul>
            </div>

            <div className="bloc">
              <h3 className="font-semibold leading-[23px] mb-[25px]">
                Cas d&apos;utilisations
              </h3>
              <ul>
                <li>
                  <a href="#">Explorer</a>
                </li>
              </ul>
            </div>

            <div className="bloc">
              <h3 className="font-semibold leading-[23px] mb-[25px]">
                Sandbox
              </h3>
              <ul>
                <li>
                  <a href="#">Demander votre sandbox</a>
                </li>
              </ul>
            </div>

            <div className="bloc">
              <h3 className="font-semibold leading-[23px] mb-[25px]">
                Besion d’aide ?
              </h3>
              <ul>
                <li>
                  <a href="#">Consultez notre FAQ </a>
                </li>
                <li>
                  <a href="#" className="text-primary underline">
                    Live chat
                  </a>
                </li>
              </ul>
              <ul className="text-[26px] flex items-center gap-x-[13px] mt-[20px]">
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="logos flex items-center gap-x-[35px] mt-[35px] justify-center">
            <div className="w-[135px] h-[30px] relative">
              <Image src="/logos/mitech-gray.svg" layout="fill" alt="" />
            </div>

            <div className="w-[135px] h-[30px] relative">
              <Image src="/logos/front-brand-gray.svg" layout="fill" alt="" />
            </div>

            <div className="w-[135px] h-[30px] relative">
              <Image src="/logos/open-cloud-gray.svg" layout="fill" alt="" />
            </div>
          </div>

          <div className="copyright text-[11px] text-[#5e717e] leading-[13px] pt-[25px] text-center">
            Copyright © Money International SA - Société de droit Belge qui a
            débuté ses activités en 2001 en tant qu`&apos;établissement de
            <br />
            paiement et bureau de change de devise et licencié par la Banque
            National Belge (BNB).
          </div>
        </div>
      </footer>
    </Layout>
  )
}
