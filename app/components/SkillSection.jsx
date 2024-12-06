"use client";

import { Film, Camera, Award } from 'lucide-react';
import { SkillCard } from './SkillCard';

export function SkillsSection() {
  const skills = [
    {
      icon: Film,
      title: "Direção",
      description: "Especializado em direção criativa para diversos formatos audiovisuais"
    },
    {
      icon: Camera,
      title: "Edição",
      description: "Domínio completo das principais ferramentas de edição profissional"
    },
    {
      icon: Award,
      title: "Motion Graphics",
      description: "Criação de animações e efeitos visuais de alto impacto"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
  );
}