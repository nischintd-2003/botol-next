'use client'
import Image from 'next/image'
import BottleHand from '../../public/botol-variety/botol_hand.svg'
import variety1 from '../../public/botol-variety/vaccume bottle_v1.svg'
import variety2 from '../../public/botol-variety/Fridge Bottles & Jugs_v2.svg'
import variety3 from '../../public/botol-variety/Borosilicate Bottles_v3.svg'
import variety4 from '../../public/botol-variety/wine_v4.svg'
import Variety from './ui/Variety'
import { BOTTLE_VARITIES } from '@/config/constants'

const Hero = () => {
  const varieties: string[] = BOTTLE_VARITIES
  const varieties_icon = [variety1, variety2, variety3, variety4]

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-50">
        <div className="bg-[#E6D4CB]">
          <Image src={BottleHand} alt="BottleHand" className="w-[100%]" />
        </div>
        <div className="bg-[#20292C]">
          <div className="flex flex-col justify-center items-center gap-4 lg:gap-14 h-screen pt-[450px] py-16 lg:py-0 lg:pt-0">
            {varieties.map((variety: string, index: number) => (
              <Variety key={index} text={variety} icon={varieties_icon[index]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
