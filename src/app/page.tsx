import AboutUs from '@/components/AboutUs'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import PremiumProducts from '@/components/PremiumProducts'
import VarietySection from '@/components/VarietySection'

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
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
