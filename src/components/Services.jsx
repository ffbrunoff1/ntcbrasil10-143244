import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Home, Wrench, ArrowRight } from 'lucide-react';

export default function Services() {
  const servicesData = [
    {
      icon: ClipboardList,
      title: 'Planejamento e Gestão de Obras',
      description:
        'Coordenação completa do seu projeto, desde a concepção até a entrega, garantindo prazos, custos e qualidade.',
    },
    {
      icon: Home,
      title: 'Construções Residenciais',
      description:
        'Realizamos o sonho da casa própria com projetos personalizados, modernos e funcionais para sua família.',
    },
    {
      icon: Wrench,
      title: 'Reformas e Ampliações',
      description:
        'Modernizamos e valorizamos seu imóvel com soluções inteligentes para reformas e ampliações de alto padrão.',
    },
  ];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text">
            Soluções Completas para sua Construção
          </h2>
          <div className="mt-4 w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600">
            Oferecemos um portfólio de serviços integrados para atender todas as
            fases do seu projeto com a máxima eficiência e qualidade.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-light-bg rounded-xl shadow-card overflow-hidden group"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="p-8 flex-grow">
                <div className="flex items-center justify-center h-20 w-20 bg-primary/10 rounded-full mb-6 transition-transform duration-500 group-hover:scale-110">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark-text mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="p-8 bg-gray-200/50 mt-auto">
                <a
                  href="#contact"
                  className="font-bold text-primary flex items-center group-hover:text-accent transition-colors duration-300"
                >
                  Saiba Mais
                  <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
