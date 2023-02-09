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

const {
  data: { translation },
} = {
  data: {
    translation: {
      title: 'Open cloud',
      pagesHero: {
        subTitle:
          '<strong>Cross-border remittance</strong> solutions for your existing digital offer',
      },
    },
  },
}

const DATA_FB_POP = {
  title:
    'You want to create an cross-border <br> remittance offer from scratch?',
  logoImg: '/icons/fb-white-logo.svg',
  link: {
    label: 'Front Brand may suit your need',
    url: '/front-brand',
  },
}

export default function OpenRemitPage() {
  return (
    <>
      <SEO />
      <HeroSolution>
        <Title className="uppercase" title={translation.title} />
        <SubTitle
          className="text-primary lg:mb-[75px]"
          subtitle={translation.pagesHero.subTitle}
        />
        <IntroOc />
      </HeroSolution>

      <WhiteContainer
        sectionClassName="-mt-[90px]"
        gap={<SectionGap className="h-[80px] bottom-0 bg-[#f3f4f6]" />}
      >
        <Slice className="mb-[120px]">
          <SliceTitle title={SAY_HELLO.sectionTitle} />
          <ListUl data={SAY_HELLO.repeater} />
        </Slice>

        <Slice>
          <SliceTitle title={PLUG_IMPROVE.sectionTitle} />
          <PlugAndImprove data={PLUG_IMPROVE.list} />
        </Slice>
      </WhiteContainer>

      <SolutionBlocs>
        <TitleSolution title={ADVANTAGES_BLOCS_OPEN_CLOUD.sectionTitle} />
        <List3cols data={ADVANTAGES_BLOCS_OPEN_CLOUD.liste} />
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

        <Slice>
          <SliceTitle title="Quicker, compliant, <br>high-tech way to build your offer " />
          <ClassicAndMitech data={CLASSIC_MITECH_COMPARAISON_DATA} />
        </Slice>
      </WhiteContainer>

      <HowOperate data={HOW_OPERATE_DATA} />

      <Getintouch className="pt-[70px]" />

      <PopIn data={DATA_FB_POP} />
    </>
  )
}
