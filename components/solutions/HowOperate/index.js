import React from 'react'
import Card from './Card'
import TitleBox from './TitleBox'

const HowOperate = ({ data }) => {
  const { title, subtitle, listRepeater } = data
  return (
    <section className="pt-[45px] lg:pt-[90px] lg:pb-[125px] bg-[#fafbfb] lg:bg-[url('/bgs/schema-line.png')] bg-no-repeat lg:bg-[length:1116px_221px] bg-[left_calc(50%-50px)_bottom_60px]">
      <div className="container max-w-[930px]">
        <TitleBox title={title} subtitle={subtitle} />
        <div className="grid lg:grid-cols-3 gap-y-8 gap-x-[55px]">
          {listRepeater.map((item, index) => (
            <Card data={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowOperate
