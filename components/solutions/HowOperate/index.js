import React from 'react'
import Card from './Card'
import TitleBox from './TitleBox'

const HowOperate = ({ data }) => {
  const { title, subtitle } = data.group_title
  return (
    <section className="pt-[90px] pb-[125px] bg-[#fafbfb] bg-[url('/bgs/schema-line.png')] bg-no-repeat bg-[length:1116px_221px] bg-[left_calc(50%-50px)_bottom_60px]">
      <div className="container max-w-[930px]">
        <TitleBox title={title} subtitle={subtitle} />
        <div className="grid grid-cols-3 gap-x-[55px]">
          {data.rep.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowOperate
