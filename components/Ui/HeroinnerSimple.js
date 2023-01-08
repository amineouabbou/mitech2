import Description from './Heroinner/Description'

const HeroinnerSimple = ({
  title,
  subtitle,
  description,
  childComp,
  isFaq,
}) => {
  return (
    <div
      className={`hero-section min-h-[450px] md:min-h-[542px] flex flex-col bg-[#f1f2f4] bg- bg-[url('/bgs/hero-bg.png')] bg-no-repeat bg-cover bg-blend-color-burn bg-[center_top_6rem] ${
        isFaq ? 'justify-end' : 'justify-center'
      }`}
    >
      <div
        className={`container mx-auto max-w-[1030px] relative ${
          isFaq ? '' : ''
        }`}
      >
        <div className="text-center">
          {title && title}

          {subtitle && subtitle}

          {description && <Description description={description} />}
        </div>
      </div>
      {childComp && childComp}
    </div>
  )
}

export default HeroinnerSimple
