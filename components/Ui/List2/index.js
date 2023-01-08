import clsx from 'clsx'
import React from 'react'
import Item from './Item'

const List2 = ({ data, className }) => {
  return (
    <div className={clsx(className)}>
      {data.map((item, index) => (
        <Item className="mb-0" key={index} data={item} />
      ))}
    </div>
  )
}

export default List2
