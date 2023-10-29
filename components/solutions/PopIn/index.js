import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { globaleasing } from '../../../data/useVariants'
import { twclsx } from '../../../libs/twclsx'

const PopIn = ({ data }) => {
  const { logo, description, background, button } = data
  const { label, slug } = button || {}
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="hidden lg:block popin items-center relative"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { delay: 2 } }}
          transition={{ ease: globaleasing, duration: 0.34 }}
          className={twclsx(
            'logo relative h-[30px] w-[30px] lg:w-[65px] lg:h-[65px] bg-primary  rounded-full border-[2px] lg:border-[2px] border-white drop-shadow-[0px_0px_22px_rgba(0,0,0,0.2)] flex flex-col justify-center items-center cursor-pointer duration-300 hover:bg-secondary',
            {
              'bg-secondary': open,
            }
          )}
        >
          <span className="block relative h-[15px] w-[15px] lg:w-[40px] lg:h-[40px]">
            <Image
              alt="logo"
              className=""
              src={logo.mediaItemUrl}
              height={60}
              width={60}
            />
          </span>
        </motion.div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ ease: globaleasing, duration: 0.8 }}
              style={{ backgroundImage: `url(${background.mediaItemUrl})` }}
              className={twclsx(
                'box bg-no-repeat bg-[top_left_20px] bg-white absolute pt-[32px] pr-[75px] top-0 bottom-0 my-auto  rounded-[6px] drop-shadow-[0px_1px_18px_rgba(0,0,0,0.1)] flex flex-col items-end',
                'min-h-[160px] w-full lg:min-w-[670px]',
                ' right-[100%] mx-auto lg:right-[calc(100%_+_35px)]'
              )}
            >
              <div className="w-0 h-0 border-t-[11px] border-r-0 border-b-[11px] border-l-[11px] border-t-transparent border-r-transparent border-b-transparent border-l-white absolute -right-[11px] top-0 bottom-0 my-auto"></div>
              <div>
                <div
                  className="text-[21px] font-medium leading-[26px] mb-[10px]"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
                <Link href={`/${slug}`}>
                  <div className="flex items-center cursor-pointer group">
                    <div className="text-[18px] text-primary duration-300  group-hover:text-secondary">
                      {label}
                    </div>
                    <div className="icon bg-primary h-[30px] w-[30px] rounded-full flex flex-col items-center justify-center ml-[10px] duration-300 group-hover:translate-x-3 group-hover:bg-secondary">
                      <div className=" h-[15px] w-[15px] relative left-[1px]">
                        <Image alt="" src="/icons/arrow-white.svg" fill />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default PopIn
