import React from 'react'

const TitleSolution = ({ title }) => {
  return (
    <h2
      className="solution-sec-title font-medium text-[39px] leading-[43px] tracking-[0.02em] mb-[65px] text-center"
      dangerouslySetInnerHTML={{ __html: title }}
    />
  )
}

export default TitleSolution
