import React from 'react'
import { twclsx } from '../../libs/twclsx'

const Select = ({
  name,
  register,
  errors,
  placeholder,
  required,
  label,
  options,
}) => {
  return (
    <>
      <div className="form-field mt-[7px]">
        <label className="block px-[15px] mb-[9px]">
          {label} {required && <span className="text-primary">*</span>}
        </label>
        <select
          defaultValue=""
          className={twclsx(
            "bg-[#f4f5f6] rounded-[80px] border-[1px] border-transparent h-[44px] w-full px-[25px] py-[5px] lg:text-[14px] tracking-[0.04em] text-[#969696] appearance-none bg-[url('/icons/arrow-select.png')] bg-no-repeat bg-[length:12px_6px] lg:bg-[length:16px_10px] bg-[right_22px_center]",
            {
              'border-primary': errors[name],
            }
          )}
          {...register(name)}
        >
          {placeholder && (
            <option value="" disabled={true}>
              {placeholder}
            </option>
          )}
          {options.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>

        {/**{errors[name] && <p>{errors[name].message}</p>} */}
      </div>
    </>
  )
}

export default Select
