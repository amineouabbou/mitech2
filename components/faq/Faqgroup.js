import React from 'react'
import Question from './Question'

const Faqgroup = ({ data }) => {
  return (
    <div className="faq-group mb-[75px]">
      <h2 className="text-[24px] mb-[23px] font-medium">{data.category}</h2>
      {data.questionSanswerRep.map((item, index) => (
        <Question key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  )
}

export default Faqgroup
