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

const {
  data: { translation },
} = {
  data: {
    translation: {
      title: 'Open Cloud',
      pagesHero: {
        subTitle: 'White-labeled Mobile app for cross-border remittance',
      },
    },
  },
}

const DATA_OC_POP = {
  title:
    'You want to create an cross-border <br> remittance offer from scratch?',
  logoImg: '/logos/fb-white-logo.svg',
  link: {
    label: 'Front Brand may suit your need',
    url: '/open-remit',
  },
}

export default function FrontBrandPage() {
  return (
    <>
      <SEO />
      <HeroSolution classsName="h-[560px] lg:h-[780px]">
        <Title className="uppercase" title={translation.title} />
        <SubTitle
          className="text-primary lg:mb-[100px]"
          subtitle={translation.pagesHero.subTitle}
        />
        <IntroFb />
        <HeroFbBg />
      </HeroSolution>

      <WhiteContainer
        sectionClassName="-mt-[90px]"
        gap={<SectionGap className="h-[80px] bottom-0 bg-[#f3f4f6]" />}
      >
        <Slice className="mb-[40px] lg:mb-[95px]">
          <SliceTitle title={SAY_HELLO_FB.sectionTitle} />
          <ListUl data={SAY_HELLO_FB.repeater} />
        </Slice>

        <Slice>
          <SliceTitle
            className="mb-[40px] lg:mb-[90px]"
            title="Re-think your internationalisation strategy"
          />
          <BlocWithImage />
        </Slice>
      </WhiteContainer>

      <SolutionBlocs className="max-w-1560">
        <TitleSolution title={ADVANTAGES_BLOCS_FRONT_BRAND.sectionTitle} />
        <List4cols data={ADVANTAGES_BLOCS_FRONT_BRAND.liste} />
      </SolutionBlocs>

      <WhiteContainer
        sectionClassName="bg-[#fafbfb]"
        gap={<SectionGap className="h-[95px] top-0 bg-[#f3f4f6]" />}
      >
        <Slice className="mb-[80px]">
          <SliceTitle
            title={BUILD_MONITOR.sectionTitle}
            className="mb-[50px]"
          />
          <ListWithImage data={BUILD_MONITOR.list} />
        </Slice>

        {/* <Slice>
          <SliceTitle title="Quicker, compliant, <br>high-tech way to build your offer " />
          <ClassicAndMitech data={CLASSIC_MITECH_COMPARAISON_DATA} />
        </Slice> */}
      </WhiteContainer>

      {/* <HowOperate data={HOW_OPERATE_DATA} />

      <Getintouch className=" pt-[70px]" /> */}

      <PopIn data={DATA_OC_POP} />
    </>
  )
}
