import React, { useState } from 'react'

const Question = ({ question, answer }) => {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive((prev) => !prev)
  }

  return (
    <div className="panel mb-[15px] lg:mb-[24px]">
      <div
        onClick={handleClick}
        className="question flex items-center bg-[#f4f5f8] py-[20px] pl-[10px] pr-[35px] lg:py-[25px] lg:pl-[28px] lg:pr-[75px] border-l-[3px] lg:border-l-[6px] border-l-primary mb-[1px] relative cursor-pointer"
      >
        <span className="text-[20px] lg:text-[39px] lg:leading-[41px] text-primary mr-[10px] lg:mr-[22px]">
          Q.
        </span>
        <span className="lg:text-[16.6px] leading-normal font-medium fr">
          {question}
        </span>
        <div className="icon w-[23px] h-[2px] scale-75 lg:scale-100 right-[10px] lg:right-[35px] absolute top-0 bottom-0 my-auto bg-secondary">
          {!active && (
            <span className="w-[2px] h-[23px] absolute bottom-0 my-auto bg-secondary left-0 right-0 mx-auto top-0"></span>
          )}
        </div>
      </div>

      {active && (
        <div className="answer flex items-start py-[30px] lg:py-[35px] px-[10px] lg:px-[28px] leading-[22px] border-l-[6px] border-l-[#e8e9ed] font-medium">
          <div className="text-[20px] lg:text-[39px] leading-[41px] text-[#e8e9ed] mr-[22px]">
            A.
          </div>
          <div className="lg:text-[16px] lg:leading-[22px] w-[80%]">
            {answer}
          </div>
        </div>
      )}
    </div>
  )
}

export default Question
