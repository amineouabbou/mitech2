import clsx from 'clsx'
import React from 'react'

const SliceTitle = ({ title, className }) => {
  return (
    <h2
      className={clsx(
        'text-[20px] lg:text-[34px] leading-normal lg:leading-[41px] font-semibold',
        {
          [`${className}`]: className,
          'mb-[30px] lg:mb-[65px]': !className,
        }
      )}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  )
}

export default SliceTitle
