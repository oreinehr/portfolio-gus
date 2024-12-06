'use client'

import React from 'react';
import { motion } from 'framer-motion';
import VimeoPlayer from './VimeoPlayer';

const Portfolio = () => {
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
    <motion.div 
      className="container margin px-4 py-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="text-5xl font-bold mb-12 text-center text-gray-800"
        variants={itemVariants}
      >
        Meu Portfólio
      </motion.h1>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
        <motion.div 
          className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl"
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
        >
          <VimeoPlayer videoId="1031178345" />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">RR COMPONENTES</h2>
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
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Projeto Labirinto</h2>
            <p className="text-gray-600 mb-3">Uma jornada visual através do desconhecido</p>
            <p className="text-sm text-gray-500">2024</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;

  