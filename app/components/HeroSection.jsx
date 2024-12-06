"use client";

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <div className="relative mb-16 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
      <Image
        src="/images/image2.png"
        alt="Profile Image"
        width={1200}
        height={600}
        className="w-full h-[400px] object-cover"
        priority
      />
      <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Diretor Criativo & Editor
        </h1>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="secondary">Direção</Badge>
          <Badge variant="secondary">Edição</Badge>
          <Badge variant="secondary">Motion Graphics</Badge>
          <Badge variant="secondary">Pós-produção</Badge>
        </div>
      </div>
    </div>
  );
}