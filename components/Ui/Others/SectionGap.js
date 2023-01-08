import { twclsx } from '../../../libs/twclsx'

const SectionGap = ({ className }) => {
  return (
    <div
      className={twclsx('absolute w-full', {
        [`${className}`]: className,
      })}
    ></div>
  )
}

export default SectionGap
