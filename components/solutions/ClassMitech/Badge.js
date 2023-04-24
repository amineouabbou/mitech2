import React from 'react'
import { twclsx } from '../../../libs/twclsx'

function Badge(props) {
  const { className, label } = props
  return (
    <div className="mb-[15px] block lg:hidden">
      <div className="inline-block">
        <div
          className={twclsx(
            'h-[25px] rounded-[20px] bg-[#f3f4f6] flex flex-row justify-center items-center px-[15px] text-[13px] lg:text-[19px] text-[#7b86a2]',
            {
              [`${className}`]: className,
            }
          )}
        >
          <span>{label}</span>
        </div>
      </div>
    </div>
  )
}

export default Badge
