import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { globaleasing } from '../../../data/useVariants'
import { twclsx } from '../../../libs/twclsx'
import SolutionPop from './SolutionPop'

const PopIn = ({ data }) => {
  const [open, setOpen] = useState(false)

  const { logoMitech, popinTitle, solutionsListRep } = data || {}

  console.log('data data datadata', data)

  return (
    <>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="hidden lg:block popin items-center fixed bottom-[100px] right-[42px] lg:w-[105px] lg:h-[105px] z-40"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { delay: 2 } }}
          transition={{ ease: globaleasing, duration: 0.34 }}
          className={twclsx(
            'logo relative h-[30px] w-[30px] lg:w-[105px] lg:h-[105px] bg-primary  rounded-full border-[2px] lg:border-[4px] border-white drop-shadow-[0px_0px_22px_rgba(0,0,0,0.2)] flex flex-col justify-center items-center cursor-pointer duration-300 hover:bg-secondary',
            {
              'bg-secondary': open,
            }
          )}
        >
          <span className="block relative">
            <Image
              alt="logo"
              className=""
              src={logoMitech?.mediaItemUrl}
              height={31}
              width={69}
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
              className={twclsx(
                'box bg-no-repeat bg-[top_left_20px] bg-white absolute px-[35px] py-[32px] -bottom-[15px]  rounded-[6px] drop-shadow-[0px_1px_18px_rgba(0,0,0,0.1)]',
                'min-h-[237px] w-full lg:min-w-[670px]',
                ' right-[100%] mx-auto lg:right-[calc(100%_+_35px)]'
              )}
            >
              <div className="w-0 h-0 border-t-[11px] border-r-0 border-b-[11px] border-l-[11px] border-t-transparent border-r-transparent border-b-transparent border-l-white absolute -right-[11px] bottom-[55px]"></div>
              <div>
                <div className="text-[22px] leading-[22px] font-medium font-poppins text-secondary mb-[35px]">
                  {popinTitle}
                </div>
                <div className="grid grid-cols-2 gap-x-[45px]">
                  {solutionsListRep.map((item, index) => (
                    <SolutionPop data={item} key={index} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default PopIn
