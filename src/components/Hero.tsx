'use client'
import Image from 'next/image'
import BottleHand from '../../public/botol-variety/botol_hand.svg'
import variety1 from '../../public/botol-variety/v1.svg'
import variety2 from '../../public/botol-variety/v2.svg'
import variety3 from '../../public/botol-variety/v3.svg'
import variety4 from '../../public/botol-variety/v4.svg'
import Variety from './ui/Variety'
import Logo from '../../public/logo/logo_header.svg'
import { BOTTLE_VARITIES, BUTTON, FRONT_SECTION, NAV_LINKS } from '@/config/constants'
import CommonBtn from './ui/CommonBtn'
import RightBotol from '../../public/botol/bottle_right.svg'
import LeftBotol from '../../public/botol/bottle_left.svg'
import { motion } from 'motion/react'

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

      <div className="mt-24 h-screen">
        <div className="flex flex-col items-center mt-8">
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 3, delay: 1 }}
          >
            <div className="text-6xl lg:text-[96px] font-medium text-center leading-tight">
              {FRONT_SECTION.TITLE_1}
              <br />
              {FRONT_SECTION.TITLE_2}
            </div>
            <div className="text-[30px] text-center mt-3">
              {FRONT_SECTION.DESCRIPTION_1}
              <br />
              {FRONT_SECTION.DESCRIPTION_2}
            </div>
          </motion.div>
          <div className="flex justify-evenly w-screen">
            <motion.div
              initial={{ opacity: 0, scale: 0, x: -220, y: 50 }}
              animate={{ opacity: 1, scale: 1.4 }}
              transition={{ duration: 3, delay: 1 }}
              className="hidden lg:block"
            >
              <Image src={RightBotol} alt="Botol Left" priority />
            </motion.div>
            <motion.button
              className="bg-gradient-to-r from-[#00D1FF] to-[#1A83FF] text-white text-xl mt-8 px-10 py-2 rounded-3xl h-12"
              initial={{ opacity: 0, y: 65 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 2 }}
            >
              {BUTTON.INQUIRY_NOW}
            </motion.button>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 220, y: 50 }}
              animate={{ opacity: 1, scale: 1.4 }}
              transition={{ duration: 3, delay: 1 }}
              className="hidden lg:block"
            >
              <Image src={LeftBotol} alt="Botol Right" priority />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2  w-full">
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
