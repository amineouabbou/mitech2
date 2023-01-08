import React from 'react'
import Vericalbox from '../../Ui/Others/Vericalbox'

const List3cols = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-x-[26px]">
      {data.map((item) => (
        <Vericalbox
          key={item.id}
          align="center"
          icone={{
            url: item.icone.url,
            width: 'w-[95px]',
            height: 'h-[95px]',
            marginBottom: 'mb-[15px]',
          }}
          title={{
            title: item.title,
            fontSize: 'text-[25px] leading-[33px]',
            marginBottom: 'mb-[25px] lg:mb-[25px]',
          }}
          description={item.description}
          className="lg:pt-[50px] lg:pb-[45px]"
        />
      ))}
    </div>
  )
}

export default List3cols
