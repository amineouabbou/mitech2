import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const Languages = () => {
  const router = useRouter()

  const handleLocaleChange = (lang) => {
    router.push(router.route, router.asPath, {
      locale: lang,
    })
  }
  return (
    <div className="language-box md:ml-[35px]">
      {router.locale === 'en' ? (
        <div
          onClick={() => handleLocaleChange('fr')}
          className="w-[20px] md:w-[29px] h-[20px] md:h-[29px] relative cursor-pointer"
        >
          <Image src="/icons/fr.png" alt="fr" layout="fill" />
        </div>
      ) : (
        <div
          onClick={() => handleLocaleChange('en')}
          className="w-[20px] md:w-[29px] h-[20px] md:h-[29px] relative cursor-pointer"
        >
          <Image src="/icons/en.png" alt="en" layout="fill" />
        </div>
      )}
    </div>
  )
}

export default Languages
