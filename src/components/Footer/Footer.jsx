import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { personalInfo, socialLinks } from '../../data/portfolioData'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const iconMap = {
    github: FaGithub,
    linkedin: FaLinkedin,
    mail: FaEnvelope,
  }

  return (
    <footer className="relative bg-card-dark border-t border-cyber-blue/20">
      {/* Animated Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-deep-space"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Column */}
          <div>
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold gradient-text mb-4"
              >
                {"<PM />"}
              </motion.h3>
            </Link>
            <p className="text-gray-400 mb-4">
              {personalInfo.bio}
            </p>
            <p className="text-gray-500 text-sm">
              {personalInfo.location}
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  <motion.div
                    whileHover={{ x: 5, color: '#00D9FF' }}
                    className="text-gray-400 hover:text-cyber-blue transition-all duration-300"
                  >
                    {item}
                  </motion.div>
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              {socialLinks.slice(0, 3).map((social, index) => {
                const Icon = iconMap[social.icon] || FaGithub
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-cyber-blue/20 transition-all duration-300"
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                )
              })}
            </div>
            <p className="text-gray-400 text-sm">
              Let's build something amazing together!
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="text-gray-400 text-sm text-center md:text-left"
          >
            © {currentYear} {personalInfo.name}. All rights reserved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="text-gray-400 text-sm flex items-center gap-2"
          >
            Made with <FaHeart className="text-neon-pink animate-pulse" /> using React + Vite
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="text-gray-500 text-xs"
          >
            Designed & Built by {personalInfo.name}
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
