import { type FC } from 'react'
import Image from 'next/image'
import { ProductProps } from '@/interfaces/componentProps.interface'
import { BUTTON } from '@/config/constants'

const ProductCard: FC<ProductProps> = ({ text, image }) => {
  return (
    <div className="m-auto text-center lg:text-left">
      <Image
        src={image}
        alt={text}
        className="rounded-2xl w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none"
      />
      <p className="text-xl sm:text-2xl lg:text-3xl mt-2">{text}</p>
      <button className="bg-gradient-to-r from-[#00D1FF] to-[#1A83FF] rounded-full text-base sm:text-lg lg:text-[20px] font-semibold px-6 sm:px-8 lg:px-[36px] py-[7px] my-6 text-white">
        {BUTTON.LEARN_MORE}
      </button>
    </div>
  )
}

export default ProductCard
