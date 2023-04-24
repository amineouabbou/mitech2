import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import {
  shortFadeUp,
  titesStagger,
  titlesAnimation,
} from '../../../data/useVariants'
import { useGlobalState } from '../../../providers/globalProvider'
import clsx from 'clsx'

const MENU = [
  {
    label: 'Products',
    path: '/products',
  },
  {
    label: 'Features',
    path: '/features',
  },
  {
    label: 'Pricing',
    path: '/pricing',
  },
  {
    label: 'About mitech',
    path: '/about',
  },
  {
    label: 'FAQ',
    path: '/faq',
  },
]

const Nav = () => {
  const { closeMobileNav, megamenuOpened, changeMegaMenuOpened } =
    useGlobalState()

  const handleOpenMegaMenu = (e) => {
    e.preventDefault()
    changeMegaMenuOpened()
  }

  return (
    <ul className="md:flex items-center">
      {MENU.map((item) => {
        if (item.path === '/products') {
          return (
            <li
              onClick={handleOpenMegaMenu}
              className={clsx(
                'md:mx-[5px] pl-[10px] pr-[22px] mb:border-b-[1px] mb:border-[#eaeaed] cursor-pointer relative',
                "before:bg-[url('/icons/arrow-down.svg')] before:bg-no-repeat before:bg-[length:15px_9px]",
                'before:w-[15px] before:h-[9px] before:block  before:absolute before:top-0 before:right-0',
                'before:bottom-0 before:top-0 before:my-auto before:right-0 before:duration-200',
                {
                  'before:rotate-180': megamenuOpened,
                }
              )}
              key={item.path}
            >
              <a className="font-medium text-[15.28px] mb:block mb:px-[25px] mb:py-[20px] mb:font-normal">
                {item.label}
              </a>
            </li>
          )
        }
        return (
          <li
            className="md:mx-[15px] md:px-[5px] mb:border-b-[1px] mb:border-[#eaeaed]"
            key={item.path}
          >
            <Link href={item.path}>
              <a
                onClick={closeMobileNav}
                className="font-medium text-[15.28px] mb:block mb:px-[25px] mb:py-[20px] mb:font-normal"
              >
                {item.label}
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Nav
