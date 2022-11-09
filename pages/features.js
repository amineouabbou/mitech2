import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import SEO from '../components/SEO'
import Layout from '../components/Ui/Layout'
import Header from '../components/Ui/Header'
import Footer from '../components/Ui/Footer'
import Largebox from '../components/features/Largebox'
import Heroinner from '../components/Ui/Heroinner'
import Getintouch from '../components/Ui/Getintouch'
import Faqbanner from '../components/faq/Faqbanner'
import { GET_FEATURES } from '../queries'
import { getPageData } from '../utils'

export default function Featured({ data }) {
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
        title={pageTitle}
        subtitle={pagesHero?.subTitle}
        description={pagesHero?.intro}
      />
      <div className="container mx-auto max-w-[1030px]">
        <main className="bg-white min-h-[500px] drop-shadow-[0px_0px_25px_rgba(73,83,100,0.12)] p-[20px] lg:p-[65px] relative z-10 -mt-[70px] lg:-mt-[125px]">
          {acfFlex.map((item, index) => {
            if (
              item.fieldGroupName === 'Page_Acfpage_AcfFlex_FeaturesDetailed'
            ) {
              {
                return item.listeFeaturesRep.map((item, index) => (
                  <Largebox
                    key={index}
                    icon={item?.iconeGroup?.icone?.mediaItemUrl}
                    title={item?.title}
                    size={item?.iconeGroup?.size}
                    description={item?.description}
                  />
                ))
              }
            }
          })}
        </main>
      </div>
      <div className="my-[40px] md:mt-[75px] md:mb-[60px]">
        <Getintouch />
      </div>
      <Footer />
    </Layout>
  )
}

export async function getServerSideProps({ locale }) {
  const data = await getPageData(GET_FEATURES, 9, locale)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data: data,
    },
  }
}
