// Page principale — assemblage de toutes les sections
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Specialties from '@/components/Specialties'
import WhyUs from '@/components/WhyUs'
import Order from '@/components/Order'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specialties />
        <WhyUs />
        <Order />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
