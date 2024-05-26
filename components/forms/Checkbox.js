import React from 'react'
import { twclsx } from '../../libs/twclsx'

const Checkbox = ({
  name,
  register,
  errors,
  placeholder,
  required,
  label,
  value,
  smallMargin,
  id,
}) => {
  return (
    <div className={`form-field  ${smallMargin ? 'mb-[8px]' : 'mb-[14px]'}`}>
      <label
        htmlFor={id}
        className={twclsx('flex items-start', {
          ' text-primary': errors[name],
        })}
      >
        <input
          className="peer hidden"
          id={id}
          type="checkbox"
          value={value}
          {...register(name)}
        />
        <span className="icon h-[19px] w-[19px] rounded-[5px] mr-[15px] top-[2px] bg-[#f4f5f6] relative before:invisible before:scale-0 before:opacity-0 before:h-[10px] before:w-[10px] before:bg-secondary before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:my-auto before:mx-auto before:rounded-[3px] peer-checked:before:visible peer-checked:before:scale-100 peer-checked:before:opacity-100 before:transition-all before:duration-150"></span>
        <span
          className="lg:text-[14px]"
          dangerouslySetInnerHTML={{ __html: label }}
        />
      </label>
    </div>
  )
}

export default Checkbox
