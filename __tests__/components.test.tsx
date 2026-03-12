import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import VarietySection from '@/components/VarietySection'
import PremiumProducts from '@/components/PremiumProducts'
import AboutUs from '@/components/AboutUs'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

describe('Component Smoke Tests', () => {
  it('loads Navbar successfully', () => {
    const { container } = render(<Navbar />)
    expect(container).toBeTruthy()
  })

  it('loads Hero successfully', () => {
    const { container } = render(<Hero />)
    expect(container).toBeTruthy()
  })

  it('loads VarietySection successfully', () => {
    const { container } = render(<VarietySection />)
    expect(container).toBeTruthy()
  })

  it('loads PremiumProducts successfully', () => {
    const { container } = render(<PremiumProducts />)
    expect(container).toBeTruthy()
  })

  it('loads AboutUs successfully', () => {
    const { container } = render(<AboutUs />)
    expect(container).toBeTruthy()
  })

  it('loads FAQ successfully', () => {
    const { container } = render(<FAQ />)
    expect(container).toBeTruthy()
  })

  it('loads Contact successfully', () => {
    const { container } = render(<Contact />)
    expect(container).toBeTruthy()
  })

  it('loads Footer successfully', () => {
    const { container } = render(<Footer />)
    expect(container).toBeTruthy()
  })
})
