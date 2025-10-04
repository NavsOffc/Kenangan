'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ScrollToTop />
      
      {/* Hero Section dengan Parallax */}
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden parallax"
        style={{
          backgroundImage: 'url("/images/hero-bg.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white z-10 px-6"
        >
          <motion.h1 
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Kenangan Kita
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Tempat semua cerita tetap hidup.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link 
              href="/gallery"
              className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 inline-block"
            >
              Lihat Kenangan
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
