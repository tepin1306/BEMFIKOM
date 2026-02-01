import Hero from '@/components/Hero'
import About from '@/components/About'
import Leadership from '@/components/Leadership'
import Departments from '@/components/Departments'
import Events from '@/components/Events'
import Aspirasi from '../components/Aspirasi'
import FAQ from '../components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Leadership />
      <Departments />
      <Events />
      <Aspirasi />
      <FAQ />
      <Footer />
    </div>
  )
}
