'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-pastel-purple-600"
          >
            Kenangan Kita
          </motion.div>
          
          <div className="flex space-x-8">
            {[
              { href: '/', label: 'Beranda' },
              { href: '/gallery', label: 'Galeri' },
              { href: '/stories', label: 'Cerita' },
              { href: '/about', label: 'Tentang' }
            ].map((item) => (
              <motion.div key={item.href} whileHover={{ scale: 1.1 }}>
                <Link 
                  href={item.href}
                  className="text-gray-700 hover:text-pastel-purple-600 transition-colors duration-300 font-medium"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
