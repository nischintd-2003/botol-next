import { BlurCardProps } from '@/interfaces/componentProps.interface'
import { type FC } from 'react'

const BlurCard: FC<BlurCardProps> = ({ text, number }) => {
  return (
    <div className="flex items-center  bg-[rgb(255,255,255,0.2)] rounded-3xl text-white px-6 py-6 gap-10 min-w-lg font-semibold backdrop-blur-xs border border-white">
      <div className="md:text-[60px] text-xl">{number + 1}</div>
      <div className="md:text-[32px]">{text}</div>
    </div>
  )
}

export default BlurCard
