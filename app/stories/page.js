'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ScrollToTop from '../../components/ScrollToTop'
import { stories } from '../../data/memories'

function FadeInSection({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}

export default function Stories() {
  return (
    <div className="min-h-screen bg-pastel-blue">
      <Header />
      <ScrollToTop />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4"
          >
            Cerita Kita
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-600 mb-12"
          >
            Setiap kata menceritakan bagian dari perjalanan kita yang indah
          </motion.p>

          <div className="space-y-12">
            {stories.map((story, index) => (
              <FadeInSection key={story.id}>
                <article className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                      {story.title}
                    </h2>
                    <time className="text-pastel-purple-600 font-medium">
                      {story.date}
                    </time>
                  </div>
                  
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    {story.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
