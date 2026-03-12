import { CommonBtnProps } from '@/interfaces/componentProps.interface'
import { FC } from 'react'

const CommonBtn: FC<CommonBtnProps> = ({ text }) => {
  return (
    <button className="bg-gradient-to-r from-brand-start to-brand-end rounded-full text-base sm:text-lg lg:text-[20px] font-semibold px-6 sm:px-8 lg:px-[36px] py-[7px] text-white">
      {text}
    </button>
  )
}

export default CommonBtn
