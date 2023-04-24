import Image from 'next/image'

const CardDna = ({ data }) => {
  const { icone, title, description } = data
  return (
    <div className="card flex flex-col items-center border-[1px] border-[#dfe0e4] px-[15px] lg:px-[30px] py-[25px] lg:py-[45px] lg:min-h-[540px] rounded-[10px]">
      <div className="icone-box w-[80px] h-[80px] lg:h-[113px] lg:w-[113px] bg-[#f4f5f6] rounded-full mb-[25px] lg:mb-[50px] flex flex-col justify-center items-center">
        {icone && (
          <div className="w-[45px] h-[45px] lg:w-[70px] lg:h-[70px]">
            <Image alt="" width={70} height={70} src={icone.mediaItemUrl} />
          </div>
        )}
      </div>
      <div
        className="text-center mb-[25px] lg:mb-[45px] text-[19px] lg:text-[22px] font-medium leading-normal"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div
        className="text-[15px] lg:text-[16px] text-[#737587] leading-[26px]"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  )
}

export default CardDna
