import React from 'react'
import { motion } from 'framer-motion'

import SEO from '../components/SEO'
import Layout from '../components/Ui/Layout'
import Header from '../components/Ui/Header'
import Footer from '../components/Ui/Footer'
import { shortFadeUp, titesStagger } from '../data/useVariants'
import Heroinner from '../components/Ui/Heroinner'
import Categories from '../components/faq/Categories'
import Question from '../components/faq/Question'

export default function Faq() {
  return (
    <Layout>
      <SEO />
      <Header />
      <Heroinner
        isFaq="true"
        title="FAQ"
        subtitle="Want to learn more about mitech ?"
        description="Our FAQ is here to put the lights on your questioning"
      >
        <div className="flex items-center justify-center mt-[45px]">
          <input
            type="text"
            className="h-[56px] min-w-[600px] rounded-[40px] px-[32px] py-[8px] text-[16px] tracking-[0.04em] text-[#a0a1b3]"
            name="email"
            placeholder="Have a question? Find the answer here..."
          />
        </div>
        <Categories />
      </Heroinner>

      <div className="container mx-auto max-w-[1030px] ">
        <main className="bg-white min-h-[500px] drop-shadow-[0px_0px_25px_rgba(73,83,100,0.12)] p-[65px] relative z-10">
          <div className="faq-group mb-[75px]">
            <h2 className="text-[24px] mb-[23px] font-medium">Brand</h2>
            <Question
              question="Will mitech appear to the end customer ?"
              answer="No, mitech solutions are white-labeled which means that only your brand will be seen."
            />
            <Question
              question="Why a remittance app better than a physical outreach to target the diaspora ?"
              answer="No, mitech solutions are white-labeled which means that only your brand will be seen."
            />
            <Question
              question="Why is mitech better than another solution ?"
              answer="No, mitech solutions are white-labeled which means that only your brand will be seen."
            />
            <Question
              question="How will we acquire customer ?"
              answer="Front brand for you if, you don’t have any remittance app and want to bipas many of struggles creating one. With Front brand you get the whole features suite. Open Cloud came from our realization that the features could be also pick and choose for an existing offer. Learn more about Front brand and Open Cloud."
            />
          </div>

          <div className="faq-group mb-[75px]">
            <h2 className="text-[24px] mb-[23px] font-medium">Products</h2>
            <Question
              question="Should I choose Front Brand or Open Cloud ?"
              answer="No, mitech solutions are white-labeled which means that only your brand will be seen."
            />

            <Question
              question="How personalizable is Front Brand ?"
              answer="No, mitech solutions are white-labeled which means that only your brand will be seen."
            />

            <Question
              question="What is the pricing of the products ?"
              answer="No, mitech solutions are white-labeled which means that only your brand will be seen."
            />
          </div>
        </main>
      </div>
      <Footer />
    </Layout>
  )
}
