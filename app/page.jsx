'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import VimeoPlayer from './components/VimeoPlayer'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
   
      {/* Hero Section with Logo */}
   
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-4"> <h1 className="text 4xl md:text-6xl font-bold text-center mb-4" style={{ fontFamily: 'tan-pearl, sans-serif' }}>Gustavo Reinehr</h1> <p className="text-xl md:text-2xl text-center mb-8">Film & content editor.</p>
          <Link 
            href="/sobre" 
            className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2"
          >
           Sobre Mim
            <ArrowRight />
          </Link>
        </div>
   
      {/* Portfolio Section */}
      <section id="portfolio" className="bg-gray-50 py-24">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center text-gray-800"
            variants={itemVariants}
            style={{ fontFamily: 'tan-pearl, sans-serif' }}
          >
            Meu Portfólio
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <VimeoPlayer videoId="1031178345" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">RR COMPONENTES</h3>
                <p className="text-gray-600 mb-3">Produção: Bolha Conteúdo Criativo<br/>Edição: Gustavo Reinehr</p>
                <p className="text-sm text-gray-500">2024</p>
              </div>
            </motion.div>
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <VimeoPlayer videoId="1033533951" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">Projeto Labirinto</h3>
                <p className="text-gray-600 mb-3">Uma jornada visual através do desconhecido</p>
                <p className="text-sm text-gray-500">2024</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

