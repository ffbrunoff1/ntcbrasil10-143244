import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753484672362_0.png';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <motion.img
            src={logoUrl}
            alt="NTC Brasil Logo"
            className="h-12 md:h-14 w-auto"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-dark-text hover:text-primary font-semibold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-secondary px-6 py-2 rounded-full font-bold shadow-lg hover:bg-accent transition-all duration-300"
          >
            Fale Conosco
          </motion.a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Abrir menu">
            <Menu
              className={`h-8 w-8 ${isScrolled ? 'text-dark-text' : 'text-secondary'}`}
            />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-secondary z-50 md:hidden"
          >
            <div className="flex justify-end p-6">
              <button onClick={toggleMenu} aria-label="Fechar menu">
                <X className="h-8 w-8 text-dark-text" />
              </button>
            </div>
            <motion.nav
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center justify-center h-full space-y-8"
            >
              {navLinks.map(link => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  variants={menuItemVariants}
                  className="text-2xl font-bold text-dark-text hover:text-primary"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={toggleMenu}
                variants={menuItemVariants}
                className="bg-primary text-secondary px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-accent transition-all duration-300 mt-8"
              >
                Fale Conosco
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
