import { BlurCardProps } from '@/interfaces/componentProps.interface'
import { type FC } from 'react'

const BlurCard: FC<BlurCardProps> = ({ text, number }) => {
  return (
    <div className="flex bg-[rgb(255,255,255,0.2)] rounded-3xl md:text-[32px] text-xl text-white px-24 py-24 gap-5 max-w-md font-semibold backdrop-blur-xs border border-white">
      <div className="md:text-[60px] text-xl">{number + 1}</div>
      <div>{text}</div>
    </div>
  )
}

export default BlurCard
