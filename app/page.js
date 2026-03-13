import Cursor     from '@/components/Cursor'
import Navbar     from '@/components/Navbar'
import Hero       from '@/components/Hero'
import Marquee    from '@/components/Marquee'
import About      from '@/components/About'
import Work       from '@/components/Work'
import WorkWall   from '@/components/WorkWall'
import Services   from '@/components/Services'
import Process    from '@/components/Process'
import CTA        from '@/components/CTA'
import Footer     from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <WorkWall />
        <Services />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
