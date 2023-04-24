const CardTechnology = ({ data }) => {
  const { title, description } = data
  return (
    <div className="border-[1px] border-[#dfe0e4] rounded-[10px] px-[20px] lg:px-[40px] py-[45px] lg:py-[50px]">
      <div
        className="mb-[40px] lg:mb-[80px] text-[21px] leading-normal lg:text-[33px] lg:leading-[42px] font-semibold text-primary"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div
        className="text-[15px] lg:text-[19px] text-[#737587] lg:leading-[30px]"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  )
}

export default CardTechnology
