import Button from '../../html/Button'
import Cardconformity from './Cardconformity'

const Conformity = ({ data }) => {
  const { subtitle, preDescription, advantagesListRepeater, button } = data

  return (
    <div>
      <div
        className="text-[16px] lg:text-[20px] leading-[28px] text-[#878ea2] mb-[35px] lg:leading-[31px]"
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />

      {advantagesListRepeater && (
        <div className="grid lg:grid-cols-1 gap-y-[15px]">
          {advantagesListRepeater.map((item, index) => (
            <Cardconformity data={item} key={index} />
          ))}
        </div>
      )}

      {button && (
        <div className="read-more flex justify-center lg:mt-[40px]">
          <Button title={button?.label} url={button?.ahref} />
        </div>
      )}
    </div>
  )
}

export default Conformity
