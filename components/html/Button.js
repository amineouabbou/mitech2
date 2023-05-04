import Link from 'next/link'
import React from 'react'
import { twclsx } from '../../libs/twclsx'

const Button = ({
  title,
  lowercase,
  type,
  size,
  largeur,
  color,
  url,
  className,
}) => {
  if (type === 'button') {
    return (
      <button
        type="submit"
        className={twclsx(
          'inline-block rounded-[30px] duration-500 text-white',
          {
            'uppercase tracking-[0.07em] lg:tracking-[0.1em]': !lowercase,
            'lg:h-[60px] lg:leading-[58px] font-bold lg:text-[17px]':
              size === 'large',
            'font-semibold text-[14px] h-[48px] leading-[46px]':
              size !== 'large',
            'bg-secondary hover:bg-primary hover:text-whit': color === 'blue',
            'bg-primary hover:bg-secondary hover:text-white': color !== 'blue',
            'px-[28px]': largeur === 'small',
            'px-[45px]': largeur !== 'small',
            [`${className}`]: className,
          }
        )}
        // className2={`${lowercase ? '' : 'uppercase tracking-[0.1em]'} ${
        //   size === 'large'
        //     ? 'lg:h-[60px] font-bold lg:text-[17px]'
        //     : 'h-[48px] font-semibold text-[14px]'
        // } text-white ${
        //   color === 'blue'
        //     ? 'bg-secondary hover:bg-primary hover:text-white'
        //     : 'bg-primary hover:bg-secondary hover:text-white'
        // } ${
        //   largeur === 'small' ? ' px-[28px]' : 'px-[45px]'
        // } inline-block leading-[48px]  rounded-[30px]  duration-500`}
      >
        {title}
      </button>
    )
  }

  return (
    <div className="button">
      <Link href={url ? url : '/'}>
        <span
          className={twclsx(
            'inline-block rounded-[30px] duration-500 text-white',
            {
              'uppercase tracking-[0.07em] lg:tracking-[0.1em]': !lowercase,
              'lg:h-[60px] lg:leading-[58px] font-bold lg:text-[17px]':
                size === 'large',
              'font-semibold text-[12px] lg:text-[14px] h-[43px] leading-[42px]  lg:h-[48px] lg:leading-[47px]':
                size !== 'large',
              'bg-secondary hover:bg-primary hover:text-whit': color === 'blue',
              'bg-primary hover:bg-secondary hover:text-white':
                color !== 'blue',
              'px-[20px] lg:px-[28px]': largeur === 'small',
              'px-[30px] lg:px-[45px]': largeur !== 'small',
              [`${className}`]: className,
            }
          )}
          href="#"
        >
          {title}
        </span>
      </Link>
    </div>
  )
}

export default Button
