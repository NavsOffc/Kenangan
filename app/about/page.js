'use client'
import { motion } from 'framer-motion'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ScrollToTop from '../../components/ScrollToTop'

export default function About() {
  return (
    <div className="min-h-screen bg-pastel-purple">
      <Header />
      <ScrollToTop />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Tentang Kenangan Kita
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
            >
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl md:text-2xl text-center italic text-pastel-purple-600 mb-8 leading-relaxed">
                  "Dibuat untuk mengenang setiap momen yang tidak akan terulang."
                </p>
                
                <div className="space-y-6 text-left">
                  <p>
                    Website Kenangan Kita hadir sebagai wadah digital untuk menyimpan setiap momen berharga 
                    dalam hidup. Di sini, kami percaya bahwa setiap kenangan, baik besar maupun kecil, 
                    layak untuk diabadikan dan dikenang.
                  </p>
                  
                  <p>
                    Dengan desain yang minimalis dan penuh makna, kami ingin menciptakan ruang yang nyaman 
                    untuk bernostalgia dan merayakan setiap cerita yang telah tertulis. Setiap foto, video, 
                    dan tulisan di sini adalah bagian dari perjalanan yang membuat kita menjadi seperti sekarang.
                  </p>
                  
                  <p>
                    Karena pada akhirnya, yang tersisa dari waktu yang berlalu adalah kenangan. 
                    Dan kenangan terindah adalah yang kita buat bersama orang-orang terkasih.
                  </p>
                </div>
                
                <div className="mt-8 p-6 bg-pastel-blue/30 rounded-xl">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Filosofi Kami
                  </h3>
                  <p className="text-gray-600">
                    Setiap momen adalah hadiah. Kami hadir untuk membantu Anda menyimpan, 
                    merawat, dan merayakan setiap hadiah waktu yang telah diberikan.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
