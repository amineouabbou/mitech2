import Image from 'next/image'
import { useRouter } from 'next/router'

const SolutionPop = ({ data }) => {
  const router = useRouter()
  const { logo, slug, title, description } = data

  const handleClick = (link) => {
    router.push(`/${link}`)
  }
  return (
    <div
      className="item flex items-start mb-[30px] cursor-pointer group"
      onClick={() => handleClick(slug)}
    >
      <div className="icon mr-[5px]">
        <Image
          width={50}
          height={22}
          alt="front brand"
          src={logo?.mediaItemUrl}
        />
      </div>
      <div className="text-[15px]">
        <div className="font-bold uppercase leading-[15px] group-hover:text-primary duration-300 text-[16px]">
          {title}
        </div>
        <p className="text-[#c1c4cb] group-hover:text-primary duration-300 font-medium font-poppins">
          {description}
        </p>
      </div>
    </div>
  )
}

export default SolutionPop
