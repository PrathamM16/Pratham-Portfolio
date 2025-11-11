import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaMedium } from 'react-icons/fa'
import SectionTitle from '../common/SectionTitle'
import { projects } from '../../data/portfolioData'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = ['all', ...new Set(projects.map(p => p.category))]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="section-container bg-card-dark/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Featured Projects"
          subtitle="Things I've built"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full font-semibold transition-all duration-300 capitalize ${
                filter === category
                  ? 'bg-gradient-to-r from-cyber-blue to-electric-purple text-white'
                  : 'glass-effect text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="glass-effect rounded-xl overflow-hidden cursor-pointer group hover:border-cyber-blue/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-cyber-blue/20 to-electric-purple/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.technologies[0] && project.technologies[0].charAt(0)}
                </div>
                {project.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-neon-pink rounded-full text-xs font-semibold">
                    Featured
                  </span>
                )}
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-cyber-blue/80 rounded-full text-xs font-semibold">
                  {project.status}
                </span>
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyber-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-electric-purple/20 text-electric-purple rounded border border-electric-purple/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <div className="text-sm text-neon-pink font-semibold mb-4">
                  💡 {project.impact}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-cyber-blue transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-electric-purple transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                  {project.medium && (
                    <a
                      href={project.medium}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-neon-pink transition-colors"
                    >
                      <FaMedium size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-effect p-8 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-cyber-blue/50"
              >
                <h2 className="text-3xl font-bold gradient-text mb-4">{selectedProject.title}</h2>
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-cyber-blue mb-3">✨ Features:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="text-gray-400 text-sm">• {feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-electric-purple mb-3">📊 Metrics:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(selectedProject.metrics).map(([key, value]) => (
                      <div key={key} className="glass-effect p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-neon-pink">{value}</div>
                        <div className="text-sm text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-cyber-blue/20 text-cyber-blue rounded-full border border-cyber-blue/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="mt-6 w-full btn-secondary"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
