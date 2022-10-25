import React from 'react'

const Button = ({ title, lowercase, type, size, largeur }) => {
  if (type === 'button') {
    return (
      <button
        type="submit"
        className={`bg-primary ${lowercase ? '' : ''} ${
          size === 'large'
            ? 'h-[60px] font-bold text-[17px]'
            : 'h-[48px] font-semibold text-[14px]'
        } text-white  px-[30px] inline-block leading-[46px]  rounded-[30px] transition-all hover:bg-secondary duration-500`}
      >
        {title}
      </button>
    )
  }

  return (
    <div className="button">
      <a
        className={`bg-primary ${lowercase ? '' : ''} ${
          size === 'large'
            ? 'h-[60px] font-bold text-[17px]'
            : 'h-[48px] font-semibold text-[14px]'
        } text-white ${
          largeur === 'small' ? ' px-[28px]' : 'px-[45px]'
        } inline-block leading-[46px]  rounded-[30px] hover:bg-secondary duration-500`}
        href="#"
      >
        {title}
      </a>
    </div>
  )
}

export default Button
