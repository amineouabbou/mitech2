import Image from 'next/image'
import Link from 'next/link'

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer bg-white">
      <div className="container mx-auto">
        <div className="logo-box flex flex-col items-center py-[20px] md:pb-[42px] border-b-[1px] border-b-[#09556F/10]">
          <div className="img h-[149px] w-[70px] md:w-[111px] md:h-[209px] relative">
            <Image src="/logo-big.svg" alt="" layout="fill" />
          </div>
        </div>

        <div className="footer-links py-[30px] md:pt-[65px] md:px-[30px]">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
            <div className="item">
              <div className="font-semibold text-[#1D647D] md:text-[17px] leading-[20px] mb-[10px] md:mb-[20px] uppercase">
                QUI SOMMES-NOUS
              </div>
              <ul className="font-light leading-[#30] md:text-[16px]">
                <li>
                  <Link href="/about">
                    <a className="text-[#023141] hover:text-lightblue">
                      Résidences Amane
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="text-[#023141] hover:text-lightblue">
                      Nos valeurs
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="text-[#023141] hover:text-lightblue">
                      Notre emplacement
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="item">
              <div className="font-semibold text-[#1D647D] md:text-[17px] leading-[20px] mb-[10px] md:mb-[20px] uppercase">
                NOTRE OFFRE
              </div>
              <ul className="text-[#023141] font-light leading-[#30] md:text-[16px]">
                <li>
                  <Link href="/offre">
                    <a className="text-[#023141] hover:text-lightblue">
                      Nos logements
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/offre">
                    <a className="text-[#023141] hover:text-lightblue">
                      Nos services
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/offre">
                    <a className="text-[#023141] hover:text-lightblue">
                      Nos commodités
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="item">
              <div className="font-semibold text-[#1D647D] md:text-[17px] leading-[20px] mb-[10px] md:mb-[20px] uppercase">
                Mon dossier
              </div>
              <ul className="text-[#023141] font-light leading-[#30] md:text-[16px]">
                <li>
                  <Link href="/mondossier">
                    <a className="text-[#023141] hover:text-lightblue">
                      Votre réservation <br />
                      de logement
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="item">
              <div className="font-semibold text-[#1D647D] md:text-[17px] leading-[20px] mb-[10px] md:mb-[20px] uppercase">
                Nos bons plans
              </div>
              <ul className="text-[#023141] font-light leading-[#30] md:text-[16px]">
                <li>
                  <a href="#" className="text-[#023141] hover:text-lightblue">
                    Vivre à Agadir
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#023141] hover:text-lightblue">
                    Etudier à Agadir
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#023141] hover:text-lightblue">
                    Découvrir Agadir
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-footer md:mt-[60px] text-[#09556F] relative">
        <div className="overlay hidden md:block absolute w-1/2 h-full bg-secondary top-0 right-0"></div>
        <div className="container mx-auto">
          <div className="inner bg-secondary p-8 md:pt-[45px] md:px-[45px] md:pb-[65px]">
            <div className="grid md:grid-cols-2 gap-8 md:gap-4">
              <div className="column">
                <div className="bloc">
                  <div className="font-semibold text-[17px] leading-[20px] mb-[18px]">
                    Contactez-nous
                  </div>
                  <div className="texte text-[15px] md:text-[16px] mb-[8px] font-light">
                    Boulevard du 11 Janvier, Quartier Dakhla, Bloc D1, Agadir.
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center text-[16px] font-light">
                    <div>+212 05 26 044 040</div>
                    <div className="md:ml-[20px]">
                      <a
                        className="font-medium underline"
                        href="mailto:info@residencesamane.ma"
                      >
                        info@residencesamane.ma
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column relative">
                <div className="bloc">
                  <div className="font-semibold text-[17px] leading-[20px] mb-[30px]">
                    Suivez-nous sur
                  </div>
                  <ul className="flex items-center text-white">
                    <li className="mr-[20px] md:mr-[40px]">
                      <a href="#" className="hover:text-[#09556F]">
                        <FaFacebookF className="text-[24px] md:text-[30px]" />
                      </a>
                    </li>
                    <li className="mr-[20px] md:mr-[40px]">
                      <a href="#" className="hover:text-[#09556F]">
                        <FaInstagram className="text-[24px] md:text-[30px]" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#09556F]">
                        <FaYoutube className="text-[24px] md:text-[30px]" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-[20px] md:my-[30px]">
        <div className="copyrights flex flex-col items-center">
          <div className="text-[13px] font-light text-[#023141]">
            © 2022 Résidences Amane. Tous droits réservés
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
