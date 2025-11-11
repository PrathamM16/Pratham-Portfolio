import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import { experience } from '../../data/portfolioData'

const Experience = () => {
  return (
    <section id="experience" className="section-container bg-deep-space">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Professional Journey"
          subtitle="My career path and experience"
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyber-blue via-electric-purple to-neon-pink" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-cyber-blue to-electric-purple flex items-center justify-center z-10 animate-glow">
                  <span className="text-2xl">{exp.icon}</span>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  <div className="glass-effect p-6 rounded-xl border-2 border-cyber-blue/30 hover:border-cyber-blue/60 transition-all duration-300">
                    <span className="text-sm text-cyber-blue font-mono">{exp.period}</span>
                    <h3 className="text-2xl font-bold text-white mt-2 mb-1">{exp.role}</h3>
                    <h4 className="text-xl text-electric-purple mb-2">{exp.company}</h4>
                    <p className="text-gray-400 text-sm mb-2">{exp.location} • {exp.type}</p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} mb-4`}>
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-cyber-blue/20 text-cyber-blue rounded-full border border-cyber-blue/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Responsibilities */}
                    {exp.responsibilities && (
                      <ul className={`text-sm text-gray-400 space-y-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        {exp.responsibilities.slice(0, 3).map((resp, i) => (
                          <li key={i}>• {resp}</li>
                        ))}
                      </ul>
                    )}

                    {/* Achievements */}
                    {exp.achievements && (
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="text-xs text-neon-pink font-semibold mb-2">🏆 Key Achievements:</p>
                        <ul className="text-sm text-gray-400 space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>✓ {achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
