import Link from 'next/link'
import React, { useEffect } from 'react'
import Solution from '../Solution'
import { motion } from 'framer-motion'
import { globaleasing } from '../../../../data/useVariants'
import { useGlobalState } from '../../../../providers/globalProvider'
import { useRouter } from 'next/router'
import { getMegaMenuData } from '../../../../Utilis'

const variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: { y: 0, opacity: 1 },
  exit: {
    y: 20,
    opacity: 0,
  },
}

const transition = {
  ease: globaleasing,
  duration: 0.35,
}

const Megamenu = (props) => {
  const { changeMegaMenuOpened } = useGlobalState()
  const { data } = props
  const { data: megamenuData } = getMegaMenuData(data)
  const {
    introTitle,
    introDescription,
    listeSecteursRep,
    secteursTitle,
    solutionsRep,
  } = megamenuData || {}

  const router = useRouter()

  const handleMouseOut = () => {
    changeMegaMenuOpened(false)
  }

  useEffect(() => {
    const handleRouteChange = () => {
      changeMegaMenuOpened()
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router, changeMegaMenuOpened])

  return (
    <>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={transition}
        onMouseLeave={handleMouseOut}
        className="bg-white border-t-[1px] border-[#f0f0f0] pt-[50px] pb-[70px] absolute top-full w-full mega-menu-wrapper"
      >
        <div className="container">
          <div className="grid grid-cols-3 gap-x-[20px]">
            <div className="bloc">
              <h2
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={transition}
                className="font-bold text-[22px] mb-[25px]"
              >
                {introTitle}
              </h2>
              <p
                dangerouslySetInnerHTML={{ __html: introDescription }}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  ease: globaleasing,
                  duration: 0.9,
                  delay: 0.1,
                }}
                className="font-light mb-[35px] leading-[25px] text-[15px] text-[#525369]"
              />
            </div>

            {solutionsRep && solutionsRep.length > 0 && (
              <div className="bloc grid grid-cols-2 col-span-2">
                {solutionsRep.map((item, index) => (
                  <Solution
                    key={index}
                    title={item.title}
                    domain={item.subTitle}
                    logoUrl={item?.logo?.mediaItemUrl}
                    url={item.slug}
                  />
                ))}
              </div>
            )}

            {secteursTitle && (
              <div className="bloc">
                <div className="text-[17px] font-bold mb-[15px]">
                  {secteursTitle}
                </div>
                <ul className="text-[14px] text-[#87888c] font-light leading-[33px]">
                  {listeSecteursRep &&
                    listeSecteursRep.map((item, index) => (
                      <li key={index}>
                        <Link href={item.slug}>{item.label}</Link>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Megamenu
