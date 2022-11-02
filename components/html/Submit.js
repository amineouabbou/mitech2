import React from 'react'

const Submit = ({ title, lowercase, color, largeur, size }) => {
  return (
    <button
      type="submit"
      className={`${lowercase ? '' : 'uppercase tracking-[0.1em]'} ${
        size === 'large'
          ? 'h-[60px] font-bold text-[17px]'
          : 'h-[48px] font-semibold text-[14px]'
      } text-white ${
        color === 'blue'
          ? 'bg-secondary hover:bg-primary hover:text-white'
          : 'bg-primary hover:bg-secondary hover:text-white'
      } ${
        largeur === 'small' ? ' px-[28px]' : 'px-[45px]'
      } inline-block leading-[46px]  rounded-[30px]  duration-500`}
    >
      {title}
    </button>
  )
}

export default Submit
