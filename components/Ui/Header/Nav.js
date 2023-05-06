import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useGlobalState } from '../../../providers/globalProvider'
import { twclsx } from '../../../libs/twclsx'
import Submenu from './Submenu'
import { useRouter } from 'next/router'
import { getNavData } from '../../../Utilis'

const Nav = ({ data }) => {
  const router = useRouter()

  const { data: navData } = getNavData(data || [])

  const { navRep, cta } = navData || {}

  const { closeMobileNav, megamenuOpened, changeMegaMenuOpened } =
    useGlobalState()

  const handleOpenMegaMenu = (e) => {
    e.preventDefault()
    changeMegaMenuOpened()
  }

  const [accordion, setAccodion] = useState(false)

  const handleMeuClick = (e) => {
    e.preventDefault()
    setAccodion((prev) => !prev)
  }

  const handleRouteChange = useCallback(() => {
    setAccodion(false)
    closeMobileNav()
  }, [closeMobileNav])

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events, handleRouteChange])

  return (
    <ul className="md:flex items-center">
      {navRep &&
        navRep.map((item) => {
          return (
            <li
              className={twclsx(
                'md:px-[15px] lg:px-[25px] mb:border-b-[1px] mb:border-[#eaeaed] relative mb:last:border-b-0',
                {
                  "lg:mr-[20px]  before:bg-[url('/icons/arrow-down.svg')] before:bg-no-repeat before:bg-[length:15px_9px] before:w-[15px] before:h-[9px] before:block  before:absolute before:top-[25px] lg:before:top-[7px] lg:before:right-0 before:right-[15px] before:duration-200":
                    item.submenuRep && item.submenuRep.length > 1,
                  ' before:rotate-180':
                    (item.submenuRep &&
                      item.submenuRep.length > 1 &&
                      accordion) ||
                    megamenuOpened,
                }
              )}
              key={item.slug}
            >
              {!item.slug || item.slug === '#' ? (
                <>
                  <a
                    href="#"
                    onClick={handleMeuClick}
                    className="font-medium text-[14.28px] lg:text-[15.28px] mb:block mb:px-[25px] mb:py-[14px] lg:hidden"
                  >
                    {item.label}
                  </a>
                  <a
                    href="#"
                    onClick={handleOpenMegaMenu}
                    className="font-medium text-[14.28px] lg:text-[15.28px] mb:hidden mb:px-[25px] mb:py-[14px]"
                  >
                    {item.label}
                  </a>
                </>
              ) : (
                <Link href={`/${item.slug}`}>
                  <span
                    className={twclsx(
                      'font-medium text-[14.28px] lg:text-[15.28px] mb:block mb:px-[25px] mb:py-[14px]',
                      {
                        'text-primary': router.pathname == `/${item.slug}`,
                      }
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              )}

              <AnimatePresence>
                {item.submenuRep && item.submenuRep.length > 1 && accordion && (
                  <Submenu data={item.submenuRep} />
                )}
              </AnimatePresence>
            </li>
          )
        })}
    </ul>
  )
}

export default Nav
