const CardBloc = ({ data }) => {
  return (
    <div className="text-[#737483] mb-[30px] last:mb-0">
      <div className="font-semibold text-[17px] lg:text-[22px] mb-[5px]">
        {data.title}
      </div>
      <div className="lg:text-[16px] lg:leading-[26px]">{data.description}</div>
    </div>
  )
}

export default CardBloc
