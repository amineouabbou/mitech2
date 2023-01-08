import clsx from 'clsx'
import React from 'react'

const HeroFaq = ({ children }) => {
  return (
    <div
      className={clsx(
        "hero-section min-h-[450px] md:min-h-[542px] flex flex-col  justify-center bg-[#f1f2f4] bg- bg-[url('/bgs/hero-bg.png')] bg-no-repeat bg-cover bg-blend-color-burn bg-[center_top_6rem]"
      )}
    >
      <div className="container flex flex-col items-center grow justify-end">
        {children}
      </div>
    </div>
  )
}

export default HeroFaq
