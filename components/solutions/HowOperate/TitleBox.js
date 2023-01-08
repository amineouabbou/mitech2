import React from 'react'

const TitleBox = ({ title, subtitle }) => {
  return (
    <div className="text-center tracking-[0.02em] mb-[95px]">
      <h2 className="text-[46px] leading-[46px] mb-[30px]">{title}</h2>
      <div className="text-[32px] text-primary">{subtitle}</div>
    </div>
  )
}

export default TitleBox
