import React from 'react'
import List from './List'
import { twclsx } from '../../../libs/twclsx'
import Badge from './Badge'

const Card = ({ data }) => {
  const { title, classicDescription, mitechDescription } = data
  return (
    <div className="card border-[1px] border-[#e6e8ed] mb-[10px] lg:flex items-center px-4 py-7 lg:py-[38px] lg:px-[45px] rounded-[5px] tracking-[0.03em]">
      <div className="font-medium lg:min-w-[230px] text-[22px] lg:text-[18px] mb-10 lg:mb-0 text-center lg:text-left">
        {title}
      </div>
      <div className="lg:text-[15.3px] text-[#7b86a2] lg:min-w-[300px] max-w-[300px] mb-8 lg:mb-0">
        <Badge label="Classic" />

        <List list={classicDescription} />
      </div>
      <div className="lg:text-[15.3px] lg:min-w-[295px] max-w-[295px] ml-auto">
        <Badge className="bg-primary text-white" label="Mitech" />
        <List list={mitechDescription} />
      </div>
    </div>
  )
}

export default Card
