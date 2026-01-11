import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa'

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const achievements = [
    {
      icon: <FaTrophy className="text-yellow-400" size={32} />,
      title: 'Winner – KIT Innovation Challenge 2025',
      description: '₹10,000 cash prize',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <FaMedal className="text-purple-400" size={32} />,
      title: 'Finalist – 36-hour Hack Smart Hackathon',
      description: 'Competed in intensive hackathon',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FaAward className="text-cyan-400" size={32} />,
      title: 'CodeChef Gold Badges',
      description: '77 contests, 714 problems solved',
      gradient: 'from-cyan-500 to-blue-500',
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-heading">Achievements</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="glass rounded-2xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.gradient} opacity-20 rounded-full blur-3xl`}></div>
              
              <div className="relative z-10 text-center">
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-200 mb-2">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
