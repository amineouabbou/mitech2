import Image from 'next/image'
import React from 'react'

const IntroOc = () => {
  return (
    <div className="grid grid-cols-2 gap-x-10 ">
      <div className="bloc bloc-Solution-pres leading-[28px] text-[18px] text-[#737483] pl-[20px] pr-[50px] pt-[20px]">
        <p>
          Banking solutions have evolved technologies bring opportunities such
          as open banking and open finance that allow you to bring a better
          customer experience to your offer and new ways to interact with the
          customer. <br />
          <br />
          In today day and age, implementing such solution are crucial in a
          market that is driven by them, especially in a local banking offer and
          remittance. <br />
          <br />
          <strong>Open Cloud</strong> is suit of API and Web Services that only
          requires a simple implementation to your existing offer, without
          changing your whole architecture and bringing new features.
        </p>
      </div>

      <div className="bloc-img">
        <Image
          alt="OC"
          height={441}
          width={549}
          src="/bgs/open-cloud-illustration.png"
        />
      </div>
    </div>
  )
}

export default IntroOc
