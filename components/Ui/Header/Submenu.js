import Link from 'next/link'
import { motion } from 'framer-motion'
import { globaleasing } from '../../../data/useVariants'

function Submenu({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: '135px' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ ease: globaleasing, duration: 0.5 }}
    >
      <ul className="px-[25px] pb-[25px]">
        {data.map((item, index) => (
          <li key={index}>
            <Link href={item.slug}>
              <span className="block px-[15px] py-[4px]">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default Submenu
