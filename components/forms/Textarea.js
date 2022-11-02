import React from 'react'

const Textarea = ({ name, register, errors, placeholder, required, label }) => {
  return (
    <>
      <div className="form-field">
        {label && (
          <label className="block px-[17px] mb-[9px]">
            {label} {required && <span className="text-primary">*</span>}
          </label>
        )}
        <textarea
          className="bg-[#f4f5f6] rounded-[5px] h-[138px] w-full px-[25px] py-[15px] text-[14px] tracking-[0.04em]"
          placeholder={placeholder}
          {...register(name)}
        />

        {
          //Shows if error exist
          errors[name] && <p>{errors[name].message}</p>
        }
      </div>
    </>
  )
}

export default Textarea
