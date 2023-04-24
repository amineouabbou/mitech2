import React from 'react'
import { twclsx } from '../../../libs/twclsx'

const Item = ({ data, className }) => {
  return (
    <div
      className={twclsx(
        'text-[14px] lg:text-[17px] leading-[32px] flex items-top',
        {
          'mb-[20px]': !className,
          [`${className}`]: className,
        }
      )}
    >
      <span className="w-[9px] min-w-[9px] h-[9px] rounded-full bg-[#7b86a2] mr-[15px] relative top-[13px]"></span>
      <span dangerouslySetInnerHTML={{ __html: data.texte }} />
    </div>
  )
}

export default Item
