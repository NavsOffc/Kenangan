import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-pastel-purple-400 mb-2">
              Kenangan Kita
            </h3>
            <p className="text-gray-400">
              Tempat semua cerita tetap hidup
            </p>
          </div>
          
          <div className="flex space-x-6">
            {[
              { href: '/', label: 'Beranda' },
              { href: '/gallery', label: 'Galeri' },
              { href: '/stories', label: 'Cerita' },
              { href: '/about', label: 'Tentang' }
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Kenangan Kita. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
