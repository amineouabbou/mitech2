import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import SEO from '../components/SEO'
import Layout from '../components/Ui/Layout'
import Header from '../components/Ui/Header'
import Footer from '../components/Ui/Footer'
import Hero from '../components/Ui/Hero'
import Whatmitech from '../components/home/Whatmitech'
import Frontbrand from '../components/home/Frontbrand'
import Opencloud from '../components/home/Opencloud'
import Features from '../components/home/Features'
import Monitor from '../components/home/Monitor'
import Whymitech from '../components/home/Whymitech'
import Mtos from '../components/home/Mtos'
import Diaspocentric from '../components/home/Diaspocentric'
import { getPageData } from '../utils'
import { GET_HOME } from '../queries'

export default function Home({ data }) {
  const {
    ACFPage: { acfFlex },
  } = data.page.translation
  return (
    <Layout>
      <SEO />
      <Header />
      {acfFlex.map((item, index) => {
        if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_Hero') {
          return <Hero data={item} key={index} />
        }

        if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_WhatMitech') {
          return <Whatmitech key={index} data={item} />
        }

        if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_FrontBrandSolution') {
          return <Frontbrand key={index} data={item} />
        }

        if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_OpenCloudSolution') {
          return <Opencloud key={index} data={item} />
        }

        if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_Features') {
          return <Features key={index} data={item} />
        }

        if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_Monitor') {
          return <Monitor key={index} data={item} />
        }

        if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_WhyMitech') {
          return <Whymitech key={index} data={item} />
        }

        if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_Mtos') {
          return <Mtos key={index} data={item} />
        }

        if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_DiasporaCentric') {
          return <Diaspocentric key={index} data={item} />
        }
      })}

      <Footer />
    </Layout>
  )
}

export async function getServerSideProps({ locale }) {
  const data = await getPageData(GET_HOME, 7, locale)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data: data,
    },
  }
}
