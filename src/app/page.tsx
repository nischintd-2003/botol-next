import AboutUs from '@/components/AboutUs'
import Footer from '@/components/Footer'
import PremiumProducts from '@/components/PremiumProducts'

export default function Home() {
  return (
    <>
      <main>
        <PremiumProducts />
        <AboutUs />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
