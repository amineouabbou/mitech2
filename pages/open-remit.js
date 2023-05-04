import SEO from '../components/SEO'
import Getintouch from '../components/Ui/Getintouch'
import Title from '../components/Ui/Heroinner/Title'
import SubTitle from '../components/Ui/Heroinner/SubTitle'
import WhiteContainer from '../components/solutions/Whitecontainer'
import SolutionBlocs from '../components/solutions/SolutionBlocs'
import HowOperate from '../components/solutions/HowOperate'
import HeroSolution from '../components/solutions/Ui/HeroSolution'
import IntroOc from '../components/solutions/OpenCloud/IntroOc'
import SectionGap from '../components/Ui/Others/SectionGap'
import Slice from '../components/solutions/Slice/Slice'
import ListUl from '../components/Ui/List'
import SliceTitle from '../components/solutions/Slice/SliceTitle'
import PlugAndImprove from '../components/solutions/PlugAndImprove'
import ListWithImage from '../components/solutions/ListWithImage'
import ClassicAndMitech from '../components/solutions/ClassMitech'

import {
  ADVANTAGES_BLOCS,
  ADVANTAGES_BLOCS_OPEN_CLOUD,
  BUILD_MONITOR,
  CLASSIC_MITECH_COMPARAISON_DATA,
  HOW_OPERATE_DATA,
  PLUG_IMPROVE,
  SAY_HELLO,
} from '../components/solutions/DummyData'
import TitleSolution from '../components/solutions/SolutionBlocs/TitleSolution'
import List3cols from '../components/solutions/SolutionBlocs/List3cols'
import PopIn from '../components/solutions/PopIn'
import { getPageData } from '../utils'
import { GET_OPEN_REMIT, GLOBAL_DATA } from '../queries'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getGetInTouchBlock } from '../Utilis'

export default function OpenRemitPage({ data, globalProps }) {
  const {
    title: pageTitle,
    ACFPage: { acfFlex },
  } = data.page.translation

  const { sectionsOthers } = globalProps?.page?.translation?.ACFGlobal || []

  const { data: getIntouchBlock } = getGetInTouchBlock(sectionsOthers || [])

  return (
    <>
      <SEO title={pageTitle} />
      {acfFlex.map((item, index) => {
        if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_HeroSolution') {
          return (
            <HeroSolution
              key={index}
              classsName="min-h-[1090px] lg:min-h-[880px]"
            >
              <Title className="uppercase" title={item.title} />
              <SubTitle
                className="text-primary lg:mb-[100px]"
                subtitle={item.subtitle}
              />
              <IntroOc data={item} />
            </HeroSolution>
          )
        }
      })}

      <WhiteContainer
        sectionClassName="-mt-[90px]"
        gap={<SectionGap className="h-[80px] bottom-0 bg-[#f3f4f6]" />}
      >
        {acfFlex.map((item, index) => {
          if (
            item.fieldGroupName === 'Page_Acfpage_AcfFlex_SolutionAdvantages'
          ) {
            return (
              <Slice key={index} className="mb-[40px] lg:mb-[120px]">
                <SliceTitle title={item.title} />
                <ListUl data={item.advantagesRepeater} />
              </Slice>
            )
          }

          if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_PlugAndImprove') {
            return (
              <Slice key={index}>
                <SliceTitle title={item.title} />
                <PlugAndImprove data={item} />
              </Slice>
            )
          }
        })}
      </WhiteContainer>

      {acfFlex.map((item, index) => {
        if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_SolutionFeatured') {
          return (
            <SolutionBlocs key={index}>
              <TitleSolution title={item.title} />
              <List3cols data={item} />
            </SolutionBlocs>
          )
        }
      })}

      <WhiteContainer
        sectionClassName="bg-[#fafbfb]"
        gap={<SectionGap className="h-[95px] top-0 bg-[#f3f4f6]" />}
      >
        {acfFlex.map((item, index) => {
          if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_BuildAndMonitor') {
            return (
              <Slice key={index} className="mb-[30px] lg:mb-[80px]">
                <SliceTitle title={item.title} className="mb-[50px]" />
                <ListWithImage data={item} />
              </Slice>
            )
          }

          if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_ComparisonTable') {
            return (
              <Slice key={index}>
                <SliceTitle title={item.title} />
                <ClassicAndMitech data={item} />
              </Slice>
            )
          }
        })}
      </WhiteContainer>

      {acfFlex.map((item, index) => {
        if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_HowWeOperate') {
          return <HowOperate key={index} data={item} />
        }

        if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_PopIn') {
          return <PopIn key={index} data={item} />
        }
      })}

      <Getintouch data={getIntouchBlock} className=" pt-[50px] lg:pt-[70px]" />
    </>
  )
}

export async function getStaticProps({ locale }) {
  const data = await getPageData(GET_OPEN_REMIT, 393, locale)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data: data,
    },
  }
}
