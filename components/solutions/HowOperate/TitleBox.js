import React from 'react'

const TitleBox = ({ title, subtitle }) => {
  return (
    <div className="text-center tracking-[0.02em] mb-10 lg:mb-[95px]">
      <h2 className="text-[28px] font-medium lg:font-normal lg:text-[46px] leading-normal lg:leading-[46px] mb-1 lg:mb-[30px]">
        {title}
      </h2>
      <div className="text-[20px] lg:text-[32px] text-primary">{subtitle}</div>
    </div>
  )
}

export default TitleBox
