import clsx from 'clsx'
import React from 'react'

const SliceTitle = ({ title, className }) => {
  return (
    <h2
      className={clsx('text-[34px] leading-[41px] font-semibold', {
        [`${className}`]: className,
        'mb-[65px]': !className,
      })}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  )
}

export default SliceTitle
