import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import { skills } from '../../data/portfolioData'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'language', name: 'Languages' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Databases' },
    { id: 'devops', name: 'DevOps' },
    { id: 'aiml', name: 'AI/ML' },
    { id: 'tool', name: 'Tools' },
  ]

  const allSkills = [
    ...skills.languages,
    ...skills.frontend,
    ...skills.backend,
    ...skills.databases,
    ...skills.devops,
    ...skills.aiml,
    ...skills.tools,
  ]

  const filteredSkills = activeCategory === 'all'
    ? allSkills
    : allSkills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="section-container bg-card-dark/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Skills & Tech Arsenal"
          subtitle="Technologies I work with"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyber-blue to-electric-purple text-white shadow-lg'
                  : 'glass-effect text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 sm:gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="glass-effect p-4 sm:p-6 rounded-xl text-center group hover:border-cyber-blue/50 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:animate-bounce">{skill.icon}</div>
              <h3 className="text-gray-900 dark:text-white font-semibold mb-2 text-sm sm:text-base">{skill.name}</h3>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: false }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-cyber-blue to-electric-purple rounded-full"
                />
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400 mt-1">{skill.level}%</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
