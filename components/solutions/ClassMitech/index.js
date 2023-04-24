import { twclsx } from '../../../libs/twclsx'
import Card from './Card'

const ClassicAndMitech = ({ data }) => {
  return (
    <>
      <div className="tb-list flex flex-col items-end mb-[15px]">
        <div className="max-w-[475px] lg:min-w-[475px] flex items-center lg:mr-[125px]">
          {data.brandsRepeater.map((item, index) => (
            <div
              key={index}
              className={twclsx(
                'h-[39px] rounded-[20px] bg-[#f3f4f6] flex flex-col justify-center items-center px-[26px] text-[15px] lg:text-[19px] text-[#7b86a2]',
                {
                  'ml-auto': index === 1,
                  'bg-primary text-white': index === 1,
                }
              )}
            >
              <span>{item.texte}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="group">
        {data.comparisonRepeater.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>
    </>
  )
}

export default ClassicAndMitech
