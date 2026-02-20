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
import { motion, useScroll, useTransform } from 'motion/react'
import BotolCap from '../../public/botol/Bottle-Cap.svg'
import BotolContainer from '../../public/botol/Bottle-down.svg'

const Hero = () => {
  const { scrollYProgress } = useScroll({})
  const varieties: string[] = BOTTLE_VARITIES
  const varieties_icon = [variety1, variety2, variety3, variety4]
  const bottleTopY = useTransform(scrollYProgress, [0, 0.185], [-50, 1200])
  const bottleBottomY = useTransform(scrollYProgress, [0, 0.185], [-350, 400])

  return (
    <div className="flex flex-col justify-center items-center mt-5">
      {/* NAVBAR */}
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
      {/* BOTTLE COMPONENTS */}
      <div className="absolute inset-0 top-40 z-50 -translate-y-36 lg:-translate-y-0">
        <motion.div
          className="bottle-top"
          initial={{ y: 200 }}
          animate={{ y: -50 }}
          transition={{ duration: 2.5, delay: 1 }}
          style={{ y: bottleTopY }}
        >
          <Image src={BotolCap} alt="Botol Cap" className="m-auto scale-50 lg:scale-100" priority />
        </motion.div>
        <motion.div
          className="bottle-bottom"
          initial={{ y: -600 }}
          animate={{ y: -350 }}
          transition={{ duration: 2.5, delay: 1 }}
          style={{ y: bottleBottomY }}
        >
          <Image
            src={BotolContainer}
            alt="Bottle Bottom"
            className="m-auto scale-50 lg:scale-100"
            priority
          />
        </motion.div>
      </div>
      {/* BACKGROUND HOLLOW CIRCLE EFFECT */}
      <motion.div
        className="circle bg-gradient-to-b from-[#4DFBFB] to-[#788EFF] h-[600px] w-[600px] rounded-full p-2 absolute top-50"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <motion.div
          className="bg-white rounded-full h-[582px]"
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 2 }}
        ></motion.div>
      </motion.div>
      {/* TITLE AND DESCRIPTION */}
      <div className="mt-46 z-40">
        <div className="flex flex-col items-center">
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
              animate={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 3, delay: 1 }}
              className="hidden lg:block mt-15"
            >
              <Image src={LeftBotol} alt="Botol Left" priority />
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
              animate={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 3, delay: 1 }}
              className="hidden lg:block mt-15"
            >
              <Image src={RightBotol} alt="Botol Right" priority />
            </motion.div>
          </div>
        </div>
      </div>
      {/* BOTOL VARIETY SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-72 w-full">
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
