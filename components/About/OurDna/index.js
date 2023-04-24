import React from 'react'
import CardDna from './CardDna'

const DATA = [
  {
    id: 0,
    icon: '/icons/pointer-icon.svg',
    title: 'Reduce transfer <br>costs',
    description:
      'Our white label solutions give you the opportunity to apply an aggressive pricing and currency strategy to promote transfers',
  },
  {
    id: 1,
    icon: '/icons/red-cross.svg',
    title: 'Eliminate unnecessary <br>intermediaries',
    description:
      'Our solutions allow you to access your diaspora without the intermediation of MTOs. So you will have the freedom to apply your strategy without third-party constraints',
  },
  {
    id: 2,
    icon: '/icons/happy-face.svg',
    title: 'Facilitate the transfer  <br>experience',
    description:
      'Streamlined, personalized customer experiences make transfers smoother while providing follow-up service that builds customer loyalty',
  },
]

const OurDna = ({ data }) => {
  const { subtitle, cardsRepeater } = data
  return (
    <div>
      <p className="text-[17px] lg:text-[20px] text-[#878ea2] mb-[35px]">
        {subtitle}
      </p>

      <div className="grid lg:grid-cols-3 gap-5 gap-x-[11px]">
        {cardsRepeater.map((item, index) => (
          <CardDna data={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default OurDna
