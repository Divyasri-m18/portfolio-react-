import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { socialLinks } from '../config/links'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 relative"
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 relative z-10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="hero-name">
              Divyasri M
            </span>
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
            Full Stack Developer • AI Engineer • Competitive Programmer
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            B.E Computer Science Engineering | CGPA: 8.6 | Coimbatore, India
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <motion.a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 btn-glow relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <HiOutlineExternalLink className="group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            />
          </motion.a>

          <motion.a
            href={socialLinks.resume}
            download
            className="px-6 py-3 glass text-gray-200 rounded-lg font-semibold flex items-center gap-2 hover:border-cyan-400/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload />
            Download Resume
          </motion.a>

          <motion.a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 glass text-gray-200 rounded-lg font-semibold flex items-center gap-2 hover:border-cyan-400/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
            GitHub
          </motion.a>

          <motion.a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 glass text-gray-200 rounded-lg font-semibold flex items-center gap-2 hover:border-cyan-400/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin />
            LinkedIn
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <a
              href="#about"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
