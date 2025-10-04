'use client'
import { motion, AnimatePresence } from 'framer-motion'

export default function MemoryModal({ memory, isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {memory.type === 'image' ? (
            <img
              src={memory.url}
              alt={memory.title}
              className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
            />
          ) : (
            <video
              src={memory.url}
              controls
              className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
            />
          )}
          
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {memory.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              {memory.description}
            </p>
            <div className="text-sm text-gray-500">
              {memory.date}
            </div>
            
            <button
              onClick={onClose}
              className="mt-6 bg-pastel-purple-600 text-white px-6 py-2 rounded-lg hover:bg-pastel-purple-700 transition-colors duration-300"
            >
              Tutup
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
