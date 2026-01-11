import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-heading">About Me</span>
        </motion.h2>

        <motion.div
          className="glass-strong rounded-2xl p-8 sm:p-12 relative overflow-hidden group"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500 rounded-2xl" />
          <div className="relative z-10">
            <motion.p 
              className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I'm a pre-final year Computer Science student at <span className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">KIT Coimbatore</span> with a CGPA of <span className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">8.6</span>.
            </motion.p>
            <motion.p 
              className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I specialize in <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">Full-Stack Web Development</span>, <span className="text-pink-400 font-semibold hover:text-pink-300 transition-colors">AI & Deep Learning</span>, and <span className="text-green-400 font-semibold hover:text-green-300 transition-colors">Competitive Programming</span>.
            </motion.p>
            <motion.p 
              className="text-lg sm:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              I love building real-world applications using modern technologies and solving complex algorithmic problems.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
