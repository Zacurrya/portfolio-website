import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'
import Hero from './(main)/hero/_components/hero'
import Projects from './(main)/projects/projects'
import About from './(main)/about/about'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Zaky's Portfolio",
  description: "Zakariya Yusuf's Portfolio Website",
  icons: {
    icon: '/navbar-logo.svg'
  },
};

export default function Page() {
  return (
    <>
      <SpeedInsights />
      <Navbar />
      {/* Section 1 */}
      <div className="snap-parent">
        <Hero />
        <main className="min-h-screen relative overflow-hidden">
          {/* Section 2 */}
          <About />
          {/* Section 3 */}
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  )
}
