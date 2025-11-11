import { motion } from 'framer-motion'
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa'
import SectionTitle from '../common/SectionTitle'

const GitHub = () => {
  // Real GitHub stats from PRATHAM M's profile
  const stats = {
    totalContributions: '351',
    totalStars: '5',
    totalCommits: '239',
    totalPRs: '0',
    totalIssues: '0',
    contributedRepos: '0',
    currentStreak: '2',
    longestStreak: '7',
  }

  const mainStats = [
    { label: 'Total Contributions', value: stats.totalContributions, icon: '📊', color: 'from-cyan-400 to-blue-500' },
    { label: 'Total Stars Earned', value: stats.totalStars, icon: '⭐', color: 'from-yellow-400 to-orange-500' },
    { label: 'Total Commits', value: stats.totalCommits, icon: '💻', color: 'from-green-400 to-emerald-500' },
    { label: 'Contributed Repos', value: stats.contributedRepos, icon: '📁', color: 'from-purple-400 to-pink-500' },
  ]

  const streakStats = [
    { label: 'Current Streak', value: stats.currentStreak, subtext: 'Nov 9 - Nov 10', icon: '🔥' },
    { label: 'Longest Streak', value: stats.longestStreak, subtext: 'Jun 20, 2024 - Jun 26, 2024', icon: '🏆' },
  ]

  return (
    <section id="github" className="section-container bg-deep-space">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="GitHub Analytics"
          subtitle="My open source contributions"
        />

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {mainStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect p-6 rounded-xl text-center group hover:border-cyber-blue/50 transition-all duration-300"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Streak Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {streakStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-8 rounded-2xl text-center hover:border-neon-pink/50 transition-all duration-300"
            >
              <div className="text-5xl mb-4 animate-pulse">{stat.icon}</div>
              <div className="text-5xl font-bold gradient-text mb-3">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.subtext}</div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="glass-effect p-6 rounded-xl mb-12"
        >
          <h3 className="text-2xl font-bold gradient-text mb-6 text-center">Contribution Overview</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">{stats.totalPRs}</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Pull Requests</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">{stats.totalIssues}</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Issues</div>
            </div>
            <div className="text-center col-span-2 sm:col-span-1">
              <div className="text-3xl font-bold text-green-400 mb-1">Jan 4, 2023</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Contributing Since</div>
            </div>
          </div>
        </motion.div>

        <div className="text-center">
          <motion.a
            href="https://github.com/PrathamM16"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 btn-primary px-8 py-4 text-lg"
          >
            <FaGithub size={24} />
            <span>Visit My GitHub</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default GitHub
