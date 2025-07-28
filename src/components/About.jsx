import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const features = [
    {
      icon: Award,
      title: 'Qualidade Superior',
      description:
        'Compromisso com os mais altos padrões de materiais e acabamentos em cada projeto.',
    },
    {
      icon: ShieldCheck,
      title: 'Confiança e Segurança',
      description:
        'Construímos relações de confiança, garantindo segurança e transparência do início ao fim.',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description:
        'Profissionais qualificados e experientes dedicados a entregar resultados excepcionais.',
    },
    {
      icon: TrendingUp,
      title: 'Inovação Constante',
      description:
        'Utilizamos tecnologias e métodos construtivos modernos para otimizar processos e custos.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-light-bg">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text">
            Sua Parceira Confiável na Jornada da Construção
          </h2>
          <div className="mt-4 w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600">
            Na NTC Brasil, combinamos experiência, paixão e precisão para erguer
            não apenas edifícios, mas o futuro. Cada projeto é um compromisso
            com a excelência, entregando valor e superando as expectativas de
            nossos clientes.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-secondary p-8 rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300 text-center"
              variants={itemVariants}
            >
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                <feature.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark-text mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
