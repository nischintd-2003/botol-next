'use client'

import ProductCard from './ui/ProductCard'
import RB600 from '../../public/botol-premium/rainbow600.webp'
import RI650 from '../../public/botol-premium/rio650.webp'
import BB1300 from '../../public/botol-premium/bigBull1300.webp'
import RM600 from '../../public/botol-premium/rome600.webp'
import SW200 from '../../public/botol-premium/sweetie200.webp'
import { motion, type Variants } from 'motion/react'
import { BUTTON, PREMIUMPRODUCTS } from '@/config/constants'
import CommonBtn from './ui/CommonBtn'

const PRODUCT_LIST = [
  { name: 'Rainbow 600', image: RB600 },
  { name: 'Rio 650', image: RI650 },
  { name: 'Big Bull 1300', image: BB1300 },
  { name: 'Rome 600', image: RM600 },
  { name: 'Rainbow 600', image: RB600 },
  { name: 'Sweetie 200', image: SW200 },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const PremiumProducts = () => {
  return (
    <div className="w-full px-6 sm:px-10 lg:px-50 py-6 mt-20">
      <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center gap-4 ">
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

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {PRODUCT_LIST.map((product, index) => (
          <motion.div key={product.name + index} variants={itemVariants}>
            <ProductCard text={product.name} image={product.image} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default PremiumProducts
