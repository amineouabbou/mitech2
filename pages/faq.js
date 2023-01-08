import SEO from '../components/SEO'
import Layout from '../components/Ui/Layout'
import Header from '../components/Ui/Header'
import Footer from '../components/Ui/Footer'
import { shortFadeUp, titesStagger } from '../data/useVariants'
import Categories from '../components/faq/Categories'
import Question from '../components/faq/Question'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getPageData } from '../utils'
import { GET_FAQ } from '../queries'
import Faqgroup from '../components/faq/Faqgroup'
import Getintouch from '../components/Ui/Getintouch'
import Title from '../components/Ui/Heroinner/Title'
import SubTitle from '../components/Ui/Heroinner/SubTitle'
import FaqHeroBloc from '../components/faq/FaqHeroBloc'
import Description from '../components/Ui/Heroinner/Description'
import HeroinnerSimple from '../components/Ui/HeroinnerSimple'
import HeroFaq from '../components/faq/HeroFaq'

export default function Faq({ data }) {
  const {
    title: pageTitle,
    ACFPage: { acfFlex },
    pagesHero,
  } = data.page.translation

  return (
    <>
      <SEO />
      <HeroFaq>
        <Title title={pageTitle} />
        <SubTitle subtitle={pagesHero?.subTitle} />
        <Description description={pagesHero?.intro} />
        <FaqHeroBloc data={acfFlex[0].listCategoriesRep} />
      </HeroFaq>

      <div className="container px-0 lg:px-[1rem] mx-auto ">
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

      <Getintouch className="md:mt-[75px] md:mb-[60px]" />
    </>
  )
}

export async function getStaticProps({ locale }) {
  const data = await getPageData(GET_FAQ, 168, locale)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data: data,
    },
  }
}
