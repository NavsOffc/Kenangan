'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ScrollToTop from '../../components/ScrollToTop'
import MemoryModal from '../../components/MemoryModal'
import { memories } from '../../data/memories'

export default function Gallery() {
  const [selectedMemory, setSelectedMemory] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (memory) => {
    setSelectedMemory(memory)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedMemory(null)
  }

  return (
    <div className="min-h-screen bg-pastel-cream">
      <Header />
      <ScrollToTop />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4"
          >
            Galeri Kenangan
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Setiap foto dan video menyimpan cerita yang tak terlupakan. Klik untuk melihat detailnya.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memories.map((memory, index) => (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
                onClick={() => openModal(memory)}
              >
                <div className="relative overflow-hidden">
                  {memory.type === 'image' ? (
                    <img
                      src={memory.url}
                      alt={memory.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <video
                      src={memory.url}
                      className="w-full h-64 object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Lihat Detail
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {memory.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {memory.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <MemoryModal 
        memory={selectedMemory}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <Footer />
    </div>
  )
}
