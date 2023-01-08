import CardTechnology from './CardTechnology'

const DATA = [
  {
    id: 0,
    title: 'New way to link with <br> your diaspora',
    description:
      'Creating a new remittance offer is the best way to target your diaspora as it is their main financial activity with their originating country',
  },
  {
    id: 1,
    title: 'Redefining the <br> remittance landscape',
    description:
      'Finance is growing and evolving through technologies that are easy to implement to your ecosystem',
  },
]

const OurTechnology = () => {
  return (
    <div>
      <p className="text-[20px] text-[#878ea2] mb-[35px]">
        From MTOs to Open Remittance
      </p>

      <div className="grid grid-cols-2 gap-x-[18px]">
        {DATA.map((item, index) => (
          <CardTechnology data={item} key={item} />
        ))}
      </div>
    </div>
  )
}

export default OurTechnology
