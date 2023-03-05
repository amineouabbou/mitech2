import SEO from '../components/SEO'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getPageData } from '../utils'
import { GET_FAQ } from '../queries'
import Faqgroup from '../components/faq/Faqgroup'
import Getintouch from '../components/Ui/Getintouch'
import Title from '../components/Ui/Heroinner/Title'
import SubTitle from '../components/Ui/Heroinner/SubTitle'
import FaqHeroBloc from '../components/faq/FaqHeroBloc'
import Description from '../components/Ui/Heroinner/Description'
import HeroFaq from '../components/faq/HeroFaq'
import { useState } from 'react'
import { filterFaqlist } from '../Utilis'
import { useMemo } from 'react'

export default function Faq({ data }) {
  const [searchQuery, setSearchQuery] = useState('')
  const {
    title: pageTitle,
    ACFPage: { acfFlex },
    pagesHero,
  } = data.page.translation

  const filteredFaq = useMemo(
    () =>
      searchQuery
        ? filterFaqlist(acfFlex[0].listCategoriesRep, searchQuery)
        : acfFlex[0].listCategoriesRep,
    [searchQuery]
  )

  return (
    <>
      <SEO />
      <HeroFaq>
        <Title title={pageTitle} />
        <SubTitle subtitle={pagesHero?.subTitle} />
        <Description description={pagesHero?.intro} />
        <FaqHeroBloc
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          data={acfFlex[0].listCategoriesRep}
        />
      </HeroFaq>

      <div className="container px-0 lg:px-[1rem] mx-auto ">
        <main className="bg-white min-h-[500px] drop-shadow-[0px_0px_25px_rgba(73,83,100,0.12)] py-[40px] px-[20px] lg:p-[65px] relative z-10">
          {acfFlex.map((item, index) => {
            if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_Faq') {
              return filteredFaq.map((item, index) => (
                <Faqgroup key={index} data={item} />
              ))
            }
          })}
        </main>
      </div>

      <Getintouch className="md:mt-[75px] md:mb-[60px]" />
    </>
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
