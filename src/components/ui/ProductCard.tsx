import { type FC } from 'react'
import Image from 'next/image'
import { ProductProps } from '@/interfaces/componentProps.interface'
import { BUTTON } from '@/config/constants'
import CommonBtn from './CommonBtn'

const ProductCard: FC<ProductProps> = ({ text, image }) => {
  return (
    <div className="m-auto text-center lg:text-left">
      <Image
        src={image}
        alt={text}
        className="rounded-2xl w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none"
      />
      <p className="text-xl sm:text-2xl lg:text-3xl mt-[10px] mb-5">{text}</p>
      <CommonBtn text={BUTTON.LEARN_MORE} />
    </div>
  )
}

export default ProductCard
