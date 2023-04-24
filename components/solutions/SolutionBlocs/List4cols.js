import React from 'react'
import Vericalbox from '../../Ui/Others/Vericalbox'

const List4cols = ({ data }) => {
  return (
    <div className="grid lg:grid-cols-4 gap-[26px]">
      {data.map((item, index) => (
        <Vericalbox
          key={index}
          align="center"
          icone={{
            url: item.logo.mediaItemUrl,
            width: 'w-[95px]',
            height: 'h-[95px]',
            marginBottom: 'mb-[15px]',
          }}
          title={{
            title: item.title,
            fontSize: 'text-[22px] lg:text-[25px] leading-[33px]',
            marginBottom: 'mb-[25px] lg:mb-[25px]',
          }}
          description={item.description}
          className="lg:pt-[50px] lg:pb-[45px]"
        />
      ))}
    </div>
  )
}

export default List4cols
