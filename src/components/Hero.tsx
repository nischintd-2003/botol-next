'use client'
import Image from 'next/image'
import { BUTTON, FRONT_SECTION } from '@/config/constants'
import RightBottle from '../../public/botol/bottle_right.webp'
import LeftBottle from '../../public/botol/bottle_left.webp'
import { motion, useScroll, useTransform } from 'motion/react'
import BottleCap from '../../public/botol/Bottle-Cap.webp'
import BottleContainer from '../../public/botol/Bottle-down.webp'
import { useRef } from 'react'

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const bottleTopY = useTransform(scrollYProgress, [0, 1], [-50, 1100])
  const bottleBottomY = useTransform(scrollYProgress, [0, 1], [-350, 300])

  return (
    <div ref={containerRef} className="flex flex-col justify-center items-center mt-5">
      {/* BOTTLE COMPONENTS */}
      <div className="absolute inset-0 top-40 z-50 -translate-y-36 lg:-translate-y-0">
        <motion.div
          className="bottle-top-entrance"
          initial={{ y: 270 }}
          animate={{ y: 0 }}
          transition={{ duration: 2.5, delay: 1, ease: 'easeInOut' }}
        >
          <motion.div className="bottle-top-scroll" style={{ y: bottleTopY }}>
            <Image
              src={BottleCap}
              alt="Botol Cap"
              className="m-auto scale-50 lg:scale-100"
              sizes="(max-width: 1024px) 50vw, 33vw"
              priority
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="bottle-bottom-entrance"
          initial={{ y: -230 }}
          animate={{ y: 0 }}
          transition={{ duration: 2.5, delay: 1, ease: 'easeInOut' }}
        >
          <motion.div className="bottle-bottom-scroll" style={{ y: bottleBottomY }}>
            <Image
              src={BottleContainer}
              alt="Bottle Bottom"
              className="m-auto scale-50 lg:scale-100"
              sizes="(max-width: 1024px) 50vw, 33vw"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
      {/* BACKGROUND HOLLOW CIRCLE EFFECT */}
      <motion.div
        className="circle bg-gradient-to-b from-accent-cyan to-accent-blue w-[90vw] max-w-[600px] aspect-square rounded-full p-[9px] absolute top-50"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.1 }}
        transition={{ delay: 1, duration: 2, ease: 'easeInOut' }}
      >
        <motion.div
          className="bg-white rounded-full w-full h-full"
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 2, ease: 'easeInOut' }}
        ></motion.div>
      </motion.div>
      {/* TITLE AND DESCRIPTION */}
      <div className="mt-24 lg:mt-46 z-40">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 3, delay: 1, ease: 'easeInOut' }}
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
              whileInView={{ opacity: 1, scale: 1.2 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 3, delay: 1, ease: 'easeInOut' }}
              className="hidden lg:block mt-15"
            >
              <Image
                src={LeftBottle}
                alt="Botol Left"
                priority
                sizes="(max-width: 1024px) 0vw, 20vw"
              />
            </motion.div>
            <motion.button
              className="bg-gradient-to-r from-brand-start to-brand-end text-white text-xl mt-8 px-10 py-2 rounded-3xl h-12"
              initial={{ opacity: 0, y: 65 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 2, delay: 2, ease: 'easeInOut' }}
            >
              {BUTTON.INQUIRY_NOW}
            </motion.button>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 220, y: 50 }}
              whileInView={{ opacity: 1, scale: 1.2 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 3, delay: 1, ease: 'easeInOut' }}
              className="hidden lg:block mt-15"
            >
              <Image
                src={RightBottle}
                alt="Botol Right"
                priority
                sizes="(max-width: 1024px) 0vw, 20vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
