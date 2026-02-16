import ProductCard from './ui/ProductCard'
import RB600 from '../../public/botol-premium/rainbow600.svg'
import RI650 from '../../public/botol-premium/rio650.svg'
import BB1300 from '../../public/botol-premium/bigBull1300.svg'
import RM600 from '../../public/botol-premium/rome600.svg'
import SW200 from '../../public/botol-premium/sweetie200.svg'
import { StaticImageData } from 'next/image'
import { BUTTON, PREMIUMPRODUCTS } from '@/config/constants'
import CommonBtn from './ui/CommonBtn'

const PremiumProducts = () => {
  const products: string[] = PREMIUMPRODUCTS.PRODUCTS
  const productImages: StaticImageData[] = [RB600, RI650, BB1300, RM600, RB600, SW200]

  return (
    <div className="w-full px-6 sm:px-10 lg:px-50 py-6">
      <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center gap-4 px-2 lg:px-10">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-[60px] font-semibold leading-tight text-center md:text-left">
            {PREMIUMPRODUCTS.TITLE}
          </h1>
          <h3 className="text-lg sm:text-xl lg:text-[24px] font-normal mt-1 text-center md:text-left">
            {PREMIUMPRODUCTS.DESCRIPTION}
          </h3>
        </div>
        <div>
          <CommonBtn text={BUTTON.VIEW_MORE} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {products.map((product, index) => (
          <ProductCard key={index} text={product} image={productImages[index]} />
        ))}
      </div>
    </div>
  )
}

export default PremiumProducts
