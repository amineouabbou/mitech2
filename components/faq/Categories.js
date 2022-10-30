import React from 'react'

const Categories = () => {
  return (
    <div className="mt-[42px]">
      <ul className="flex items-center gap-x-[3px]">
        {[
          'All',
          'Brand',
          'Products',
          'Features',
          'Compliance ',
          'Funds transfer',
          'FinTech',
        ].map((item) => (
          <li key={item}>
            <a
              className="text-[16.6px] rounded-t-[5px] bg-white flex flex-col items-center justify-center h-[66px] px-[25px]"
              href="#"
            >
              <span>{item}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
