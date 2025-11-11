import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import GitHub from './components/GitHub/GitHub'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import CustomCursor from './components/common/CustomCursor'
import BackToTop from './components/common/BackToTop'
import Particles from './components/common/Particles'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-out-cubic',
    })

    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
    }
  }, [])

  useEffect(() => {
    // Apply theme to body and document
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <Helmet>
        <title>Pratham M | Software Engineer Portfolio</title>
        <meta name="description" content="Pratham M - Associate Software Engineer at Trivium eSolution. Full-Stack Developer specializing in React, Spring Boot, DevOps, and AI/ML. Building the Future, One Commit at a Time." />
      </Helmet>

      <div className={`${darkMode ? 'dark' : ''} custom-cursor`}>
        <CustomCursor />
        <Particles />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#161B22',
              color: '#fff',
              border: '1px solid #00D9FF',
            },
          }}
        />
        
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        
        <main className="overflow-hidden">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <GitHub />
          <Education />
          <Contact />
        </main>
        
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}

export default App
