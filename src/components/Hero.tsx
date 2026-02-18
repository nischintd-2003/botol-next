'use client'
import Image from 'next/image'
import BottleHand from '../../public/botol-variety/botol_hand.svg'
import variety1 from '../../public/botol-variety/vaccume bottle_v1.svg'
import variety2 from '../../public/botol-variety/Fridge Bottles & Jugs_v2.svg'
import variety3 from '../../public/botol-variety/Borosilicate Bottles_v3.svg'
import variety4 from '../../public/botol-variety/wine_v4.svg'
import Variety from './ui/Variety'
import Logo from '../../public/logo/logo_header.svg'
import { BOTTLE_VARITIES, BUTTON, NAV_LINKS } from '@/config/constants'
import CommonBtn from './ui/CommonBtn'

const Hero = () => {
  const varieties: string[] = BOTTLE_VARITIES
  const varieties_icon = [variety1, variety2, variety3, variety4]

  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <nav className="lg:h-[80px] flex justify-center lg:justify-between w-full lg:px-24">
        <div className="left">
          <Image src={Logo} alt="Logo" className="my-5 w-auto h-auto" priority />
        </div>
        <div className="right flex py-4">
          <div className="py-3 mr-15">
            {NAV_LINKS.map((item: string) => {
              return (
                <button key={item} className="mx-8 text-[20px]">
                  {item}
                </button>
              )
            })}
          </div>
          <CommonBtn text={BUTTON.INQUIRY_NOW} />
        </div>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 w-full">
        <div className="bg-[#E6D4CB]">
          <Image src={BottleHand} alt="BottleHand" className="w-full h-full" />
        </div>
        <div className="bg-[#20292C]">
          <div className="flex flex-col justify-center items-center gap-4 lg:gap-14 h-screen">
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
