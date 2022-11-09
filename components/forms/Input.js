import React from 'react'

const Input = ({ name, register, errors, placeholder, required, label }) => {
  return (
    <>
      <div className="form-field">
        <label className="block px-[17px] mb-[9px]">
          {label} {required && <span className="text-primary">*</span>}
        </label>
        <input
          type="text"
          className={`bg-[#f4f5f6] rounded-[80px] h-[44px] w-full px-[25px] py-[5px] lg:text-[14px] tracking-[0.04em] text-[#969696] ${
            errors[name] ? `border-[1px] border-red-500` : ``
          }`}
          placeholder={placeholder}
          {...register(name)}
        />

        {/**{errors[name] && <p>{errors[name].message}</p>} */}
      </div>
    </>
  )
}

export default Input
