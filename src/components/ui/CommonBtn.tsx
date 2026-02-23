import { CommonBtnProps } from '@/interfaces/componentProps.interface'
import { FC } from 'react'

const CommonBtn: FC<CommonBtnProps> = ({ text }) => {
  return (
    <button
      name="common-btn"
      id="common-btn"
      className="bg-gradient-to-r from-[#00D1FF] to-[#1A83FF] rounded-full text-base sm:text-lg lg:text-[20px] font-semibold px-6 sm:px-8 lg:px-[36px] py-[7px] text-white"
    >
      {text}
    </button>
  )
}

export default CommonBtn
