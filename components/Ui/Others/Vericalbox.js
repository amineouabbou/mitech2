import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { titlesAnimation } from '../../../data/useVariants'
import clsx from 'clsx'
import { twclsx } from '../../../libs/twclsx'

const Vericalbox = ({ title, description, icone, align, className }) => {
  return (
    <motion.div
      variants={titlesAnimation}
      className={twclsx(
        'bg-white rounded-[10px] px-[26px] py-[30px] lg:py-[35px] drop-shadow-[1px_1px_18px_rgba(0,0,0,0.07)]',
        {
          'flex flex-col items-center': align === 'center',
          [`${className}`]: className,
        }
      )}
    >
      <div
        className={twclsx('icon-box mb-[10px]', {
          [`${icone.marginBottom}`]: icone.marginBottom,
        })}
      >
        <div
          className={clsx(
            ' flex flex-col justify-center items-center relative',
            {
              'w-[75px] h-[75px]': !icone.width,
              [`${icone.width} ${icone.height}`]: icone.width && icone.height,
            }
          )}
        >
          <Image src={icone.url} fill alt="" />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div
          className={twclsx(
            'lg:leading-[33px] text-primary font-medium tracking-[0.03em] mb-[8px] lg:mb-[14px]',
            {
              ['text-[19px] lg:text-[23px]']: !title.fontSize,
              [`${title.marginBottom}`]: title.marginBottom,
              [`${title.fontSize}`]: title.fontSize,
              'text-center': align === 'center',
            }
          )}
          dangerouslySetInnerHTML={{ __html: title.title }}
        />

        <p
          className={clsx(
            'font-medium lg:text-[16px] lg:leading-[25px] tracking-[0.025em]'
          )}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </motion.div>
  )
}

export default Vericalbox
