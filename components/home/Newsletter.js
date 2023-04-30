import Button from '../html/Button'

const Newsletter = ({ data }) => {
  const { title, inputLabel, button } = data
  const { label } = button
  return (
    <section className="newsletter bg-[#f3f4f6] py-[48px]">
      <div className="container mx-auto md:max-w-[985px]">
        <div className="box">
          <div className="text-[22px] lg:text-[27px] tracking-[0.025em] mb-[20px] text-center">
            {title}
          </div>
          <div className="md:flex items-center justify-center">
            <input
              type="text"
              className="h-[56px] w-full md:w-auto md:min-w-[480px] rounded-[40px] px-[32px] py-[8px] lg:text-[16px] tracking-[0.04em] text-[#a0a1b3] text-center lg:text-left"
              name="email"
              placeholder={inputLabel ?? ''}
            />
            <div className="ml-[18px] mt-[10px] lg:mt-0 flex justify-center lg:justify-start">
              <Button type="button" title={label ?? ''} size="large" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
