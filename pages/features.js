import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import SEO from '../components/SEO'
import Largebox from '../components/features/Largebox'
import Getintouch from '../components/Ui/Getintouch'
import { GET_FEATURES } from '../queries'
import { getPageData } from '../utils'
import Title from '../components/Ui/Heroinner/Title'
import SubTitle from '../components/Ui/Heroinner/SubTitle'
import HeroinnerSimple from '../components/Ui/HeroinnerSimple'

export default function Featured({ data }) {
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
        description={pagesHero?.intro}
      />

      <div className="container mx-auto">
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
      <Getintouch className="my-[40px] md:mt-[75px] md:mb-[60px]" />
    </>
  )
}

export async function getStaticProps({ locale }) {
  const data = await getPageData(GET_FEATURES, 9, locale)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data: data,
    },
  }
}
