import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import slugify from 'slugify'

const Categories = ({ data }) => {
  const router = useRouter()
  return (
    <div className="mt-[42px] overflow-x-scroll lg:overflow-hidden w-full">
      <ul className="flex justify-between gap-x-[3px]">
        <li key="all">
          <Link href="/faq">
            <span className="lg:text-[16.6px] rounded-t-[5px] bg-white flex flex-col items-center justify-center h-full lg:h-[66px] py-[10px] leading-tight  lg:py-0 px-[25px]">
              <span>All</span>
            </span>
          </Link>
        </li>
        {data.map((item) => (
          <li key={item.category} className="grow">
            <Link href={`/faq/${slugify(item.category, { lower: true })}`}>
              <span
                className={`lg:text-[16.6px] rounded-t-[5px] bg-white flex flex-col items-center justify-center h-full  lg:h-[66px] py-[10px] leading-tight lg:py-0 px-[25px] ${
                  router.asPath ==
                  `/faq/${slugify(item.category, { lower: true })}`
                    ? 'active text-primary'
                    : ''
                }`}
              >
                <span>{item.category}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
