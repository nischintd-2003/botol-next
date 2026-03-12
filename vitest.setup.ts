import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'
import React from 'react'

interface MockImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  priority?: boolean | string
  sizes?: string
}

vi.mock('next/image', () => ({
  default: (props: MockImageProps) => {
    const { priority: _priority, sizes: _sizes, ...validDOMProps } = props
    return React.createElement('img', validDOMProps)
  },
}))

class MockIntersectionObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}
vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)

vi.mock('motion/react', async () => {
  const actual = await vi.importActual<Record<string, unknown>>('motion/react')
  return {
    ...actual,
    useScroll: () => ({ scrollYProgress: { get: () => 0, onChange: () => {} } }),
    useTransform: () => ({ get: () => 0, onChange: () => {} }),
  }
})
