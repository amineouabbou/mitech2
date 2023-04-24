import Cardconformity from './Cardconformity'

const Conformity = ({ data }) => {
  const { subtitle, preDescription, advantagesListRepeater } = data
  return (
    <div>
      <div
        className="text-[16px] lg:text-[20px] leading-[28px] text-[#878ea2] mb-[35px] lg:leading-[31px]"
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />

      <div className="grid lg:grid-cols-1 gap-y-[15px]">
        {advantagesListRepeater.map((item, index) => (
          <Cardconformity data={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Conformity
