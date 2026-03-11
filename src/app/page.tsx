import AboutUs from '@/components/AboutUs'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import VarietySection from '@/components/VarietySection'
import dynamic from 'next/dynamic'

const PremiumProducts = dynamic(() => import('@/components/PremiumProducts'))
const FAQ = dynamic(() => import('@/components/FAQ'))
const Contact = dynamic(() => import('@/components/Contact'))

export default function Home() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Hero />
        <VarietySection />
        <PremiumProducts />
        <AboutUs />
        <FAQ />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
