import React from 'react'
import Button from '../html/Button'

const Getintouch = () => {
  return (
    <div className="container mx-auto md:max-w-[985px]">
      <div className="get-in-touch bg-[#e7e9ee] rounded-[10px] p-[55px] bg-[url('/bgs/logo-bg.png')] bg-cover bg-blend-overlay">
        <div className="text-[41px] font-medium mb-[25px] text-center">
          Get in touch with mitech
        </div>
        <p className="text-center text-[22px] mb-[35px]">
          Contact our team to find out how we can help your projects…
        </p>
        <div className="read-more flex justify-center">
          <Button title="Contact-us" />
        </div>
      </div>
    </div>
  )
}

export default Getintouch
