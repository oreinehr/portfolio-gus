'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';
import Ruido from './public/images/close-up-yellow-glitter-textured-background.jpg';
import Logo from './public/images/GustavoReinher_v1.svg';
import Image1 from './public/images/VERSAO 4K_3.jpg';
import Image2 from './public/images/IMG_3010.JPG';
import Image3 from './public/images/imagem4k.jpg';
import Image4 from './public/images/IMG_4025.JPG';
import Image5 from './public/images/IMG_4024.JPG';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

  
const containerClass = "max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8";

export default function Page() {
  const [isMounted, setIsMounted] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false); // Esconde o header
      } else {
        setIsHeaderVisible(true); // Mostra o header
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const carouselImages = [Image1, Image2, Image3, Image4, Image5];

  return (
     <div className={`min-h-screen bg-[#111111] text-white relative ${containerClass}`}>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-transform duration-300 ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className={`relative w-full flex justify-between items-center p-6 ${containerClass}`}>
          <Link href="/" className="text-2xl font-light tracking-wider text-white">
            <Image src={Logo} alt="Logo" width={300} height={300} />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#projects" className="text-gray-200 hover:text-white transition-colors font-cormorant">
              Projetos
            </Link>
            <Link href="#about" className="text-gray-200 hover:text-white transition-colors font-cormorant">
              Sobre
            </Link>
            <Link href="#contact" className="text-gray-200 hover:text-white transition-colors font-cormorant">
              Contato
            </Link>
          </nav>
        </div>
      </header>


      {/* Hero Section with Carousel */}
      <section className="pt-[120px] relative w-full overflow-hidden">
        {isMounted && (
          <Slider {...carouselSettings} className="w-full" style={{ borderRadius: '30px' }}>
            {carouselImages.map((image, index) => (
              <div key={index} className="relative w-full aspect-[24/8]" style={{ borderRadius: '30px' }}>
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="grayscale opacity-70"
                  priority={index === 0}
                  style={{ borderRadius: '30px', border: 'none' }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30" style={{ borderRadius: '30px' }}>
                  <div className={containerClass}>
                    <h1 className="text-2xl md:text-2xl font-thin tracking-widest text-white text-center px-4 font-cormorant">
                      FILM & CONTENT EDITOR
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </section>

  {/* Projects Section */}
  <section className={`py-20 ${containerClass}`}>
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
      <h2 className="text-3xl font-light mb-6 md:mb-0 font-cormorant">Projetos</h2>
      <div className="flex flex-wrap gap-4">
        {['TODOS OS PROJETOS', 'COLOR'].map((filter) => (
          <button
            key={filter}
            className="px-4 py-2 rounded-full border border-gray-800 hover:bg-gray-800 transition-colors"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: 'RRCOMPONENTS', year: '2023', videoId: '1031178345' },
        { title: 'REINEHR - LABIRINTO', year: '2024', videoId: '1033533951' }, // Novo vídeo adicionado
      ].map((project) => (
        <div
          key={project.title}
          className="group relative aspect-video overflow-hidden rounded-lg bg-gray-900"
        >
          {/* Vimeo iframe */}
          <iframe
            src={`https://player.vimeo.com/video/${project.videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            className="absolute inset-0 w-full h-full"
            title={project.title}
          ></iframe>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* About Section */}
      <section id="about" className={`py-20 bg-[#1a1a1a] ${containerClass}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=720&width=720"
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
              <div className="space-y-6">
  <h2 className="text-3xl font-light font-cormorant">Sobre</h2>
  <p className="text-gray-300 leading-relaxed text-justify font-cormorant">
  Me chamo Gustavo Reinehr e tenho 28 anos. Sou editor de vídeos, filmes e conteúdos, com mais de 7 anos de experiência na área. Desde que comecei minha carreira, desenvolvi uma verdadeira paixão pela arte de contar histórias através da edição.
Trabalhei em diversos projetos, desde curtas-metragens e documentários, até vídeos promocionais, institucionais, videoclipes e conteúdos para redes sociais. 
Acredito que cada novo projeto é uma oportunidade de explorar diferentes estilos e técnicas, o que me mantém sempre motivado e desafiado.

Além da minha experiência prática, busco constantemente aprimorar minhas habilidades, seja através de cursos, workshops ou explorando novas ferramentas e softwares de edição. Acredito que a criatividade e a técnica devem andar juntas, por isso estou sempre em busca de maneiras de inovar.
Uma das minhas grandes paixões é o cinema, o que é e sempre será minha maior referência. Então, no meu tempo livre, gosto de assistir a filmes e documentários, não apenas como entretenimento, mas também para analisar diferentes estilos de edição, cores e narrativas, o que me ajuda a trazer novas ideias e referências para meus próprios projetos. 
Além disso, sou músico e fui guitarrista de palco por mais de 5 anos, passando por diversos projetos e bandas.

 Essa experiência na música e nos palcos me proporcionou uma grande coleção de referências, que hoje enriquecem significativamente meus projetos no audiovisual. 
Estou empolgado com o futuro e ansioso para trabalhar em novos projetos que me permitam crescer ainda mais como profissional e contar histórias que gerem impacto na vida das pessoas.
  </p>
</div>
            </div>
          </div>
      </section>

      <section id="contact" className={`py-20 ${containerClass}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light mb-12 font-cormorant">Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { icon: Mail, title: 'Email', content: 'reinehr@hotmail.com' },
                { icon: Phone, title: 'Telefone', content: '+55 (11) 99999-9999' },
                { icon: Instagram, title: 'Instagram', content: '@gustavoreinher', link: 'https://instagram.com/gustavoreinher' },
                { icon: MapPin, title: 'Localização', content: 'São Paulo, SP - Brasil' },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4">
                  <item.icon className="w-6 h-6 text-gray-400 font-cormorant" />
                  <div>
                    <h3 className="font-cormorant text-xl font-light mb-1">{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className="font-cormorant text-gray-300 hover:text-white transition-colors">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-300">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-cormorant">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className=" font-cormorant w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600"
                />
              </div>
              <div>
                <label htmlFor="email" className=" font-cormorant block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className=" font-cormorant w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600"
                />
              </div>
              <div>
                <label htmlFor="message" className="font-cormorant block text-sm font-medium text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="font-cormorant w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="font-cormorant w-full px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
      
    </div>
  );
}