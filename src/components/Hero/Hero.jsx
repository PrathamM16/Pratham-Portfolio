import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaChevronDown } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { personalInfo, socialLinks } from '../../data/portfolioData'

const Hero = () => {
  const iconMap = {
    github: FaGithub,
    linkedin: FaLinkedin,
    mail: FaEnvelope,
    phone: FaPhone,
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-card-dark to-deep-space">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue rounded-full mix-blend-multiply filter blur-3xl animate-float" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-electric-purple rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-neon-pink rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-4000" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Profile Image/Avatar */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-r from-cyber-blue via-electric-purple to-neon-pink p-1 animate-glow">
            <div className="w-full h-full rounded-full bg-deep-space overflow-hidden">
              <img 
                src={`${import.meta.env.BASE_URL}pratham-profile.jpg`}
                alt="Pratham M - Software Engineer" 
                className="w-full h-full object-cover rounded-full"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="text-cyber-blue text-lg md:text-xl font-mono">
            👋 Hello, I'm
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mt-4 mb-6"
        >
          <span className="gradient-text neon-glow">{personalInfo.name}</span>
        </motion.h1>

        {/* Animated Titles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-300 mb-4 h-20 flex items-center justify-center"
        >
          <TypeAnimation
            sequence={personalInfo.roles.flatMap(role => [role, 2000])}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="gradient-text"
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-gray-900 dark:text-gray-400 max-w-3xl mx-auto mb-4 italic px-4 font-semibold"
        >
          "{personalInfo.bio}"
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-500 max-w-2xl mx-auto mb-8 px-4 font-medium"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Location & Company */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-12 px-4"
        >
          <span className="flex items-center gap-2">
            <span className="text-cyber-blue">📍</span>
            {personalInfo.location}
          </span>
          <span className="hidden md:block text-cyber-blue">•</span>
          <span className="flex items-center gap-2">
            <span className="text-electric-purple">💼</span>
            {personalInfo.company}
          </span>
          <span className="hidden md:block text-cyber-blue">•</span>
          <span className="flex items-center gap-2">
            <span className="text-neon-pink">🎓</span>
            {personalInfo.education}
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link to="contact" smooth={true} duration={500}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-4 text-lg"
            >
              Get In Touch
            </motion.button>
          </Link>

          <Link to="projects" smooth={true} duration={500}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary px-8 py-4 text-lg"
            >
              View My Work
            </motion.button>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8 }}
          className="flex items-center justify-center gap-6"
        >
          {socialLinks.map((social, index) => {
            const Icon = iconMap[social.icon]
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-cyber-blue/20 transition-all duration-300 group"
                style={{ borderColor: social.color }}
              >
                <Icon className="text-xl group-hover:text-cyber-blue transition-colors" />
              </motion.a>
            )
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link to="about" smooth={true} duration={500}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="cursor-pointer text-cyber-blue"
          >
            <FaChevronDown className="text-3xl animate-bounce" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero
