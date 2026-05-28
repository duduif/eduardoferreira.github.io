import Layout from '../components/layout'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Layout>
      <motion.div
        key="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-4"
      >
        <div className="mb-6 text-center text-gray-800 dark:text-white">
          Hi, I'm Eduardo! I'm a Network Operations enthusiast focused on infrastructure, wireless
          networks, and network automation. As a Huawei ICT Competition National & LATAM Vice-Champion in the Network Track, 
          I enjoy building reliable, scalable, and intelligent network solutions for real-world environments.
        </div>
        <div className="text-center text-gray-800 dark:text-white">
          When I'm not building network labs or studying infrastructure, I'm probably at the gym, playing games, drinking coffee, 
          or exploring new networking technologies.
        </div>
      </motion.div>
    </Layout>
  )
}
