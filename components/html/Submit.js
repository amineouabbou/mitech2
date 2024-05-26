import React from 'react'

const Submit = ({ title, lowercase, color, largeur, size, loading }) => {
  return (
    <button
      type="submit"
      className={`relative ${lowercase ? '' : 'uppercase tracking-[0.1em]'} ${
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

      {loading && (
        <div className="loader absolute top-[50%] -translate-y-[50%] right-[10px]">
          <svg viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
          </svg>
        </div>
      )}
    </button>
  )
}

export default Submit
