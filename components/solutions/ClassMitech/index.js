import { twclsx } from '../../../libs/twclsx'
import Card from './Card'

const ClassicAndMitech = ({ data }) => {
  return (
    <>
      <div className="tb-list flex flex-col items-end mb-[15px]">
        <div className="max-w-[475px] min-w-[475px] flex items-center mr-[125px]">
          {data.tabsGroupTitle.map((item) => (
            <div
              key={item.id}
              className={twclsx(
                'h-[39px] rounded-[20px] bg-[#f3f4f6] flex flex-col justify-center items-center px-[26px] text-[19px] text-[#7b86a2]',
                {
                  'ml-auto': item.id === 1,
                  'bg-primary text-white': item.id === 1,
                }
              )}
            >
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="group">
        {data.rep.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>
    </>
  )
}

export default ClassicAndMitech
