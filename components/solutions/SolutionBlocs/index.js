import React from 'react'
import { twclsx } from '../../../libs/twclsx'

const SolutionBlocs = ({ className, children }) => {
  return (
    <div className="bg-[#f3f4f6] pt-[130px] pb-[90px]">
      <div
        className={twclsx('container ', {
          [`${className}`]: className,
          'max-w-1190': !className,
        })}
      >
        {children}
      </div>
    </div>
  )
}

export default SolutionBlocs
