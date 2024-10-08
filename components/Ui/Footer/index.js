import Image from 'next/image'
import { FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import dynamic from 'next/dynamic'
import { useGlobalState } from '../../../providers/globalProvider'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import PopIn from '../../solutions/PopIn'
import { getSolutionPopups } from '../../../Utilis'

const Overlaybg = dynamic(() => import('../Others/Overlaybg'), {
  loading: () => 'Loading...',
})

const CookiesPopUp = dynamic(() => import('../CookiesPop'), {
  ssr: false,
  loading: () => 'Loading...',
})

const Footer = ({ data }) => {
  const {
    state: { isMenuOpen },
    megamenuOpened,
  } = useGlobalState()

  const { footerData, globalProps, footerLogos } = data || {}

  const { blocksRep, blockBesoin, copyrightsBlock } = footerData || {}

  console.log('footerLogos', footerLogos)

  const { sectionsOthers } = globalProps?.page?.translation?.ACFGlobal || []

  const { data: solutionsPopups } = getSolutionPopups(sectionsOthers || [])

  return (
    <>
      <CookiesPopUp />
      <PopIn data={solutionsPopups} />
      <footer className="md:block py-[50px] md:pt-[85px] md:pb-[35px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-y-[30px] md:grid-cols-5 gap-x-[40px]">
            {blocksRep &&
              blocksRep.map((item, index) => (
                <div key={index} className="bloc text-[15px]">
                  <h3 className="font-semibold leading-[23px] mb-[8px] md:mb-[25px]">
                    {item.title}
                  </h3>
                  <ul>
                    {item.linksRep.map((item, index) => (
                      <li key={index} className="mb-[10px]">
                        <Link href={item.slug}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            {blockBesoin && (
              <div className="bloc lg:col-span-2 flex flex-col lg:items-center text-[15px]">
                <div>
                  <h3 className="font-semibold leading-[23px] mb-[8px] md:mb-[25px]">
                    {blockBesoin.title}
                  </h3>

                  {blockBesoin.linksRep && blockBesoin.linksRep.length > 0 && (
                    <ul>
                      {blockBesoin.linksRep.map((item, index) => (
                        <li key={index} className="mb-[8px]">
                          <Link href={item.slug}>{item.title}</Link>
                        </li>
                      ))}
                      {/* <li>
                      <a
                        href="#"
                        className="text-primary underline hover:text-textcolor"
                      >
                        Live chat
                      </a>
                    </li> */}
                    </ul>
                  )}

                  <ul className="text-[26px] flex items-center gap-x-[13px] mt-[20px]">
                    {blockBesoin.socialRep.map((item, index) => {
                      let comp = <FaTwitter />
                      if (item.icon === 'twitter') {
                        comp = <FaXTwitter />
                      }

                      if (item.icon === 'linkedin') {
                        comp = <FaLinkedin />
                      }

                      if (item.icon === 'youtube') {
                        comp = <FaYoutube />
                      }
                      return (
                        <li key={index}>
                          <a target="_blank" rel="noreferrer" href={item.url}>
                            {comp}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="logos grid grid-cols-2 lg:flex items-center gap-4 lg:gap-[35px] mt-[35px] justify-center">
            {footerLogos.map((item, index) => (
              <div key={index} className="w-[120px] h-[35px] relative">
                <Image
                  src={item?.mediaItemUrl}
                  fill
                  alt=""
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {copyrightsBlock && (
            <div
              className="copyright text-[10px] md:text-[11px] text-[#5e717e] leading-[13px] pt-[25px] text-center"
              dangerouslySetInnerHTML={{ __html: copyrightsBlock.texte }}
            />
          )}
        </div>
      </footer>
      <AnimatePresence>
        {(megamenuOpened || isMenuOpen) && <Overlaybg />}
      </AnimatePresence>
    </>
  )
}

export default Footer
