import Image from 'next/image'
import { FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import dynamic from 'next/dynamic'
import { useGlobalState } from '../../../providers/globalProvider'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const Overlaybg = dynamic(() => import('../Others/Overlaybg'), {
  loading: () => 'Loading...',
})

const DATA = [
  {
    title: 'Money International',
    links: [
      {
        link: 'Money International',
      },
    ],
  },
  {
    title: 'Mitech',
    links: [
      {
        link: 'A propos',
      },
      {
        link: 'Les solutions mitech',
      },
    ],
  },
  {
    title: `Cas d'utilisations`,
    links: [
      {
        link: 'Explorer',
      },
    ],
  },
  {
    title: 'Sandbox',
    links: [
      {
        link: 'Demander votre sandbox',
      },
    ],
  },
]

const Footer = ({ data }) => {
  const {
    state: { isMenuOpen },
    megamenuOpened,
  } = useGlobalState()

  const { blocksRep, blockBesoin, copyrightsBlock } = data || {}

  return (
    <>
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
              <div className="bloc">
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
                    <li>
                      <a
                        href="#"
                        className="text-primary underline hover:text-textcolor"
                      >
                        Live chat
                      </a>
                    </li>
                  </ul>
                )}

                <ul className="text-[26px] flex items-center gap-x-[13px] mt-[20px]">
                  {blockBesoin.socialRep.map((item, index) => {
                    let comp = <FaTwitter />
                    if (item.icon === 'twitter') {
                      comp = <FaTwitter />
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
            )}
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

          <div className="copyright text-[10px] md:text-[11px] text-[#5e717e] leading-[13px] pt-[25px] text-center">
            Copyright © Money International SA - Société de droit Belge qui a
            débuté ses activités en 2001 en tant qu`&apos;établissement de
            <br />
            paiement et bureau de change de devise et licencié par la Banque
            National Belge (BNB).
          </div>
        </div>
      </footer>
      <AnimatePresence>
        {(megamenuOpened || isMenuOpen) && <Overlaybg />}
      </AnimatePresence>
    </>
  )
}

export default Footer
