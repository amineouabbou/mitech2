import React from 'react'
import { twclsx } from '../../libs/twclsx'
import Button from '../html/Button'

const Getintouch = ({ className }) => {
  return (
    <section
      className={twclsx('bg-white', {
        [`${className}`]: className,
      })}
    >
      <div className={twclsx('container')}>
        <div className="get-in-touch bg-[#e7e9ee] rounded-[10px] px-[20px] py-[40px] md:p-[55px] bg-[url('/bgs/logo-bg.png')] bg-cover bg-blend-overlay">
          <div className="text-[21px] leading-[33px] lg:leading-normal lg:text-[41px] font-medium mb-[15px] lg:mb-[25px] text-center">
            Get in touch with mitech
          </div>
          <p className="text-center text-[16px] lg:text-[22px] mb-[20px] lg:mb-[35px]">
            Contact our team to find out how we can help your projects…
          </p>
          <div className="read-more flex justify-center">
            <Button title="Contact-us" url="/contact" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Getintouch
