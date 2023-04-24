import SEO from '../components/SEO'
import Getintouch from '../components/Ui/Getintouch'
import Title from '../components/Ui/Heroinner/Title'
import SubTitle from '../components/Ui/Heroinner/SubTitle'
import WhiteContainer from '../components/solutions/Whitecontainer'
import HeroSolution from '../components/solutions/Ui/HeroSolution'
import SectionGap from '../components/Ui/Others/SectionGap'
import Slice from '../components/solutions/Slice/Slice'
import ListUl from '../components/Ui/List'
import SliceTitle from '../components/solutions/Slice/SliceTitle'

import { SAY_HELLO_FB } from '../components/solutions/DummyData'
import IntroFb from '../components/solutions/FrontBrand/IntroFb'
import HeroFbBg from '../components/solutions/FrontBrand/HeroFbBg'
import IntroAbout from '../components/About/IntroAbout'
import OurVision from '../components/About/OurVision'
import OurDna from '../components/About/OurDna'
import OurTechnology from '../components/About/OurTechnology'
import Conformity from '../components/About/Conformity'
import { GET_ABOUT_PAGE } from '../queries'
import { getPageData } from '../utils'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const {
  data: { translation },
} = {
  data: {
    translation: {
      title: 'About us',
      pagesHero: {
        subTitle: 'Mitech, a Money international platform ',
      },
    },
  },
}

export default function AboutPage({ data }) {
  const {
    title: pageTitle,
    ACFPage: { acfFlex },
  } = data.page.translation

  return (
    <>
      <SEO />

      {acfFlex.map((item, index) => {
        if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_HeroSolution') {
          return (
            <HeroSolution
              key={index}
              classsName="min-h-[820px] lg:min-h-[700px]"
            >
              <Title title={item.title} />
              <SubTitle
                className="text-primary lg:mb-[100px]"
                subtitle={item.subtitle}
              />
              <IntroAbout data={item} />
            </HeroSolution>
          )
        }
      })}

      <WhiteContainer sectionClassName="-mt-[90px]">
        {acfFlex.map((item, index) => {
          if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_AboutOurVision') {
            return (
              <Slice key={index} className="mb-[50px] lg:mb-0">
                <SliceTitle
                  className="mb-[35px] lg:mb-[90px]"
                  title={item.title}
                />
                <OurVision data={item} />
              </Slice>
            )
          }

          if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_AboutOurDna') {
            return (
              <Slice key={index} className="mb-[50px] lg:mb-[95px]">
                <SliceTitle
                  className="mb-[10px] lg:mb-[35px]"
                  title={item.title}
                />
                <OurDna data={item} />
              </Slice>
            )
          }

          if (
            item.fieldGroupName === 'Page_Acfpage_AcfFlex_AboutOurTechnology'
          ) {
            return (
              <Slice key={index} className="mb-[95px]">
                <SliceTitle
                  className="mb-[10px] lg:mb-[35px]"
                  title={item.title}
                />
                <OurTechnology data={item} />
              </Slice>
            )
          }

          if (item.fieldGroupName === 'Page_Acfpage_AcfFlex_AboutConformity') {
            return (
              <Slice key={index}>
                <SliceTitle className="mb-[35px]" title={item.title} />
                <Conformity data={item} />
              </Slice>
            )
          }
        })}
      </WhiteContainer>

      <Getintouch className=" pt-[50px] lg:pt-[70px]" />
    </>
  )
}

export async function getStaticProps({ locale }) {
  const data = await getPageData(GET_ABOUT_PAGE, 504, locale)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data: data,
    },
  }
}
