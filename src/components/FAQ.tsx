'use client'

import { useState } from 'react'
import FAQItem from './ui/FAQItem'
import { FAQDATA } from '@/config/constants'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="px-4 lg:px-20 py-10 lg:py-20 bg-gray-100 mt-20">
      <h2 className="sr-only">Frequently Asked Questions</h2>
      <div className="bg-white rounded-2xl mx-0 md:mx-20">
        {FAQDATA.map((item, index) => (
          <FAQItem
            key={`faq-item-${index}`}
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
