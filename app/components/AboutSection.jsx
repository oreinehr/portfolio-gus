"use client";

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <Card className="p-6 md:p-8 bg-card/50 backdrop-blur">
      <h2 className="text-2xl font-semibold mb-4">Sobre Mim</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        Sou um diretor de vídeo e editor criativo com mais de 10 anos de experiência 
        na indústria audiovisual. Minha paixão é contar histórias visualmente 
        impactantes que emocionam e inspiram o público.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Ao longo da minha carreira, tive o privilégio de trabalhar em diversos 
        projetos, desde comerciais de TV até documentários premiados.
      </p>
    </Card>
  );
}