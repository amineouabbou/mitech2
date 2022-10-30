import React, { useState } from 'react'

const Question = ({ question, answer }) => {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive((prev) => !prev)
  }

  return (
    <div className="panel mb-[24px]">
      <div
        onClick={handleClick}
        className="question flex items-center bg-[#f4f5f8] py-[25px] px-[28px] border-l-[6px] border-l-primary mb-[1px] relative cursor-pointer"
      >
        <span className="text-[39px] leading-[41px] text-primary mr-[22px]">
          Q.
        </span>
        <span className="text-[16.6px] font-medium">{question}</span>
        <div className="icon w-[23px] h-[2px] right-[35px] absolute top-0 bottom-0 my-auto bg-secondary">
          {!active && (
            <span className="w-[2px] h-[23px] absolute bottom-0 my-auto bg-secondary left-0 right-0 mx-auto top-0"></span>
          )}
        </div>
      </div>

      {active && (
        <div className="answer flex items-start py-[35px] px-[28px] leading-[22px] border-l-[6px] border-l-[#e8e9ed] text-[16.6px] font-medium">
          <div className="text-[39px] leading-[41px] text-[#e8e9ed] mr-[22px]">
            A.
          </div>
          <div className="text-[16.6px] leading-[22px] w-[80%]">{answer}</div>
        </div>
      )}
    </div>
  )
}

export default Question
