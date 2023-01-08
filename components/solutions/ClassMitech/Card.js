import React from 'react'
import List from './List'

const Card = ({ data }) => {
  const { title, rep_classic, rep_mitech } = data
  return (
    <div className="card border-[1px] border-[#e6e8ed] mb-[10px] flex items-center py-[38px] px-[45px] rounded-[5px] tracking-[0.03em]">
      <div className="font-medium min-w-[230px] text-[18px]">{title}</div>
      <div className="text-[15.3px] text-[#7b86a2] min-w-[300px] max-w-[300px]">
        <List list={rep_classic} />
      </div>
      <div className="text-[15.3px] min-w-[295px] max-w-[295px] ml-auto">
        <List list={rep_mitech} />
      </div>
    </div>
  )
}

export default Card
