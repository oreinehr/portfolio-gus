"use client";

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <div className="relative mb-16 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
      <Image
        src="/placeholder.svg?height=600&width=1200"
        alt="Profile Image"
        width={1200}
        height={600}
        className="w-full h-[400px] object-cover"
        priority
      />
      <motion.div 
        className="absolute bottom-0 left-0 right-0 z-20 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Diretor Criativo & Editor
        </h1>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="secondary">Direção</Badge>
          <Badge variant="secondary">Edição</Badge>
          <Badge variant="secondary">Motion Graphics</Badge>
          <Badge variant="secondary">Pós-produção</Badge>
        </div>
      </motion.div>
    </div>
  );
}

