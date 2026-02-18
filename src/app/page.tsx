import AboutUs from '@/components/AboutUs'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import PremiumProducts from '@/components/PremiumProducts'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
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
