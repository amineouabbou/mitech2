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

export default function AboutPage() {
  return (
    <>
      <SEO />
      <HeroSolution classsName="h-[700px]">
        <Title title={translation.title} />
        <SubTitle
          className="text-primary lg:mb-[100px]"
          subtitle={translation.pagesHero.subTitle}
        />
        <IntroAbout />
      </HeroSolution>

      <WhiteContainer sectionClassName="-mt-[90px]">
        <Slice>
          <SliceTitle className="mb-[90px]" title="Our vision" />
          <OurVision />
        </Slice>

        <Slice className="mb-[95px]">
          <SliceTitle className="mb-[35px]" title="Our DNA" />
          <OurDna />
        </Slice>

        <Slice className="mb-[95px]">
          <SliceTitle className="mb-[35px]" title="Our technology" />
          <OurTechnology />
        </Slice>

        <Slice>
          <SliceTitle className="mb-[35px]" title="Conformity is key" />
          <Conformity />
        </Slice>
      </WhiteContainer>

      <Getintouch className="pt-[70px]" />
    </>
  )
}
