'use client'
import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        animate={{
          background: [
            'linear-gradient(45deg, #E6F2FF, #FFF9F0, #F5F0FF)',
            'linear-gradient(135deg, #F5F0FF, #E6F2FF, #FFF9F0)',
            'linear-gradient(225deg, #FFF9F0, #F5F0FF, #E6F2FF)',
            'linear-gradient(315deg, #E6F2FF, #FFF9F0, #F5F0FF)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 opacity-30"
      />
      
      {/* Floating shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-8 h-8 bg-pastel-purple-400 rounded-full opacity-20"
      />
      
      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-3/4 right-1/3 w-6 h-6 bg-pastel-blue-400 rounded-full opacity-20"
      />
      
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-pastel-pink-400 rounded-full opacity-15"
      />
    </div>
  )
}
