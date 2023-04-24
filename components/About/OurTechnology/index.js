import CardTechnology from './CardTechnology'

const OurTechnology = ({ data }) => {
  const { subtitle, cardsListRepeater } = data
  return (
    <div>
      <p className="text-[17px] lg:text-[20px] text-[#878ea2] mb-[35px]">
        {subtitle}
      </p>

      <div className="grid lg:grid-cols-2  gap-5 gap-x-[18px]">
        {cardsListRepeater.map((item, index) => (
          <CardTechnology data={item} key={item} />
        ))}
      </div>
    </div>
  )
}

export default OurTechnology
