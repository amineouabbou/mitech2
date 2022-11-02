import React from 'react'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import SEO from '../components/SEO'
import Layout from '../components/Ui/Layout'
import Header from '../components/Ui/Header'
import Footer from '../components/Ui/Footer'
import Heroinner from '../components/Ui/Heroinner'
import Select from '../components/forms/Select'
import Input from '../components/forms/Input'
import Title from '../components/forms/Title'
import Checkbox from '../components/forms/Checkbox'
import Textarea from '../components/forms/Textarea'
import Submit from '../components/html/Submit'

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
  })
  .required()

export default function Contact() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)

  return (
    <Layout>
      <SEO />
      <Header />
      <Heroinner
        title="Contact us"
        subtitle="You want to develop you cross border remittance offer ?"
        description="Contact us and our team will get back to you in the best delays "
      ></Heroinner>

      <div className="container mx-auto max-w-[1030px] ">
        <main className="bg-white min-h-[500px] drop-shadow-[0px_0px_25px_rgba(73,83,100,0.12)] p-[65px] relative z-10 -mt-[125px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-[25px] mt-[15px]"
          >
            <div className="grid grid-cols-2 gap-x-[58px] gap-y-[20px] mb-[55px]">
              <Input
                name="firstName"
                label="First name"
                required="true"
                register={register}
                errors={errors}
              />
              <Input
                name="lastName"
                label="Last name"
                required="true"
                register={register}
                errors={errors}
              />

              <Input
                name="lastName"
                label="Business Email"
                required="true"
                register={register}
                errors={errors}
              />

              <Input
                name="lastName"
                label="Phone number"
                required="true"
                register={register}
                errors={errors}
              />

              <Input
                name="lastName"
                label="Company Name"
                required="true"
                register={register}
                errors={errors}
              />

              <Select
                name="country"
                label="Country"
                required="true"
                register={register}
                errors={errors}
                placeholder="- List of countries -"
                options={['France', 'Maroc', 'Brazil', 'Espagne']}
              />

              <Select
                name="lastName"
                label="What company activity suit you best ?"
                required="true"
                register={register}
                errors={errors}
                placeholder="- Please Choose one -"
                options={['France', 'Maroc', 'Brazil', 'Espagne']}
              />

              <Select
                name="country"
                label="Where did you hear about us ?"
                required="true"
                register={register}
                errors={errors}
                placeholder="- Please Choose one -"
                options={['France', 'Maroc', 'Brazil', 'Espagne']}
              />
            </div>

            <Title
              title="What are your main interest with mitech solutions ?"
              required="true"
            />

            <div className="mb-[60px]">
              <Checkbox
                name="interests_1"
                label="We are interested in building our own remittance brand through
                  Front Brand"
                value="building our own remittance brand"
                register={register}
                errors={errors}
              />

              <Checkbox
                name="interests_2"
                label="We are interested in integrating remittance services in our ecosystem through Open Cloud solution (API & Webviews)"
                value="integrating remittance services in our ecosystem"
                register={register}
                errors={errors}
              />
            </div>

            <Title
              title="Tell us more about your projects and how mitech can help you realize them ?"
              required="true"
            />

            <div className="mb-[45px]">
              <Textarea
                name="message"
                label=""
                required="true"
                register={register}
                errors={errors}
              />
            </div>

            <div className="mb-[60px]">
              <Checkbox
                name="newsletter"
                label="I agree to receive mitech communication related to my request "
                register={register}
                errors={errors}
              />

              <Checkbox
                name="policy"
                label="By submitting the form, I accept mitech <a href='#' class='text-primary underline hover:text-secondary'>Privacy Policy</a>"
                register={register}
                errors={errors}
              />
            </div>

            <div className="flex flex-col items-center">
              <Submit title="Submit" />
            </div>
          </form>
        </main>
      </div>
      <Footer />
    </Layout>
  )
}
