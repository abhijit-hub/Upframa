import Navbar           from '@/components/Navbar'
import Hero             from '@/components/Hero'
import Marquee          from '@/components/Marquee'
import DesignPlayground from '@/components/DesignPlayground'
import About            from '@/components/About'
import Work             from '@/components/Work'
import Services         from '@/components/Services'
import Process          from '@/components/Process'
import CTA              from '@/components/CTA'
import Footer           from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <DesignPlayground />
        <About />
        <Work />
        <Services />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  )
}