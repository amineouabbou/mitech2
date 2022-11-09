import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Categories = ({ data }) => {
  const router = useRouter()
  return (
    <div className="mt-[42px]">
      <ul className="flex items-center gap-x-[3px]">
        <li key="all">
          <Link href="/faq">
            <a className="text-[16.6px] rounded-t-[5px] bg-white flex flex-col items-center justify-center h-[66px] px-[25px]">
              <span>All</span>
            </a>
          </Link>
        </li>
        {data.map((item) => (
          <li key={item.category} className="grow">
            <Link href={`/faq/${item.category.toLowerCase()}`}>
              <a
                className={`text-[16.6px] rounded-t-[5px] bg-white flex flex-col items-center justify-center h-[66px] px-[25px] ${
                  router.asPath == `/faq/${item.category.toLowerCase()}`
                    ? 'active text-primary'
                    : ''
                }`}
              >
                <span>{item.category}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
