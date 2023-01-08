import React from 'react'
import Item from './Item'

const ListUl = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <Item data={item} key={index} />
      ))}
    </div>
  )
}

export default ListUl
