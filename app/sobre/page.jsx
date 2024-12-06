import Image from 'next/image'
import { Download } from 'lucide-react'
import image2 from '../public/images/image2.png'


export default function About() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 flex justify-center ">
        
        <Image src={image2} alt="Imagem exemplo" width={500} height={500} />
            
          
         
        </div>
        <h1 className="text-4xl font-bold mb-6 text-center">Sobre Mim</h1>
        <p className="text-lg mb-6">
          Sou um diretor de vídeo e editor criativo com mais de 10 anos de experiência na indústria audiovisual. Minha paixão é contar histórias visualmente impactantes que emocionam e inspiram o público. Ao longo da minha carreira, tive o privilégio de trabalhar em diversos projetos, desde comerciais de TV até documentários premiados.
        </p>
        <p className="text-lg mb-6">
          Minhas habilidades incluem direção, edição, pós-produção e motion graphics. Estou sempre em busca de novos desafios e oportunidades para expandir minha criatividade e técnica.
        </p>
        
        
      </div>
    </div>
  )
}

