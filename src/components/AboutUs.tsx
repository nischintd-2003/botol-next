import { ABOUTUS, BUTTON } from '@/config/constants'
import BlurCard from './ui/BlurCard'
import CommonBtn from './ui/CommonBtn'

const AboutUs = () => {
  return (
    <div
      className="bg-cover bg-center grid grid-cols-1 lg:grid-cols-2 text-white gap-12 lg:gap-36 px-6 sm:px-12 lg:ps-50 lg:pe-30 py-12 lg:py-30 mt-20"
      style={{ backgroundImage: `url(/aboutUsBg.svg)` }}
    >
      <div className="left">
        <h1 className="text-3xl sm:text-4xl lg:text-[60px] font-semibold">{ABOUTUS.TITLE}</h1>
        <h3 className="text-lg sm:text-xl lg:text-[24px] font-medium my-3">
          {ABOUTUS.DESCRIPTION}
        </h3>
        <p className="text-base sm:text-lg lg:text-[20px]/8 my-7 leading-relaxed">
          {ABOUTUS.CONTENT}
        </p>
        <CommonBtn text={BUTTON.LEARN_MORE} />
      </div>

      <div className="right flex flex-col gap-6 sm:gap-8 lg:gap-10 ms-0 lg:ms-10 me-0 lg:me-60">
        {ABOUTUS.FEATURES.map((feature, index) => (
          <BlurCard key={index} text={feature} number={index} />
        ))}
      </div>
    </div>
  )
}

export default AboutUs
