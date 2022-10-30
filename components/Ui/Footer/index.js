import Image from 'next/image'
import { FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
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
                  <a
                    href="#"
                    className="text-primary underline hover:text-textcolor"
                  >
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
    </>
  )
}

export default Footer
