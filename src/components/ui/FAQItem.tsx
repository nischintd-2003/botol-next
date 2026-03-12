'use client'
import { FAQItemProps } from '@/interfaces/componentProps.interface'
import { AnimatePresence, motion } from 'motion/react'
import { type FC } from 'react'

const FAQItem: FC<FAQItemProps> = ({ index, question, answer, isOpen, onToggle }) => {
  return (
    <div>
      <div
        className={`flex flex-row items-start lg:items-center justify-between pt-6 pe-4 lg:pe-8 cursor-pointer ${
          isOpen ? '' : 'pb-6'
        } ${index > 0 ? 'border-t-2 lg:border-t-6 border-gray-100' : ''}`}
        onClick={onToggle}
      >
        <div className="flex lg:items-center flex-row gap-2 lg:gap-4 w-full">
          <span className="text-3xl lg:text-5xl font-bold px-2 lg:px-10 py-2 lg:py-7 text-gray-400">
            0{index + 1}
          </span>
          <span className="text-lg my-auto lg:my-0 lg:text-[32px] font-semibold text-gray-900 leading-snug lg:leading-normal">
            {question}
          </span>
        </div>

        <button className="mt-2 lg:mt-0 text-gray-400 focus:outline-none self-end lg:self-auto">
          {isOpen ? (
            <div className="p-2 lg:p-3 rounded-full bg-gradient-to-r from-brand-start to-brand-end text-white font-semibold">
              <svg
                name="closeButton"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 lg:w-5 lg:h-5"
              >
                <path strokeLinecap="square" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          ) : (
            <div className="p-2 lg:p-3 bg-gray-100 rounded-full text-black">
              <svg
                name="open-button"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 lg:w-5 lg:h-5"
              >
                <path strokeLinecap="square" strokeLinejoin="round" d="M12 6v12m6-6H6" />
              </svg>
            </div>
          )}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-2 lg:px-6 pb-6 text-gray-600">
              <p className="pl-4 lg:pl-32 text-base lg:text-[20px]">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FAQItem
