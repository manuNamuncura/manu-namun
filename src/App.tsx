import './App.css'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import './index.css'
import { Experience } from './components/sections/Experience'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/layout/Footer'
function App() {


  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <hr className="border-gray-100 dark:border-gray-900" />
        <About />
        <hr className="border-gray-100 dark:border-gray-900" />
        <Skills />
        <hr className="border-gray-100 dark:border-gray-900" />
        <Experience />
        <hr className="border-gray-100 dark:border-gray-900" />
        <Projects />
        <hr className="border-gray-100 dark:border-gray-900" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
