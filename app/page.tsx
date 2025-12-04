import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'
import Hero from './components/ui/hero'
import Projects from './components/ui/projects'
import About from './components/ui/about'

export default function Page() {
  return (
    <>
      <head>
        <link rel="icon" href="/navbar-logo.svg" />
        <title>Zaky's Portfolio</title>
      </head>
      <Navbar />
      {/* Section 1 */}
      <div className="snap-parent">
        <Hero />
        <main className="min-h-screen relative overflow-hidden">
          {/* Background Elements */}
          <div className="fixed inset-0 z-[-1]">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-[128px]" />
          </div>
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
