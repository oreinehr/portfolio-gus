import Image from 'next/image'
import { Download } from 'lucide-react'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 flex justify-center">
          <Image
            src="/placeholder.svg"
            alt="Gustavo Reinehr"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-center">Sobre Mim</h1>
        <p className="text-lg mb-6">
          Sou um diretor de vídeo e editor criativo com mais de 10 anos de experiência na indústria audiovisual. Minha paixão é contar histórias visualmente impactantes que emocionam e inspiram o público. Ao longo da minha carreira, tive o privilégio de trabalhar em diversos projetos, desde comerciais de TV até documentários premiados.
        </p>
        <p className="text-lg mb-6">
          Minhas habilidades incluem direção, edição, pós-produção e motion graphics. Estou sempre em busca de novos desafios e oportunidades para expandir minha criatividade e técnica.
        </p>
        <div className="flex justify-center">
          <a
            href="/cv-Gustavo Reinehr.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
          >
            <Download className="mr-2" />
            Baixar Currículo
          </a>
        </div>
      </div>
    </div>
  )
}

