import React from 'react'

const List = ({ list }) => {
  return (
    <div
      className=" leading-5 lg:leading-[19px] [&>ul>li]:mb-[5px] [&>ul>li]:lg:mb-[12px]"
      dangerouslySetInnerHTML={{ __html: list }}
    />
  )
}

export default List
