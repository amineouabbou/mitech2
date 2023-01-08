import Image from 'next/image'
import React from 'react'

const IntroAbout = () => {
  return (
    <div className="grid grid-cols-2 gap-x-10 w-full px-[45px]">
      <div className="bloc bloc-Solution-pres max-w-[518px] tracking-[0.02em] leading-[24px] text-[17px] text-[#737483]">
        Money International NV has been in existence since 2001 payment
        institution under Belgian law Licensed by the Belgian National Bank
        (BNB).
        <br />
        <br />
        Money International holds the European passport Giving access to 27
        countries in the European Union Money transfer - foreign exchange -
        payment services
      </div>

      <div className="bloc-img flex flex-col items-end">
        <div>
          <Image
            alt="OC"
            height={203}
            width={484}
            src="/bgs/mitech-about-logo.png"
          />
        </div>
      </div>
    </div>
  )
}

export default IntroAbout
