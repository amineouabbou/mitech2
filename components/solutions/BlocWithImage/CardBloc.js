const CardBloc = ({ data }) => {
  return (
    <div className="text-[#737483] mb-[30px]">
      <div className="font-semibold text-[22px] mb-[5px]">{data.title}</div>
      <div className="text-[16px] leading-[26px]">{data.description}</div>
    </div>
  )
}

export default CardBloc
