import Image from 'next/image'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { useGlobalState } from '../../../providers/globalProvider'

const Solution = (props) => {
  const { logoUrl, title, domain, url } = props
  const router = useRouter()

  const handleClick = (link) => {
    router.push(link)
  }

  return (
    <div
      className="item flex items-center mb-[30px] cursor-pointer"
      onClick={() => handleClick(url)}
    >
      <div className="icon mr-[5px]">
        <Image width={62} height={18} alt="front brand" src={logoUrl} />
      </div>
      <div className="text-[15px]">
        <div className="font-bold uppercase mb-[2px] leading-[15px]">
          {title}
        </div>
        <p className="text-[#87888c]">{domain}</p>
      </div>
    </div>
  )
}

Solution.propTypes = {
  logoUrl: PropTypes.string,
  title: PropTypes.string,
  domain: PropTypes.string,
  url: PropTypes.string,
}

export default Solution
