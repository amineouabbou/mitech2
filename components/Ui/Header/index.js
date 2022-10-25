import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Standnav from '../../html/Standnav'
import { motion } from 'framer-motion'
import { globaleasing } from '../../../data/useVariants'
import Mobileheader from '../../html/Mobileheader'

const Header = () => {
  const [sticky, setSticky] = useState(false)

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
      <Mobileheader />
      {sticky ? (
        <motion.div
          initial={{ y: -90 }}
          animate={{
            y: 0,
            transition: {
              duration: 1,
              ease: globaleasing,
            },
          }}
          className="border-b-[#1D647D40] border-b-[1px] h-[80px] px-[30px] py-[12px] hidden md:flex items-center fixed top-0 w-full z-40 bg-white"
        >
          <div className="mr-[90px] overflow-hidden">
            <motion.div
              initial={{ scale: 0.7, y: 90 }}
              animate={{
                scale: 1,
                y: 0,
                transition: {
                  duration: 1.6,
                  ease: globaleasing,
                },
              }}
              className=""
            >
              <Link href="/">
                <a className="block h-[64px]">
                  <Image
                    alt="Résidence Amane"
                    src="/logo.svg"
                    width={46}
                    height={64}
                  />
                </a>
              </Link>
            </motion.div>
          </div>

          <nav className="main-nav">
            <Standnav />
          </nav>
        </motion.div>
      ) : null}

      <div className="border-b-[#1D647D40] border-b-[1px] px-[30px] py-[12px] hidden md:flex items-center">
        <div className="mr-[90px] overflow-hidden">
          <motion.div
            initial={{ scale: 0.7, y: 90 }}
            animate={{
              scale: 1,
              y: 0,
              transition: {
                duration: 1.6,
                ease: globaleasing,
              },
            }}
            className=""
          >
            <Link href="/">
              <a className="block h-[64px]">
                <Image
                  alt="Résidence Amane"
                  src="/logo.svg"
                  width={46}
                  height={64}
                />
              </a>
            </Link>
          </motion.div>
        </div>

        <nav className="main-nav">
          <Standnav />
        </nav>
      </div>
    </>
  )
}

export default Header
