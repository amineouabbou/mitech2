import React from 'react'

import SEO from '../components/SEO'
import Layout from '../components/Ui/Layout'
import Header from '../components/Ui/Header'
import Footer from '../components/Ui/Footer'
import Largebox from '../components/features/Largebox'
import { shortFadeUp, titesStagger } from '../data/useVariants'
import Heroinner from '../components/Ui/Heroinner'
import Getintouch from '../components/Ui/Getintouch'
import Faqbanner from '../components/faq/Faqbanner'

export default function Featured() {
  return (
    <Layout>
      <SEO />
      <Header />
      <Heroinner
        title="Features"
        subtitle="Competitive remittance offer with mitech innovative features"
        description="Cover most of your needs and can be adapted to create or plug in
              your offer"
      />
      <div className="container mx-auto max-w-[1030px]">
        <main className="bg-white min-h-[500px] drop-shadow-[0px_0px_25px_rgba(73,83,100,0.1)] -mt-[125px] p-[50px]">
          <Largebox
            icon="/icons/aggregation.svg"
            title="Account Aggregation"
            description="Account aggregation allow you to gather the financial data of the diaspora bank accounts and display them within your app. For the diaspora sender this allow him to have an better and more centralized display of his financial information. For your brand this will allow you to gain financial visibility and push more relevant commercial offers."
          />

          <Largebox
            icon="/icons/collecting.svg"
            title="Collecting methods"
            description="Collection methods covers every tools to gather funds from the diaspora and ensure an effortless transfer. Collection methods included with mitech are : Credit/Debit Card, Bank account, Paypal, Prepaid options and more…"
          />

          <Largebox
            icon="/icons/transaction-fee.svg"
            title="Transaction fee"
            size="small"
            description="Transaction fee are set up through the console we provide. You can manage transaction fees per amount sent, per corridors and per origin country of emission. Fees can also take the form of a flat fee, a percentage of the total funds transfered or both. "
          />

          <Largebox
            icon="/icons/forex.svg"
            title="Forex"
            description="Forex fee can be set through our console. You can manage and set a forex price list per corridors, per origin country of emission."
          />

          <Largebox
            icon="/icons/loyalty.svg"
            size="small"
            title="Loyalty program"
            description="Loyalty programs create comercial incentives offer to the diaspora senders to ensure loyalty and reward use of the app. Example of reward for the  loyalty programs are discounts, free transfers, other gifts and more…"
          />

          <Largebox
            icon="/icons/in-apps.svg"
            title="In-app Ads"
            size="small"
            description="Loyalty programs create comercial incentives offer to the diaspora senders to ensure loyalty and reward use of the app. Example of reward for the  loyalty programs are discounts, free transfers, other gifts and more…"
          />

          <Largebox
            icon="/icons/ekyc.svg"
            title="eKYC"
            size="small"
            description="Digital “Know your customer” is the digitalisation of the KYC process.  We verify the identity of the customer and their registration to ensure that the provided legal documents are valid."
          />

          <Largebox
            icon="/icons/aml.svg"
            title="AML"
            size="small"
            description="Through data and machine learning with match the informations to define the degree of risk of a given customer. Continuous back office verification are also ensured."
          />

          <Largebox
            icon="/icons/support.svg"
            title="Customer Support"
            size="small"
            description="Customer support with any bugs and issues within the app or transaction. We make sure that each reported inconvenienced is solved."
          />
        </main>
        <div className="md:mt-[75px] md:mb-[60px]">
          <Faqbanner />
        </div>
        <Getintouch />
      </div>
      <Footer />
    </Layout>
  )
}
