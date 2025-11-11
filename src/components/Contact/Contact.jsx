import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa'
import { toast } from 'react-hot-toast'
import confetti from 'canvas-confetti'
import SectionTitle from '../common/SectionTitle'
import { personalInfo, socialLinks } from '../../data/portfolioData'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Using Web3Forms - Simple and Free (No registration needed for testing)
      // Get your FREE access key from: https://web3forms.com
      // Just enter your email (pratham.m1605@gmail.com) and get instant access key
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '4067d9cc-95ac-4b18-9f60-8595d14744fb', // Get from https://web3forms.com
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
          to: 'pratham.m1605@gmail.com', // Your email
        })
      })

      const result = await response.json()

      if (result.success) {
        setLoading(false)
        toast.success('Message sent successfully! 🎉')
        
        // Trigger confetti
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        })

        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setLoading(false)
      console.error('Form Error:', error)
      toast.error('Failed to send message. Please email directly at pratham.m1605@gmail.com')
    }
  }

  const iconMap = {
    github: FaGithub,
    linkedin: FaLinkedin,
    mail: FaEnvelope,
    phone: FaPhone,
  }

  return (
    <section id="contact" className="section-container bg-deep-space">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's create something amazing together"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold gradient-text mb-4">Let's Talk</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Feel free to reach out through the form or connect with me on social media!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <motion.a
                href={`mailto:${personalInfo.contact.email}`}
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 glass-effect p-4 rounded-lg hover:border-cyber-blue/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyber-blue to-electric-purple flex items-center justify-center">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-semibold">{personalInfo.contact.email}</p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${personalInfo.contact.phone}`}
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 glass-effect p-4 rounded-lg hover:border-electric-purple/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-electric-purple to-neon-pink flex items-center justify-center">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white font-semibold">+91 9964837818</p>
                </div>
              </motion.a>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = iconMap[social.icon]
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: index * 0.1, type: 'spring' }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 rounded-full glass-effect flex items-center justify-center hover:bg-cyber-blue/20 transition-all duration-300"
                    >
                      <Icon className="text-2xl" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect p-6 rounded-xl border-2 border-green-500/30"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-500 font-semibold">Available for Opportunities</span>
              </div>
              <p className="text-gray-400 text-sm">
                Currently open to new projects and collaborations. Expected response time: 24-48 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card-dark border border-gray-700 rounded-lg focus:border-cyber-blue focus:ring-2 focus:ring-cyber-blue/20 outline-none transition-all duration-300 text-white"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card-dark border border-gray-700 rounded-lg focus:border-cyber-blue focus:ring-2 focus:ring-cyber-blue/20 outline-none transition-all duration-300 text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card-dark border border-gray-700 rounded-lg focus:border-cyber-blue focus:ring-2 focus:ring-cyber-blue/20 outline-none transition-all duration-300 text-white"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-card-dark border border-gray-700 rounded-lg focus:border-cyber-blue focus:ring-2 focus:ring-cyber-blue/20 outline-none transition-all duration-300 text-white resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                🔒 Your information is secure and will only be used to contact you.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
