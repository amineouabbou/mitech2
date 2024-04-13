import { useState } from 'react'
import Button from '../html/Button'
import axios from 'axios'

const Newsletter = ({ data }) => {
  const { title, inputLabel, button } = data
  const { label } = button
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [succesMessage, setSuccesMessage] = useState('')

  const hadleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email === '') {
      setError('A valid email is required')
      setTimeout(() => {
        setError('')
      }, 2000)
      return
    }

    console.log('Submited')
    console.log(email)

    const { data } = await axios.post('/api/subscribe', { email })
    setSuccesMessage('Successfuly subscribed')
    setEmail('')
    setTimeout(() => {
      setSuccesMessage('')
    }, 3000)
    console.log(data)
  }

  console.log('Email', email)
  return (
    <section className="newsletter bg-[#f3f4f6] py-[48px] mt-[50px] lg:mt-[75px]">
      <div className="container mx-auto md:max-w-[985px]">
        <div className="box">
          {succesMessage && <div>{succesMessage}</div>}
          <div className="text-[22px] lg:text-[27px] tracking-[0.025em] mb-[20px] text-center">
            {title}
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="md:flex items-center justify-center"
            >
              <input
                onChange={hadleChange}
                type="text"
                className="h-[56px] w-full md:w-auto md:min-w-[480px] rounded-[40px] px-[32px] py-[8px] lg:text-[16px] tracking-[0.04em] text-[#a0a1b3] text-center lg:text-left"
                name="email"
                placeholder={inputLabel ?? ''}
                value={email}
              />
              <div className="ml-[18px] mt-[10px] lg:mt-0 flex justify-center lg:justify-start">
                <Button type="button" title={label ?? ''} size="large" />
              </div>
            </form>
          </div>
        </div>
        {error && <div>{error}</div>}
      </div>
    </section>
  )
}

export default Newsletter
