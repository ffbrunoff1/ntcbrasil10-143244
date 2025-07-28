import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };
  return (
    <section
      id="home"
      className="relative bg-primary text-secondary min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-90"></div>
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hero-pattern"
              patternUnits="userSpaceOnUse"
              width="80"
              height="80"
              patternTransform="rotate(45)"
            >
              <rect width="2" height="80" fill="rgba(255,255,255,0.2)"></rect>
              <rect width="80" height="2" fill="rgba(255,255,255,0.2)"></rect>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)"></rect>
        </svg>
      </div>
      <motion.div
        className="container mx-auto px-6 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight"
        >
          Drenagem facil
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl font-light"
        >
          A NTC Brasil é sua parceira especialista em construção, oferecendo
          soluções eficientes e inovadoras para seus projetos.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-secondary text-primary font-bold text-lg px-10 py-4 rounded-full shadow-2xl transition-transform duration-300 hover:scale-105 hover:bg-light-bg"
          >
            Transforme seu Projeto em Realidade
            <ArrowRight className="ml-3 h-6 w-6" />
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center items-start p-1">
          <motion.div
            className="w-1 h-2 bg-secondary rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
