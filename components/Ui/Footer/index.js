import Image from 'next/image'
import { FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import Overlaybg from '../Others/Overlaybg'

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

const Footer = () => {
  return (
    <>
      <footer className="md:block py-[50px] md:pt-[85px] md:pb-[35px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-y-[30px] md:grid-cols-5 gap-x-[40px]">
            {DATA.map((item, index) => (
              <div key={index} className="bloc text-[15px]">
                <h3 className="font-semibold leading-[23px] mb-[8px] md:mb-[25px]">
                  {item.title}
                </h3>
                <ul>
                  {item.links.map((item) => (
                    <li key={item.link} className="mb-[10px]">
                      <a href="#">{item.link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bloc">
              <h3 className="font-semibold leading-[23px] mb-[8px] md:mb-[25px]">
                Besion d’aide ?
              </h3>
              <ul>
                <li className="mb-[8px]">
                  <a href="#">Consultez notre FAQ </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-primary underline hover:text-textcolor"
                  >
                    Live chat
                  </a>
                </li>
              </ul>
              <ul className="text-[20px] md:text-[26px] flex items-center gap-x-[13px] mt-[20px]">
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

          <div className="copyright text-[10px] md:text-[11px] text-[#5e717e] leading-[13px] pt-[25px] text-center">
            Copyright © Money International SA - Société de droit Belge qui a
            débuté ses activités en 2001 en tant qu`&apos;établissement de
            <br />
            paiement et bureau de change de devise et licencié par la Banque
            National Belge (BNB).
          </div>
        </div>
      </footer>
      <Overlaybg />
    </>
  )
}

export default Footer
