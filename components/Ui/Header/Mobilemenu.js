import React from 'react'
import Nav from './Nav'
import { motion } from 'framer-motion'
import { globaleasing } from '../../../data/useVariants'
import Button from '../../html/Button'
import { useTranslation } from 'next-i18next'

const Mobilemenu = () => {
  const { t } = useTranslation('common')
  return (
    <motion.div
      initial={{ y: 90, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { ease: globaleasing, duration: 0.6 },
      }}
      exit={{
        y: 40,
        opacity: 0,
        transition: { ease: globaleasing, duration: 0.9 },
      }}
      className="mobile-nav mb:bg-white mb:absolute mb:top-[100%] mb:left-0 mb:right-0 bg-red-500"
    >
      <Nav />
      <div className="md:ml-[25px] py-[30px] px-[25px]">
        <Button
          lowercase="true"
          title={t('Get Started')}
          largeur="small"
          url="/contact"
        />
      </div>
    </motion.div>
  )
}

export default Mobilemenu
