'use client'
import Image from 'next/image'
import bottle from '../../public/BIG-BULL-1300-BLUE-BTL.svg'
import { SubmitEvent } from 'react'
import { BUTTON, CONTACTS } from '@/config/constants'

const Contact = () => {
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault()
    console.log('Form Submitted.')
  }

  return (
    <div className="contact grid grid-cols-1 md:grid-cols-[40%_60%] bg-gradient-to-r from-[rgba(32,31,31,0.8)] to-[#201F1F] overflow-hidden mt-20 mx-24 rounded-3xl">
      <div className="left flex justify-center md:block pt-10 md:pt-0">
        <Image
          src={bottle}
          alt="bottle"
          className="h-auto md:h-190 w-60 md:w-auto -rotate-[-23.19deg] translate-y-10 md:translate-y-28 md:-translate-x-12"
        />
      </div>

      <div className="right p-6 md:p-20">
        <form onSubmit={handleSubmit} className="pt-6 md:pt-10 text-white">
          <h1 className="text-2xl md:text-[40px] font-semibold leading-tight">{CONTACTS.TITLE}</h1>
          <h3 className="text-sm md:text-[14px] font-medium mt-3 mb-6 md:mb-10">
            {CONTACTS.DESCRIPTION_PT1} <br className="hidden md:block" /> {CONTACTS.DESCRIPTION_PT2}
          </h3>

          <div className="flex flex-col md:me-40 gap-2">
            <label>{CONTACTS.LABEL.NAME}</label>
            <input
              type="text"
              placeholder="Rachel Joe"
              className="px-3 py-2 rounded-md text-white placeholder:text-[12px] outline-none placeholder:text-[#8D8D8D]"
            />

            <label>{CONTACTS.LABEL.EMAIL}</label>
            <input
              type="email"
              placeholder="Rachel@domain.com"
              className="px-3 py-2 rounded-md text-white placeholder:text-[12px] outline-none placeholder:text-[#8D8D8D]"
            />

            <label>{CONTACTS.LABEL.MESSAGE}</label>
            <textarea
              placeholder="Type your query here....."
              rows={4}
              className="px-3 py-2 rounded-md text-white placeholder:text-[12px] outline-none resize-none placeholder:text-[#8D8D8D] mb-4"
            />
            <button
              type="submit"
              className="bg-gradient-to-b w-32 md:w-40 from-[#00D1FF] to-[#1A83FF] px-2 py-2 rounded-full text-lg md:text-[20px] font-semibold text-white"
            >
              {BUTTON.SUBMIT}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
