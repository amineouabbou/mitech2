import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import {
  shortFadeUp,
  titesStagger,
  titlesAnimation,
} from '../../../data/useVariants'
import { useGlobalState } from '../../../providers/globalProvider'

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
    label: 'Use case',
    path: '/use-case',
  },
  {
    label: 'Pricing',
    path: '/pricing',
  },
  {
    label: 'About mitech',
    path: '/about-mitech',
  },
  {
    label: 'FAQ',
    path: '/faq',
  },
]

const Nav = () => {
  const { closeMobileNav } = useGlobalState()

  return (
    <ul className="md:flex items-center">
      {MENU.map((item) => (
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
      ))}
    </ul>
  )
}

export default Nav
