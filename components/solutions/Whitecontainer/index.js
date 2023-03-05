import { twclsx } from '../../../libs/twclsx'

const WhiteContainer = ({
  data,
  className,
  sectionClassName,
  gap,
  children,
}) => {
  return (
    <section
      className={twclsx('relative', {
        [`${sectionClassName}`]: sectionClassName,
      })}
    >
      {gap}
      <div className="container max-w-1190 relative z-[2]">
        <div
          className={twclsx(
            'main',
            'bg-white drop-shadow-[0px_0px_25px_rgba(0,0,0,0.1)]',
            {
              [`${className}`]: className,
              'p-[30px] lg:p-[80px]': !className,
            }
          )}
        >
          {children}
        </div>
      </div>
    </section>
  )
}

export default WhiteContainer
