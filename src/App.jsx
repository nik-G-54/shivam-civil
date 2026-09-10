import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Process from './components/Process'
import WhyUs from './components/WhyUs'
import Coverage from './components/Coverage'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Marquee />
      <Services />
      <Projects />
      <Process />
      <WhyUs />
      <Coverage />
      <Contact />
      <Footer />
      <MobileCTA />
    </>
  )
}

export default App
