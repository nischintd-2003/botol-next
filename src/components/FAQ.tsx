'use client'

import { useState } from 'react'
import FAQItem from './ui/FAQItem'
import { fAQDATA } from '@/config/constants'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="px-4 sm:px-8 md:px-20 py-10 md:py-20 bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg mx-0 md:mx-20">
        {fAQDATA.map((item, index) => (
          <FAQItem
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default FAQ
