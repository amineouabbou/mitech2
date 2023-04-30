import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useGlobalState } from '../../../providers/globalProvider'
import { twclsx } from '../../../libs/twclsx'
import Submenu from './Submenu'
import { useRouter } from 'next/router'

const MENU = [
  {
    label: 'Products',
    slug: '#',
    submeu: [
      {
        label: 'Front Brand',
        slug: '/front-brand',
      },
      {
        label: 'Open Remit',
        slug: '/open-remit',
      },
    ],
  },
  {
    label: 'Features',
    slug: '/features',
    // megamenu: [
    //   {
    //     id: 'plateforms',
    //     label: 'Nos plateforms',
    //     descipriton:
    //       'Nos solutions en marque blanche de transfert bidirectionnel & agrégatio',
    //   },
    //   {
    //     id: 'solutions',
    //     logos: [
    //       {
    //         label: 'FRONT BRAND <br> Transfert instantané',
    //         src: '/icons/front-brand-gray.svg',
    //         description: 'Transfert instantané',
    //       },
    //       {
    //         label: 'OPEN REMIT',
    //         description: 'Paiement de masse',
    //         src: '/icons/open-remit-gray.svg',
    //       },
    //     ],
    //   },
    //   {
    //     id: 'activities',
    //     list: [
    //       {
    //         label: 'Bankig',
    //         slug: '/front-brand',
    //       },
    //       {
    //         label: "Transfert d'argent",
    //         slug: '/open-remit',
    //       },
    //       {
    //         label: 'Initiation de paiement',
    //         slug: '/front-brand',
    //       },
    //       {
    //         label: 'Paiement de masse',
    //         slug: '/open-remit',
    //       },
    //     ],
    //   },
    // ],
  },
  {
    label: 'Pricing',
    slug: '/pricing',
  },
  {
    label: 'About mitech',
    slug: '/about',
  },
  {
    label: 'FAQ',
    slug: '/faq',
  },
]

const Nav = () => {
  const router = useRouter()

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
    console.log('Clicked open')
  }

  const handleRouteChange = () => {
    setAccodion(false)
    closeMobileNav()
  }

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ul className="md:flex items-center">
      {MENU.map((item) => {
        // if (item.path === '/products') {
        //   return (
        //     <li
        //       onClick={handleOpenMegaMenu}
        //       className={clsx(
        //         'md:mx-[15px] pl-[10px] pr-[22px] mb:border-b-[1px] mb:border-[#eaeaed] cursor-pointer relative',
        //         "before:bg-[url('/icons/arrow-down.svg')] before:bg-no-repeat before:bg-[length:15px_9px]",
        //         'before:w-[15px] before:h-[9px] before:block  before:absolute before:top-0 before:right-0',
        //         'before:bottom-0 before:top-0 before:my-auto before:right-0 before:duration-200',
        //         {
        //           'before:rotate-180': megamenuOpened,
        //         }
        //       )}
        //       key={item.path}
        //     >
        //       <a className="font-medium text-[15.28px] mb:block mb:px-[25px] mb:py-[20px] mb:font-normal">
        //         {item.label}
        //       </a>
        //     </li>
        //   )
        // }

        return (
          <li
            className={twclsx(
              'md:mx-[15px] md:px-[5px] mb:border-b-[1px] mb:border-[#eaeaed] relative',
              {
                "before:bg-[url('/icons/arrow-down.svg')] before:bg-no-repeat before:bg-[length:15px_9px] before:w-[15px] before:h-[9px] before:block  before:absolute before:top-[25px] before:right-[15px] before:duration-200":
                  item.submeu && item.submeu.length > 1,
                'before:rotate-180':
                  item.submeu && item.submeu.length > 1 && accordion,
              }
            )}
            key={item.slug}
          >
            {!item.slug || item.slug === '#' ? (
              <a
                href="#"
                onClick={handleMeuClick}
                className="font-medium text-[15.28px] mb:block mb:px-[25px] mb:py-[20px] mb:font-normal"
              >
                {item.label}
              </a>
            ) : (
              <Link href={item.slug}>
                <a className="font-medium text-[15.28px] mb:block mb:px-[25px] mb:py-[20px] mb:font-normal">
                  {item.label}
                </a>
              </Link>
            )}

            <AnimatePresence>
              {item.submeu && item.submeu.length > 1 && accordion && (
                <Submenu data={item.submeu} />
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}

export default Nav
