'use client'
import { motion } from 'framer-motion'

const FloatingElement = ({ delay, position, size, color }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.1, 0.3, 0.1],
      scale: [1, 1.2, 1],
      y: [0, -30, 0],
      x: [0, 15, 0],
    }}
    transition={{
      duration: 4 + Math.random() * 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
    className={`absolute ${position} ${size} ${color} rounded-full opacity-20`}
  />
)

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      <FloatingElement 
        delay={0} 
        position="top-1/4 left-10" 
        size="w-6 h-6" 
        color="bg-pastel-purple-400" 
      />
      <FloatingElement 
        delay={1} 
        position="top-1/2 right-20" 
        size="w-8 h-8" 
        color="bg-pastel-blue-400" 
      />
      <FloatingElement 
        delay={2} 
        position="bottom-1/3 left-1/4" 
        size="w-4 h-4" 
        color="bg-pastel-pink-400" 
      />
      <FloatingElement 
        delay={0.5} 
        position="top-3/4 right-1/4" 
        size="w-10 h-10" 
        color="bg-pastel-purple-300" 
      />
      <FloatingElement 
        delay={1.5} 
        position="bottom-1/4 right-1/2" 
        size="w-12 h-12" 
        color="bg-pastel-blue-300" 
      />
    </div>
  )
}
