import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import SectionTitle from '../common/SectionTitle'
import { personalInfo } from '../../data/portfolioData'

const About = () => {
  const codeString = `const pratham = {
  name: "${personalInfo.name}",
  role: "${personalInfo.title}",
  company: "${personalInfo.company}",
  location: "${personalInfo.location}",
  passion: "Building Amazing Things",
  currentlyLearning: ["AI/ML", "Cloud Native"],
  funFact: "${personalInfo.tagline}"
};`

  return (
    <section id="about" className="section-container bg-deep-space">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me better"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {personalInfo.aboutMe}
            </p>

            {/* Fun Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {personalInfo.funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect p-4 rounded-lg hover:border-cyber-blue/50 transition-all duration-300"
                >
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{fact}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8">
              {Object.entries(personalInfo.stats).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center p-3 sm:p-4 glass-effect rounded-lg"
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">{value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Profile Image & Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.05}
                transitionSpeed={2000}
              >
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden glass-effect p-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 via-electric-purple/20 to-neon-pink/20 animate-pulse" />
                  <img 
                    src="/pratham-profile.jpg" 
                    alt="Pratham M - Software Engineer"
                    className="relative w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
              </Tilt>
            </motion.div>

            {/* Code Block */}
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#00D9FF"
              glarePosition="all"
              scale={1.02}
            >
              <div className="glass-effect p-6 rounded-xl border-2 border-cyber-blue/30 hover:border-cyber-blue/60 transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-auto text-sm text-gray-400 font-mono">About.js</span>
                </div>
                <pre className="text-sm md:text-base font-mono text-green-400 overflow-x-auto">
                  <code>{codeString}</code>
                </pre>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
