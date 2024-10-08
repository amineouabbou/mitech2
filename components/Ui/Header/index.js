import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '../../html/Button'
import Languages from '../../html/Languages'
import Mobilemenu from './Mobilemenu'
import Nav from './Nav'
import { useGlobalState } from '../../../providers/globalProvider'
import { useRouter } from 'next/router'
import { twclsx } from '../../../libs/twclsx'
import dynamic from 'next/dynamic'
import { getNavData } from '../../../Utilis'
const Megamenu = dynamic(() => import('./megamenu'), {
  loading: () => '',
})

const Header = (props) => {
  const router = useRouter()
  const [sticky, setSticky] = useState(false)
  const ref = useRef()

  const { data: globalData } = props
  const {
    state: { isMenuOpen },
    handleMobileMenu,
    megamenuOpened,
  } = useGlobalState()

  const { data: navData } = getNavData(globalData || [])

  const handleLocaleChange = (event) => {
    const value = event.target.value

    router.push(router.route, router.asPath, {
      locale: value,
    })
  }

  const handleScroll = () => {
    if (window.scrollY > 20) {
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
        className={twclsx(
          'header bg-white md:bg-transparent md:flex md:flex-col justify-center',
          'py-[25px] lg:py-0 lg:min-h-[118px] fixed w-full top-0 z-30 transition-all duration-300 drop-shadow-[0px_0px_13.8px_rgba(0,0,0,0.04)] md:drop-shadow-none',
          {
            ' md:bg-white md:py-0 lg:min-h-[90px] md:drop-shadow-[0px_0px_25px_rgba(0,0,0,0.1)]':
              sticky,
            ' md:bg-white duration-75': megamenuOpened,
          }
        )}
      >
        <div className="container mx-auto grow md:flex">
          <div className="flex items-center justify-center md:flex md:flex-col">
            <div className="logo-box">
              <Link href="/">
                <div className="w-[135px] h-[44px] md:w-[193px] md:h-[41px] relative">
                  <Image src="/logo.svg" fill alt="" />
                </div>
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
            <nav className="hidden md:flex md:grow lg:h-full">
              <Nav data={globalData} />
            </nav>

            <AnimatePresence>
              {isMenuOpen && <Mobilemenu data={globalData} />}
            </AnimatePresence>

            {navData?.cta && (
              <div className="md:ml-[25px] hidden md:block">
                <Button
                  lowercase="true"
                  title={navData?.cta?.label}
                  largeur="small"
                  url={navData?.cta?.slug}
                />
              </div>
            )}

            <div className="hidden md:block">
              <Languages />
            </div>
          </div>
        </div>

        <AnimatePresence>
          {megamenuOpened && <Megamenu ref={ref} data={globalData} />}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default Header
