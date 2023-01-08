import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { globaleasing } from '../../../data/useVariants'
import Button from '../../html/Button'
import Languages from '../../html/Languages'
import Mobilemenu from './Mobilemenu'
import Nav from './Nav'
import { useGlobalState } from '../../../providers/globalProvider'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const Header = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const [sticky, setSticky] = useState(false)
  const {
    state: { isMenuOpen },
    handleMobileMenu,
  } = useGlobalState()

  const handleLocaleChange = (event) => {
    const value = event.target.value

    router.push(router.route, router.asPath, {
      locale: value,
    })
  }

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sticky])
  return (
    <>
      <motion.div
        className={`header bg-white md:bg-transparent ${
          sticky && `backdrop-blur-md bg-white md:py-[20px]`
        } py-[25px] md:py-[35px] fixed w-full top-0 z-30 transition-all duration-300 drop-shadow-[0px_0px_13.8px_rgba(0,0,0,0.04)] md:drop-shadow-none`}
      >
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { ease: globaleasing, duration: 2, delay: 0.8 },
          }}
          className="container mx-auto md:flex items-center"
        >
          <div className="flex items-center md:block">
            <div className="logo-box">
              <Link href="/">
                <a>
                  <div className="w-[115px] h-[24px] md:w-[193px] md:h-[41px] relative">
                    <Image src="/logo.svg" layout="fill" alt="" />
                  </div>
                </a>
              </Link>
            </div>
            <div className="mobile-tools ml-auto flex items-center md:hidden">
              <Languages />
              <div
                className="menu-toogle flex flex-col items-end ml-[50px]"
                onClick={handleMobileMenu}
              >
                <div
                  className={`line w-[21px] h-[2px] bg-secondary transition-all duration-500 ${
                    isMenuOpen ? 'w-[10px]' : ''
                  }`}
                ></div>
                <div
                  className={`line w-[19px] h-[2px] bg-secondary transition-all duration-500 my-[5px] ${
                    isMenuOpen ? 'w-[10px]' : ''
                  }`}
                ></div>
                <div
                  className={`line w-[21px] h-[2px] bg-secondary transition-all duration-500 ${
                    isMenuOpen ? 'w-[17px]' : ''
                  }`}
                ></div>
                <div className="texte text-[8px] mt-[6px] leading-normal">
                  Menu
                </div>
              </div>
            </div>
          </div>

          <div className="right-side md:flex items-center ml-auto">
            <nav className="hidden md:block">
              <Nav />
            </nav>

            <AnimatePresence>{isMenuOpen && <Mobilemenu />}</AnimatePresence>

            <div className="md:ml-[25px] hidden md:block">
              <Button
                lowercase="true"
                title={t('Get Started')}
                largeur="small"
                url="/contact"
              />
            </div>

            <div className="hidden md:block">
              <Languages />
            </div>

            {/** 
            <select onChange={handleLocaleChange} value={router.locale}>
              <option value="en">🇺🇸 English</option>
              <option value="fr">🇸🇪 Francais</option>
            </select>*/}
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Header
