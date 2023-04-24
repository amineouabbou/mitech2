import React from 'react'
import { twclsx } from '../../../libs/twclsx'

const HeroSolution = ({ children, classsName }) => {
  return (
    <div
      className={twclsx('bg-[#f3f4f6] flex flex-col relative overflow-hidden', {
        [`${classsName}`]: classsName,
      })}
    >
      <div className="container max-w-1190 flex flex-col justify-center items-center grow">
        {children}
      </div>
    </div>
  )
}

export default HeroSolution
