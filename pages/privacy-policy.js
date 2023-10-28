import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import SEO from '../components/SEO'
import Largebox from '../components/features/Largebox'
import Getintouch from '../components/Ui/Getintouch'
import { GET_PRIVACY_POLICY } from '../queries'
import { getPageData } from '../utils'
import Title from '../components/Ui/Heroinner/Title'
import SubTitle from '../components/Ui/Heroinner/SubTitle'
import HeroinnerSimple from '../components/Ui/HeroinnerSimple'
import { getGetInTouchBlock } from '../Utilis'

export default function PrivacyPolicy({ data, globalProps }) {
  const { title: pageTitle, content, pagesHero } = data.page.translation

  const { sectionsOthers } = globalProps?.page?.translation?.ACFGlobal || []

  const { data: getIntouchBlock } = getGetInTouchBlock(sectionsOthers || [])

  return (
    <>
      <SEO title={pageTitle} />
      <HeroinnerSimple
        title={<Title title={pageTitle} />}
        subtitle={<SubTitle subtitle={pagesHero?.subTitle} />}
        description={pagesHero?.intro}
      />

      <div className="container mx-auto">
        <main className="bg-white min-h-[500px] drop-shadow-[0px_0px_25px_rgba(73,83,100,0.12)] p-[20px] lg:p-[65px] relative z-10 -mt-[70px] lg:-mt-[125px]">
          <div className="std" dangerouslySetInnerHTML={{ __html: content }} />
        </main>
      </div>
      <Getintouch
        data={getIntouchBlock}
        className="my-[40px] md:mt-[75px] md:mb-[60px]"
      />
    </>
  )
}

export async function getServerSideProps({ locale }) {
  const data = await getPageData(GET_PRIVACY_POLICY, 771, locale)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data,
    },
  }
}
