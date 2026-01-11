import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCode, FaTrophy, FaChartLine } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { socialLinks } from '../config/links'

const CompetitiveProgramming = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const platforms = [
    {
      name: 'LeetCode',
      icon: <FaCode className="text-orange-400" size={32} />,
      stats: [
        { label: 'Rating', value: '1439' },
        { label: 'Solved', value: '140+' },
        { label: 'Top', value: '60%' },
        { label: 'Highest Rank', value: '8458' },
      ],
      color: 'from-orange-500 to-red-500',
      link: socialLinks.leetcode,
    },
    {
      name: 'CodeChef',
      icon: <FaTrophy className="text-yellow-400" size={32} />,
      stats: [
        { label: 'Rating', value: '1447' },
        { label: 'Stars', value: '2 Star' },
        { label: 'Solved', value: '714' },
        { label: 'Contests', value: '77' },
      ],
      color: 'from-yellow-500 to-orange-500',
      link: socialLinks.codechef,
    },
    {
      name: 'Codeforces',
      icon: <FaChartLine className="text-blue-400" size={32} />,
      stats: [
        { label: 'Username', value: 'Divyasrim19' },
        { label: 'Status', value: 'Active' },
      ],
      color: 'from-blue-500 to-cyan-500',
      link: socialLinks.codeforces,
    },
  ]

  return (
    <section id="competitive-programming" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-heading">Competitive Programming</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              className="glass-strong rounded-2xl p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <motion.div 
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${platform.color} opacity-20 rounded-full blur-3xl`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center justify-between mb-6"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {platform.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                      {platform.name}
                    </h3>
                  </div>
                </motion.div>

                <div className="space-y-3 mb-6">
                  {platform.stats.map((stat, statIndex) => (
                    <motion.div
                      key={stat.label}
                      className="flex justify-between items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + statIndex * 0.1 }}
                    >
                      <span className="text-gray-400">{stat.label}:</span>
                      <span className="text-gray-200 font-semibold">{stat.value}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${platform.color} text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 btn-glow relative overflow-hidden group/btn`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View {platform.name}
                    <HiOutlineExternalLink className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompetitiveProgramming
