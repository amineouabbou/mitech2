import React from 'react'

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <li
          className="leading-[19px] mb-[12px]"
          key={item.id}
          dangerouslySetInnerHTML={{ __html: item.title }}
        />
      ))}
    </ul>
  )
}

export default List
