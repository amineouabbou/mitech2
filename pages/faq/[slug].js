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
import HeroFaq from '../../components/faq/HeroFaq'
import { getGetInTouchBlock } from '../../Utilis'

export default function FaqSlug({ data, globalProps }) {
  const router = useRouter()
  const { slug } = router.query
  const {
    title: pageTitle,
    ACFPage: { acfFlex },
    pagesHero,
  } = data.page.translation

  const { sectionsOthers } = globalProps?.page?.translation?.ACFGlobal || []

  const { data: getIntouchBlock } = getGetInTouchBlock(sectionsOthers || [])

  return (
    <>
      <SEO />
      <HeroFaq>
        <Title title={pageTitle} />
        <SubTitle subtitle={pagesHero?.subTitle} />
        <Description description={pagesHero?.intro} />
        <FaqHeroBloc data={acfFlex[0].listCategoriesRep} />
      </HeroFaq>

      <div className="container px-0 lg:px-[1rem]">
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

      <Getintouch data={getIntouchBlock} className=" pt-[50px] lg:pt-[70px]" />
    </>
  )
}

// export async function getStaticPaths({ locale }) {
//   const data = await getPageData(GET_FAQ, 168, locale)

//   const paths = data.page.translation.ACFPage.acfFlex[0].listCategoriesRep.map(
//     (item) => {
//       return { params: { slug: slugify(item.category, { lower: true }) } }
//     }
//   )

//   return {
//     paths,
//     fallback: false, // can also be true or 'blocking'
//   }
// }

export async function getServerSideProps({ locale }) {
  const data = await getPageData(GET_FAQ, 168, locale)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data,
    },
  }
}
