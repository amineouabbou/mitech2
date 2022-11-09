import React, { useCallback, useState } from 'react'
import { motion } from 'framer-motion'

import SEO from '../components/SEO'
import Layout from '../components/Ui/Layout'
import Header from '../components/Ui/Header'
import Footer from '../components/Ui/Footer'
import { shortFadeUp, titesStagger } from '../data/useVariants'
import Heroinner from '../components/Ui/Heroinner'
import Categories from '../components/faq/Categories'
import Question from '../components/faq/Question'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getPageData } from '../utils'
import { GET_FAQ } from '../queries'
import Faqgroup from '../components/faq/Faqgroup'
import Getintouch from '../components/Ui/Getintouch'

export default function Faq({ data }) {
  const {
    title: pageTitle,
    ACFPage: { acfFlex },
    pagesHero,
  } = data.page.translation

  return (
    <Layout>
      <SEO />
      <Header />
      <Heroinner
        isFaq="true"
        title={pageTitle}
        subtitle={pagesHero?.subTitle}
        description={pagesHero?.intro}
      >
        <div className="flex items-center justify-center mt-[45px]">
          <input
            type="text"
            className="h-[56px] w-full lg:w-auto lg:min-w-[600px] rounded-[40px] px-[32px] py-[8px] text-[16px] tracking-[0.04em] text-[#a0a1b3]"
            name="email"
            placeholder="Have a question? Find the answer here..."
          />
        </div>
        <Categories data={acfFlex[0].listCategoriesRep} />
      </Heroinner>

      <div className="container px-0 lg:px-[1rem] mx-auto max-w-[1030px] ">
        <main className="bg-white min-h-[500px] drop-shadow-[0px_0px_25px_rgba(73,83,100,0.12)] py-[40px] px-[20px] lg:p-[65px] relative z-10">
          {acfFlex.map((item, index) => {
            if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_Faq') {
              return item?.listCategoriesRep.map((item, index) => (
                <Faqgroup key={index} data={item} />
              ))
            }
          })}
        </main>
      </div>

      <div className="md:mt-[75px] md:mb-[60px]">
        <Getintouch />
      </div>

      <Footer />
    </Layout>
  )
}

export async function getServerSideProps({ locale }) {
  const data = await getPageData(GET_FAQ, 168, locale)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data: data,
    },
  }
}
