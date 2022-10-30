import Link from 'next/link'
import React from 'react'

const Button = ({ title, lowercase, type, size, largeur, color, url }) => {
  console.log(url)
  if (type === 'button') {
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

  return (
    <div className="button">
      <Link href={url ? url : '/'}>
        <a
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
          href="#"
        >
          {title}
        </a>
      </Link>
    </div>
  )
}

export default Button
