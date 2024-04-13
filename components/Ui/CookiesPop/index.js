import Link from 'next/link'
import { twclsx } from '../../../libs/twclsx'
import Button from '../../html/Button'
import { useCookies } from 'react-cookie'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const CookiesPopUp = ({ data }) => {
  const [cookies, setCookie] = useCookies(['popcookies'])
  const [hidePop, setHidepop] = useState(false)

  function handleSetCookie() {
    setCookie('popcookies', true, { path: '/' })
    setHidepop(true)
  }

  function closePopUp() {
    setHidepop(true)
  }

  if (cookies.popcookies) {
    return null
  }

  return (
    <>
      <div
        className={twclsx(
          'fixed top-0 bottom-0 left-0 right-0 m-auto bg-black z-50 opacity-[0.1]',
          {
            'hidden ': hidePop,
          }
        )}
      ></div>
      <div
        className={twclsx(
          'bg-white rounded-[10px] p-[20px] pb-[25px] drop-shadow-[0px_0px_2px_rgba(0,0,0,0.1)]',
          'fixed left-[30px] bottom-[30px] right-[30px] z-[9999] ',
          {
            'hidden ': hidePop,
          }
        )}
      >
        <div
          className="absolute right-[16px] top-[18px] cursor-pointer hover:opacity-60 duration-300"
          onClick={closePopUp}
        >
          <Image alt="" width="15" height="15" src="/icons/close-pop.svg" />
        </div>
        <div className="max-w-[765px] mx-auto flex flex-col items-center justify-center">
          <h3 className="text-[20px] font-medium leading-[30px] mb-[10px]">
            Cookies Settings
          </h3>
          <div className="text-[12px] text-[#87879C] text-center leading-[18px] mb-[15px]">
            We use cookies and similar technologies to help personalize content,
            tailor and measure ads, and provide a better experience. By clicking
            accept, you agree to this, as outlined in our Cookie Policy.
          </div>
          <div className="flex justify-center items-center gap-[17px]">
            <div
              onClick={handleSetCookie}
              className="h-[37px] px-[25px] cursor-pointer bg-primary rounded-[40px] font-Montserrat hover:bg-secondary hover:text-white flex flex-col items-center justify-center text-[10px] text-white tracking-[0.05em] uppercase font-bold"
            >
              <span>Accept</span>
            </div>

            <div
              onClick={handleSetCookie}
              className="h-[37px] px-[25px] cursor-pointer bg-[#F4F4F4] rounded-[40px] font-Montserrat hover:bg-secondary hover:text-white flex flex-col items-center justify-center text-[10px] text-[#1E1D3B] tracking-[0.05em] uppercase font-bold"
            >
              <span>Decline</span>
            </div>
          </div>
        </div>
      </div>
    </>
  ) /* Rectangle 1 */
}
/* Accept */

export default CookiesPopUp
