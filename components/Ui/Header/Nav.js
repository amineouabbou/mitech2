import Link from 'next/link'
import React, { forwardRef, useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useGlobalState } from '../../../providers/globalProvider'
import { twclsx } from '../../../libs/twclsx'
import Submenu from './Submenu'
import { useRouter } from 'next/router'
import { getNavData } from '../../../Utilis'

const Nav = (props, ref) => {
  const router = useRouter()

  const { data } = props

  const { data: navData } = getNavData(data || [])

  const { navRep, cta } = navData || {}

  const { closeMobileNav, megamenuOpened, changeMegaMenuOpened } =
    useGlobalState()

  const handleMouseOver = (e) => {
    e.preventDefault()
    changeMegaMenuOpened(true)
  }

  const handleMouseOut = (e) => {
    e.preventDefault()
    const relatedTarget = e.relatedTarget
    if (relatedTarget.classList.contains('mega-menu-wrapper')) {
    } else {
      changeMegaMenuOpened(false)
    }
  }

  const [accordion, setAccodion] = useState(false)

  const handleMeuClick = (e) => {
    console.log('Clicked')
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
                ' mb:border-b-[1px] mb:border-[#eaeaed] relative mb:last:border-b-0 lg:flex lg:flex-col lg:grow lg:h-full lg:justify-center',
                {
                  "lg:mr-[20px]  before:bg-[url('/icons/arrow-down.svg')] before:bg-no-repeat before:bg-[length:15px_9px] before:w-[15px] before:h-[9px] before:block  before:absolute before:top-[25px] lg:before:top-0 lg:before:bottom-0 lg:before:my-auto lg:before:right-0 before:right-[15px] before:duration-200":
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
                    onMouseEnter={handleMouseOver}
                    onMouseLeave={handleMouseOut}
                    className="font-medium text-[14.28px] lg:text-[15.28px] mb:hidden mb:px-[25px] mb:py-[14px] lg:flex lg:flex-col lg:grow lg:justify-center md:px-[15px] lg:px-[25px]"
                  >
                    {item.label}
                  </a>
                </>
              ) : (
                <Link
                  href={`/${item.slug}`}
                  className="lg:flex lg:flex-col lg:grow lg:justify-center md:px-[15px] lg:px-[25px]"
                >
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

export default forwardRef(Nav)
