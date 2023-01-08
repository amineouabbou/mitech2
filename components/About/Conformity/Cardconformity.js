import Image from 'next/image'
import React from 'react'

const Cardconformity = ({ data }) => {
  return (
    <div className="card border-[1px] border-[#dfe0e4] py-[0]  rounded-[10px] flex items-center">
      <div className="bloc grow max-w-[690px] pl-[50px]">
        <div className="mb-[15px] flex items-center">
          <div className="mr-[15px]">
            <Image alt="" src={data.icon} width={46} height={46} />
          </div>
          <h2 className="text-[26px] font-semibold text-primary leading-[33px] tracking-[0.03em]">
            {data.title}
          </h2>
        </div>
        <div className="liste pl-[30px]">
          <div className="mb-[10px]">{data.intro}</div>
          {data.liste.map((item) => (
            <div
              key={item.id}
              className="flex items-start text-[15px] mb-[8px]"
            >
              <div className="min-w-[18px] mr-[15px]">
                <span className="relative top-[1px]">
                  <Image
                    src="/icons/check-orange.svg"
                    width={18}
                    height={13}
                    alt="icon"
                  />
                </span>
              </div>

              <div className="leading-[21px] tracking-[0.025em]">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bloc-img min-w-[290px] max-w-[290px] flex flex-col items-end ml-auto">
        <Image
          alt=""
          width={290}
          height={290}
          objectFit="contain"
          src={data.photo}
        />
      </div>
    </div>
  )
}

export default Cardconformity
