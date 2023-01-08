import Image from 'next/image'

const CardDna = ({ data }) => {
  return (
    <div className="card flex flex-col items-center border-[1px] border-[#dfe0e4] px-[30px] py-[45px] min-h-[540px] rounded-[10px]">
      <div className="icone-box h-[113px] w-[113px] bg-[#f4f5f6] rounded-full mb-[50px] flex flex-col justify-center items-center">
        <div className="w-[70px] h-[70px]">
          <Image alt="" width={70} height={70} src={data.icon} />
        </div>
      </div>
      <div
        className="text-center mb-[45px] text-[22px] font-medium leading-normal"
        dangerouslySetInnerHTML={{ __html: data.title }}
      />
      <div
        className="text-[16px] text-[#737587] leading-[26px]"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
    </div>
  )
}

export default CardDna
