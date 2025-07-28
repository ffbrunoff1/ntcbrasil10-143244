import React from 'react';
import { motion } from 'framer-motion';
export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753484672362_0.png';
  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };
  return (
    <motion.footer
      className="bg-accent text-secondary"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home">
              <img
                src={logoUrl}
                alt="NTC Brasil Logo"
                className="h-16 w-auto mb-4"
              />
            </a>
            <p className="max-w-xs text-gray-300">
              Soluções em drenagem com solidez, confiança e inovação.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">
              Contato
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <p>+55 44 99104-0774</p>
              </li>
              <li>
                <p>ffbrunoff@yahoo.com.br</p>
              </li>
              <li>
                <p>Padre Lebret 801, G05 Bloco 03</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-800/50 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
