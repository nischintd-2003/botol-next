import AboutUs from '@/components/AboutUs'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import PremiumProducts from '@/components/PremiumProducts'

export default function Home() {
  return (
    <>
      <main>
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
