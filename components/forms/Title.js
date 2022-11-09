import React from 'react'

const Title = ({ title, required }) => {
  return (
    <div className="text-[16px] lg:text-[19px] font-medium mb-[22px]">
      {title} {required && <span className="text-primary">*</span>}
    </div>
  )
}

export default Title
