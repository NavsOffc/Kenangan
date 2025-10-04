import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kenangan Kita - Tempat Semua Cerita Tetap Hidup',
  description: 'Website untuk menyimpan kenangan berharga dalam bentuk foto, video, dan cerita.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
