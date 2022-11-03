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

const FAQ_DATA = [
  {
    category: 'Brand',
    posts: [
      {
        question: 'Will mitech appear to the end customer ?',
        answer:
          'No, mitech solutions are white-labeled which means that only your brand will be seen.',
      },
      {
        question:
          'Why a remittance app better than a physical outreach to target the diaspora ?',
        answer:
          'Remittance is the only financial link between the diaspora and their origin country, with the evolution of remittance to digital solutions, a mobile app is the best possible exposure.',
      },
      {
        question: 'Why is mitech better than another solution ?',
        answer:
          'mitech is diaspora centric, with our team and expertise we created a platform that allow you a atomic configurability and with technologies that goes beyond the market state of the art.',
      },
      {
        question: 'How will we acquire customer ?',
        answer:
          'Customer acquisition is done by direct or indirect marketing, when your app is on marketing campaign will allow you to gather customers across Europe. We can help you with that, learn more about Traas.',
      },
    ],
  },
  {
    category: 'Products',
    posts: [
      {
        question: 'Should I choose Front Brand or Open Cloud ?',
        answer:
          'Front brand for you if, you don’t have any remittance app and want to bipas many of struggles creating one. With Front brand you get the whole features suite. Open Cloud came from our realization that the features could be also pick and choose for an existing offer. Learn more about Front brand and Open Cloud.',
      },
      {
        question: 'How personalizable is Front Brand?',
        answer:
          'Front Brand allow you to personalize your app beyond simple visual and standard price list. We allow you to engineer a unique customer experience offer to the unique need of the diaspora. Learn more about Front Brand.',
      },
      {
        question: 'What is the pricing of the products ? ',
        answer:
          'Our pricing depend on each and every one of your needs. Learn more about our pricing.',
      },
    ],
  },
  {
    category: 'Features',
    posts: [
      {
        question:
          'Are the features applied the same through Front brand and Open cloud ?',
        answer:
          'As Front Brand give us the total leverage on the definition of your offer, the configurability is higher on Front Brand than Open Cloud.',
      },
      {
        question: 'How personalizable is Front Brand?',
        answer:
          'Front Brand allow you to personalize your app beyond simple visual and standard price list. We allow you to engineer a unique customer experience offer to the unique need of the diaspora. Learn more about Front Brand.',
      },
      {
        question: 'Why is the compliance a built-in feature ?',
        answer:
          'We have the responsibility to collect the funds, therefore we have the regulatory compliance obligation. Learn more about our features.',
      },
    ],
  },
  {
    category: 'Compliance',
    posts: [
      {
        question:
          'How is the Money International licensing agreement allow my institution to operate in the EU ?',
        answer:
          'As a well white label solution, the digital collection of the remittance is done by Money International entity. We then focus on compensation, but in order to keep the responsibility that we have  to the Belgium Central Bank, we take care of the compliance (eKYC,AML etc…) so that you can focus on the delivery.',
      },
      {
        question:
          'Is mitech aligned with the current regulatory compliance standard ?',
        answer:
          'Mitech is a Money international solution, and Money International is licensed by the Belgium Central Bank for international transfer, from the EU to the world. Learn more about mitech.',
      },
      {
        question: 'Why is the compliance a built-in feature ?',
        answer:
          'We have the responsibility to collect the funds, therefore we have the regulatory compliance obligation. Learn more about our features.',
      },
    ],
  },
  {
    category: 'Fund transfer',
    posts: [
      {
        question:
          'How are the funds transfer from the diaspora send directly to me ?',
        answer:
          'We collect the funds, you delivered them. At the end of an operating day we then proceed on compensation of our different accounts so that you can gather the funds collected.',
      },
      {
        question: 'How are the funds transferred instantly.',
        answer:
          'The “We collect, You deliver” dynamic allows you to get directly the data though your Information system and proceed on delivery. Then account compensation allow you to get the effective funds.',
      },
    ],
  },
  {
    category: 'Tech implementation',
    posts: [
      {
        question: 'How long does it take to create an app with Front Brand ? ',
        answer: '2-3 months',
      },
      {
        question: 'Why is it so fast ?',
        answer:
          '2-3 months is the estimation of the regulatory checklist and the time creating your own strategy. As we already have the solution, the implementation is rather fast. Learn more about Front Brand. ',
      },
    ],
  },
]

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
          {FAQ_DATA.map((item) => (
            <div key={item.category} className="faq-group mb-[75px]">
              <h2 className="text-[24px] mb-[23px] font-medium">
                {item.category}
              </h2>
              {item.posts.map((item, index) => (
                <Question
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </Layout>
  )
}
