import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4 px-4"
        whileHover={{ scale: 1.05 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100px' }}
        viewport={{ once: false }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="h-1 bg-gradient-to-r from-cyber-blue via-electric-purple to-neon-pink mx-auto mt-4 rounded-full"
      />
    </motion.div>
  )
}

export default SectionTitle
