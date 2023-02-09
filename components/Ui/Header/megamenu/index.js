import Link from 'next/link'
import React, { useEffect } from 'react'
import Solution from '../Solution'
import { motion } from 'framer-motion'
import { globaleasing } from '../../../../data/useVariants'
import { useGlobalState } from '../../../../providers/globalProvider'
import { useRouter } from 'next/router'

const DATA_LINKS = [
  {
    id: 0,
    title: 'Banking',
    url: '/open-cloud',
  },
  {
    id: 1,
    title: "Transfert d'argent",
    url: '/open-cloud',
  },
  {
    id: 2,
    title: 'Initiation de paiement',
    url: '/open-cloud',
  },
  {
    id: 3,
    title: 'Paiement de masse',
    url: '/open-remit',
  },
]

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
  duration: 0.9,
}

const Megamenu = () => {
  const { changeMegaMenuOpened, megamenuOpened } = useGlobalState()

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      changeMegaMenuOpened()
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router])

  return (
    <>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={transition}
        className="bg-white border-t-[1px] border-[#f0f0f0] pt-[50px] pb-[70px] absolute top-full w-full"
      >
        <div className="container">
          <div className="grid grid-cols-3 gap-x-[20px]">
            <div className="bloc">
              <motion.h2
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={transition}
                className="font-bold text-[22px] mb-[25px]"
              >
                Nos plateformes
              </motion.h2>
              <motion.p
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
              >
                Nos solutions en marque blanche <br />
                de transfert bidirectionnel & agrégation
              </motion.p>
            </div>

            <div className="bloc">
              <Solution
                title="Front brand"
                domain="Transfert instantané"
                logoUrl="/icons/front-brand-gray.svg"
                url="/front-brand"
              />
              <Solution
                title="Open remit"
                domain="Paiement de masse"
                logoUrl="/icons/open-remit-gray.svg"
                url="/open-remit"
              />
            </div>

            <div className="bloc">
              <div className="text-[17px] font-bold mb-[15px]">
                {`Secteurs d'activité`}
              </div>
              <ul className="text-[14px] text-[#87888c] font-light leading-[33px]">
                {DATA_LINKS.map((item) => (
                  <li key={item.id}>
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Megamenu
