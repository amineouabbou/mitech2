import React from 'react'

const HeroFbBg = ({ img }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="w-[500px] h-[500px] lg:h-[918px] lg:w-[869px] absolute -bottom-[210px] lg:-bottom-[180px] -right-[190px] bg-[url('/bgs/front-brand-herobg.png')] bg-no-repeat bg-cover"
    ></div>
  )
}

export default HeroFbBg
