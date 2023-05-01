import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import SEO from '../components/SEO'
import Getintouch from '../components/Ui/Getintouch'
import Title from '../components/Ui/Heroinner/Title'
import SubTitle from '../components/Ui/Heroinner/SubTitle'
import WhiteContainer from '../components/solutions/Whitecontainer'
import SolutionBlocs from '../components/solutions/SolutionBlocs'
import HowOperate from '../components/solutions/HowOperate'
import HeroSolution from '../components/solutions/Ui/HeroSolution'
import SectionGap from '../components/Ui/Others/SectionGap'
import Slice from '../components/solutions/Slice/Slice'
import ListUl from '../components/Ui/List'
import SliceTitle from '../components/solutions/Slice/SliceTitle'
import ListWithImage from '../components/solutions/ListWithImage'
import ClassicAndMitech from '../components/solutions/ClassMitech'

import {
  ADVANTAGES_BLOCS_FRONT_BRAND,
  BUILD_MONITOR,
  CLASSIC_MITECH_COMPARAISON_DATA,
  HOW_OPERATE_DATA,
  SAY_HELLO_FB,
} from '../components/solutions/DummyData'
import IntroFb from '../components/solutions/FrontBrand/IntroFb'
import TitleSolution from '../components/solutions/SolutionBlocs/TitleSolution'
import List4cols from '../components/solutions/SolutionBlocs/List4cols'
import HeroFbBg from '../components/solutions/FrontBrand/HeroFbBg'
import BlocWithImage from '../components/solutions/BlocWithImage'
import PopIn from '../components/solutions/PopIn'
import { GET_FRONT_BRAND, GLOBAL_DATA } from '../queries'
import { getPageData } from '../utils'
import { getGetInTouchBlock } from '../Utilis'

export default function FrontBrandPage({ data, global }) {
  const {
    title: pageTitle,
    ACFPage: { acfFlex },
  } = data.page.translation

  const { sectionsOthers } = global?.page?.translation?.ACFGlobal || []

  const { data: getIntouchBlock } = getGetInTouchBlock(sectionsOthers || [])

  return (
    <>
      <SEO title={pageTitle} />

      {acfFlex.map((item, index) => {
        if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_HeroSolution') {
          return (
            <HeroSolution
              key={index}
              classsName="min-h-[680px] lg:min-h-[780px]"
            >
              <Title className="uppercase" title={item.title} />
              <SubTitle
                className="text-primary lg:mb-[100px]"
                subtitle={item.subtitle}
              />
              <IntroFb data={item.description} />
              <HeroFbBg img={item.photo?.mediaItemUrl} />
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
              <Slice key={index} className="mb-[40px] lg:mb-[95px]">
                <SliceTitle title={item.title} />
                <ListUl data={item.advantagesRepeater} />
              </Slice>
            )
          }

          if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_ReThink') {
            return (
              <Slice key={index}>
                <SliceTitle
                  className="mb-[40px] lg:mb-[90px]"
                  title={item.title}
                />
                <BlocWithImage {...item} />
              </Slice>
            )
          }
        })}
      </WhiteContainer>

      {acfFlex.map((item, index) => {
        if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_SolutionFeatured') {
          return (
            <SolutionBlocs key={index} className="max-w-1560">
              <TitleSolution title={item.title} />
              <List4cols data={item.advantagesRepeater} />
            </SolutionBlocs>
          )
        }
      })}

      <WhiteContainer
        sectionClassName="bg-[#fafbfb] overflow-hidden"
        gap={<SectionGap className="h-[95px] top-0 bg-[#f3f4f6]" />}
      >
        {acfFlex.map((item, index) => {
          if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_BuildAndMonitor') {
            return (
              <Slice key={index} className="mb-[30px] lg:mb-[80px]">
                <SliceTitle
                  title={item.title}
                  className="mb-[30px] lg:mb-[50px]"
                />
                <ListWithImage data={item} />
              </Slice>
            )
          }

          if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_ComparisonTable') {
            return (
              <Slice key={index}>
                <SliceTitle title={item.title} />
                <ClassicAndMitech
                  data={{
                    brandsRepeater: item.brandsRepeater,
                    comparisonRepeater: item.comparisonRepeater,
                  }}
                />
              </Slice>
            )
          }
        })}
      </WhiteContainer>

      {acfFlex.map((item, index) => {
        if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_HowWeOperate') {
          return <HowOperate key={index} data={item} />
        }
      })}

      <Getintouch data={getIntouchBlock} className=" pt-[50px] lg:pt-[70px]" />

      {acfFlex.map((item, index) => {
        if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_PopIn') {
          return <PopIn data={item} key={index} />
        }
      })}
    </>
  )
}

export async function getServerSideProps({ locale }) {
  const data = await getPageData(GET_FRONT_BRAND, 370, locale)
  const global = await getPageData(GLOBAL_DATA, 563, locale)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data,
      global,
    },
  }
}
