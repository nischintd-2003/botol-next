import AboutUs from '@/components/AboutUs'
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
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
