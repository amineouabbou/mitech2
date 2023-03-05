import Image from 'next/image'
import CardBloc from './CardBloc'

const DATA = [
  {
    id: 0,
    title: 'Remittance is a strategic product',
    description:
      'This untapped potential for your institution, having a direct link with a foreign country bring immense opportunity to bring your brand abroad.',
  },
  {
    id: 1,
    title: 'Gain revenue',
    description:
      'The traditional way of doing remittance meant having to deal with MTO, but with digitalisation you can bypass them and gain the full control on revenue generation. ',
  },
  {
    id: 2,
    title: 'Hartness International opportunities',
    description:
      'By performing International remittance you harness new markets and new currencies. This allow your activity to grow in a new, richer way.',
  },
]

const BlocWithImage = () => {
  return (
    <div className="lg:flex items-center">
      <div className="bloc-img min-w-[275px] max-w-[275px] lg:min-w-[375px] lg:max-w-[375px]">
        <Image src="/bgs/happy-women.png" width={372} height={394} alt="" />
      </div>
      <div className="bloc lg:min-w-[530px] lg:max-w-[530px] lg:ml-[59px]">
        {DATA.map((item) => (
          <CardBloc data={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default BlocWithImage
