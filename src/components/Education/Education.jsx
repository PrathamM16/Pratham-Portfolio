import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import { education, certifications } from '../../data/portfolioData'

const Education = () => {
  return (
    <section id="education" className="section-container bg-card-dark/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Education & Certifications"
          subtitle="My academic journey and achievements"
        />

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold gradient-text mb-8 text-center">🎓 Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-effect p-6 rounded-xl hover:border-cyber-blue/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-electric-purple text-lg">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.location}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="text-cyber-blue font-mono">{edu.period}</p>
                    <p className="text-neon-pink font-bold text-xl">{edu.grade}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{edu.description}</p>

                {edu.subjects && (
                  <p className="text-sm text-gray-400 mb-4">
                    <span className="text-cyber-blue">Subjects:</span> {edu.subjects}
                  </p>
                )}

                {edu.achievements && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <p className="text-sm text-neon-pink font-semibold mb-2">🏆 Achievements:</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>• {achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold gradient-text mb-8 text-center">📜 Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
                className="glass-effect p-6 rounded-xl hover:border-electric-purple/50 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce">🏅</div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-electric-purple transition-colors">
                  {cert.title}
                </h4>
                <p className="text-cyber-blue text-sm mb-2">{cert.issuer}</p>
                <p className="text-gray-400 text-xs mb-4">{cert.date}</p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-neon-pink/20 text-neon-pink rounded border border-neon-pink/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
