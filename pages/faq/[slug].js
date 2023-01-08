import slugify from 'slugify'

import SEO from '../../components/SEO'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getPageData } from '../../utils'
import { GET_FAQ } from '../../queries'
import Faqgroup from '../../components/faq/Faqgroup'
import Getintouch from '../../components/Ui/Getintouch'
import { useRouter } from 'next/router'
import Title from '../../components/Ui/Heroinner/Title'
import SubTitle from '../../components/Ui/Heroinner/SubTitle'
import Description from '../../components/Ui/Heroinner/Description'
import FaqHeroBloc from '../../components/faq/FaqHeroBloc'
import HeroinnerSimple from '../../components/Ui/HeroinnerSimple'

export default function Faq({ data }) {
  const router = useRouter()
  const { slug } = router.query
  const {
    title: pageTitle,
    ACFPage: { acfFlex },
    pagesHero,
  } = data.page.translation

  return (
    <>
      <SEO />
      <HeroinnerSimple
        title={<Title title={pageTitle} />}
        subtitle={<SubTitle subtitle={pagesHero?.subTitle} />}
        description={<Description description={pagesHero?.intro} />}
        childComp={<FaqHeroBloc data={acfFlex[0].listCategoriesRep} />}
        hasBgBackground={true}
      />

      <div className="container px-0 lg:px-[1rem] mx-auto max-w-[1030px] ">
        <main className="bg-white min-h-[500px] drop-shadow-[0px_0px_25px_rgba(73,83,100,0.12)] py-[40px] px-[20px] lg:p-[65px] relative z-10">
          {acfFlex.map((item, index) => {
            if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_Faq') {
              return item?.listCategoriesRep
                .filter((item) => {
                  return slugify(item.category, { lower: true }).includes(slug)
                })
                .map((item, index) => <Faqgroup key={index} data={item} />)
            }
          })}
        </main>
      </div>

      <div className="md:mt-[75px] md:mb-[60px]">
        <Getintouch />
      </div>
    </>
  )
}

export async function getStaticPaths({ locale }) {
  const data = await getPageData(GET_FAQ, 168, locale)

  const paths = data.page.translation.ACFPage.acfFlex[0].listCategoriesRep.map(
    (item) => {
      return { params: { slug: slugify(item.category, { lower: true }) } }
    }
  )

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
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
