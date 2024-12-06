import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Providers } from './providers';
import logo from './fonts/logo.png';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio de Gustavo Reinehr',
  description: 'Diretor de Vídeo e Editor Criativo',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Substituindo <icon> por <link> */}
        <link rel="icon" href={logo.src} style={{ width: '32px', height: '32px' }} />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
