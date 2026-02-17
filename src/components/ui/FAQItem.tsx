'use client'
import { FAQItemProps } from '@/interfaces/componentProps.interface'
import { type FC } from 'react'

const FAQItem: FC<FAQItemProps> = ({ index, question, answer, isOpen, onToggle }) => {
  return (
    <div>
      <div
        className={`flex flex-row items-start md:items-center justify-between pt-6 pe-4 md:pe-8 cursor-pointer ${
          isOpen ? '' : 'pb-6'
        } ${index > 0 ? 'border-t-2 md:border-t-6 border-gray-100' : ''}`}
        onClick={onToggle}
      >
        <div className="flex md:items-center flex-row gap-2 md:gap-4 w-full">
          <span className="text-3xl md:text-5xl font-bold px-2 md:px-10 py-2 md:py-7 text-gray-400">
            0{index + 1}
          </span>
          <span className="text-lg my-auto md:my-0 md:text-[32px] font-semibold text-gray-900 leading-snug md:leading-normal">
            {question}
          </span>
        </div>

        <button className="mt-2 md:mt-0 text-gray-400 focus:outline-none self-end md:self-auto">
          {isOpen ? (
            <div className="p-2 md:p-3 rounded-full bg-gradient-to-r from-[#4DFBFB] to-[#788EFF] text-white font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4 md:w-5 md:h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          ) : (
            <div className="p-2 md:p-3 bg-gray-100 rounded-full text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4 md:w-5 md:h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
              </svg>
            </div>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="px-2 md:px-6 pb-6 text-gray-900">
          <p className="pl-4 md:pl-28 text-base md:text-[20px]">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default FAQItem
