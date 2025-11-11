import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaMoon, FaSun, FaBars, FaTimes, FaDownload } from 'react-icons/fa'

const Navbar = ({ darkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
  ]

  const handleDownloadResume = () => {
    // Download the resume PDF
    const link = document.createElement('a')
    link.href = `${import.meta.env.BASE_URL}Pratham_Resume.pdf`
    link.download = 'Pratham_Resume.pdf'
    link.click()
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-deep-space/95 backdrop-blur-md shadow-lg shadow-cyber-blue/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <span className="text-2xl md:text-3xl font-bold gradient-text">
                {"<PM />"}
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className="cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, color: '#00D9FF' }}
                  className="text-gray-300 hover:text-cyber-blue transition-colors duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyber-blue to-electric-purple group-hover:w-full transition-all duration-300" />
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-card-dark hover:bg-cyber-blue/20 transition-all duration-300"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400 text-xl" />
              ) : (
                <FaMoon className="text-cyber-blue text-xl" />
              )}
            </motion.button>

            {/* Resume Download */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="btn-primary flex items-center space-x-2"
            >
              <FaDownload />
              <span>Resume</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-card-dark"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-cyber-blue" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-card-dark text-cyber-blue"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card-dark/98 backdrop-blur-lg border-t border-cyber-blue/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  onClick={() => setMobileMenuOpen(false)}
                  className="cursor-pointer"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, color: '#00D9FF' }}
                    className="text-gray-300 hover:text-cyber-blue transition-all duration-300 font-medium py-2 border-b border-gray-800 hover:border-cyber-blue/50"
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownloadResume}
                className="w-full btn-primary flex items-center justify-center space-x-2 mt-4"
              >
                <FaDownload />
                <span>Download Resume</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
