const CardTechnology = ({ data }) => {
  return (
    <div className="border-[1px] border-[#dfe0e4] rounded-[10px] px-[40px] py-[50px]">
      <div
        className=" mb-[80px] text-[33px] leading-[42px] font-semibold text-primary"
        dangerouslySetInnerHTML={{ __html: data.title }}
      />
      <div
        className="text-[19px] text-[#737587] leading-[30px]"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
    </div>
  )
}

export default CardTechnology
