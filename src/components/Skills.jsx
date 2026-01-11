import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNode,
  FaDatabase,
  FaGitAlt,
  FaLinux,
  FaBrain,
} from 'react-icons/fa'
import { SiC, SiMongodb, SiMysql, SiPostgresql, SiExpress, SiFastapi, SiTailwindcss, SiVite, SiTensorflow } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Languages',
      icon: <VscCode className="text-cyan-400" size={24} />,
      skills: [
        { name: 'Python', icon: <FaPython className="text-yellow-400" size={24} /> },
        { name: 'C', icon: <SiC className="text-blue-400" size={24} /> },
        { name: 'Java', icon: <FaJava className="text-orange-400" size={24} /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-300" size={24} /> },
        { name: 'HTML', icon: <FaHtml5 className="text-orange-500" size={24} /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" size={24} /> },
      ],
    },
    {
      title: 'Frontend',
      icon: <FaReact className="text-cyan-400" size={24} />,
      skills: [
        { name: 'React.js', icon: <FaReact className="text-cyan-400" size={24} /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-300" size={24} /> },
        { name: 'Vite', icon: <SiVite className="text-purple-400" size={24} /> },
      ],
    },
    {
      title: 'Backend',
      icon: <FaNode className="text-green-400" size={24} />,
      skills: [
        { name: 'Node.js', icon: <FaNode className="text-green-400" size={24} /> },
        { name: 'Express', icon: <SiExpress className="text-gray-300" size={24} /> },
        { name: 'FastAPI', icon: <SiFastapi className="text-teal-400" size={24} /> },
      ],
    },
    {
      title: 'Databases',
      icon: <FaDatabase className="text-blue-400" size={24} />,
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" size={24} /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-500" size={24} /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" size={24} /> },
        { name: 'SQL', icon: <FaDatabase className="text-cyan-400" size={24} /> },
      ],
    },
    {
      title: 'Tools',
      icon: <FaGitAlt className="text-orange-400" size={24} />,
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-400" size={24} /> },
        { name: 'GitHub', icon: <FaGitAlt className="text-gray-300" size={24} /> },
        { name: 'Linux', icon: <FaLinux className="text-yellow-400" size={24} /> },
        { name: 'VS Code', icon: <VscCode className="text-blue-400" size={24} /> },
      ],
    },
    {
      title: 'AI / ML',
      icon: <FaBrain className="text-pink-400" size={24} />,
      skills: [
        { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-500" size={24} /> },
        { name: 'Deep Neural Networks', icon: <FaBrain className="text-purple-400" size={24} /> },
        { name: 'Computer Vision', icon: <FaBrain className="text-cyan-400" size={24} /> },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-heading">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300 rounded-xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-200">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors cursor-default"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill.icon}
                      <span className="text-sm text-gray-300">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
