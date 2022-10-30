import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { globaleasing } from '../../../data/useVariants'
import Button from '../../html/Button'

const MENU = [
  {
    label: 'Products',
    path: 'products',
  },
  {
    label: 'Features',
    path: 'features',
  },
  {
    label: 'Use case',
    path: 'use-case',
  },
  {
    label: 'Pricing',
    path: 'pricing',
  },
  {
    label: 'About mitech',
    path: 'about-mitech',
  },
  {
    label: 'FAQ',
    path: 'faq',
  },
]

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
      <motion.div
        className={`header ${
          sticky && ` backdrop-blur-md bg-white/40 py-[25px]`
        } py-[35px] fixed w-full top-0 z-30 transition-all duration-300 `}
      >
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { ease: globaleasing, duration: 2, delay: 0.8 },
          }}
          className="container mx-auto flex items-center"
        >
          <div className="logo-box">
            <Link href="/">
              <a>
                <Image src="/logo.svg" width="193" height="41" alt="" />
              </a>
            </Link>
          </div>

          <div className="right-side flex items-center ml-auto">
            <nav>
              <ul className="flex items-center">
                {MENU.map((item) => (
                  <li className="mx-[15px] px-[5px]" key={item.path}>
                    <Link href={item.path}>
                      <a className="font-medium text-[15.28px]">{item.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="md:ml-[25px]">
              <Button lowercase="true" title="Get Started" largeur="small" />
            </div>

            <div className="language-box md:ml-[35px]">
              <a href="#">
                <Image src="/icons/fr.png" width="29" height="28" alt="fr" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Header
