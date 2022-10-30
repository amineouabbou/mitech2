import React from 'react'
import Button from '../html/Button'

const Faqbanner = () => {
  return (
    <div className="container mx-auto md:max-w-[985px]">
      <div className="get-in-touch bg-[#ebedf4] rounded-[10px] py-[50px] px-[75px] bg-[url('/bgs/question-box.png')] bg-no-repeat bg-[length:479px_438px] bg-[right_-10rem_top_-1rem] bg-blend-luminosity">
        <div className="text-[41px] leading-[52px] font-medium mb-[20px]">
          Questions about funds transfer, <br />
          connectivity or compliance ?
        </div>
        <p className="text-[22px] mb-[35px] text-primary">
          Check our FAQ will answer them
        </p>
        <div className="read-more">
          <Button title="Our FAQ" color="blue" url="/faq" />
        </div>
      </div>
    </div>
  )
}

export default Faqbanner
