import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import VimeoPlayer from './components/VimeoPlayer'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">Gustavo Reinehr</h1>
      <p className="text-xl md:text-2xl text-center mb-8">Film & content editor.</p>
      <Link href="/portfolio" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center">
        Explorar Portfólio
        <ArrowRight className="ml-2" />
        
      </Link>
    </div>
  )
}

