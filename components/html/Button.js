import Link from 'next/link'
import React from 'react'

const Button = ({ title, lowercase, type, size, largeur, color, url }) => {
  if (type === 'button') {
    return (
      <button
        type="submit"
        className={`${lowercase ? '' : 'uppercase tracking-[0.1em]'} ${
          size === 'large'
            ? 'lg:h-[60px] font-bold lg:text-[17px]'
            : 'h-[48px] font-semibold text-[14px]'
        } text-white ${
          color === 'blue'
            ? 'bg-secondary hover:bg-primary hover:text-white'
            : 'bg-primary hover:bg-secondary hover:text-white'
        } ${
          largeur === 'small' ? ' px-[28px]' : 'px-[45px]'
        } inline-block leading-[48px]  rounded-[30px]  duration-500`}
      >
        {title}
      </button>
    )
  }

  return (
    <div className="button">
      <Link href={url ? url : '/'}>
        <a
          className={`${
            lowercase ? '' : 'uppercase tracking-[0.07em] lg:tracking-[0.1em]'
          } ${
            size === 'large'
              ? 'h-[60px] font-bold lg:text-[17px]'
              : 'h-[48px] font-semibold lg:text-[14px]'
          } text-white ${
            color === 'blue'
              ? 'bg-secondary hover:bg-primary hover:text-white'
              : 'bg-primary hover:bg-secondary hover:text-white'
          } ${
            largeur === 'small' ? ' px-[28px]' : 'px-[30px] lg:px-[45px]'
          } inline-block leading-[48px]  rounded-[30px]  duration-500`}
          href="#"
        >
          {title}
        </a>
      </Link>
    </div>
  )
}

export default Button
