import Image from 'next/image'
import CardBloc from './CardBloc'

const BlocWithImage = (props) => {
  const { photo, listeRepeater } = props
  return (
    <div className="lg:flex items-center">
      <div className="bloc-img min-w-[275px] max-w-[275px] lg:min-w-[375px] lg:max-w-[375px] mb-10 lg:mb-0">
        <Image src={photo.mediaItemUrl} width={372} height={394} alt="" />
      </div>
      <div className="bloc lg:min-w-[530px] lg:max-w-[530px] lg:ml-[59px]">
        {listeRepeater.map((item, index) => (
          <CardBloc data={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default BlocWithImage
