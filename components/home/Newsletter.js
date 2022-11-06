import { useTranslation } from 'next-i18next'
import React from 'react'
import Button from '../html/Button'

const Newsletter = () => {
  const { t } = useTranslation('common')
  return (
    <section className="newsletter bg-[#f3f4f6] py-[48px]">
      <div className="container mx-auto md:max-w-[985px]">
        <div className="box">
          <div className="text-[27px] tracking-[0.025em] mb-[20px] text-center">
            {t('For latest news sign up to our newletter')}
          </div>
          <div className="md:flex items-center justify-center">
            <input
              type="text"
              className="h-[56px] w-full md:w-auto md:min-w-[480px] rounded-[40px] px-[32px] py-[8px] text-[16px] tracking-[0.04em] text-[#a0a1b3]"
              name="email"
              placeholder={t('Your email adress')}
            />
            <div className="ml-[18px]">
              <Button type="button" title={t('Submit')} size="large" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
