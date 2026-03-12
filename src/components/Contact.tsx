'use client'
import Image from 'next/image'
import bottle from '../../public/BIG-BULL-1300-BLUE-BTL.webp'
import type { SubmitEventHandler } from 'react'
import { BUTTON, CONTACTS } from '@/config/constants'

const Contact = () => {
  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    console.log('Form Submitted.')
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] bg-gradient-to-r from-[rgba(32,31,31,0.8)] to-surface-dark overflow-hidden mt-20 mx-24 rounded-3xl">
      <div className="left flex justify-center lg:block pt-10 lg:pt-0">
        <Image
          src={bottle}
          alt="bottle"
          className="h-auto lg:h-190 w-60 lg:w-auto -rotate-[-23.19deg] translate-y-10 lg:translate-y-28 lg:-translate-x-12"
          sizes="(max-width: 768px) 15rem, 40vw"
        />
      </div>

      <div className="right p-6 lg:p-20">
        <form onSubmit={handleSubmit} className="pt-6 lg:pt-10 text-white">
          <h1 className="text-2xl lg:text-[40px] font-semibold leading-tight">{CONTACTS.TITLE}</h1>
          <h3 className="text-sm lg:text-[14px] font-medium mt-3 mb-6 lg:mb-10">
            {CONTACTS.DESCRIPTION_LINE_1} <br className="hidden lg:block" />{' '}
            {CONTACTS.DESCRIPTION_LINE_2}
          </h3>

          <div className="flex flex-col lg:me-40 gap-2">
            <label className="text-[14px] my-[5px]">{CONTACTS.LABEL.NAME}</label>
            <input
              type="text"
              placeholder="Rachel Joe"
              className="px-[30px] py-[20px] rounded-[10px] bg-[#343333] border border-text-muted text-white placeholder:text-[12px] outline-none placeholder:text-text-muted"
            />

            <label className="text-[14px] my-[5px]">{CONTACTS.LABEL.EMAIL}</label>
            <input
              type="email"
              placeholder="Rachel@domain.com"
              className="px-[30px] py-[20px] rounded-[10px] bg-[#343333] border border-text-muted text-white placeholder:text-[12px] outline-none placeholder:text-text-muted"
            />

            <label className="text-[14px] my-[5px]">{CONTACTS.LABEL.MESSAGE}</label>
            <textarea
              placeholder="Type your query here....."
              rows={4}
              className="px-[30px] py-[20px] rounded-[10px] bg-[#343333] resize-none border border-text-muted text-white placeholder:text-[12px] outline-none placeholder:text-text-muted mb-4"
            />
            <button
              type="submit"
              className="bg-gradient-to-b w-32 lg:w-40 from-brand-start to-brand-end px-2 py-2 rounded-full text-lg lg:text-[20px] font-semibold text-white"
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
