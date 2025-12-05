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
