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
          className="w-[24px] h-[24px]  md:w-[32px] md:h-[32px] relative cursor-pointer"
        >
          <Image src="/icons/fr.png" alt="fr" fill />
        </div>
      ) : (
        <div
          onClick={() => handleLocaleChange('en')}
          className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] relative cursor-pointer"
        >
          <Image src="/icons/en.png" alt="en" fill />
        </div>
      )}
    </div>
  )
}

export default Languages
