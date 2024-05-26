import React, { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import SEO from '../components/SEO'
import Select from '../components/forms/Select'
import Input from '../components/forms/Input'
import InputTitle from '../components/forms/InputTitle'
import Checkbox from '../components/forms/Checkbox'
import Textarea from '../components/forms/Textarea'
import Submit from '../components/html/Submit'
import HeroinnerSimple from '../components/Ui/HeroinnerSimple'
import SubTitle from '../components/Ui/Heroinner/SubTitle'
import Title from '../components/Ui/Heroinner/Title'
import { getCountriesList, getGetInTouchBlock } from '../Utilis'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getPageData } from '../utils'
import { GLOBAL_DATA } from '../queries'
import { useTranslation } from 'next-i18next'

const schema = yup
  .object({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    business_email: yup.string().required(),
    phone_number: yup.string().required(),
    company_name: yup.string().required(),
    country: yup.string().required(),
    what_company_activity: yup.string().required(),
    main_interest: yup.array().min(1, 'At least one interest must be selected'),
    policy: yup
      .bool()
      .oneOf([true], 'You must accept the terms and conditions'),
  })
  .required()

export default function Contact({ globalProps }) {
  const { sectionsOthers } = globalProps?.page?.translation?.ACFGlobal || []
  const [error, setError] = useState()
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const { t } = useTranslation('common')

  const interestsOptions = [
    `${t('building-remittance')}`,
    `${t('intergation-remittance')}`,
  ]

  const { data: getIntouchBlock } = getGetInTouchBlock(sectionsOthers || [])

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    setLoading(true)

    const { first_name, last_name, business_email } = data

    const title = `Contact from: ${first_name} ${last_name} | ${business_email}`

    const format_interesets = data.main_interest.map((item, index) => {
      return interestsOptions[index]
    })

    const response = await fetch('/api/submit-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, acf_fields: data }),
    })

    if (response.ok || response.status !== 500 || response.status !== 404) {
      const response2 = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/wp-json/mitech/v1/send-mail`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...data, main_interest: format_interesets }),
        }
      )

      if (response2.ok) {
        reset()
        setLoading(false)
        setSuccess(true)
        setError('')
      } else {
        setLoading(false)
        setError('Error sending mail please try later !')
      }
    } else {
      setError('Failed to submit form, please try later !')
      setLoading(false)
    }
  }

  return (
    <>
      <SEO title="Contact" />
      <HeroinnerSimple
        title={<Title title="Contact us" />}
        subtitle={
          <SubTitle subtitle="You want to develop you cross border remittance offer ?" />
        }
        description="Contact us and our team will get back to you in the best delays"
      />

      <div className="container mx-auto max-w-[1030px] ">
        <main className="bg-white min-h-[500px] drop-shadow-[0px_0px_25px_rgba(73,83,100,0.12)] py-[20px] px-[20px] lg:p-[65px] relative z-10 -mt-[100px] lg:-mt-[125px]">
          {error && (
            <div className="text-center text-red-600 py-2">{error}</div>
          )}
          {success && (
            <div className="bg-green-400 p-4 text-center font-medium mb-4">
              Merci, votre message a été envoyé.
            </div>
          )}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:px-[25px] lg:mt-[15px]"
          >
            <div className="grid lg:grid-cols-2 lg:gap-x-[58px] gap-y-[20px] mb-[30px] lg:mb-[55px]">
              <Input
                name="first_name"
                label={t('first-name')}
                required="true"
                register={register}
                errors={errors}
              />
              <Input
                name="last_name"
                label={t('last-name')}
                required="true"
                register={register}
                errors={errors}
              />

              <Input
                name="business_email"
                label={t('busines-email')}
                required="true"
                register={register}
                errors={errors}
              />

              <Input
                name="phone_number"
                label={t('phone-number')}
                required="true"
                register={register}
                errors={errors}
              />

              <Input
                name="company_name"
                label={t('company')}
                required="true"
                register={register}
                errors={errors}
              />

              <Select
                name="country"
                label={t('country')}
                required="true"
                register={register}
                errors={errors}
                placeholder={t('list-countries')}
                options={getCountriesList()}
              />

              <Select
                name="what_company_activity"
                label={t('what-company')}
                required="true"
                register={register}
                errors={errors}
                placeholder={t('choose-one')}
                options={[
                  'Bank',
                  'Fintech',
                  'Money transferring operator (MTO)',
                  'Insurance',
                  'Ecommerce',
                  'Other',
                ]}
              />

              <Select
                name="where_hear_about_us"
                label={t('hear-about')}
                register={register}
                errors={errors}
                placeholder="- Please Choose one -"
                options={[
                  'Social media (Linkedin, Facebook, Twitter…)',
                  'Blog post',
                  'Webinar',
                  'Event',
                  'Podcast',
                  'Recommandation',
                  'Other',
                ]}
              />
            </div>

            <InputTitle title={t('what-interest')} required="true" />

            <div className="mb-[30px] lg:mb-[60px]">
              {interestsOptions.map((interest, index) => (
                <Checkbox
                  id={`interest-${index}`}
                  key={index}
                  name="main_interest"
                  label={interest}
                  value={index}
                  register={register}
                  errors={errors}
                />
              ))}
            </div>

            <InputTitle title={t('tell-us')} />

            <div className="mb-[30px] lg:mb-[45px]">
              <Textarea
                name="tell_us_more"
                label=""
                register={register}
                errors={errors}
              />
            </div>

            <div className="mb-[30px] lg:mb-[60px]">
              <Checkbox
                name="newsletter"
                id="newsletter"
                label={t('receive-mitech-communication')}
                register={register}
                errors={errors}
              />

              <Checkbox
                name="policy"
                id="policy"
                label={t('accept-policy')}
                register={register}
                errors={errors}
              />
            </div>

            <div className="flex flex-col items-center">
              <Submit title={t('Submit')} loading={loading} />
            </div>
          </form>
        </main>
      </div>
    </>
  )
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
